import React from 'react';
import { useState } from 'react';
import { Heart, User, Mail, Lock, Stethoscope, Shield } from 'lucide-react';

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [formData, setFormData] = useState({ email: '', password: '', fullName: '' });
  const [errors, setErrors] = useState({});
  const [bio, setBio] = useState("");
  const [isDataSubmit, setIsDataSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else if (currentState === "Sign up" && !isDataSubmit) {
      setIsDataSubmit(true);
    }
    
    console.log('form data:', formData);
    // Send login request here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl w-full max-w-md border border-blue-100/50">
        {/* Header with medical icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4 shadow-lg">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-blue-800 mb-2">
            {currentState === "Sign up" ? "Join MediCare" : "Welcome Back"}
          </h2>
          <p className="text-blue-600 text-sm">
            {currentState === "Sign up" ? "Create your healthcare account" : "Sign in to your account"}
          </p>
        </div>

        <div className="space-y-6">
          {/* Full Name Field for Sign Up */}
          {currentState === "Sign up" && !isDataSubmit && (
            <div className="relative">
              <label className="block text-sm font-semibold text-blue-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                <input
                  value={formData.fullName}
                  name='fullName'
                  onChange={handleChange}
                  type="text"
                  className='w-full pl-10 pr-4 py-3 text-gray-800 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-blue-50/50'
                  placeholder='Enter your full name'
                />
              </div>
            </div>
          )}

          {/* Email and Password Fields */}
          {!isDataSubmit && (
            <>
              <div className="relative">
                <label className="block text-sm font-semibold text-blue-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-gray-800 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-blue-50/50"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-blue-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-gray-800 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-blue-50/50"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            {/* <Heart className="w-5 h-5" /> */}
            <span>{currentState === "Sign up" ? "Create Account" : "Sign In"}</span>
          </button>

          {/* Toggle between Sign Up and Login */}
          <div className="text-center pt-4">
            {currentState === "Sign up" ? (
              <p className='text-sm text-blue-600'>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setCurrentState("login");
                    setIsDataSubmit(false);
                  }}
                  className='font-semibold text-blue-700 hover:text-blue-800 transition-colors duration-200 underline decoration-2 underline-offset-2'
                >
                  Sign in here
                </button>
              </p>
            ) : (
              <p className='text-sm text-blue-600'>
                Need an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setCurrentState("Sign up");
                    setIsDataSubmit(false);
                  }}
                  className='font-semibold text-blue-700 hover:text-blue-800 transition-colors duration-200 underline decoration-2 underline-offset-2'
                >
                  Create one here
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-blue-100 text-center">
          <p className="text-xs text-blue-500">
            Secure • HIPAA Compliant • Trusted Healthcare Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;