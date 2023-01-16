// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm';
import Details from './Components/Details';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path={"/"} element={<LoginForm />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </main>
      </BrowserRouter>


    </div>
  );
}

export default App;
