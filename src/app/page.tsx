import Link from 'next/link'
import { Heart, MapPin, Phone, Shield, Users, FileText, ExternalLink, Maximize2 } from 'lucide-react'
import ResourceList from '@/components/ResourceList'

export default function Home() {
  return (
    <div className="bg-sanctuary-off-white min-h-screen w-full">
      
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-6 leading-tight">
            Find Help.<br />
            Give Help.<br />
            Build Community.
          </h1>
          <p className="font-poppins text-lg sm:text-xl md:text-2xl lg:text-3xl text-sanctuary-navy max-w-5xl mx-auto leading-relaxed">
            A centralized hub connecting people and animals in Austin to essential resources, 
            emergency support, and community assistance.
          </p>
        </div>
      </section>
      

      {/* Help Toggle Buttons */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/help-for-people"
            className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-semibold text-lg lg:text-xl px-8 py-4 rounded-30 transition-all text-center"
          >
            Help for People
          </Link>
          <Link 
            href="/help-for-animals"
            className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-semibold text-lg lg:text-xl px-8 py-4 rounded-30 transition-all text-center"
          >
            Help for Animals
          </Link>
        </div>
      </section>

      {/* Category Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-black text-center mb-12">
            What do you need help with today?
          </h2>
          
          {/* First Row - 3 categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            <Link 
              href="/browse?category=shelter"
              className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue transition-all duration-300 shadow-card rounded-30 p-6 lg:p-8 text-center group min-h-[200px] flex flex-col justify-center"
            >
              <div className="mb-4">
                <Users className="w-10 h-10 lg:w-12 lg:h-12 text-sanctuary-navy mx-auto group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-prata text-2xl lg:text-3xl xl:text-4xl text-black mb-3">Shelters</h3>
              <p className="font-poppins text-sm lg:text-base text-sanctuary-navy">Emergency housing and temporary shelter</p>
            </Link>

            <Link 
              href="/browse?category=food"
              className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue transition-all duration-300 shadow-card rounded-30 p-6 lg:p-8 text-center group min-h-[200px] flex flex-col justify-center"
            >
              <div className="mb-4">
                <Heart className="w-10 h-10 lg:w-12 lg:h-12 text-sanctuary-navy mx-auto group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-prata text-2xl lg:text-3xl xl:text-4xl text-black mb-3">Food</h3>
              <p className="font-poppins text-sm lg:text-base text-sanctuary-navy">Food banks, pantries, and meal programs</p>
            </Link>

            <Link 
              href="/browse?category=health"
              className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue transition-all duration-300 shadow-card rounded-30 p-6 lg:p-8 text-center group min-h-[200px] flex flex-col justify-center sm:col-span-2 lg:col-span-1"
            >
              <div className="mb-4">
                <Shield className="w-10 h-10 lg:w-12 lg:h-12 text-sanctuary-navy mx-auto group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-prata text-2xl lg:text-3xl xl:text-4xl text-black mb-3">Health</h3>
              <p className="font-poppins text-sm lg:text-base text-sanctuary-navy">Medical clinics, mental health, and wellness</p>
            </Link>
          </div>

          {/* Second Row - 2 categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Link 
              href="/help-for-animals"
              className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue transition-all duration-300 shadow-card rounded-30 p-6 lg:p-8 text-center group min-h-[200px] flex flex-col justify-center"
            >
              <div className="mb-4">
                <Heart className="w-10 h-10 lg:w-12 lg:h-12 text-sanctuary-navy mx-auto group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-prata text-2xl lg:text-3xl xl:text-4xl text-black mb-3">Pet Shelters</h3>
              <p className="font-poppins text-sm lg:text-base text-sanctuary-navy">Animal shelters, vet care, and pet services</p>
            </Link>

            <Link 
              href="/legal"
              className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue transition-all duration-300 shadow-card rounded-30 p-6 lg:p-8 text-center group min-h-[200px] flex flex-col justify-center"
            >
              <div className="mb-4">
                <FileText className="w-10 h-10 lg:w-12 lg:h-12 text-sanctuary-navy mx-auto group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-prata text-2xl lg:text-3xl xl:text-4xl text-black mb-3">Legal Help</h3>
              <p className="font-poppins text-sm lg:text-base text-sanctuary-navy">Free legal aid, tenant rights, and advocacy</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Hotlines Button */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/emergency"
            className="inline-block bg-sanctuary-teal hover:bg-sanctuary-navy transition-all duration-300 text-white font-prata text-2xl sm:text-3xl lg:text-4xl xl:text-5xl px-8 sm:px-12 lg:px-16 py-4 lg:py-6 rounded-30 shadow-lg hover:shadow-xl"
          >
            📞 Hotlines
          </Link>
          <p className="font-poppins text-sanctuary-navy mt-6 text-base lg:text-lg">
            24/7 crisis support and emergency assistance
          </p>
        </div>
      </section>

      {/* Map and Search Section */}
     <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-black text-center mb-12">
            Find support near you
          </h2>
          
          <div className="bg-white border-4 border-sanctuary-navy rounded-30 overflow-hidden shadow-xl">
            {/* Embedded Map Section */}
            
            {/* Embedded Map Section */}
            <div className="relative">
              <div className="bg-gradient-to-r from-sanctuary-light-blue to-sanctuary-sky-blue p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-prata text-xl lg:text-2xl text-sanctuary-navy mb-2">
                      Sanctuary Austin Resource Map
                    </h3>
                    <p className="font-poppins text-sm lg:text-base text-sanctuary-navy">
                      Explore 52+ Austin community resources
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/d/viewer?mid=1GmBLmHeAPqwfqKy4sF6K5c9xTgHi8Co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-sanctuary-navy px-4 py-2 rounded-20 transition-all backdrop-blur-sm"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span className="font-poppins text-sm font-medium">Full Screen</span>
                  </a>
                </div>
              </div>
              
              {/* Embedded Map */}
              <div className="relative h-64 sm:h-80 lg:h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1GmBLmHeAPqwfqKy4sF6K5c9xTgHi8Co&ehbc=2E312F"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sanctuary Austin Resource Map"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-black mb-4">
              Community Support
            </h2>
            <p className="font-poppins text-lg lg:text-xl text-sanctuary-navy">
              Offer donations, request assistance, or share local resources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Local Charities */}
            <div className="bg-sanctuary-light-blue bg-opacity-45 rounded-30 p-6 lg:p-8">
              <h3 className="font-poppins font-semibold text-xl lg:text-2xl text-black mb-4">
                Support Local Organizations
              </h3>
              <p className="font-poppins text-sm lg:text-base text-sanctuary-navy leading-relaxed mb-6">
                Browse local orgs offering help with food, shelter, pets, and more. These trusted local 
                organizations are doing life-changing work — from feeding families to rescuing animals 
                to offering shelter and safety. If you're in a position to give, your donation can go a long way.
              </p>
              <Link 
                href="/charities"
                className="inline-block bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue transition-colors px-6 lg:px-8 py-3 lg:py-4 rounded-30 font-prata text-lg lg:text-xl text-black"
              >
                Find a Local Charity
              </Link>
            </div>

            {/* Support Sanctuary */}
            <div className="bg-sanctuary-light-blue bg-opacity-45 rounded-30 p-6 lg:p-8">
              <h3 className="font-poppins font-semibold text-xl lg:text-2xl text-black mb-4">
                Support Sanctuary
              </h3>
              <p className="font-poppins text-sm lg:text-base text-sanctuary-navy leading-relaxed mb-6">
                Sanctuary is built and maintained by a small team of volunteers dedicated to connecting 
                people and animals in Austin with life-saving resources. Your donation helps cover real 
                costs like website hosting, accessibility tools, and future expansion to other cities.
              </p>
              <Link 
                href="/donate"
                className="inline-block bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue transition-colors px-6 lg:px-8 py-3 lg:py-4 rounded-30 font-prata text-lg lg:text-xl text-black"
              >
                Donate to Sanctuary
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Toolkit Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-sanctuary-teal">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black mb-6">
            🛡️ Know Your Rights. Stay Safe.
          </h2>
          <p className="font-poppins font-semibold text-lg sm:text-xl lg:text-2xl text-black mb-8 max-w-5xl mx-auto leading-relaxed">
            Whether you're facing eviction, need help as a tenant with a pet, or are navigating immigration, 
            these guides and services can help you understand your rights and find free legal support in Austin.
          </p>
          
          <Link 
            href="/legal"
            className="inline-block bg-white hover:bg-sanctuary-sky-blue text-sanctuary-navy font-prata text-lg lg:text-2xl px-8 lg:px-12 py-3 lg:py-4 rounded-30 transition-all shadow-lg hover:shadow-xl"
          >
            Access Legal Toolkit
          </Link>
        </div>
      </section>

      {/* Submit Resources Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black mb-6">
            Keep Sanctuary Updated
          </h2>
          <p className="font-poppins font-semibold text-lg lg:text-xl text-black mb-8 max-w-4xl mx-auto">
            Know a shelter, pantry, clinic, or organization that's not listed yet? Help us grow by sharing info.
          </p>
          
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeWFy2vwGl154_4ho5C-XfhXF4ef06u3MESs77jnQ2LrboeEg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sanctuary-dark-blue hover:bg-sanctuary-navy transition-colors text-white font-prata text-lg lg:text-2xl px-8 lg:px-12 py-3 lg:py-4 rounded-30 shadow-lg hover:shadow-xl"
          >
            Submit a Resource →
          </a>
        </div>
      </section>
    </div>
  )
}