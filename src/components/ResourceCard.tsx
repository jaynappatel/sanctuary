'use client'

import { Resource } from '@/lib/supabase'

interface ResourceCardProps {
  resource: Resource
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{resource.name}</h3>
      <p className="text-sm text-gray-600">{resource.description}</p>
    </div>
  )
}

export default ResourceCard