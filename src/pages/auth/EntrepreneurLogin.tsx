import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EntrepreneurLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // In a real app, you'd have authentication logic here.
    // For the MVP, we'll just navigate to the dashboard.
    navigate('/app/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-2">L-QUBE</h1>
        <p className="text-lg text-gray-600 mb-8">Your Business, Your Credit, Your Future.</p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome Back!</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="mb-4">
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="pin" className="sr-only">PIN</label>
              <input type="password" id="pin" placeholder="Enter your 4-digit PIN" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center text-lg">
              Login <ArrowRight className="ml-2" size={20} />
            </button>
          </form>
        </div>
        <p className="text-gray-500 mt-6 text-sm">
          Don't have an account? <a href="#" className="font-semibold text-green-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default EntrepreneurLogin;