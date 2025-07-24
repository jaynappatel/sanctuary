-- Sanctuary Database Schema
-- Run this in your Supabase SQL editor to set up the database

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Resource types enum
CREATE TYPE resource_type AS ENUM (
  'shelter',
  'food', 
  'pet',
  'legal',
  'health',
  'other'
);

-- Community post types enum
CREATE TYPE post_type AS ENUM ('need', 'offer');

-- Resources table (main table from DRB)
CREATE TABLE resources (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  type resource_type NOT NULL,
  address TEXT NOT NULL,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  pet_friendly BOOLEAN DEFAULT FALSE,
  open_now BOOLEAN DEFAULT TRUE,
  phone TEXT,
  website TEXT,
  description TEXT NOT NULL,
  hours TEXT,
  tags TEXT[] DEFAULT '{}',
  services TEXT[] DEFAULT '{}',
  notes TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community support posts table
CREATE TABLE community_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  type post_type NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  contact_method TEXT NOT NULL,
  location TEXT,
  fulfilled BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE
);

-- Submitted resources (for admin approval)
CREATE TABLE resource_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  type resource_type NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  description TEXT NOT NULL,
  hours TEXT,
  pet_friendly BOOLEAN DEFAULT FALSE,
  submitter_name TEXT,
  submitter_email TEXT,
  submitter_notes TEXT,
  reviewed BOOLEAN DEFAULT FALSE,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by TEXT
);

