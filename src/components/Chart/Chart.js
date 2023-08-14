import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart({ annualData }) {
  const annualMax = Math.max(...annualData.map((month) => month.value));

  return (
    <div className='chart'>
      {annualData.map((month) => (
        <ChartBar
          key={month.label}
          value={month.value}
          maxValue={annualMax}
          label={month.label}
        />
      ))}
    </div>
  );
}
