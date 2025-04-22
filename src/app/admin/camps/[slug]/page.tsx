'use client'

import Loader from '@/app/components/Loader'
import useFetchCampProgram from '@/app/hooks/useFetchCampProgram'
import { usePathname } from 'next/navigation'

const CampDetailsPage = () => {
  const pathname = usePathname()
  const slug = pathname?.split('/').pop() || ''

  const { loading, error, campProgram } = useFetchCampProgram(slug)

  if (!slug) return <div className="text-center py-20 text-gray-500">Invalid slug</div>
  if (loading) return <Loader />
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>
  if (!campProgram) return <div className="text-center py-20 text-gray-500">Camp not found</div>

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* Camp Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">{campProgram.title}</h1>
        {campProgram.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={campProgram.imageUrl}
            alt={campProgram.title}
            className="mt-6 mx-auto rounded-2xl shadow-lg max-h-96 object-cover"
          />
        )}
      </div>

      {/* Location */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">Location</h2>
        <p className="text-gray-50">{campProgram.location}</p>
      </div>

      {/* Description */}
      {campProgram.description && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-700">Description</h2>
          <p className="text-gray-50">{campProgram.description}</p>
        </div>
      )}

      {/* Sessions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Available Sessions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campProgram.sessions.map((session) => (
            <div
              key={session.id}
              className="bg-gray-900 p-4 rounded-xl shadow border border-gray-200 space-y-2"
            >
              <h3 className="text-lg font-medium text-blue-600">{session.label}</h3>
              <p className="text-sm text-gray-500">
                {new Date(session.startDate).toLocaleDateString()} -{' '}
                {new Date(session.endDate).toLocaleDateString()}
              </p>
              <p className="capitalize text-sm text-gray-600">
                Time: {session.period.toLowerCase()}
              </p>
              <p className="text-sm text-gray-700">Slots: {session.availableSlots}</p>
              <p className="text-sm text-gray-700">Price: ${session.price}</p>
              <span
                className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                  session.status === 'ACTIVE'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {session.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CampDetailsPage
