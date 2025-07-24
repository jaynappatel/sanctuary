import Link from 'next/link'
import { Phone, MapPin, Clock, AlertTriangle, Heart, Shield } from 'lucide-react'

export default function Emergency() {
  const emergencyHotlines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support for thoughts of suicide",
      type: "mental-health"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 crisis support via text message",
      type: "mental-health"
    },
    {
      name: "National Domestic Violence Hotline",
      number: "(800) 799-7233",
      description: "24/7 support for domestic violence survivors",
      type: "safety"
    },
    {
      name: "Austin Police Non-Emergency",
      number: "(512) 974-5000",
      description: "Non-emergency police assistance",
      type: "safety"
    },
    {
      name: "2-1-1 Texas",
      number: "211",
      description: "Information and referrals to local resources",
      type: "general"
    },
    {
      name: "SAMHSA National Helpline",
      number: "(800) 662-4357",
      description: "Substance abuse and mental health treatment referrals",
      type: "mental-health"
    }
  ]

  const emergencyShelters = [
    {
      name: "ARCH (Austin Resource Center for the Homeless)",
      address: "500 E 7th St, Austin, TX 78701",
      phone: "(512) 305-4100",
      hours: "24/7",
      services: ["Emergency shelter", "Case management", "Medical care", "Meals"],
      notes: "Walk-ins accepted, no pets allowed"
    },
    {
      name: "Salvation Army - Austin",
      address: "501 E 8th St, Austin, TX 78701",
      phone: "(512) 476-1111",
      hours: "24/7 intake",
      services: ["Emergency shelter", "Meals", "Clothing", "Spiritual care"],
      notes: "Family shelter available, some pet accommodations"
    },
    {
      name: "SafePlace",
      address: "Confidential Location",
      phone: "(512) 267-7233",
      hours: "24/7 hotline",
      services: ["Domestic violence shelter", "Crisis counseling", "Legal advocacy"],
      notes: "For domestic violence survivors, pets welcome"
    },
    {
      name: "LifeWorks Transitional Living",
      address: "3700 S 1st St, Austin, TX 78704",
      phone: "(512) 735-2400",
      hours: "Mon-Fri 8:00 AM - 5:00 PM",
      services: ["Youth shelter (ages 18-24)", "Transitional housing", "Life skills"],
      notes: "For young adults experiencing homelessness"
    }
  ]

  const emergencyServices = [
    {
      category: "Food",
      services: [
        "Central Texas Food Bank Mobile Pantries",
        "Meals on Wheels",
        "Local church food pantries",
        "SNAP application assistance"
      ]
    },
    {
      category: "Healthcare", 
      services: [
        "Dell Seton Medical Center Emergency Room",
        "Austin Public Health STD Clinic",
        "CommUnityCare Urgent Care",
        "Crisis intervention services"
      ]
    },
    {
      category: "Legal",
      services: [
        "Texas RioGrande Legal Aid",
        "Volunteer Legal Services",
        "Austin Tenants' Council",
        "Immigration legal aid"
      ]
    }
  ]

  return (
    <div className="bg-sanctuary-off-white min-h-screen">
      {/* Emergency Alert Header */}
      <div className="bg-red-600 text-white py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <AlertTriangle className="w-6 h-6" />
          <p className="font-poppins font-semibold text-center">
            If you're in immediate danger, call 911 • For suicide crisis, call or text 988
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-sanctuary-teal py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            🚨 Emergency Resources
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Immediate help is available. Find crisis hotlines, emergency shelters, 
            and urgent services in Austin.
          </p>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:911"
              className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-30 text-center transition-all shadow-lg hover:shadow-xl"
            >
              <div className="text-4xl mb-2">🚨</div>
              <h3 className="font-poppins font-bold text-2xl mb-2">Call 911</h3>
              <p className="font-poppins">Life-threatening emergency</p>
            </a>
            
            <a
              href="tel:988"
              className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-30 text-center transition-all shadow-lg hover:shadow-xl"
            >
              <div className="text-4xl mb-2">💙</div>
              <h3 className="font-poppins font-bold text-2xl mb-2">Call 988</h3>
              <p className="font-poppins">Suicide & crisis support</p>
            </a>
            
            <a
              href="tel:211"
              className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-30 text-center transition-all shadow-lg hover:shadow-xl"
            >
              <div className="text-4xl mb-2">ℹ️</div>
              <h3 className="font-poppins font-bold text-2xl mb-2">Call 211</h3>
              <p className="font-poppins">Local resource information</p>
            </a>
          </div>
        </div>
      </section>

      {/* Crisis Hotlines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="hotlines-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="hotlines-heading" className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-8 text-center">
            Crisis Hotlines
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyHotlines.map((hotline, index) => (
              <div 
                key={index}
                className="bg-white rounded-30 p-6 shadow-card hover:shadow-lg transition-all border border-sanctuary-sky-blue"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-poppins font-semibold text-xl text-black flex-1">
                    {hotline.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {hotline.type === 'mental-health' && <Heart className="w-5 h-5 text-blue-600" />}
                    {hotline.type === 'safety' && <Shield className="w-5 h-5 text-red-600" />}
                    {hotline.type === 'general' && <Phone className="w-5 h-5 text-green-600" />}
                  </div>
                </div>
                
                <p className="font-poppins text-sanctuary-navy mb-4">
                  {hotline.description}
                </p>
                
                <a
                  href={hotline.number.startsWith('Text') ? '#' : `tel:${hotline.number.replace(/[^\d]/g, '')}`}
                  className="inline-block bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-semibold py-3 px-6 rounded-30 transition-all"
                >
                  {hotline.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Shelters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sanctuary-light-blue bg-opacity-30" aria-labelledby="shelters-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="shelters-heading" className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-8 text-center">
            Emergency Shelters
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emergencyShelters.map((shelter, index) => (
              <div 
                key={index}
                className="bg-white rounded-30 p-6 shadow-card hover:shadow-lg transition-all"
              >
                <h3 className="font-poppins font-semibold text-xl text-black mb-3">
                  {shelter.name}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-sanctuary-navy mt-0.5 flex-shrink-0" />
                    <span className="font-poppins text-sanctuary-navy">{shelter.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-sanctuary-navy" />
                    <span className="font-poppins text-sanctuary-navy">{shelter.hours}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-poppins font-medium text-black mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {shelter.services.map((service, idx) => (
                      <span 
                        key={idx}
                        className="bg-sanctuary-sky-blue px-3 py-1 rounded-full text-sm font-poppins text-sanctuary-navy"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="font-poppins text-sm text-sanctuary-navy mb-4 italic">
                  {shelter.notes}
                </p>
                
                <a
                  href={`tel:${shelter.phone}`}
                  className="inline-block bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-semibold py-2 px-4 rounded-30 transition-all"
                >
                  Call {shelter.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Emergency Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="services-heading" className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-8 text-center">
            Additional Emergency Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-30 p-6 shadow-card"
              >
                <h3 className="font-poppins font-semibold text-xl text-black mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="font-poppins text-sanctuary-navy flex items-start gap-2">
                      <span className="w-2 h-2 bg-sanctuary-teal rounded-full mt-2 flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sanctuary-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-6">
            Need More Help?
          </h2>
          <p className="font-poppins text-xl text-white mb-8">
            Browse our full directory of resources or get personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/browse"
              className="bg-white hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-semibold py-3 px-8 rounded-30 transition-all"
            >
              Browse All Resources
            </Link>
            <Link 
              href="/community"
              className="bg-sanctuary-teal hover:bg-sanctuary-light-blue text-black font-poppins font-semibold py-3 px-8 rounded-30 transition-all"
            >
              Get Community Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}