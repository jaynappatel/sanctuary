'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestDB() {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    try {
      // Simple test query
      const { data, error } = await supabase
        .from('resources')
        .select('name')
        .limit(1)

      if (error) {
        setResult(`Error: ${error.message}`)
      } else {
        setResult(`Success! Found ${data?.length || 0} resources`)
      }
    } catch (err: any) {
      setResult(`Connection failed: ${err.message}`)
    }
    setLoading(false)
  }

  return (
    <div style={{padding: '2rem'}}>
      <h1>Supabase Connection Test</h1>
      <button 
        onClick={testConnection}
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#004674',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
        disabled={loading}
      >
        {loading ? 'Testing...' : 'Test Supabase Connection'}
      </button>
      
      {result && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: result.includes('Error') ? '#fee' : '#efe',
          borderRadius: '10px'
        }}>
          {result}
        </div>
      )}
    </div>
  )
}