-- Emergency hotlines table
CREATE TABLE emergency_hotlines (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  number TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL, -- 'mental-health', 'safety', 'general'
  available_24_7 BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Charity organizations table for donations
CREATE TABLE charities (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  website TEXT,
  donation_url TEXT,
  category TEXT NOT NULL,
  local_focus BOOLEAN DEFAULT TRUE,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_resources_type ON resources(type);
CREATE INDEX idx_resources_verified ON resources(verified);
CREATE INDEX idx_resources_pet_friendly ON resources(pet_friendly);
CREATE INDEX idx_resources_location ON resources USING GIST(POINT(lng, lat));
CREATE INDEX idx_resources_search ON resources USING GIN(to_tsvector('english', name || ' ' || description));

CREATE INDEX idx_community_posts_type ON community_posts(type);
CREATE INDEX idx_community_posts_fulfilled ON community_posts(fulfilled);
CREATE INDEX idx_community_posts_created_at ON community_posts(created_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply the trigger to resources table
CREATE TRIGGER update_resources_updated_at 
  BEFORE UPDATE ON resources 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE resource_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE emergency_hotlines ENABLE ROW LEVEL SECURITY;
ALTER TABLE charities ENABLE ROW LEVEL SECURITY;

-- Public read access for verified resources
CREATE POLICY "Public can read verified resources" ON resources
  FOR SELECT USING (verified = true);

-- Public read access for community posts
CREATE POLICY "Public can read community posts" ON community_posts
  FOR SELECT USING (true);

-- Public can insert community posts
CREATE POLICY "Public can insert community posts" ON community_posts
  FOR INSERT WITH CHECK (true);

-- Public can submit resources for review
CREATE POLICY "Public can submit resources" ON resource_submissions
  FOR INSERT WITH CHECK (true);

-- Public read access for emergency hotlines
CREATE POLICY "Public can read emergency hotlines" ON emergency_hotlines
  FOR SELECT USING (true);

-- Public read access for verified charities
CREATE POLICY "Public can read verified charities" ON charities
  FOR SELECT USING (verified = true);

-- Insert sample data
INSERT INTO emergency_hotlines (name, number, description, category) VALUES
('National Suicide Prevention Lifeline', '988', '24/7 crisis support for thoughts of suicide', 'mental-health'),
('Crisis Text Line', 'Text HOME to 741741', '24/7 crisis support via text message', 'mental-health'),
('National Domestic Violence Hotline', '(800) 799-7233', '24/7 support for domestic violence survivors', 'safety'),
('2-1-1 Texas', '211', 'Information and referrals to local resources', 'general'),
('Austin Police Non-Emergency', '(512) 974-5000', 'Non-emergency police assistance', 'safety'),
('SAMHSA National Helpline', '(800) 662-4357', 'Substance abuse and mental health treatment referrals', 'mental-health');

-- Insert sample resources (these will need to be verified by admin)
INSERT INTO resources (name, type, address, phone, website, description, hours, pet_friendly, verified, tags) VALUES
('Central Texas Food Bank', 'food', '6500 Metropolis Dr, Austin, TX 78744', '(512) 684-2550', 'https://centraltexasfoodbank.org', 'Leading hunger-relief charity providing food to Central Texas families', 'Mon-Fri 8:00 AM - 5:00 PM', false, true, ARRAY['food bank', 'groceries', 'emergency food']),

('ARCH (Homeless Shelter)', 'shelter', '500 E 7th St, Austin, TX 78701', '(512) 305-4100', 'https://www.austintexas.gov/department/austin-resource-center-homeless', '24/7 emergency shelter and services for individuals experiencing homelessness', '24/7', false, true, ARRAY['emergency shelter', 'homeless services', 'case management']),

('Austin Pets Alive!', 'pet', '1156 W Cesar Chavez St, Austin, TX 78703', '(512) 961-6519', 'https://www.austinpetsalive.org', 'No-kill animal shelter providing adoption, fostering, and low-cost veterinary services', 'Mon-Sun 11:00 AM - 7:00 PM', true, true, ARRAY['animal shelter', 'pet adoption', 'veterinary care', 'fostering']),

('CommUnityCare Health Centers', 'health', 'Multiple locations', '(512) 978-9015', 'https://communitycaretx.org', 'Federally qualified health center providing affordable healthcare regardless of insurance status', 'Varies by location', false, true, ARRAY['primary care', 'dental', 'mental health', 'sliding scale fees']),

('Texas RioGrande Legal Anpm run devid', 'legal', '1405 E 6th St, Austin, TX 78702', '(512) 374-2700', 'https://www.trla.org', 'Free civil legal services for low-income individuals and families', 'Mon-Fri 8:00 AM - 5:00 PM', false, true, ARRAY['legal aid', 'tenant rights', 'immigration', 'family law']);

-- Insert sample charities
INSERT INTO charities (name, description, website, donation_url, category, verified) VALUES
('Central Texas Food Bank', 'Provides food assistance to Central Texas families in need', 'https://centraltexasfoodbank.org', 'https://centraltexasfoodbank.org/donate/', 'Food Security', true),
('Austin Pets Alive!', 'No-kill animal shelter saving thousands of dogs and cats each year', 'https://www.austinpetsalive.org', 'https://www.austinpetsalive.org/donate/', 'Animal Welfare', true),
('SafePlace', 'Provides safety, healing, prevention and hope to those affected by sexual and domestic violence', 'https://www.safeplace.org', 'https://www.safeplace.org/donate/', 'Domestic Violence Prevention', true),
('Caritas of Austin', 'Preventing and ending homelessness for individuals and families', 'https://www.caritasofaustin.org', 'https://www.caritasofaustin.org/donate/', 'Homelessness Prevention', true);

-- Add a function to search resources by text
CREATE OR REPLACE FUNCTION search_resources(search_query TEXT)
RETURNS TABLE (
  id UUID,
  name TEXT,
  type resource_type,
  address TEXT,
  description TEXT,
  rank REAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    r.id,
    r.name,
    r.type,
    r.address,
    r.description,
    ts_rank(to_tsvector('english', r.name || ' ' || r.description), plainto_tsquery('english', search_query)) as rank
  FROM resources r
  WHERE 
    r.verified = true 
    AND to_tsvector('english', r.name || ' ' || r.description) @@ plainto_tsquery('english', search_query)
  ORDER BY rank DESC;
END;
$$ LANGUAGE plpgsql;

-- Function to get nearby resources (requires lat/lng)
CREATE OR REPLACE FUNCTION get_nearby_resources(
  user_lat DOUBLE PRECISION,
  user_lng DOUBLE PRECISION,
  radius_miles DOUBLE PRECISION DEFAULT 10
)
RETURNS TABLE (
  id UUID,
  name TEXT,
  type resource_type,
  address TEXT,
  description TEXT,
  distance_miles DOUBLE PRECISION
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    r.id,
    r.name,
    r.type,
    r.address,
    r.description,
    (3959 * acos(
      cos(radians(user_lat)) * 
      cos(radians(r.lat)) * 
      cos(radians(r.lng) - radians(user_lng)) + 
      sin(radians(user_lat)) * 
      sin(radians(r.lat))
    )) as distance_miles
  FROM resources r
  WHERE 
    r.verified = true 
    AND r.lat IS NOT NULL 
    AND r.lng IS NOT NULL
    AND (3959 * acos(
      cos(radians(user_lat)) * 
      cos(radians(r.lat)) * 
      cos(radians(r.lng) - radians(user_lng)) + 
      sin(radians(user_lat)) * 
      sin(radians(r.lat))
    )) <= radius_miles
  ORDER BY distance_miles;
END;
$$ LANGUAGE plpgsql;