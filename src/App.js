import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm';
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path={"/"} element={<LoginForm />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
