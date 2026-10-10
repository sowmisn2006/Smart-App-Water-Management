import { useState, useEffect } from 'react';
import AlertBanner from '../components/AlertBanner';
import MetricCard from '../components/MetricCard';
import AiReportPanel from '../components/AiReportPanel';
import { fetchTelemetryData } from '../services/api';
import { Leaf, Container, Gauge, Waves } from 'lucide-react';

export default function DashboardView() {
  const [data, setData] = useState({
    soilMoisture: 35,
    waterTankLevel: 850,
    pipelinePressure: 45,
    flowRate: 105,
    pipelineIssue: false,
    pumpStatus: false,
    aiReport: "Analyzing optimal water levels. System stable."
  });

  useEffect(() => {
    // Initial fetch
    const loadData = async () => {
      const result = await fetchTelemetryData();
      setData(result);
    };
    
    loadData();

    // Polling every 5 seconds
    const interval = setInterval(async () => {
      const result = await fetchTelemetryData();
      setData((prev) => ({
        ...prev,
        ...result,
        pumpStatus: prev.pumpStatus // Keep local manual override active
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTogglePump = () => {
    setData(prev => ({
      ...prev,
      pumpStatus: !prev.pumpStatus
    }));
  };

  return (
    <div className="flex-1 overflow-y-auto w-full h-full">
      <AlertBanner issueDetected={data.pipelineIssue} />
      
      <div className="p-10 scroll-smooth max-w-7xl mx-auto">
        <header className="mb-10">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-3">
            Live Monitoring
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Farm Telemetry Dashboard</h1>
          <p className="text-gray-500 mt-2 text-base font-medium max-w-2xl">
            Real-time agricultural metrics and AI-automated insights powered by our sustainable water management backend.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MetricCard 
            title="Soil Moisture" 
            value={data.soilMoisture} 
            unit="%" 
            icon={Leaf} 
            iconColor="text-emerald-600" 
            bgColor="bg-emerald-100" 
          />
          <MetricCard 
            title="Water Tank Level" 
            value={data.waterTankLevel} 
            unit="L" 
            icon={Container} 
            iconColor="text-blue-600" 
            bgColor="bg-blue-100" 
          />
          <MetricCard 
            title="Pipeline Pressure" 
            value={data.pipelinePressure} 
            unit="PSI" 
            icon={Gauge} 
            iconColor="text-amber-600" 
            bgColor="bg-amber-100" 
          />
          <MetricCard 
            title="Flow Rate" 
            value={data.flowRate} 
            unit="L/min" 
            icon={Waves} 
            iconColor="text-cyan-600" 
            bgColor="bg-cyan-100" 
          />
        </div>

        <AiReportPanel 
          report={data.aiReport} 
          pumpStatus={data.pumpStatus}
          togglePump={handleTogglePump}
        />
      </div>
    </div>
  );
}
