import Link from 'next/link'
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-sanctuary-off-white py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="w-12 h-12 bg-sanctuary-navy rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xl font-bold">🕊️</span>
              </div>
              <h3 className="font-jacques text-3xl text-sanctuary-navy">Sanctuary</h3>
            </Link>
            <p className="font-poppins text-sanctuary-navy leading-relaxed">
              Connecting Austin communities with essential resources and support.
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="font-poppins font-semibold text-xl text-black mb-6">
              Follow us
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-black hover:text-sanctuary-navy transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={32} />
              </a>
              <a 
                href="#" 
                className="text-black hover:text-sanctuary-navy transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="font-poppins font-semibold text-xl text-black mb-6">
              Useful Links
            </h4>
            <nav className="space-y-3" aria-label="Footer navigation">
              <Link 
                href="/" 
                className="block font-poppins text-gray-600 hover:text-sanctuary-navy transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/browse" 
                className="block font-poppins text-gray-600 hover:text-sanctuary-navy transition-colors"
              >
                Browse Resources
              </Link>
              <Link 
                href="/emergency" 
                className="block font-poppins text-gray-600 hover:text-sanctuary-navy transition-colors"
              >
                Emergency
              </Link>
              <Link 
                href="/help-people" 
                className="block font-poppins text-gray-600 hover:text-sanctuary-navy transition-colors"
              >
                Help for People
              </Link>
              <Link 
                href="/help-animals" 
                className="block font-poppins text-gray-600 hover:text-sanctuary-navy transition-colors"
              >
                Help for Animals
              </Link>
              <Link 
                href="/legal" 
                className="block font-poppins text-gray-600 hover:text-sanctuary-navy transition-colors"
              >
                Legal Toolkit
              </Link>
              <Link 
                href="/submit" 
                className="block font-poppins text-gray-600 hover:text-sanctuary-navy transition-colors"
              >
                Submit a Resource
              </Link>
            </nav>
          </div>

          {/* Contacts Section */}
          <div>
            <h4 className="font-poppins font-semibold text-xl text-black mb-6">
              Contacts
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sanctuary-navy mt-1 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-black opacity-50 text-sm font-medium">Address:</p>
                  <p className="font-poppins text-black opacity-50">Austin, TX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-sanctuary-navy mt-1 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-black opacity-50 text-sm font-medium">Email:</p>
                  <a 
                    href="mailto:support@sanctuaryaustin.org"
                    className="font-poppins text-black opacity-50 hover:text-sanctuary-navy hover:opacity-100 transition-all"
                  >
                    support@sanctuaryaustin.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sanctuary-sky-blue mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-poppins text-sanctuary-navy text-sm">
              © 2025 Sanctuary Austin. Built with ❤️ for the Austin community.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="font-poppins text-sanctuary-navy text-sm hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="font-poppins text-sanctuary-navy text-sm hover:text-black transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/accessibility" 
                className="font-poppins text-sanctuary-navy text-sm hover:text-black transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer