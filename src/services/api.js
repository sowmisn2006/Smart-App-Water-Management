// Mock API service to simulate fetching from FastAPI

// Randomize slightly around base values to simulate live telemetry
export const fetchTelemetryData = async () => {
  // In a real scenario, this would be:
  // const response = await fetch('http://localhost:8000/api/telemetry');
  // return response.json();
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        soilMoisture: Math.floor(Math.random() * (45 - 15 + 1)) + 15,
        waterTankLevel: Math.floor(Math.random() * (1000 - 800 + 1)) + 800,
        pipelinePressure: Math.floor(Math.random() * (60 - 40 + 1)) + 40,
        flowRate: Math.floor(Math.random() * (120 - 90 + 1)) + 90,
        pipelineIssue: Math.random() > 0.8, // 20% chance of issue
        pumpStatus: Math.random() > 0.5,
        aiReport: "Soil moisture is critically low at 20%. Turning on the automated pump for 45 minutes to restore optimal hydration levels."
      });
    }, 500); // simulate network latency
  });
};
