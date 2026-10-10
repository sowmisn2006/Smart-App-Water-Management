import { AlertTriangle } from 'lucide-react';

export default function AlertBanner({ issueDetected }) {
  if (!issueDetected) return null;

  return (
    <div className="w-full bg-red-500 text-white p-4 shadow-md animate-pulse">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <AlertTriangle className="animate-bounce" size={24} />
        <p className="font-bold text-lg tracking-wide drop-shadow-sm">
          ⚠️ Pipeline Issue Detected - Check Water Flow immediately!
        </p>
      </div>
    </div>
  );
}
