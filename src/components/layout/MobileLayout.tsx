import { Outlet } from 'react-router-dom';
import BottomNav from '../BottomNav';

const MobileLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main className="pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default MobileLayout;