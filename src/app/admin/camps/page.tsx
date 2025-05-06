'use client';
import { AttendanceStatus, BookingStatus, CampProgram, CampSession, CampStatus, PaymentStatus, SessionPeriod } from '@/app/types/camp';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiEdit, FiTrash2, FiPlus, FiCalendar, FiMapPin, FiUser, FiRefreshCw, FiDownload, FiPrinter, FiCheck } from 'react-icons/fi';

type FilterOptions = {
  searchQuery?: string;
  status?: CampStatus;
  period?: SessionPeriod;
  location?: string;
};

export default function CampsView() {
  const [campPrograms, setCampPrograms] = useState<CampProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState<CampProgram | null>(null);
  const [selectedSession, setSelectedSession] = useState<CampSession | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<CampProgram & CampSession>>({});
  const [activeTab, setActiveTab] = useState<'programs' | 'sessions'>('programs');

  // Fetch camp programs (replace with actual API call)
  useEffect(() => {
    const fetchCampPrograms = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        const mockCampPrograms: CampProgram[] = [
          {
            id: '1',
            title: 'Summer Basketball Camp',
            description: 'A fun summer program for young basketball enthusiasts',
            imageUrl: '/images/basketball.jpg',
            slug: 'summer-basketball',
            location: 'Downtown Sports Center',
            lat: 40.7128,
            lng: -74.0060,
            createdAt: new Date('2023-01-15'),
            updatedAt: new Date('2023-06-01'),
            hosts: [
              {
                host: {
                  id: 'h1',
                  name: 'Coach Johnson',
                  bio: 'Former NBA player with 10 years coaching experience',
                  imageUrl: '/images/coach-johnson.jpg',
                  createdAt: new Date('2025-02-20'),
                  updatedAt: new Date('2025-02-20'),
                  campPrograms: []
                },
                id: '',
                campProgramId: '',
                campProgram: {
                  id: '',
                  title: '',
                  description: null,
                  imageUrl: undefined,
                  videoUrl: undefined,
                  slug: '',
                  location: '',
                  lat: 0,
                  lng: 0,
                  tShirtSizes: [],
                  subscribeToProgram: false,
                  createdAt: new Date('2025-02-20'),
                  updatedAt: new Date('2025-02-20'),
                  sessions: [],
                  hosts: []
                },
                hostId: ''
              }
            ],
            sessions: [
              {
                id: 's1',
                label: 'Week 1',
                priority: 1,
                startDate: new Date('2023-07-10'),
                startDateString: 'July 10, 2023',
                endDateString: 'July 14, 2023',
                endDate: new Date('2023-07-14'),
                period: 'MORNING',
                availableSlots: 15,
                price: 199.99,
                status: 'ACTIVE',
                bookings: [{
                  id: 'b1',
                  session: [],
                  amount: 0,
                  campName: [],
                  athleteName: '',
                  email: '',
                  phone: null,
                  status: BookingStatus.CANCELLED,
                  paymentStatus: PaymentStatus.UNPAID,
                  acceptedTerms: false,
                  attended: AttendanceStatus.PENDING,
                  qrCodeData: null,
                  qrCodeUrl: null,
                  tShirtSize: null,
                  subscribeToProgram: null,
                  token: null,
                  createdAt: new Date('2025-02-20'),
                  updatedAt: new Date('2025-02-20')
                }, {
                  id: 'b2',
                  session: [],
                  amount: 0,
                  campName: [],
                  athleteName: '',
                  email: '',
                  phone: null,
                  status: BookingStatus.CANCELLED,
                  paymentStatus: PaymentStatus.UNPAID,
                  acceptedTerms: false,
                  attended: AttendanceStatus.PENDING,
                  qrCodeData: null,
                  qrCodeUrl: null,
                  tShirtSize: null,
                  subscribeToProgram: null,
                  token: null,
                  createdAt: new Date('2025-02-20'),
                  updatedAt: new Date('2025-02-20')
                }],
                createdAt: new Date('2025-02-20'),
                updatedAt: new Date('2025-02-20'),
                campProgramId: ''
              },
              // More sample sessions...
            ],
            tShirtSizes: [],
            subscribeToProgram: false
          },
          // More sample camp programs...
        ];
        setCampPrograms(mockCampPrograms);
      } catch (error) {
        console.error('Failed to fetch camp programs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampPrograms();
  }, []);

  // Apply filters
  const filteredPrograms = campPrograms.filter(program => {
    if (filterOptions.searchQuery && 
        !program.title.toLowerCase().includes(filterOptions.searchQuery.toLowerCase()) &&
        !program.description?.toLowerCase().includes(filterOptions.searchQuery.toLowerCase()) &&
        !program.location.toLowerCase().includes(filterOptions.searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const filteredSessions = campPrograms.flatMap(program => 
    program.sessions.map(session => ({ ...session, programTitle: program.title }))
  ).filter(session => {
    if (filterOptions.searchQuery && 
        !session.programTitle.toLowerCase().includes(filterOptions.searchQuery.toLowerCase()) &&
        !session.label.toLowerCase().includes(filterOptions.searchQuery.toLowerCase())) {
      return false;
    }
    if (filterOptions.status && session.status !== filterOptions.status) return false;
    if (filterOptions.period && session.period !== filterOptions.period) return false;
    if (filterOptions.location && 
        !campPrograms.find(p => p.id === session.id)?.location.toLowerCase().includes(filterOptions.location.toLowerCase())) {
      return false;
    }
    return true;
  });

  const uniqueLocations = [...new Set(campPrograms.map(p => p.location))];

  const handleStatusUpdate = async (sessionId: string, newStatus: CampStatus) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      setCampPrograms(campPrograms.map(program => ({
        ...program,
        sessions: program.sessions.map(session => 
          session.id === sessionId ? { ...session, status: newStatus } : session
        )
      })));
    } catch (error) {
      console.error('Failed to update session status:', error);
    }
  };

  const handleEditSubmit = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      // Update logic would go here
      setIsEditing(false);
      setSelectedCamp(null);
      setSelectedSession(null);
    } catch (error) {
      console.error('Failed to update camp:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Camps Management</h1>
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700">
              <FiPlus className="mr-2" /> Add New Camp
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FiDownload className="mr-2" /> Export
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FiPrinter className="mr-2" /> Print
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('programs')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'programs'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Camp Programs
            </button>
            <button
              onClick={() => setActiveTab('sessions')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'sessions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Sessions
            </button>
          </nav>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={`Search ${activeTab === 'programs' ? 'camps' : 'sessions'} by name, description, or location...`}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filterOptions.searchQuery || ''}
                onChange={(e) => setFilterOptions({ ...filterOptions, searchQuery: e.target.value })}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiFilter className="mr-2" /> Filters
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeTab === 'sessions' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Session Status</label>
                      <select
                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        value={filterOptions.status || ''}
                        onChange={(e) => setFilterOptions({ ...filterOptions, status: e.target.value as CampStatus || undefined })}
                      >
                        <option value="">All Statuses</option>
                        {Object.values(CampStatus).map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                      <select
                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        value={filterOptions.period || ''}
                        onChange={(e) => setFilterOptions({ ...filterOptions, period: e.target.value as SessionPeriod || undefined })}
                      >
                        <option value="">All Periods</option>
                        {Object.values(SessionPeriod).map(period => (
                          <option key={period} value={period}>{period}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filterOptions.location || ''}
                    onChange={(e) => setFilterOptions({ ...filterOptions, location: e.target.value || undefined })}
                  >
                    <option value="">All Locations</option>
                    {uniqueLocations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setFilterOptions({})}
                  className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center p-12 bg-white rounded-lg shadow">
            <FiRefreshCw className="animate-spin h-8 w-8 text-blue-500" />
          </div>
        ) : activeTab === 'programs' ? (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Camp Program
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hosts
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sessions
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPrograms.map((program) => (
                    <tr key={program.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {program.imageUrl && (
                            <div className="flex-shrink-0 h-10 w-10">
                              <Image 
                                className="h-10 w-10 rounded-md object-cover" 
                                src={program.imageUrl} 
                                alt={program.title} 
                                height={600}
                                width={600}
                                />
                            </div>
                          )}
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{program.title}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">{program.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <FiMapPin className="mr-1 text-gray-400" />
                          {program.location}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {program.hosts.map(({ host }) => (
                            <span key={host.id} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <FiUser className="mr-1" />
                              {host.name}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {program.sessions.length} sessions
                        </div>
                        <div className="text-sm text-gray-500">
                          {program.sessions.filter(s => s.status === 'ACTIVE').length} active
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => {
                              setSelectedCamp(program);
                              setIsEditing(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit"
                          >
                            <FiEdit />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Camp Program
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Session
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Availability
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSessions.map((session) => (
                    <tr key={session.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{session.programTitle}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{session.label}</div>
                        <div className="text-sm text-gray-500">${session.price.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {session.startDateString} - {session.endDateString}
                        </div>
                        <div className="text-sm text-gray-500 capitalize">
                          {session.period.toLowerCase()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {session.availableSlots} slots available
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${(session.availableSlots / (session.availableSlots + (session.bookings?.length ?? 0))) * 100}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          session.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
                          session.status === 'FULL' ? 'bg-yellow-100 text-yellow-800' :
                          session.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {session.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => {
                              setSelectedSession(session);
                              setIsEditing(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit"
                          >
                            <FiEdit />
                          </button>
                          {session.status !== 'CANCELLED' && (
                            <button
                              onClick={() => handleStatusUpdate(session.id, 'CANCELLED' as CampStatus)}
                              className="text-red-600 hover:text-red-900"
                              title="Cancel"
                            >
                              <FiTrash2 />
                            </button>
                          )}
                          {session.status !== 'ACTIVE' && session.status !== 'FULL' && (
                            <button
                              onClick={() => handleStatusUpdate(session.id, 'ACTIVE'  as CampStatus)}
                              className="text-green-600 hover:text-green-900"
                              title="Activate"
                            >
                              <FiCheck />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {(isEditing && (selectedCamp || selectedSession)) && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">
                  Edit {selectedCamp ? 'Camp Program' : 'Session'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCamp ? (
                    <>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                          type="text"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.title || selectedCamp.title}
                          onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        />
                      </div>
                      
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                          rows={3}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.description || selectedCamp.description || ''}
                          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                          type="text"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.location || selectedCamp.location}
                          onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                        <input
                          type="text"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.slug || selectedCamp.slug}
                          onChange={(e) => setEditForm({ ...editForm, slug: e.target.value })}
                        />
                      </div>
                    </>
                  ) : selectedSession && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                        <input
                          type="text"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.label || selectedSession.label}
                          onChange={(e) => setEditForm({ ...editForm, label: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.status || selectedSession.status}
                          onChange={(e) => setEditForm({ ...editForm, status: e.target.value as CampStatus })}
                        >
                          {Object.values(CampStatus).map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                          type="date"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.startDateString || selectedSession.startDateString}
                          onChange={(e) => setEditForm({ ...editForm, startDateString: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input
                          type="date"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.endDateString || selectedSession.endDateString}
                          onChange={(e) => setEditForm({ ...editForm, endDateString: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                        <select
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.period || selectedSession.period}
                          onChange={(e) => setEditForm({ ...editForm, period: e.target.value as SessionPeriod })}
                        >
                          {Object.values(SessionPeriod).map(period => (
                            <option key={period} value={period}>{period}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                        <input
                          type="number"
                          step="0.01"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.price || selectedSession.price}
                          onChange={(e) => setEditForm({ ...editForm, price: parseFloat(e.target.value) })}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Available Slots</label>
                        <input
                          type="number"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editForm.availableSlots || selectedSession.availableSlots}
                          onChange={(e) => setEditForm({ ...editForm, availableSlots: parseInt(e.target.value) })}
                        />
                      </div>
                    </>
                  )}
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setSelectedCamp(null);
                      setSelectedSession(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEditSubmit}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}