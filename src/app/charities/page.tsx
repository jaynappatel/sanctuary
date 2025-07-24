import Link from 'next/link'
import { Heart, MapPin, ExternalLink, Users, Shield, Phone, Home, Utensils, DollarSign, ArrowLeft } from 'lucide-react'

const charities = [
  // People-Focused Organizations
  {
    name: "Caritas of Austin",
    category: "Housing & Homelessness",
    description: "Provides a home and tailored services to prevent and end homelessness in Austin. Offers housing programs, food assistance, and workforce training.",
    website: "https://caritasofaustin.org/",
    icon: Home,
    color: "bg-blue-100 text-blue-600",
    impact: "Helps hundreds of people exit homelessness each year"
  },
  {
    name: "Mobile Loaves & Fishes",
    category: "Housing & Community",
    description: "Operates Community First! Village, the largest relationally-focused housing model in the country for chronically homeless individuals.",
    website: "https://mlf.org/",
    icon: Users,
    color: "bg-green-100 text-green-600",
    impact: "51-acre community providing permanent housing"
  },
  {
    name: "Foundation for the Homeless",
    category: "Family Support",
    description: "Mobilizes community resources to prevent and end homelessness for families with children. Provides rapid re-housing and utility assistance.",
    website: "https://www.foundationhomeless.org/",
    icon: Shield,
    color: "bg-purple-100 text-purple-600",
    impact: "Focuses specifically on families with children"
  },
  {
    name: "Keep Austin Fed",
    category: "Food Security",
    description: "Champions neighbors experiencing food insecurity through redistribution of wholesome, nutritious food that would otherwise go to waste.",
    website: "https://www.keepaustinfed.org",
    icon: Utensils,
    color: "bg-orange-100 text-orange-600",
    impact: "Redirects 30% of wasted food to those in need"
  },
  {
    name: "Texas Legal Services Center",
    category: "Legal Aid",
    description: "Provides free legal representation to help income-eligible Texans access healthcare, safety, stability, housing, and government benefits.",
    website: "https://www.tlsc.org/",
    icon: Shield,
    color: "bg-indigo-100 text-indigo-600",
    impact: "Free legal services for vulnerable populations"
  },
  {
    name: "Volunteer Legal Services",
    category: "Legal Support",
    description: "Provides free legal help through licensed attorney volunteers since 1981. Hosts monthly legal advice clinics for the community.",
    website: "https://www.vlsoct.org/",
    icon: Users,
    color: "bg-teal-100 text-teal-600",
    impact: "Free legal advice clinics since 1981"
  },

  // Animal-Focused Organizations
  {
    name: "Austin Pets Alive!",
    category: "Animal Rescue",
    description: "Pioneers innovative lifesaving programs designed to save the animals most at risk of euthanasia. Leading the no-kill movement in Austin.",
    website: "https://www.austinpetsalive.org/",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
    impact: "Innovative programs for at-risk animals"
  },
  {
    name: "Austin Humane Society",
    category: "Animal Welfare",
    description: "Austin's longest-standing no-kill, non-profit pet adoption center. Welcomes 1000+ newborn kittens annually and runs community cat programs.",
    website: "https://austinhumanesociety.org/",
    icon: Heart,
    color: "bg-red-100 text-red-600",
    impact: "Longest-standing no-kill shelter in Austin"
  },
  {
    name: "Austin Animal Center",
    category: "Municipal Shelter",
    description: "The municipal animal shelter for the City of Austin and unincorporated Travis County. Accepts animals regardless of age, health, or breed.",
    website: "https://www.austintexas.gov/austin-animal-center",
    icon: Shield,
    color: "bg-blue-100 text-blue-600",
    impact: "Official city shelter serving all of Travis County"
  },
  {
    name: "Safe in Austin",
    category: "Animal Therapy",
    description: "Provides loving homes to rescue animals and connects them with children from abuse/neglect backgrounds for mutual healing and support.",
    website: "https://www.safeinaustin.org",
    icon: Heart,
    color: "bg-yellow-100 text-yellow-600",
    impact: "Rescue animals helping rescue children"
  },
  {
    name: "PAWS Shelter of Central Texas",
    category: "Small Animal Rescue",
    description: "Limited intake shelter providing love and hope to dogs and cats in Central Texas. Features in-house surgery suite for medical care.",
    website: "https://pawsshelter.org/",
    icon: Heart,
    color: "bg-green-100 text-green-600",
    impact: "In-house surgery suite saves more lives"
  }
]

