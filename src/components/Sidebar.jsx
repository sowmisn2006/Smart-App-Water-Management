import { LayoutDashboard, BrainCircuit, Droplet, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col h-full shadow-xl z-20 relative">
      <div className="p-6 border-b border-blue-800">
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Droplet className="text-emerald-400" />
          SmartWater
        </h1>
        <p className="text-blue-300 text-xs mt-1 font-medium tracking-wide">MANAGEMENT DASHBOARD</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
        <NavItem icon={<BrainCircuit size={20} />} label="AI Insights" />
        <NavItem icon={<Droplet size={20} />} label="Crop Profiles" />
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </nav>
      <div className="p-4 border-t border-blue-800 text-sm text-blue-400 bg-blue-950/30">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <p>System Status: <span className="text-emerald-400 font-semibold">Online</span></p>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
        active 
          ? 'bg-blue-800/80 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] border border-blue-700/50' 
          : 'text-blue-200 hover:bg-blue-800/50 hover:text-white border border-transparent'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
}
