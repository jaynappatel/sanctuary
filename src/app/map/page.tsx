import Link from 'next/link'
import { MapPin, ExternalLink, Maximize2, ArrowLeft, Phone, Users, Home, Heart, Search, Filter } from 'lucide-react'

const quickFilters = [
  { name: "Emergency Shelters", icon: Home, count: "12+" },
  { name: "Food Resources", icon: Heart, count: "15+" },
  { name: "Healthcare", icon: Users, count: "8+" },
  { name: "Animal Services", icon: Heart, count: "10+" },
  { name: "Crisis Support", icon: Phone, count: "7+" }
]

const mapFeatures = [
  {
    title: "Real-Time Updates",
    description: "All resource locations are verified and regularly updated by our volunteer team."
  },
  {
    title: "Detailed Information", 
    description: "Click any marker to see hours, contact info, services offered, and eligibility requirements."
  },
  {
    title: "Get Directions",
    description: "Direct integration with Google Maps for turn-by-turn directions to any resource."
  },
  {
    title: "Filter by Need",
    description: "Use map layers to show only the types of resources you're looking for."
  }
]

export default function MapPage() {
  return (
    <div className="bg-sanctuary-off-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-sanctuary-navy to-sanctuary-teal">
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
              Austin Resource Map
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Explore 52+ community resources across Austin. Find food, shelter, healthcare, legal aid, 
              and animal services near you with our interactive map.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Filters */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-prata text-xl lg:text-2xl text-sanctuary-navy text-center mb-6">
            Quick Resource Categories
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {quickFilters.map((filter, index) => (
              <div key={filter.name} className="bg-white rounded-20 shadow-md p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <filter.icon className="w-8 h-8 text-sanctuary-navy mx-auto mb-2" />
                <h3 className="font-poppins font-semibold text-sm lg:text-base text-sanctuary-navy mb-1">
                  {filter.name}
                </h3>
                <span className="font-poppins text-xs text-gray-600">
                  {filter.count} locations
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Map Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border-4 border-sanctuary-navy rounded-30 overflow-hidden shadow-xl">
            {/* Map Header */}
            <div className="bg-gradient-to-r from-sanctuary-light-blue to-sanctuary-sky-blue p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-prata text-xl lg:text-2xl text-sanctuary-navy mb-2">
                    Interactive Austin Resource Map
                  </h3>
                  <p className="font-poppins text-sm lg:text-base text-sanctuary-navy">
                    Click markers for details • Use controls to filter • Get directions
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://www.google.com/maps/d/viewer?mid=1GmBLmHeAPqwfqKy4sF6K5c9xTgHi8Co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-sanctuary-navy px-4 py-2 rounded-20 transition-all backdrop-blur-sm"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span className="font-poppins text-sm font-medium hidden sm:inline">Full Screen</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Embedded Map */}
            <div className="relative h-96 sm:h-[500px] lg:h-[600px] w-full">
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
            
            {/* Map Actions */}
            <div className="p-4 lg:p-6 bg-gray-50 border-t">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="text-center lg:text-left">
                  <h4 className="font-poppins font-semibold text-sanctuary-navy mb-1">
                    Need More Information?
                  </h4>
                  <p className="font-poppins text-sm text-gray-600">
                    Open in Google Maps for directions, reviews, and additional details
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.google.com/maps/d/viewer?mid=1GmBLmHeAPqwfqKy4sF6K5c9xTgHi8Co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sanctuary-navy hover:bg-blue-700 text-white font-poppins font-medium py-3 px-6 rounded-20 transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/help-for-people"
                    className="inline-flex items-center gap-2 bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-medium py-3 px-6 rounded-20 transition-all"
                  >
                    <Users className="w-4 h-4" />
                    Browse Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Features */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-prata text-2xl lg:text-3xl text-sanctuary-navy text-center mb-12">
            How to Use the Resource Map
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mapFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-sanctuary-light-blue/20 rounded-30 p-6 lg:p-8">
                <h3 className="font-poppins font-semibold text-xl text-sanctuary-navy mb-3">
                  {feature.title}
                </h3>
                <p className="font-poppins text-sanctuary-navy leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-sanctuary-teal">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-prata text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
            🚨 Need Help Right Now?
          </h2>
          <p className="font-poppins text-lg lg:text-xl text-white mb-8 max-w-3xl mx-auto">
            If you're in crisis or need immediate assistance, don't wait. Contact emergency services 
            or use our crisis hotlines for 24/7 support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:911"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-poppins font-semibold text-lg px-8 py-4 rounded-30 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call 911
            </a>
            <Link
              href="/emergency"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sanctuary-navy font-poppins font-semibold text-lg px-8 py-4 rounded-30 transition-all"
            >
              <Phone className="w-5 h-5" />
              Crisis Hotlines
            </Link>
          </div>
        </div>
      </section>

      {/* Submit Resource */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-prata text-2xl sm:text-3xl lg:text-4xl text-sanctuary-navy mb-6">
            Know a Resource We're Missing?
          </h2>
          <p className="font-poppins text-lg lg:text-xl text-gray-600 mb-8">
            Help us keep the map complete and up-to-date by submitting shelters, food banks, 
            clinics, or organizations that should be included.
          </p>
          
          <a 
            href="https://forms.google.com/YOUR_GOOGLE_FORM_LINK"
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