const categories = [
  { name: "All", count: charities.length },
  { name: "Housing & Homelessness", count: charities.filter(c => c.category.includes("Housing") || c.category.includes("Homelessness")).length },
  { name: "Animal Rescue", count: charities.filter(c => c.category.includes("Animal")).length },
  { name: "Legal Aid", count: charities.filter(c => c.category.includes("Legal")).length },
  { name: "Food Security", count: charities.filter(c => c.category.includes("Food")).length }
]

export default function CharitiesPage() {
  return (
    <div className="bg-sanctuary-off-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-sanctuary-light-blue to-sanctuary-sky-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sanctuary-navy hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-poppins">Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="font-prata text-3xl sm:text-4xl lg:text-5xl text-sanctuary-navy mb-4">
              Support Local Austin Organizations
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-sanctuary-navy max-w-4xl mx-auto leading-relaxed">
              These trusted local organizations are doing life-changing work — from feeding families to rescuing animals 
              to offering shelter and safety. If you're in a position to give, your donation can go a long way.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-30 shadow-lg p-6 lg:p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="font-prata text-2xl lg:text-3xl text-sanctuary-navy mb-4">
                Austin's Community Impact
              </h2>
              <p className="font-poppins text-sanctuary-navy">
                These organizations collectively serve thousands of Austin residents and animals every year.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.slice(1).map((category, index) => (
                <div key={category.name} className="text-center">
                  <div className="bg-sanctuary-light-blue rounded-20 p-4 mb-3">
                    <div className="text-2xl lg:text-3xl font-prata text-sanctuary-navy mb-1">
                      {category.count}
                    </div>
                    <div className="font-poppins text-sm lg:text-base text-sanctuary-navy">
                      {category.name} Orgs
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-prata text-2xl lg:text-3xl text-sanctuary-navy text-center mb-12">
            Featured Austin Organizations
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {charities.map((charity, index) => (
              <div key={charity.name} className="bg-white rounded-30 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-20 ${charity.color}`}>
                      <charity.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-prata text-xl lg:text-2xl text-sanctuary-navy">
                          {charity.name}
                        </h3>
                        <span className="bg-sanctuary-light-blue text-sanctuary-navy px-3 py-1 rounded-20 text-xs font-poppins">
                          {charity.category}
                        </span>
                      </div>
                      <p className="font-poppins text-sm lg:text-base text-gray-600 leading-relaxed mb-3">
                        {charity.description}
                      </p>
                      <div className="bg-sanctuary-light-blue/30 p-3 rounded-20 mb-4">
                        <p className="font-poppins text-sm text-sanctuary-navy font-medium">
                          <strong>Impact:</strong> {charity.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={charity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-sanctuary-navy hover:bg-blue-700 text-white font-poppins font-medium py-3 px-6 rounded-20 transition-all flex-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                    <a
                      href={charity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-medium py-3 px-6 rounded-20 transition-all flex-1"
                    >
                      <DollarSign className="w-4 h-4" />
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-prata text-2xl sm:text-3xl lg:text-4xl text-sanctuary-navy mb-6">
            Every Donation Makes a Difference
          </h2>
          <p className="font-poppins text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether it's $5 or $500, your contribution directly impacts Austin families, individuals, and animals in need. 
            These organizations are transparent about their impact and make every dollar count.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-sanctuary-teal hover:bg-sanctuary-navy text-white font-poppins font-semibold text-lg px-8 py-4 rounded-30 transition-all"
            >
              <Heart className="w-5 h-5" />
              Support Sanctuary
            </Link>
            <a
              href="https://www.google.com/maps/d/viewer?mid=1GmBLmHeAPqwfqKy4sF6K5c9xTgHi8Co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-semibold text-lg px-8 py-4 rounded-30 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Find More Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}