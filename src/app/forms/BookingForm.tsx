'use client';

import { useState } from "react";

export function BookingForm() {
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        emergencyContact: '',
        specialNotes: '',
        selectedSession: '',
        paymentMethod: 'card',
        agreeTerms: false,
      });
    
      const [currentStep, setCurrentStep] = useState(1);
      const [showPaymentModal, setShowPaymentModal] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
        
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Process payment and booking
        console.log('Booking submitted:', formData);
        // In a real app, you would handle payment processing here
      };
    
      const nextStep = () => setCurrentStep(prev => prev + 1);
      const prevStep = () => setCurrentStep(prev => prev - 1);
    
      const sessionOptions = [
        { id: 'session1', date: 'June 15-17, 2024', time: '9:00 AM - 12:00 PM', location: 'London Olympic Park' },
        { id: 'session2', date: 'June 22-24, 2024', time: '2:00 PM - 5:00 PM', location: 'London Olympic Park' },
        { id: 'session3', date: 'July 6-8, 2024', time: '9:00 AM - 12:00 PM', location: 'Manchester Regional Arena' },
      ];
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            {currentStep === 1 && (
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Please provide your details so we can complete your booking.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="age"
                          id="age"
                          min="8"
                          max="99"
                          value={formData.age}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
                        Emergency Contact
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="emergencyContact"
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="specialNotes" className="block text-sm font-medium text-gray-700">
                        Special Notes / Injuries
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="specialNotes"
                          name="specialNotes"
                          rows={3}
                          value={formData.specialNotes}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Session Selection
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose your preferred camp session.
                  </p>

                  <div className="mt-6 space-y-4">
                    {sessionOptions.map((session) => (
                      <div key={session.id} className="flex items-center">
                        <input
                          id={session.id}
                          name="selectedSession"
                          type="radio"
                          required
                          value={session.id}
                          checked={formData.selectedSession === session.id}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={session.id} className="ml-3 block text-sm font-medium text-gray-700">
                          <span className="font-bold">{session.date}</span> - {session.time}<br />
                          <span className="text-gray-500">{session.location}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Payment Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Secure payment processed with Stripe.
                  </p>

                  <div className="mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-bold text-gray-900">Camp Fee: £200</h4>
                      <p className="text-blue-600">Early bird discount: £180 if booked before May 1st</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="card"
                          name="paymentMethod"
                          type="radio"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                          Credit/Debit Card
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="apple"
                          name="paymentMethod"
                          type="radio"
                          value="apple"
                          checked={formData.paymentMethod === 'apple'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="apple" className="ml-3 block text-sm font-medium text-gray-700">
                          Apple Pay
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="google"
                          name="paymentMethod"
                          type="radio"
                          value="google"
                          checked={formData.paymentMethod === 'google'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="google" className="ml-3 block text-sm font-medium text-gray-700">
                          Google Pay
                        </label>
                      </div>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              id="expiry"
                              name="expiry"
                              placeholder="MM/YY"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                              CVC
                            </label>
                            <input
                              type="text"
                              id="cvc"
                              name="cvc"
                              placeholder="123"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        required
                        checked={formData.agreeTerms as boolean}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                        I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms & Conditions</a>
                      </label>
                      <p className="text-gray-500">You&apos;ll receive a confirmation email with all the details.</p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPaymentModal(true)}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Confirm & Pay £200
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>

          {/* Booking Summary Modal */}
          {showPaymentModal && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Confirm Your Booking
                      </h3>
                      <div className="mt-4 text-left">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-gray-900">Session Details</h4>
                          <p className="mt-1">
                            {sessionOptions.find(s => s.id === formData.selectedSession)?.date}<br />
                            {sessionOptions.find(s => s.id === formData.selectedSession)?.time}<br />
                            {sessionOptions.find(s => s.id === formData.selectedSession)?.location}
                          </p>

                          <h4 className="font-bold text-gray-900 mt-4">Personal Information</h4>
                          <p className="mt-1">
                            {formData.fullName}<br />
                            {formData.email}<br />
                            {formData.phone && `Phone: ${formData.phone}`}
                          </p>

                          <div className="mt-4 p-3 bg-blue-50 rounded">
                            <p className="font-bold">Total: £200</p>
                            <p className="text-sm text-gray-600 flex items-center">
                              <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                              </svg>
                              Secure payment processed with Stripe
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="button"
                      onClick={() => setShowPaymentModal(false)}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                    >
                      Confirm & Pay
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPaymentModal(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
}