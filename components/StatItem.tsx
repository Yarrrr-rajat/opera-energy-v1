interface StatItemProps {
    title: string;
    description: string;
    percentage: number; // 0 to 100
    color: string;
  }
  
  const StatItem: React.FC<StatItemProps> = ({ title, description, percentage, color }) => {
    const radius = 15.9155;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeDasharray={circumference.toFixed(3)}
              strokeDashoffset={offset.toFixed(3)}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
            {percentage}%
          </span>
        </div>
        <div>
          <h4 className="font-semibold md:text-lg text-base">{title}</h4>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
  export default StatItem;
  