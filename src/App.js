import Navabar from "./component/Navabar";
import Dashboard from "./pages/Dashboard";
import './css/App.css';

function App() {
  return (
    <div className="main">
      <Navabar />
      <div className="dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
