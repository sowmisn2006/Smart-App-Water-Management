import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardView from './pages/DashboardView';
import AiInsightsView from './pages/AiInsightsView';
import CropProfilesView from './pages/CropProfilesView';
import SettingsView from './pages/SettingsView';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
          <Routes>
            <Route path="/" element={<DashboardView />} />
            <Route path="/ai-insights" element={<AiInsightsView />} />
            <Route path="/crop-profiles" element={<CropProfilesView />} />
            <Route path="/settings" element={<SettingsView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
