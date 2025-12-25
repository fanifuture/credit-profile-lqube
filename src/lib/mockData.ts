export const mockUser = {
  name: 'Abebe Bikila',
  businessName: 'Abebe\'s Injera',
  profilePicture: `https://i.pravatar.cc/150?u=abebe`,
};

export const mockCreditProfile = {
  score: 720,
  level: 'Good',
  history: [
    { date: '2025-12-24', description: 'Initial profile generation', change: 720 },
    { date: '2025-12-20', description: 'Consistent daily entries', change: 5 },
    { date: '2025-12-15', description: 'High sales week', change: 10 },
  ],
  factors: [
    { name: 'Data Consistency', status: 'Excellent', description: 'You have logged data for 30 consecutive days.' },
    { name: 'Sales Volume', status: 'Good', description: 'Your sales are consistent and growing.' },
    { name: 'Expense Management', status: 'Fair', description: 'Consider reducing non-essential expenses.' },
    { name: 'Inventory Turnover', status: 'Good', description: 'Your products are selling well.' },
  ],
};

export const mockDailySummary = {
  sales: 1500.75, // Ethiopian Birr
  expenses: 450.50,
  profit: 1050.25,
  transactions: 25,
};

export const mockWeeklyTrends = [
  { day: 'Mon', sales: 1200, expenses: 300 },
  { day: 'Tue', sales: 1350, expenses: 400 },
  { day: 'Wed', sales: 1500, expenses: 350 },
  { day: 'Thu', sales: 1400, expenses: 500 },
  { day: 'Fri', sales: 1800, expenses: 600 },
  { day: 'Sat', sales: 2200, expenses: 750 },
  { day: 'Sun', sales: 2000, expenses: 700 },
];
