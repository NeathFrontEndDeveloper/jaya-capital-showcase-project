"use client";

import Login from "./login";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 border border-gray-200 rounded-2xl shadow-lg bg-white p-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-600 rounded-full">
              <LogIn className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-500">Please log in to continue</p>
          </div>

          {/* Login form */}
          <Login />
        </div>
      </main>
    </div>
  );
}
