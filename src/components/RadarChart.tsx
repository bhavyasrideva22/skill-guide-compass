import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from 'recharts';

interface RadarChartProps {
  data: Array<{
    subject: string;
    score: number;
    fullMark: number;
  }>;
  className?: string;
}

export const RadarChart = ({ data, className }: RadarChartProps) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsRadarChart data={data}>
          <PolarGrid className="stroke-border" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fontSize: 12, fill: 'hsl(var(--foreground))' }}
          />
          <Radar
            name="Your Score"
            dataKey="score"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Legend />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};