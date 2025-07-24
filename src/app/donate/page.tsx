import Link from 'next/link'
import { Heart, DollarSign, Users, MapPin, Shield, ExternalLink, ArrowLeft, CheckCircle, Globe, Smartphone, CreditCard } from 'lucide-react'

const donationTiers = [
  {
    amount: "$10",
    description: "Helps maintain our resource database for one week",
    impact: "Keeps 52+ resources updated and accessible"
  },
  {
    amount: "$25", 
    description: "Covers hosting costs for one month",
    impact: "Ensures 24/7 website availability"
  },
  {
    amount: "$50",
    description: "Funds accessibility tools and improvements",
    impact: "Makes resources available to people with disabilities"
  },
  {
    amount: "$100",
    description: "Supports expansion to other Texas cities",
    impact: "Helps us replicate Sanctuary in other communities"
  }
]

const impactStats = [
  { number: "52+", label: "Austin Resources Mapped", icon: MapPin },
  { number: "24/7", label: "Always Available", icon: Globe },
  { number: "100%", label: "Volunteer-Run", icon: Users },
  { number: "Free", label: "Always Will Be", icon: Heart }
]

const platforms = [
  {
    name: "GoFundMe",
    description: "Support our community fundraiser that benefits both Sanctuary and local Austin charities",
    buttonText: "Donate via GoFundMe",
    url: "#", // Replace with actual GoFundMe URL
    color: "bg-green-500 hover:bg-green-600",
    icon: Heart,
    recommended: true
  },
  {
    name: "PayPal",
    description: "Direct donation to support Sanctuary's operational costs",
    buttonText: "Donate via PayPal", 
    url: "#", // Replace with PayPal donation link
    color: "bg-blue-500 hover:bg-blue-600",
    icon: CreditCard,
    recommended: false
  },
  {
    name: "Venmo",
    description: "Quick mobile donation for Sanctuary operations",
    buttonText: "Donate via Venmo",
    url: "#", // Replace with Venmo link
    color: "bg-indigo-500 hover:bg-indigo-600", 
    icon: Smartphone,
    recommended: false
  }
]

export default function DonatePage() {
  return (
    <div className="bg-sanctuary-off-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-sanctuary-teal to-sanctuary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white hover:text-sanctuary-sky-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-poppins">Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="font-prata text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Support Sanctuary Austin
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Sanctuary is built and maintained by volunteers dedicated to connecting people and animals 
              in Austin with life-saving resources. Your donation helps cover real costs and future expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-30 shadow-lg p-6 lg:p-8 mb-12">
            <h2 className="font-prata text-2xl lg:text-3xl text-sanctuary-navy text-center mb-8">
              Your Impact in Numbers
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-sanctuary-light-blue rounded-20 p-6 mb-3">
                    <stat.icon className="w-8 h-8 text-sanctuary-navy mx-auto mb-2" />
                    <div className="text-2xl lg:text-3xl font-prata text-sanctuary-navy mb-1">
                      {stat.number}
                    </div>
                    <div className="font-poppins text-sm lg:text-base text-sanctuary-navy">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Platforms */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-prata text-2xl lg:text-3xl text-sanctuary-navy text-center mb-12">
            Choose Your Donation Method
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {platforms.map((platform, index) => (
              <div key={platform.name} className={`bg-white rounded-30 shadow-lg overflow-hidden ${platform.recommended ? 'ring-4 ring-sanctuary-teal' : ''}`}>
                {platform.recommended && (
                  <div className="bg-sanctuary-teal text-white text-center py-2">
                    <span className="font-poppins text-sm font-semibold">RECOMMENDED</span>
                  </div>
                )}
                
                <div className="p-6 lg:p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-20 ${platform.color.split(' ')[0].replace('hover:', '')} text-white mb-4`}>
                      <platform.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-prata text-xl lg:text-2xl text-sanctuary-navy mb-2">
                      {platform.name}
                    </h3>
                    <p className="font-poppins text-sm lg:text-base text-gray-600">
                      {platform.description}
                    </p>
                  </div>
                  
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 ${platform.color} text-white font-poppins font-medium py-3 px-6 rounded-20 transition-all`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {platform.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Impact Tiers */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-30 shadow-lg p-6 lg:p-8">
            <h2 className="font-prata text-2xl lg:text-3xl text-sanctuary-navy text-center mb-8">
              How Your Donation Helps
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {donationTiers.map((tier, index) => (
                <div key={tier.amount} className="border border-sanctuary-light-blue rounded-20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-sanctuary-teal text-white font-prata text-xl px-4 py-2 rounded-20 min-w-fit">
                      {tier.amount}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-lg text-sanctuary-navy mb-2">
                        {tier.description}
                      </h3>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <p className="font-poppins text-sm text-gray-600">
                          {tier.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-prata text-2xl sm:text-3xl lg:text-4xl text-sanctuary-navy mb-6">
            100% Transparency, 100% Impact
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-sanctuary-light-blue/30 rounded-30 p-6 lg:p-8">
              <Shield className="w-12 h-12 text-sanctuary-navy mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-sanctuary-navy mb-3">
                Where Your Money Goes
              </h3>
              <ul className="font-poppins text-sanctuary-navy space-y-2 text-left">
                <li>• Website hosting and domain costs</li>
                <li>• Accessibility tools and compliance</li>
                <li>• Research and resource verification</li>
                <li>• Future expansion to other cities</li>
                <li>• Emergency resource updates</li>
              </ul>
            </div>
            
            <div className="bg-sanctuary-light-blue/30 rounded-30 p-6 lg:p-8">
              <Users className="w-12 h-12 text-sanctuary-navy mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-sanctuary-navy mb-3">
                Our Volunteer Promise
              </h3>
              <ul className="font-poppins text-sanctuary-navy space-y-2 text-left">
                <li>• No salaries or administrative fees</li>
                <li>• Every dollar goes to operations</li>
                <li>• Regular financial updates</li>
                <li>• Community-driven decision making</li>
                <li>• Open source and transparent</li>
              </ul>
            </div>
          </div>
          
          <p className="font-poppins text-lg text-gray-600 mb-8">
            We're committed to keeping Sanctuary free forever. Your donation ensures this essential resource 
            remains available to Austin's most vulnerable community members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/charities"
              className="inline-flex items-center gap-2 bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-semibold text-lg px-8 py-4 rounded-30 transition-all"
            >
              <Heart className="w-5 h-5" />
              Support Local Charities
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-sanctuary-navy hover:bg-blue-700 text-white font-poppins font-semibold text-lg px-8 py-4 rounded-30 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* GoFundMe Setup Instructions (temporary) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-sanctuary-light-blue/20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-prata text-xl lg:text-2xl text-sanctuary-navy mb-4">
            🚧 Getting Started with GoFundMe
          </h3>
          <div className="bg-white rounded-20 p-6 text-left">
            <p className="font-poppins text-sanctuary-navy mb-4">
              <strong>Next Steps for Setup:</strong>
            </p>
            <ol className="font-poppins text-sanctuary-navy space-y-2 list-decimal list-inside">
              <li>Create a GoFundMe campaign: "Support Austin Community Resources"</li>
              <li>Set goal around $5,000-$10,000 to start</li>
              <li>Update the platform URLs above with your actual links</li>
              <li>Add your PayPal.me and Venmo links as alternatives</li>
              <li>Share story about Sanctuary's mission and volunteer team</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}