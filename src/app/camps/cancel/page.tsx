export default function CancelPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
          {/* Error Icon */}
          <div className="mx-auto mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <svg 
                className="w-6 h-6 text-red-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                >
                </path>
              </svg>
            </div>
          </div>
  
          {/* Heading */}
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Payment Failed!
          </h2>
  
          {/* Error Message */}
          <p className="text-gray-600 mb-6 text-lg">
            Oops! Something went wrong with your payment processing. Please try again.
          </p>
  
          {/* Additional Info */}
          <p className="text-gray-500 text-sm mb-8">
            If the problem persists, please contact our support team.
          </p>
  
          {/* Return Button */}
          <button
            className="w-full max-w-md mx-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            onClick={() => window.history.back()}
          >
            Return to Checkout
          </button>
        </div>
      </div>
    )
  }