import { useTime } from './useTime';
import './App.css';

function App() {
  const day = useTime<string>('day');
  const hour = useTime<string>('hour');

  return (
    <div className="container">
      <h1>Custom Hook Exercise</h1>
      <div className="time-display">
        <div className="time-card">
          <h2>Day</h2>
          <p className="time-value">{day}</p>
        </div>
        <div className="time-card">
          <h2>Hour</h2>
          <p className="time-value">{hour}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
