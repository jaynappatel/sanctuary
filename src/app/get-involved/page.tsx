'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Users, MapPin, Clock, ExternalLink, Plus, MessageCircle } from 'lucide-react'
export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState<'need' | 'offer'>('offer')
  const [showForm, setShowForm] = useState(false)

  const localCharities = [
    {
      name: "Central Texas Food Bank",
      category: "Food Security",
      description: "Provides food assistance to Central Texas families through food pantries, mobile markets, and programs.",
      website: "https://centraltexasfoodbank.org",
      donateUrl: "https://centraltexasfoodbank.org/donate/",
      volunteering: "Food sorting, distribution, administrative support",
      impact: "Feeds 300,000+ people annually"
    },
    {
      name: "Austin Pets Alive!",
      category: "Animal Welfare", 
      description: "No-kill animal shelter saving thousands of dogs and cats through innovative programs.",
      website: "https://www.austinpetsalive.org",
      donateUrl: "https://www.austinpetsalive.org/donate/",
      volunteering: "Dog walking, cat socialization, fostering",
      impact: "Saves 18,000+ animals per year"
    },
    {
      name: "SafePlace",
      category: "Domestic Violence Prevention",
      description: "Provides safety, healing, prevention and hope to those affected by sexual and domestic violence.",
      website: "https://www.safeplace.org",
      donateUrl: "https://www.safeplace.org/donate/",
      volunteering: "Crisis hotline, children's programs, community education",
      impact: "Serves 6,000+ survivors annually"
    },
    {
      name: "Caritas of Austin",
      category: "Homelessness Prevention",
      description: "Preventing and ending homelessness for individuals and families through comprehensive services.",
      website: "https://www.caritasofaustin.org",
      donateUrl: "https://www.caritasofaustin.org/donate/",
      volunteering: "Meal service, housing navigation, case management support",
      impact: "Houses 2,000+ people annually"
    },
    {
      name: "Foundation Communities",
      category: "Affordable Housing",
      description: "Develops affordable housing and provides services to help families achieve economic mobility.",
      website: "https://foundcom.org",
      donateUrl: "https://foundcom.org/donate/",
      volunteering: "Afterschool programs, financial counseling, community events",
      impact: "Serves 3,000+ families"
    },
    {
      name: "Casa Marianella",
      category: "Immigration Support",
      description: "Provides shelter and support services for asylum seekers and immigrants in Central Texas.",
      website: "https://www.casamarianella.org",
      donateUrl: "https://www.casamarianella.org/donate/",
      volunteering: "ESL tutoring, children's programs, administrative support",
      impact: "Serves 200+ residents annually"
    }
  ]

  const communityPosts = [
    {
      type: 'need',
      title: "Need pet food for elderly neighbor",
      description: "My elderly neighbor's cat needs food and she's on a fixed income. Any dry cat food would help.",
      location: "East Austin",
      category: "Pet Care",
      timeAgo: "2 hours ago",
      contact: "Email preferred"
    },
    {
      type: 'offer',
      title: "Free children's clothes (sizes 2T-5T)",
      description: "My kids outgrew these clothes. All clean and in good condition. Prefer to give to families in need.",
      location: "South Austin", 
      category: "Children's Items",
      timeAgo: "4 hours ago",
      contact: "Text or pickup"
    },
    {
      type: 'need',
      title: "Transportation to medical appointment",
      description: "Need a ride to doctor appointment next Tuesday. Can provide gas money.",
      location: "North Austin",
      category: "Transportation",
      timeAgo: "6 hours ago",
      contact: "Phone call"
    },
    {
      type: 'offer',
      title: "Computer help for seniors",
      description: "IT professional offering free tech support for elderly community members.",
      location: "Central Austin",
      category: "Technology Help",
      timeAgo: "1 day ago",
      contact: "Email"
    }
  ]

  const CommunityPostForm = () => (
    <div className="bg-white rounded-30 p-8 shadow-card">
      <h3 className="font-poppins font-semibold text-2xl text-black mb-6">
        {activeTab === 'offer' ? 'Offer Help' : 'Request Help'}
      </h3>
      
      <form className="space-y-6">
        <div>
          <label className="block font-poppins font-medium text-black mb-2">
            Title *
          </label>
          <input
            type="text"
            placeholder={activeTab === 'offer' ? "What are you offering?" : "What do you need help with?"}
            className="input-field"
          />
        </div>
        
        <div>
          <label className="block font-poppins font-medium text-black mb-2">
            Description *
          </label>
          <textarea
            rows={4}
            placeholder="Provide more details..."
            className="input-field resize-none"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-poppins font-medium text-black mb-2">
              Category
            </label>
            <select className="input-field">
              <option>Food & Groceries</option>
              <option>Transportation</option>
              <option>Children's Items</option>
              <option>Pet Care</option>
              <option>Technology Help</option>
              <option>Home Repairs</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label className="block font-poppins font-medium text-black mb-2">
              Area
            </label>
            <input
              type="text"
              placeholder="e.g., East Austin"
              className="input-field"
            />
          </div>
        </div>
        
        <div>
          <label className="block font-poppins font-medium text-black mb-2">
            Best way to contact you
          </label>
          <select className="input-field">
            <option>Email (we'll provide a contact form)</option>
            <option>Phone call</option>
            <option>Text message</option>
          </select>
        </div>
        
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-semibold py-3 px-8 rounded-30 transition-all"
          >
            {activeTab === 'offer' ? 'Post Offer' : 'Post Request'}
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-medium py-3 px-8 rounded-30 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )

  return (
    <div className="bg-sanctuary-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-sanctuary-light-blue py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
            Get Involved
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-sanctuary-navy max-w-4xl mx-auto leading-relaxed">
            Strengthen our community by offering help, requesting assistance, 
            or supporting local organizations making a difference in Austin.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-30 p-8 text-center shadow-card hover:shadow-lg transition-all">
              <Heart className="w-12 h-12 text-sanctuary-teal mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-black mb-3">
                Offer Help
              </h3>
              <p className="font-poppins text-sanctuary-navy mb-6">
                Share items, services, or time with community members who need assistance.
              </p>
              <button
                onClick={() => {
                  setActiveTab('offer')
                  setShowForm(true)
                }}
                className="bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-semibold py-3 px-6 rounded-30 transition-all"
              >
                Post an Offer
              </button>
            </div>

            <div className="bg-white rounded-30 p-8 text-center shadow-card hover:shadow-lg transition-all">
              <Users className="w-12 h-12 text-sanctuary-teal mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-black mb-3">
                Request Help
              </h3>
              <p className="font-poppins text-sanctuary-navy mb-6">
                Ask for assistance with food, transportation, childcare, or other needs.
              </p>
              <button
                onClick={() => {
                  setActiveTab('need')
                  setShowForm(true)
                }}
                className="bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-semibold py-3 px-6 rounded-30 transition-all"
              >
                Request Help
              </button>
            </div>

            <div className="bg-white rounded-30 p-8 text-center shadow-card hover:shadow-lg transition-all">
              <Heart className="w-12 h-12 text-sanctuary-teal mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-black mb-3">
                Support Local
              </h3>
              <p className="font-poppins text-sanctuary-navy mb-6">
                Donate to trusted Austin organizations making a lasting impact.
              </p>
              <a
                href="#charities"
                className="inline-block bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-semibold py-3 px-6 rounded-30 transition-all"
              >
                Find Charities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Board */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="community-board">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="community-board" className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-4">
              Community Support Board
            </h2>
            <p className="font-poppins text-xl text-sanctuary-navy">
              Connect with neighbors who can help or need assistance
            </p>
          </div>

          {showForm ? (
            <div className="max-w-2xl mx-auto mb-12">
              <CommunityPostForm />
            </div>
          ) : (
            <div className="text-center mb-12">
              <button
                onClick={() => setShowForm(true)}
                className="bg-sanctuary-dark-blue hover:bg-sanctuary-navy text-white font-poppins font-semibold py-4 px-8 rounded-30 transition-all inline-flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Post to Community Board
              </button>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-sanctuary-sky-blue rounded-30 p-2 flex">
              <button
                onClick={() => setActiveTab('offer')}
                className={`px-6 py-2 rounded-30 font-poppins font-medium transition-all ${
                  activeTab === 'offer'
                    ? 'bg-sanctuary-teal text-black'
                    : 'text-sanctuary-navy hover:bg-sanctuary-light-blue'
                }`}
              >
                💝 Offers ({communityPosts.filter(p => p.type === 'offer').length})
              </button>
              <button
                onClick={() => setActiveTab('need')}
                className={`px-6 py-2 rounded-30 font-poppins font-medium transition-all ${
                  activeTab === 'need'
                    ? 'bg-sanctuary-teal text-black'
                    : 'text-sanctuary-navy hover:bg-sanctuary-light-blue'
                }`}
              >
                🙏 Requests ({communityPosts.filter(p => p.type === 'need').length})
              </button>
            </div>
          </div>

          {/* Community Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityPosts
              .filter(post => post.type === activeTab)
              .map((post, index) => (
                <div key={index} className="bg-white rounded-30 p-6 shadow-card hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        post.type === 'offer' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <span className="bg-sanctuary-sky-blue px-3 py-1 rounded-full text-xs font-poppins text-sanctuary-navy">
                        {post.category}
                      </span>
                    </div>
                    <span className="text-xs font-poppins text-gray-500">
                      {post.timeAgo}
                    </span>
                  </div>

                  <h3 className="font-poppins font-semibold text-lg text-black mb-3">
                    {post.title}
                  </h3>

                  <p className="font-poppins text-sanctuary-navy mb-4">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sanctuary-navy">
                        <MapPin className="w-4 h-4" />
                        {post.location}
                      </span>
                      <span className="flex items-center gap-1 text-sanctuary-navy">
                        <MessageCircle className="w-4 h-4" />
                        {post.contact}
                      </span>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-medium py-2 px-4 rounded-20 transition-all">
                    {post.type === 'offer' ? 'I\'m Interested' : 'I Can Help'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Local Charities */}
      <section id="charities" className="py-16 px-4 sm:px-6 lg:px-8 bg-sanctuary-light-blue bg-opacity-30" aria-labelledby="charities-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="charities-heading" className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-4">
              Support Local Organizations
            </h2>
            <p className="font-poppins text-xl text-sanctuary-navy max-w-3xl mx-auto">
              These trusted Austin organizations are doing life-changing work. 
              Your donation, no matter the size, makes a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {localCharities.map((charity, index) => (
              <div key={index} className="bg-white rounded-30 p-6 shadow-card hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-black mb-2">
                      {charity.name}
                    </h3>
                    <span className="bg-sanctuary-sky-blue px-3 py-1 rounded-full text-sm font-poppins text-sanctuary-navy">
                      {charity.category}
                    </span>
                  </div>
                  <Heart className="w-6 h-6 text-sanctuary-teal" />
                </div>

                <p className="font-poppins text-sanctuary-navy mb-4">
                  {charity.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-poppins font-medium text-black text-sm mb-1">Impact:</h4>
                    <p className="font-poppins text-sm text-sanctuary-navy">{charity.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-black text-sm mb-1">Volunteer Opportunities:</h4>
                    <p className="font-poppins text-sm text-sanctuary-navy">{charity.volunteering}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={charity.donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-semibold py-2 px-4 rounded-20 text-center transition-all"
                  >
                    Donate
                  </a>
                  <a
                    href={charity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-medium py-2 px-4 rounded-20 text-center transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Sanctuary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sanctuary-navy rounded-30 p-12 text-center text-white">
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl mb-6">
              Support Sanctuary
            </h2>
            <p className="font-poppins text-xl mb-8 leading-relaxed">
              Sanctuary is built and maintained by volunteers dedicated to connecting people and animals 
              in Austin with life-saving resources. Your donation helps cover hosting costs, accessibility tools, 
              and future expansion to help more communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white bg-opacity-10 rounded-20 p-6">
                <h3 className="font-poppins font-semibold text-lg mb-3">🌐 Platform Costs</h3>
                <p className="font-poppins text-sm">Website hosting, domain registration, and database maintenance</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-20 p-6">
                <h3 className="font-poppins font-semibold text-lg mb-3">♿ Accessibility</h3>
                <p className="font-poppins text-sm">Tools and testing to ensure everyone can access resources</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-20 p-6">
                <h3 className="font-poppins font-semibold text-lg mb-3">🚀 Growth</h3>
                <p className="font-poppins text-sm">Expanding to other Texas cities that need resource hubs</p>
              </div>
            </div>

            <a
              href="/donate"
              className="inline-block bg-sanctuary-teal hover:bg-sanctuary-light-blue text-black font-poppins font-semibold py-4 px-12 rounded-30 transition-all text-lg"
            >
              Donate to Sanctuary
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}