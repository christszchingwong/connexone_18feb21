import './App.css';
import TimeBox from './TimeBox';

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
      </div>
  );
}

export default App;
