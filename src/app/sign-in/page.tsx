import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <span className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </span>
        <SignIn 
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-none w-full",
              headerTitle: "text-gray-700",
              headerSubtitle: "text-gray-500",
              socialButtonsBlockButton: "border-gray-300",
              socialButtonsBlockButtonText: "text-gray-600",
              dividerText: "text-gray-400",
              formFieldLabel: "text-gray-700",
              formFieldInput: "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
              footerActionText: "text-gray-600",
              footerActionLink: "text-blue-600 hover:text-blue-800"
            }
          }}
        />
      </div>
    </div>
  );
}