export default function MetricCard({ title, value, unit, icon: Icon, iconColor, bgColor }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-transparent to-gray-50 rounded-full z-0 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="flex items-start justify-between relative z-10">
        <div>
          <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase mb-2">{title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-300">{value}</h3>
            <span className="text-gray-400 text-sm font-semibold">{unit}</span>
          </div>
        </div>
        <div className={`p-4 rounded-2xl ${bgColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
          <Icon className={iconColor} size={28} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
