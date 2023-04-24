import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm';
import Dashboard from "./Components/Dashboard";
import Graph from "./Components/Analytics/Patients/graph"
import DiseasesGraph from "./Components/Analytics/Diseases/graph"
import AreaChart from './Components/Analytics/Area/graph'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path={"/"} element={<LoginForm />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/analysis' element={<Graph/>} />
            <Route path='/diseases' element={<DiseasesGraph/>} />
            <Route path='/area' element={<AreaChart/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
