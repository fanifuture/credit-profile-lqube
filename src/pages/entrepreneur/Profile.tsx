import { mockUser, mockCreditProfile } from '@/lib/mockData';
import { ShieldCheck, TrendingUp, TrendingDown, Star, HelpCircle } from 'lucide-react';

const FactorPill = ({ status }) => {
    const styles = {
        'Excellent': 'bg-green-100 text-green-800',
        'Good': 'bg-blue-100 text-blue-800',
        'Fair': 'bg-yellow-100 text-yellow-800',
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status]}`}>{status}</span>
}

const Profile = () => {
  return (
    <div className="p-4 pb-24">
      <header className="text-center mb-6">
        <img src={mockUser.profilePicture} alt={mockUser.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
        <h1 className="text-2xl font-bold text-gray-800">{mockUser.name}</h1>
        <p className="text-md text-gray-500">{mockUser.businessName}</p>
      </header>

      <section className="bg-white p-6 rounded-2xl shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">Credit Readiness Profile</h2>
            <ShieldCheck className="text-green-500" size={24} />
        </div>
        <div className="text-center">
            <p className="text-6xl font-bold text-green-600">{mockCreditProfile.score}</p>
            <p className={`text-xl font-semibold ${mockCreditProfile.level === 'Good' ? 'text-blue-500' : 'text-yellow-500'}`}>{mockCreditProfile.level}</p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">Contributing Factors</h2>
            <HelpCircle className="text-gray-400" size={20} />
        </div>
        <ul className="space-y-4">
            {mockCreditProfile.factors.map(factor => (
                <li key={factor.name} className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-gray-800">{factor.name}</p>
                        <p className="text-sm text-gray-500">{factor.description}</p>
                    </div>
                    <FactorPill status={factor.status} />
                </li>
            ))}
        </ul>
      </section>
      
      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="font-semibold text-gray-700 mb-4">Score History</h2>
        <ul className="space-y-3">
            {mockCreditProfile.history.map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                    {item.change > 0 && index !== 0 ? <TrendingUp size={16} className="mr-3 text-green-500"/> : <Star size={16} className="mr-3 text-yellow-500"/>}
                    <span className="text-gray-500 mr-3">{item.date}</span>
                    <span className="flex-1 text-gray-700">{item.description}</span>
                    {item.change > 0 && index !== 0 && <span className="font-medium text-green-500">+{item.change}</span>}
                </li>
            ))}
        </ul>
      </section>

    </div>
  );
};

export default Profile;