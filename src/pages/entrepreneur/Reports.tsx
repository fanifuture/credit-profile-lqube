import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockWeeklyTrends } from '@/lib/mockData';
import { Calendar, ChevronDown } from 'lucide-react';

const Reports = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Business Reports</h1>
        <button className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 text-sm font-medium text-gray-700">
            <Calendar size={16} className="mr-2" />
            <span>This Week</span>
            <ChevronDown size={16} className="ml-2" />
        </button>
      </header>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Weekly Performance</h2>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={mockWeeklyTrends} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                        contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                        labelStyle={{ fontWeight: 'bold' }}
                    />
                    <Legend iconType="circle" iconSize={8} />
                    <Bar dataKey="sales" fill="#22c55e" name="Sales" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#ef4444" name="Expenses" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Key Insights</h2>
        <ul className="space-y-3">
            <li className="text-gray-600 text-sm">- Your highest sales day was <span className="font-bold text-green-600">Saturday</span>.</li>
            <li className="text-gray-600 text-sm">- Your highest expense day was <span className="font-bold text-red-600">Saturday</span>.</li>
            <li className="text-gray-600 text-sm">- Consider running promotions on <span className="font-bold text-blue-600">Mondays</span> to boost sales.</li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;