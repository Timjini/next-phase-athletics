import { FaLock, FaUserFriends, FaCalendarTimes } from 'react-icons/fa';


export const Grantee = () => {
  const icons = [
    {
      id: 1,
      icon: <FaCalendarTimes />,
      title: 'Flexible Cancellation',
      description: 'Full refund available up to 14 days before the camp.',
    },
    {
      id: 2,
      icon: <FaLock />,
      title: 'Secure Payments',
      description: 'All payments are encrypted and processed securely.',
    },
    {
      id: 3,
      icon: <FaUserFriends />,
      title: 'Group Training',
      description: 'Limited spots ensure personalized attention.',
    },
  ];

  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-50 hidden">Peace of Mind Guarantee</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {icons.map((item) => (
            <div key={item.id} className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 hover:bg-yellow-500  mx-auto">
                <div className="font-bold text-2xl">{item.icon}</div>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-100">{item.title}</h3>
              <p className="mt-2 text-base text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
