import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Booking } from "../types/camp";
import {
  AthleteRegistrationFormData,
  athleteRegistrationSchema,
} from "../types/athleteRegistrationForm";
import { calculateAge } from "../utils/calculateAge";
import { popularSports, schoolYears } from "../lib/constants";
import { toast } from "sonner";

type Props = {
  booking: Booking;
};

export const AthleteRegistrationForm: React.FC<Props> = ({ booking }) => {
  const [step, setStep] = React.useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AthleteRegistrationFormData>({
    resolver: zodResolver(athleteRegistrationSchema),
    defaultValues: {
      name: booking.athleteName,
      photoPermission: false,
      infoAccurate: false,
      termsAgreed: false,
      medicalConsent: false,
    },
  });

  const watchDateOfBirth = watch("dateOfBirth");

  // Calculate age when date of birth changes
  useEffect(() => {
    if (watchDateOfBirth) {
      const age = calculateAge(new Date(watchDateOfBirth));
      setValue("age", age);
    }
  }, [watchDateOfBirth, setValue]);

  const nextStep = async () => {
    // Validate current step before proceeding
    let fieldsToValidate: (keyof AthleteRegistrationFormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = [
          "name",
          "dateOfBirth",
          "age",
          "gender",
          "schoolYear",
          "schoolName",
        ];
        break;
      case 2:
        fieldsToValidate = ["primarySport", "athleticLevel", "goals"];
        break;
      case 3:
        fieldsToValidate = [
          "allergies",
          "medicalConditions",
          "emergencyContactName",
          "emergencyContactPhone",
        ];
        break;
      case 4:
        fieldsToValidate = ["photoPermission", "hearAboutUs"];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const onFormSubmit = async (data: AthleteRegistrationFormData) => {
    try {
      const updatedData = {
        ...data,
        dateOfBirth: new Date(data.dateOfBirth),
        bookingId: booking.id,
      };
      const response = await fetch("/api/athlete-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
      toast.success("Message sent successfully!");
      reset();
      setStep((prev) => prev + 1);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-50 py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Athlete Registration & Health Information Form
        </h1>
        {step < 6 && <p className="text-yellow-500 mt-1">Step {step} of 5</p>}
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Personal Information
              </h2>
              <p className="text-gray-600 mb-6">
                Welcome! Please fill out the form below to register an athlete
                for our program.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    {...register("dateOfBirth", { valueAsDate: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>

                <div className="hidden">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    {...register("age", { valueAsNumber: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    readOnly
                  />
                  {errors.age && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.age.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Gender *
                  </label>
                  <select
                    id="gender"
                    {...register("gender")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.gender.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="schoolYear"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    School Year *
                  </label>
                  <select
                    id="schoolYear"
                    {...register("schoolYear")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select School Year</option>
                    {schoolYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  {errors.schoolYear && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.schoolYear.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="schoolName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    School Name *
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    {...register("schoolName")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.schoolName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.schoolName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Sport & Athletic Profile
              </h2>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="primarySport"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Primary Sport *
                  </label>
                  <select
                    id="primarySport"
                    {...register("primarySport")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Primary Sport</option>
                    {popularSports.map((sport) => (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    ))}
                  </select>
                  {errors.primarySport && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.primarySport.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="secondarySport"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Secondary Sport (if any)
                  </label>
                  <input
                    type="text"
                    id="secondarySport"
                    {...register("secondarySport")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="athleticLevel"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Athletic Level *
                  </label>
                  <select
                    id="athleticLevel"
                    {...register("athleticLevel")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Level</option>
                    <option value="Development">Development</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  {errors.athleticLevel && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.athleticLevel.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Current Expectations / Goals *
                  </label>
                  <textarea
                    id="goals"
                    {...register("goals")}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Improve sprint speed, develop better stamina"
                  />
                  {errors.goals && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.goals.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="preferredPosition"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Position or Role in Sport (if applicable)
                  </label>
                  <input
                    type="text"
                    id="preferredPosition"
                    {...register("preferredPosition")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Health & Medical Information
              </h2>
              <p className="text-gray-600 mb-6">
                All information is confidential and used only for program
                purposes.
              </p>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="allergies"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Allergies *
                  </label>
                  <textarea
                    id="allergies"
                    {...register("allergies")}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="List any allergies or write 'None' if applicable"
                  />
                  {errors.allergies && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.allergies.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="medicalConditions"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Medical Conditions / Health Issues *
                  </label>
                  <textarea
                    id="medicalConditions"
                    {...register("medicalConditions")}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="List any medical conditions or write 'None' if applicable"
                  />
                  {errors.medicalConditions && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.medicalConditions.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="medications"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Medications Taken Regularly (if any)
                  </label>
                  <textarea
                    id="medications"
                    {...register("medications")}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="List any medications, dosage, and frequency"
                  />
                </div>

                <div>
                  <label
                    htmlFor="injuryHistory"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Injury History (last 12 months, if any)
                  </label>
                  <textarea
                    id="injuryHistory"
                    {...register("injuryHistory")}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe any recent injuries, treatments, and current status"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="emergencyContactName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      id="emergencyContactName"
                      {...register("emergencyContactName")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.emergencyContactName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.emergencyContactName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="emergencyContactPhone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Emergency Contact Phone *
                    </label>
                    <input
                      type="tel"
                      id="emergencyContactPhone"
                      {...register("emergencyContactPhone")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.emergencyContactPhone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.emergencyContactPhone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="familyDoctor"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Family Doctor (optional)
                  </label>
                  <input
                    type="text"
                    id="familyDoctor"
                    {...register("familyDoctor")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="doctorContactInfo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Doctor Contact Info (optional)
                  </label>
                  <input
                    type="text"
                    id="doctorContactInfo"
                    {...register("doctorContactInfo")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone number and/or clinic name"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Additional Information
              </h2>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="dietaryRestrictions"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Dietary Restrictions (if any)
                  </label>
                  <textarea
                    id="dietaryRestrictions"
                    {...register("dietaryRestrictions")}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Vegetarian, gluten-free, nut allergy, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Do you give permission for photos/videos to be taken for
                    program use?
                  </label>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="photoPermission"
                        type="checkbox"
                        {...register("photoPermission")}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="photoPermission"
                        className="font-medium text-gray-700"
                      >
                        I give permission for photos/videos to be taken for
                        program use
                      </label>
                    </div>
                  </div>
                  {errors.photoPermission && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.photoPermission.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="hearAboutUs"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    How did you hear about us? *
                  </label>
                  <select
                    id="hearAboutUs"
                    {...register("hearAboutUs")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Option</option>
                    <option value="School">School</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.hearAboutUs && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.hearAboutUs.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="additionalNotes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Anything else you&apos;d like us to know?
                  </label>
                  <textarea
                    id="additionalNotes"
                    {...register("additionalNotes")}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Additional comments or special requests"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Consent
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="infoAccurate"
                      type="checkbox"
                      {...register("infoAccurate")}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="infoAccurate"
                      className="font-medium text-gray-700"
                    >
                      I confirm the above information is accurate and up to
                      date. *
                    </label>
                    {errors.infoAccurate && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.infoAccurate.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="termsAgreed"
                      type="checkbox"
                      {...register("termsAgreed")}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="termsAgreed"
                      className="font-medium text-gray-700"
                    >
                      I agree to the program&apos;s terms and conditions and
                      liability waiver. *
                    </label>
                    {errors.termsAgreed && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.termsAgreed.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="medicalConsent"
                      type="checkbox"
                      {...register("medicalConsent")}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="medicalConsent"
                      className="font-medium text-gray-700"
                    >
                      I give consent for emergency medical treatment if
                      necessary. *
                    </label>
                    {errors.medicalConsent && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.medicalConsent.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </button>
              </div>
            </div>
          )}
        </form>

        {step === 6 && (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-gray-900">
              Thank you for registering!
            </h2>
            <p className="mt-2 text-gray-600">
              You will receive a confirmation email shortly with further
              details.
            </p>
            <p className="mt-2 text-gray-600">
              If you have questions or need to make changes to your submission,
              please contact us at{" "}
              <a
                href="mailto:info@nxtphs.com"
                className="text-blue-600 hover:underline"
              >
                info@athleteprogram.com
              </a>{" "}
              or call us at (815) 556-8037.
            </p>
            <div className="mt-6 hidden">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
