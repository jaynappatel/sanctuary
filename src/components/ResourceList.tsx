'use client'

import React, { useEffect, useState } from 'react'
import { supabase, Resource } from '@/lib/supabase'
import ResourceCard from './ResourceCard'

const ResourceList: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchResources = async () => {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .eq('verified', true)

    console.log('Supabase data:', data)
    console.log('Supabase error:', error)

    if (error) {
      console.error('Error fetching resources:', error)
    } else {
      setResources(data)
    }
  }

  fetchResources()
}, [])

  if (loading) {
    return <p className="text-center text-sanctuary-navy">Loading resources...</p>
  }

  if (resources.length === 0) {
    return <p className="text-center text-sanctuary-navy">No resources found.</p>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map(resource => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  )
}

export default ResourceList