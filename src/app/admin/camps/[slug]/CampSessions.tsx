import { CampSession } from '@/app/types/camp'
import { useState } from 'react'


type CampSessionsProps = {
  sessions: CampSession[]
}

const CampSessions = ({ sessions }: CampSessionsProps) => {
  const [editSessionId, setEditSessionId] = useState<string | null>(null)
  const [editedSession, setEditedSession] = useState<CampSession | null>(null)

  const handleEdit = (session: CampSession) => {
    setEditSessionId(session.id)
    setEditedSession({ ...session })
  }

  const handleSave = () => {
    if (editedSession) {
      // Here you should send the edited session data to your API or update state
      console.log('Saving edited session:', editedSession)
    }
    setEditSessionId(null)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof CampSession
  ) => {
    if (editedSession) {
      setEditedSession({
        ...editedSession,
        [field]: e.target.value,
      })
    }
  }

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-xl font-semibold text-gray-700">Available Sessions</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="bg-gray-900 p-4 rounded-xl shadow border border-gray-200 space-y-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-blue-600">
                {editSessionId === session.id ? (
                  <input
                    type="text"
                    value={editedSession?.label || ''}
                    onChange={(e) => handleChange(e, 'label')}
                    className="bg-transparent text-blue-600"
                  />
                ) : (
                  session.label
                )}
              </h3>
              <button
                onClick={() => handleEdit(session)}
                className="text-blue-500 hover:text-blue-700"
              >
                ✏️
              </button>
            </div>
            <p className="text-sm text-gray-500">
              {editSessionId === session.id ? (
                <input
                  type="date"
                  value={new Date(editedSession?.startDate || '').toLocaleDateString('en-CA')}
                  onChange={(e) => handleChange(e, 'startDate')}
                  className="bg-transparent text-gray-500"
                />
              ) : (
                new Date(session.startDate).toLocaleDateString()
              )}
              {' - '}
              {editSessionId === session.id ? (
                <input
                  type="date"
                  value={new Date(editedSession?.endDate || '').toLocaleDateString('en-CA')}
                  onChange={(e) => handleChange(e, 'endDate')}
                  className="bg-transparent text-gray-500"
                />
              ) : (
                new Date(session.endDate).toLocaleDateString()
              )}
            </p>
            <p className="capitalize text-sm text-gray-600">
              Time: {editSessionId === session.id ? (
                <select
                  value={editedSession?.period || ''}
                  onChange={(e) => handleChange(e, 'period')}
                  className="bg-transparent"
                >
                  <option value="MORNING">8am - 11am</option>
                  <option value="AFTERNOON">2pm - 5pm</option>
                </select>
              ) : (
                session.period.toLowerCase()
              )}
            </p>
            <p className="text-sm text-gray-700">
              Slots: {editSessionId === session.id ? (
                <input
                  type="number"
                  value={editedSession?.availableSlots || 0}
                  onChange={(e) => handleChange(e, 'availableSlots')}
                  className="bg-transparent text-gray-700"
                />
              ) : (
                session.availableSlots
              )}
            </p>
            <p className="text-sm text-gray-700">
              Price: {editSessionId === session.id ? (
                <input
                  type="number"
                  value={editedSession?.price || 0}
                  onChange={(e) => handleChange(e, 'price')}
                  className="bg-transparent text-gray-700"
                />
              ) : (
                `$${session.price}`
              )}
            </p>
            <span
              className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                session.status === 'ACTIVE'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {session.status}
            </span>
            {editSessionId === session.id && (
              <div className="flex justify-end mt-2">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-4 py-1 rounded-lg"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CampSessions
