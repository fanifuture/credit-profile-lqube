import { useState } from 'react';
import { DollarSign, ShoppingCart, Package, CheckCircle } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const EntryTypeButton = ({ icon, label, type, activeType, setActiveType }) => (
  <button 
    onClick={() => setActiveType(type)}
    className={`flex-1 flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${activeType === type ? 'bg-green-500 text-white shadow-lg' : 'bg-white text-gray-600'}`}>
    {icon}
    <span className="mt-2 font-semibold">{label}</span>
  </button>
);

const DataEntry = () => {
  const [entryType, setEntryType] = useState('sale');
  const [amount, setAmount] = useState('');

  const handleNumberClick = (num) => {
    setAmount(prev => prev + num);
  };

  const handleDelete = () => {
    setAmount(prev => prev.slice(0, -1));
  };

  const handleSave = () => {
    if (!amount || parseFloat(amount) === 0) {
        toast.error('Please enter a valid amount.');
        return;
    }
    // Mock saving data
    console.log({ type: entryType, amount: parseFloat(amount) });
    toast.success(`New ${entryType} of ${amount} ETB saved successfully!`);
    setAmount('');
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-gray-50">
        <Toaster richColors position="top-center" />
        <header className="p-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">Add New Entry</h1>
            <p className="text-center text-gray-500">Select entry type and enter the amount.</p>
        </header>

        <div className="p-4">
            <div className="flex gap-4 mb-6">
                <EntryTypeButton icon={<DollarSign size={24} />} label="Sale" type="sale" activeType={entryType} setActiveType={setEntryType} />
                <EntryTypeButton icon={<ShoppingCart size={24} />} label="Expense" type="expense" activeType={entryType} setActiveType={setEntryType} />
                <EntryTypeButton icon={<Package size={24} />} label="Inventory" type="inventory" activeType={entryType} setActiveType={setEntryType} />
            </div>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <span className="text-lg text-gray-500">Amount (ETB)</span>
                <p className="text-6xl font-bold text-gray-800 h-20 flex items-center justify-center">{amount || '0.00'}</p>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-px bg-gray-200">
            {[...Array(9).keys()].map(i => (
                <button key={i + 1} onClick={() => handleNumberClick(i + 1)} className="p-6 text-2xl font-semibold bg-white text-gray-800 hover:bg-gray-100">{i + 1}</button>
            ))}
            <button onClick={() => handleNumberClick('.')} className="p-6 text-2xl font-semibold bg-white text-gray-800 hover:bg-gray-100">.</button>
            <button onClick={() => handleNumberClick(0)} className="p-6 text-2xl font-semibold bg-white text-gray-800 hover:bg-gray-100">0</button>
            <button onClick={handleDelete} className="p-6 text-2xl font-semibold bg-white text-red-500 hover:bg-gray-100">DEL</button>
        </div>
        <button onClick={handleSave} className="w-full p-6 bg-green-500 text-white text-2xl font-bold flex items-center justify-center">
            <CheckCircle size={28} className="mr-3" /> Save Entry
        </button>
    </div>
  );
};

export default DataEntry;