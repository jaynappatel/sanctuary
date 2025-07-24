import Link from 'next/link'
import { Scale, Shield, Home, FileText, Users, Phone, ExternalLink, Download } from 'lucide-react'

export default function LegalToolkit() {
  const legalCategories = [
    {
      title: "Tenant Rights",
      icon: Home,
      description: "Know your rights as a renter, including eviction protection and repair requests",
      resources: [
        {
          title: "Texas Tenant Advisor",
          description: "Interactive tool to help tenants understand their rights",
          url: "https://texastenant.org",
          type: "website"
        },
        {
          title: "Austin Tenants' Council",
          description: "Local organization providing tenant counseling and education",
          url: "https://www.housing-rights.org",
          type: "organization"
        },
        {
          title: "Eviction Prevention Guide",
          description: "Step-by-step guide to prevent eviction and understand the process",
          url: "#",
          type: "pdf"
        }
      ]
    },
    {
      title: "Immigration Support",
      icon: Users,
      description: "Free immigration legal aid and Know Your Rights information",
      resources: [
        {
          title: "American Gateways",
          description: "Free immigration legal services in Central Texas",
          url: "https://americangateways.org",
          type: "organization"
        },
        {
          title: "Austin Sanctuary Network",
          description: "Community support and legal resources for immigrants",
          url: "https://austinsanctuary.org",
          type: "organization"
        },
        {
          title: "Know Your Rights: ICE Encounters",
          description: "What to do if approached by immigration enforcement",
          url: "#",
          type: "pdf"
        }
      ]
    },
    {
      title: "Public Benefits",
      icon: Shield,
      description: "Understanding eligibility for SNAP, Medicaid, housing assistance, and more",
      resources: [
        {
          title: "Texas Health and Human Services",
          description: "Apply for benefits including SNAP, TANF, and Medicaid",
          url: "https://yourtexasbenefits.hhsc.texas.gov",
          type: "website"
        },
        {
          title: "Benefits Eligibility Calculator",
          description: "Check what benefits you may qualify for",
          url: "https://www.benefits.gov/benefit-finder",
          type: "website"
        },
        {
          title: "Public Benefits Guide",
          description: "Complete guide to applying for and maintaining benefits",
          url: "#",
          type: "pdf"
        }
      ]
    },
    {
      title: "Pet Owner Rights",
      icon: Shield,
      description: "Rights for pet owners in housing, travel, and emergency situations",
      resources: [
        {
          title: "Pet-Friendly Housing Rights",
          description: "Understanding emotional support animals and pet deposits",
          url: "#",
          type: "pdf"
        },
        {
          title: "Austin Animal Services",
          description: "City services for pet licensing, lost pets, and ordinances",
          url: "https://www.austintexas.gov/department/animal-services",
          type: "organization"
        },
        {
          title: "Emergency Pet Evacuation Plan",
          description: "Legal considerations for pet emergency preparedness",
          url: "#",
          type: "pdf"
        }
      ]
    }
  ]

  const legalAidOrganizations = [
    {
      name: "Texas RioGrande Legal Aid",
      address: "1405 E 6th St, Austin, TX 78702",
      phone: "(512) 374-2700",
      website: "https://www.trla.org",
      services: ["Family Law", "Housing", "Immigration", "Public Benefits", "Consumer Protection"],
      description: "Free civil legal services for low-income individuals and families"
    },
    {
      name: "Volunteer Legal Services of Central Texas",
      address: "1005 La Posada Dr #150, Austin, TX 78752",
      phone: "(512) 476-5550",
      website: "https://www.vlsoct.org",
      services: ["Family Law", "Immigration", "Bankruptcy", "Consumer Issues"],
      description: "Connecting low-income individuals with volunteer attorneys"
    },
    {
      name: "Austin Bar Association Legal Aid Clinic",
      address: "Multiple locations",
      phone: "(512) 472-8303",
      website: "https://www.austinbar.org",
      services: ["General Legal Advice", "Document Review", "Referrals"],
      description: "Free legal advice clinics held throughout Austin"
    },
    {
      name: "University of Texas Law School Clinic",
      address: "727 E Dean Keeton St, Austin, TX 78705",
      phone: "(512) 232-1203",
      website: "https://law.utexas.edu/clinics/",
      services: ["Immigration", "Domestic Violence", "Mental Health Law"],
      description: "Law students provide supervised legal assistance"
    }
  ]

  const emergencyLegalContacts = [
    {
      situation: "Domestic Violence",
      contact: "SafePlace 24/7 Hotline",
      number: "(512) 267-7233",
      description: "Legal advocacy and protective order assistance"
    },
    {
      situation: "Immigration Detention",
      contact: "American Gateways",
      number: "(512) 478-0546",
      description: "Emergency immigration legal assistance"
    },
    {
      situation: "Eviction Notice",
      contact: "Austin Tenants' Council",
      number: "(512) 474-1961",
      description: "Immediate tenant rights counseling"
    },
    {
      situation: "Police Encounters",
      contact: "ACLU of Texas Know Your Rights Hotline",
      number: "(713) 942-8146",
      description: "Civil rights violations and police misconduct"
    }
  ]

  return (
    <div className="bg-sanctuary-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-sanctuary-teal py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-64 text-black mb-6">
            Know Your Rights. Stay Safe.
          </h1>
          <p className="font-psl-ornanong font-bold text-xl md:text-2xl lg:text-3xl text-black max-w-5xl mx-auto leading-relaxed">
            Whether you're facing eviction, need help as a tenant with a pet, or are navigating immigration, 
            these guides and services can help you understand your rights and find free legal support in Austin.
          </p>
        </div>
      </section>

      {/* Emergency Legal Help Banner */}
      <section className="bg-red-600 text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-poppins font-semibold">
            <Phone className="w-5 h-5 inline mr-2" />
            Need immediate legal help? Scroll down for emergency contacts or call 2-1-1 for referrals
          </p>
        </div>
      </section>

      {/* Legal Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="categories-heading" className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-12 text-center">
            Legal Resources by Category
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {legalCategories.map((category, index) => {
              const IconComponent = category.icon
              
              return (
                <div key={index} className="bg-white rounded-30 p-8 shadow-card hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-sanctuary-light-blue p-3 rounded-full">
                      <IconComponent className="w-8 h-8 text-sanctuary-navy" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-2xl text-black">
                        {category.title}
                      </h3>
                      <p className="font-poppins text-sanctuary-navy">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.resources.map((resource, idx) => (
                      <div key={idx} className="border border-sanctuary-sky-blue rounded-20 p-4 hover:bg-sanctuary-beige transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-poppins font-medium text-lg text-black mb-1">
                              {resource.title}
                            </h4>
                            <p className="font-poppins text-sm text-sanctuary-navy mb-3">
                              {resource.description}
                            </p>
                          </div>
                          <div className="ml-4">
                            {resource.type === 'pdf' && <Download className="w-5 h-5 text-sanctuary-teal" />}
                            {resource.type === 'website' && <ExternalLink className="w-5 h-5 text-sanctuary-teal" />}
                            {resource.type === 'organization' && <Users className="w-5 h-5 text-sanctuary-teal" />}
                          </div>
                        </div>
                        <a
                          href={resource.url}
                          target={resource.type !== 'pdf' ? '_blank' : undefined}
                          rel={resource.type !== 'pdf' ? 'noopener noreferrer' : undefined}
                          className="inline-block bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-medium py-2 px-4 rounded-20 text-sm transition-all"
                        >
                          {resource.type === 'pdf' ? 'Download Guide' : 'Visit Resource'}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Legal Aid Organizations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sanctuary-light-blue bg-opacity-30" aria-labelledby="organizations-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="organizations-heading" className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-12 text-center">
            Free Legal Aid Organizations
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {legalAidOrganizations.map((org, index) => (
              <div key={index} className="bg-white rounded-30 p-6 shadow-card hover:shadow-lg transition-all">
                <h3 className="font-poppins font-semibold text-xl text-black mb-3">
                  {org.name}
                </h3>
                
                <p className="font-poppins text-sanctuary-navy mb-4">
                  {org.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <p className="font-poppins text-sm text-sanctuary-navy">
                    <strong>Address:</strong> {org.address}
                  </p>
                  <p className="font-poppins text-sm text-sanctuary-navy">
                    <strong>Phone:</strong> {org.phone}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-poppins font-medium text-black mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {org.services.map((service, idx) => (
                      <span 
                        key={idx}
                        className="bg-sanctuary-sky-blue px-3 py-1 rounded-full text-xs font-poppins text-sanctuary-navy"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={`tel:${org.phone}`}
                    className="flex-1 bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-medium py-2 px-4 rounded-20 text-center transition-all"
                  >
                    Call Now
                  </a>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-medium py-2 px-4 rounded-20 text-center transition-all"
                  >
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Legal Contacts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="emergency-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="emergency-heading" className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-12 text-center">
            Emergency Legal Contacts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyLegalContacts.map((contact, index) => (
              <div key={index} className="bg-white border-l-4 border-red-500 rounded-r-20 p-6 shadow-card">
                <h3 className="font-poppins font-semibold text-lg text-black mb-2">
                  {contact.situation}
                </h3>
                <h4 className="font-poppins font-medium text-sanctuary-navy mb-2">
                  {contact.contact}
                </h4>
                <p className="font-poppins text-sm text-sanctuary-navy mb-4">
                  {contact.description}
                </p>
                <a
                  href={`tel:${contact.number}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-poppins font-semibold py-2 px-6 rounded-20 transition-all"
                >
                  Call {contact.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Know Your Rights Downloads */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sanctuary-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-8">
            Know Your Rights Guides
          </h2>
          <p className="font-poppins text-xl text-white mb-12">
            Download these essential guides to understand your legal rights in various situations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Police Encounters", subtitle: "What to do if stopped or questioned" },
              { title: "Immigration Rights", subtitle: "Know your rights regardless of status" },
              { title: "Tenant Rights", subtitle: "Housing rights and eviction protection" },
              { title: "Workplace Rights", subtitle: "Fair wages and safe working conditions" },
              { title: "Public Benefits", subtitle: "Accessing services you're entitled to" },
              { title: "Domestic Violence", subtitle: "Legal protections and resources" }
            ].map((guide, index) => (
              <a
                key={index}
                href="#"
                className="bg-white hover:bg-sanctuary-sky-blue rounded-20 p-6 transition-all group"
              >
                <Download className="w-8 h-8 text-sanctuary-teal mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-poppins font-semibold text-lg text-black mb-2">
                  {guide.title}
                </h3>
                <p className="font-poppins text-sm text-sanctuary-navy">
                  {guide.subtitle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-black mb-6">
            Can't Find What You Need?
          </h2>
          <p className="font-poppins text-xl text-sanctuary-navy mb-8">
            If you need legal help that isn't covered here, these resources can help you find the right assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:211"
              className="bg-sanctuary-teal hover:bg-sanctuary-navy text-black hover:text-white font-poppins font-semibold py-3 px-8 rounded-30 transition-all"
            >
              Call 2-1-1 for Referrals
            </a>
            <Link
              href="/browse?category=legal"
              className="bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-semibold py-3 px-8 rounded-30 transition-all"
            >
              Browse All Legal Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}