import { mockUser, mockDailySummary } from '@/lib/mockData';
import { DollarSign, ShoppingCart, ArrowUpRight, ArrowDownRight, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ icon, title, value, change, changeType }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
    <div className="flex items-center">
      <div className={`p-3 rounded-full mr-4 ${changeType === 'profit' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
    {change && (
      <div className={`flex items-center text-sm font-medium ${changeType === 'profit' ? 'text-green-500' : 'text-red-500'}`}>
        {changeType === 'profit' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span className="ml-1">{change}</span>
      </div>
    )}
  </div>
);

const QuickActionButton = ({ icon, label, path }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(path)} className="flex flex-col items-center justify-center bg-green-500 text-white p-4 rounded-xl shadow-md hover:bg-green-600 transition-all space-y-2">
            {icon}
            <span className="font-semibold text-sm">{label}</span>
        </button>
    );
}

const EntrepreneurDashboard = () => {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img src={mockUser.profilePicture} alt={mockUser.name} className="w-12 h-12 rounded-full mr-4 border-2 border-green-500" />
          <div>
            <p className="text-sm text-gray-500">Welcome back,</p>
            <h1 className="text-xl font-bold text-gray-800">{mockUser.name}</h1>
          </div>
        </div>
        <button className="p-2 text-gray-500 hover:text-gray-800">
            <MoreVertical size={24} />
        </button>
      </header>

      <section className="bg-green-600 text-white p-6 rounded-2xl shadow-lg mb-6">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm opacity-80">Total Profit (Today)</p>
                <p className="text-4xl font-bold mt-1">{mockDailySummary.profit.toLocaleString('en-US', { style: 'currency', currency: 'ETB', minimumFractionDigits: 2 })}</p>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
                <ArrowUpRight size={24}/>
            </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Today's Sales</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{mockDailySummary.sales.toLocaleString('en-US', { style: 'currency', currency: 'ETB', minimumFractionDigits: 2 })}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Today's Expenses</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{mockDailySummary.expenses.toLocaleString('en-US', { style: 'currency', currency: 'ETB', minimumFractionDigits: 2 })}</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
            <QuickActionButton icon={<DollarSign size={24} />} label="Add Sale" path="/app/data-entry" />
            <QuickActionButton icon={<ShoppingCart size={24} />} label="Add Expense" path="/app/data-entry" />
        </div>
      </section>

    </div>
  );
};

export default EntrepreneurDashboard;