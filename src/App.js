import './App.css';
import TopBar from './TopBar'
import StoreListing from './StoreListing';
import Background from './Background';
function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;
