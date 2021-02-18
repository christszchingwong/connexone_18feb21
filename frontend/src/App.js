import './App.css';
import TimeBox from './TimeBox';
import MetricBox from './MetricBox';

function App() {
  return (
      <div className="App" style={{
        display: 'flex',
        flex: 1 ,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
      }}>
        <TimeBox />
        <MetricBox />
      </div>
  );
}

export default App;
