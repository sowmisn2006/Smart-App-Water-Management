import { useState } from 'react';
import { Save, Server, ShieldCheck } from 'lucide-react';

export default function SettingsView() {
  const [settings, setSettings] = useState({
    ollamaEndpoint: 'http://localhost:11434',
    fastApiUrl: 'http://localhost:8000/api/telemetry',
    updateInterval: '5'
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate API save call
    setTimeout(() => {
      setIsSaved(true);
    }, 500);
  };

  return (
    <div className="flex-1 overflow-y-auto w-full h-full p-10 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">System Settings</h1>
          <p className="text-gray-500 mt-2 text-base font-medium">
            Configure local AI endpoints and backend connections.
          </p>
        </header>

        <form onSubmit={handleSave} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 space-y-8">
            
            <div>
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                <Server className="text-blue-500" size={20} />
                Network Configuration
              </h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="ollamaEndpoint" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ollama API Endpoint (Local LLM)
                  </label>
                  <input
                    type="url"
                    id="ollamaEndpoint"
                    name="ollamaEndpoint"
                    value={settings.ollamaEndpoint}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-800 bg-gray-50 focus:bg-white"
                  />
                  <p className="mt-2 text-xs text-gray-500">The local URL where your Qwen model is running.</p>
                </div>
                
                <div>
                  <label htmlFor="fastApiUrl" className="block text-sm font-semibold text-gray-700 mb-2">
                    FastAPI Backend URL
                  </label>
                  <input
                    type="url"
                    id="fastApiUrl"
                    name="fastApiUrl"
                    value={settings.fastApiUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-800 bg-gray-50 focus:bg-white"
                  />
                  <p className="mt-2 text-xs text-gray-500">The Python server supplying telemetry data.</p>
                </div>

                <div>
                  <label htmlFor="updateInterval" className="block text-sm font-semibold text-gray-700 mb-2">
                    Polling Interval (Seconds)
                  </label>
                  <input
                    type="number"
                    id="updateInterval"
                    name="updateInterval"
                    value={settings.updateInterval}
                    onChange={handleChange}
                    min="1"
                    max="60"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-800 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center text-sm font-semibold text-gray-500 gap-2">
              <ShieldCheck className="text-gray-400" size={18} />
              Local-only environment
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 transition-all shadow-md"
            >
              <Save size={18} />
              {isSaved ? 'Saved Successfully!' : 'Save Configuration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
