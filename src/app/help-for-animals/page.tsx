'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, MapPin, Clock, Phone, Globe, Heart, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface Resource {
  id: string
  name: string
  type: 'shelter' | 'food' | 'pet' | 'legal' | 'health' | 'other'
  address: string
  phone?: string
  website?: string
  description: string
  hours?: string
  pet_friendly: boolean
  tags?: string[]
  verified: boolean
}

export default function HelpForAnimals() {
  const [searchTerm, setSearchTerm] = useState('')
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch pet resources and pet-friendly human resources
  useEffect(() => {
    async function fetchResources() {
      try {
        const { data, error } = await supabase
          .from('resources')
          .select('*')
          .eq('verified', true)
          .or('type.eq.pet,pet_friendly.eq.true') // Pet resources OR pet-friendly resources
          .order('type') // Show pet resources first, then pet-friendly ones

        if (error) {
          throw error
        }

        setResources(data || [])
      } catch (err: any) {
        console.error('Error fetching resources:', err)
        setError(err.message || 'Failed to load resources')
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  // Filter resources based on search
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = searchTerm === '' || 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (resource.tags && resource.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      
      return matchesSearch
    })
  }, [resources, searchTerm])

  // Separate pet resources from pet-friendly human resources
  const petResources = filteredResources.filter(r => r.type === 'pet')
  const petFriendlyResources = filteredResources.filter(r => r.type !== 'pet' && r.pet_friendly)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pet':
        return 'bg-purple-100 text-purple-800'
      case 'food':
        return 'bg-green-100 text-green-800'
      case 'shelter':
        return 'bg-blue-100 text-blue-800'
      case 'health':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '')
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
    }
    return phone
  }

  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white rounded-30 p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-sanctuary-sky-blue flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="bg-sanctuary-light-blue p-2 rounded-full flex-shrink-0">
            <span className="text-xl">🐾</span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-poppins font-semibold text-lg text-black leading-tight mb-2" style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {resource.name}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-xs font-poppins capitalize ${getTypeColor(resource.type)}`}>
                {resource.type === 'pet' ? 'Pet Services' : `${resource.type} (Pet Friendly)`}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-sanctuary-beige px-2 py-1 rounded-full text-xs font-poppins text-sanctuary-navy flex items-center gap-1 flex-shrink-0">
          <Heart className="w-3 h-3" />
          {resource.type === 'pet' ? 'Pet Care' : 'Pet Welcome'}
        </div>
      </div>

      {/* Description */}
      <p className="font-poppins text-sanctuary-navy mb-4 text-sm leading-relaxed" style={{
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {resource.description}
      </p>

      {/* Tags */}
      {resource.tags && resource.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-sanctuary-sky-blue px-3 py-1 rounded-full text-xs font-poppins text-sanctuary-navy"
            >
              {tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-poppins text-gray-600">
              +{resource.tags.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Location and Hours */}
      <div className="space-y-2 mb-6 mt-auto">
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="w-4 h-4 text-sanctuary-navy mt-0.5 flex-shrink-0" />
          <span className="font-poppins text-sanctuary-navy">{resource.address}</span>
        </div>
        {resource.hours && (
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-sanctuary-navy flex-shrink-0" />
            <span className="font-poppins text-sanctuary-navy">{resource.hours}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        {resource.phone && (
          <a
            href={`tel:${resource.phone}`}
            className="flex-1 bg-sanctuary-teal hover:bg-sanctuary-navy text-white font-poppins font-medium py-3 px-4 rounded-30 text-center transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{formatPhoneNumber(resource.phone)}</span>
            <span className="sm:hidden">Call</span>
          </a>
        )}
        
        {resource.website && (
          <a
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-sanctuary-light-blue hover:bg-sanctuary-sky-blue text-sanctuary-navy font-poppins font-medium py-3 px-4 rounded-30 text-center transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Globe className="w-4 h-4" />
            <span>Website</span>
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div className="bg-sanctuary-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sanctuary-dark-blue to-purple-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Help for Animals
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Veterinary care, animal shelters, pet adoption, and pet-friendly resources for your furry family members in Austin
          </p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-20 text-center">
              <div className="text-3xl mb-2">🏥</div>
              <div className="font-poppins font-semibold text-lg text-purple-800">
                {petResources.filter(r => r.tags?.some(tag => tag.includes('vet'))).length}
              </div>
              <div className="font-poppins text-sm text-purple-600">Veterinary Services</div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-20 text-center">
              <div className="text-3xl mb-2">🏠</div>
              <div className="font-poppins font-semibold text-lg text-blue-800">
                {petResources.filter(r => r.tags?.some(tag => tag.includes('shelter') || tag.includes('adoption'))).length}
              </div>
              <div className="font-poppins text-sm text-blue-600">Shelters & Adoption</div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-20 text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-poppins font-semibold text-lg text-green-800">
                {petFriendlyResources.length}
              </div>
              <div className="font-poppins text-sm text-green-600">Pet-Friendly Services</div>
            </div>
          </div>

          {/* Search Input */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for pet services..."
                className="w-full pl-12 pr-4 py-3 border-2 border-sanctuary-sky-blue rounded-30 font-poppins focus:outline-none focus:border-sanctuary-navy"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Active Search Display */}
      {searchTerm && (
        <section className="px-4 sm:px-6 lg:px-8 py-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="font-poppins text-sm text-gray-600">Searching for:</span>
              <span className="bg-sanctuary-teal text-white px-3 py-1 rounded-full text-sm font-poppins">
                "{searchTerm}"
              </span>
              <button
                onClick={() => setSearchTerm('')}
                className="text-sanctuary-navy hover:text-sanctuary-teal text-sm font-poppins underline"
              >
                Clear search
              </button>
            </div>
          </div>
        </section>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-sanctuary-teal" />
          <span className="ml-2 font-poppins text-sanctuary-navy">Loading pet resources...</span>
        </div>
      ) : error ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="font-poppins font-semibold text-2xl text-red-600 mb-2">
            Error Loading Resources
          </h3>
          <p className="font-poppins text-sanctuary-navy">{error}</p>
        </div>
      ) : (
        <>
          {/* Pet-Specific Services */}
          {petResources.length > 0 && (
            <section className="py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="font-poppins font-semibold text-2xl text-black mb-6">
                  🐾 Pet Services & Veterinary Care ({petResources.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {petResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Pet-Friendly Human Services */}
          {petFriendlyResources.length > 0 && (
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <h2 className="font-poppins font-semibold text-2xl text-black mb-6">
                  🤝 Pet-Friendly Human Services ({petFriendlyResources.length})
                </h2>
                <p className="font-poppins text-sanctuary-navy mb-6">
                  These services welcome you and your pets, so you don't have to choose between getting help and staying with your furry family.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {petFriendlyResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* No Results */}
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="font-poppins font-semibold text-2xl text-sanctuary-navy mb-2">
                No pet resources found
              </h3>
              <p className="font-poppins text-sanctuary-navy mb-4">
                {searchTerm ? `No pet resources match "${searchTerm}"` : 'No pet resources available'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-sanctuary-teal hover:bg-sanctuary-navy text-white font-poppins font-medium py-2 px-6 rounded-30 transition-all"
                >
                  Show all pet resources
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}