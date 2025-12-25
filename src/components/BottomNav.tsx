import { NavLink } from 'react-router-dom';
import { Home, BarChart2, User, PlusCircle } from 'lucide-react';

const navItems = [
  { path: '/app/dashboard', icon: Home, label: 'Home' },
  { path: '/app/reports', icon: BarChart2, label: 'Reports' },
  { path: '/app/data-entry', icon: PlusCircle, label: 'Add Data', isCentral: true },
  { path: '/app/profile', icon: User, label: 'Profile' },
];

const BottomNav = () => {
  const activeLinkStyle = {
    color: 'rgb(34 197 94)', // green-500
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          if (item.isCentral) {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="-mt-8 z-10"
              >
                <div className="flex flex-col items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110">
                  <item.icon size={32} />
                </div>
              </NavLink>
            );
          }
          return (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              className="flex flex-col items-center justify-center text-gray-500 hover:text-green-500 transition-colors"
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;