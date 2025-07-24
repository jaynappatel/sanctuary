'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, Filter, MapPin, Clock, Phone, Globe, Heart, Loader2 } from 'lucide-react'
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

type ResourceType = 'all' | 'food' | 'shelter' | 'health' | 'pet' | 'legal' | 'other'

export default function BrowseResources() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<ResourceType>('all')
  const [showMap, setShowMap] = useState(false)
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch resources from Supabase
  useEffect(() => {
    async function fetchResources() {
      try {
        const { data, error } = await supabase
          .from('resources')
          .select('*')
          .eq('verified', true)
          .order('name')

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

  // Filter resources based on search and category
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (resource.tags && resource.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      
      // Category filter
      const matchesType = selectedType === 'all' || resource.type === selectedType
      
      return matchesSearch && matchesType
    })
  }, [resources, searchTerm, selectedType])

  const categoryIcons = {
    food: '🍽️',
    shelter: '🏠',
    health: '🏥',
    pet: '🐾',
    legal: '⚖️',
    other: '🤝'
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'food':
        return 'bg-green-100 text-green-800'
      case 'shelter':
        return 'bg-blue-100 text-blue-800'
      case 'health':
        return 'bg-red-100 text-red-800'
      case 'pet':
        return 'bg-purple-100 text-purple-800'
      case 'legal':
        return 'bg-yellow-100 text-yellow-800'
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

  // Clear search function
  const clearSearch = () => {
    setSearchTerm('')
    setSelectedType('all')
  }

  return (
    <div className="bg-sanctuary-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-sanctuary-light-blue py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
            Browse Resources
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-sanctuary-navy max-w-3xl mx-auto">
            Find food banks, shelters, healthcare, legal aid, and pet services in Austin
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Input */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
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

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {[
                { key: 'all', label: 'All Resources', count: resources.length },
                { key: 'food', label: 'Food', count: resources.filter(r => r.type === 'food').length },
                { key: 'shelter', label: 'Shelter', count: resources.filter(r => r.type === 'shelter').length },
                { key: 'health', label: 'Health', count: resources.filter(r => r.type === 'health').length },
                { key: 'pet', label: 'Pets', count: resources.filter(r => r.type === 'pet').length },
                { key: 'legal', label: 'Legal', count: resources.filter(r => r.type === 'legal').length }
              ].map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setSelectedType(key as ResourceType)}
                  className={`px-4 py-2 rounded-30 font-poppins font-medium transition-all ${
                    selectedType === key
                      ? 'bg-sanctuary-teal text-white'
                      : 'bg-sanctuary-sky-blue text-sanctuary-navy hover:bg-sanctuary-light-blue'
                  }`}
                >
                  {label} ({count})
                </button>
              ))}
            </div>

            {/* Clear Button */}
            {(searchTerm || selectedType !== 'all') && (
              <button
                onClick={clearSearch}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-30 font-poppins font-medium transition-all"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Active Filters Display */}
      {(searchTerm || selectedType !== 'all') && (
        <section className="px-4 sm:px-6 lg:px-8 py-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-poppins text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <span className="bg-sanctuary-teal text-white px-3 py-1 rounded-full text-sm font-poppins">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedType !== 'all' && (
                <span className="bg-sanctuary-navy text-white px-3 py-1 rounded-full text-sm font-poppins">
                  Type: {selectedType}
                </span>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-poppins font-semibold text-2xl text-black">
              {loading ? 'Loading...' : `${filteredResources.length} Resources Found`}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedType !== 'all' && ` in ${selectedType}`}
            </h2>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-sanctuary-teal" />
              <span className="ml-2 font-poppins text-sanctuary-navy">Loading resources...</span>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="font-poppins font-semibold text-2xl text-red-600 mb-2">
                Error Loading Resources
              </h3>
              <p className="font-poppins text-sanctuary-navy">{error}</p>
            </div>
          ) : filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-poppins font-semibold text-2xl text-sanctuary-navy mb-2">
                No resources found
              </h3>
              <p className="font-poppins text-sanctuary-navy mb-4">
                {searchTerm ? `No resources match "${searchTerm}"` : `No ${selectedType} resources available`}
              </p>
              <button
                onClick={clearSearch}
                className="bg-sanctuary-teal hover:bg-sanctuary-navy text-white font-poppins font-medium py-2 px-6 rounded-30 transition-all"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-30 p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-sanctuary-sky-blue flex flex-col h-full"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="bg-sanctuary-light-blue p-2 rounded-full flex-shrink-0">
                        <span className="text-xl">{categoryIcons[resource.type] || '🤝'}</span>
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
                            {resource.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    {resource.pet_friendly && (
                      <span className="bg-sanctuary-beige px-2 py-1 rounded-full text-xs font-poppins text-sanctuary-navy flex items-center gap-1 flex-shrink-0">
                        🐾 Pet Friendly
                      </span>
                    )}
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
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}