'use client'

import Loader from '@/app/components/Loader'
import useFetchCampProgram from '@/app/hooks/useFetchCampProgram'
import { usePathname } from 'next/navigation'
import CampHeader from './CampHeader'
import CampLocation from './CampLocation'
import CampDescription from './CampDescription'
import CampSessions from './CampSessions'

const CampDetailsPage = () => {
  const pathname = usePathname()
  const slug = pathname?.split('/').pop() || ''

  const { loading, error, campProgram } = useFetchCampProgram(slug)

  if (!slug) return <div className="text-center py-20 text-gray-500">Invalid slug</div>
  if (loading) return <Loader />
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>
  if (!campProgram) return <div className="text-center py-20 text-gray-500">Camp not found</div>
  if (!campProgram.sessions) return <div className="text-center py-20 text-gray-500">No camp program found</div>
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <CampHeader title={campProgram.title} imageUrl={campProgram.imageUrl || ''} />
      <CampLocation location={campProgram.location} />
      {campProgram.description && <CampDescription description={campProgram.description} />}
      <CampSessions sessions={campProgram.sessions} />
    </div>
  )
}

export default CampDetailsPage
