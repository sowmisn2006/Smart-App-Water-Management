import { useState } from 'react';
import { Sprout, Droplets, ArrowRight } from 'lucide-react';

export default function CropProfilesView() {
  const [activeCrop, setActiveCrop] = useState(1);

  const crops = [
    {
      id: 1,
      name: 'Rice',
      moistureTarget: '80%',
      waterPriority: 'High',
      description: 'Requires constant hydration and flooded fields during early growth stages.',
      image: 'https://images.unsplash.com/photo-1590022791720-4e1160d5b6e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Millet',
      moistureTarget: '25%',
      waterPriority: 'Low',
      description: 'Drought-resistant crop. Requires minimal watering to prevent root rot.',
      image: 'https://images.unsplash.com/photo-1596238634139-38b975d7eab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Sugarcane',
      moistureTarget: '65%',
      waterPriority: 'Medium',
      description: 'Needs deep watering less frequently to encourage deep root growth.',
      image: 'https://images.unsplash.com/photo-1601362241517-5e64816c4960?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto w-full h-full p-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Crop Profiles</h1>
          <p className="text-gray-500 mt-2 text-base font-medium">
            Manage target hydration levels and AI watering priorities based on crop type.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crops.map((crop) => (
            <div 
              key={crop.id}
              className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-sm hover:shadow-xl ${
                activeCrop === crop.id ? 'border-emerald-500 scale-[1.02] shadow-emerald-100' : 'border-transparent'
              }`}
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-blue-900/20 z-10 transition-opacity ${activeCrop === crop.id ? 'opacity-0' : 'opacity-100'}`}></div>
                <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
                {activeCrop === crop.id && (
                  <div className="absolute top-4 right-4 z-20 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                    Active Profile
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sprout className="text-emerald-500" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">{crop.name}</h2>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 min-h-[40px] leading-relaxed">
                  {crop.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-sm font-semibold text-gray-500">Target Moisture</span>
                    <span className="text-lg font-bold text-blue-600 flex items-center gap-1">
                      <Droplets size={18} /> {crop.moistureTarget}
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-sm font-semibold text-gray-500">Water Priority</span>
                    <span className={`text-sm font-bold uppercase tracking-wider ${
                      crop.waterPriority === 'High' ? 'text-red-500' : crop.waterPriority === 'Medium' ? 'text-amber-500' : 'text-emerald-500'
                    }`}>
                      {crop.waterPriority}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveCrop(crop.id)}
                  disabled={activeCrop === crop.id}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-colors ${
                    activeCrop === crop.id 
                      ? 'bg-emerald-50 text-emerald-600 cursor-default' 
                      : 'bg-gray-900 text-white hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-200'
                  }`}
                >
                  {activeCrop === crop.id ? 'Currently Active' : 'Set as Active'}
                  {activeCrop !== crop.id && <ArrowRight size={18} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
