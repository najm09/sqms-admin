import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Login from './features/Login/login'
import Dashboard from './features/Dashboard/dashboard';
import { setUpAxios } from './Services/setUpAxios';
import { store } from './Store/store';

setUpAxios(axios);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <main>
            <Routes>
              <Route path={"/"} element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </main>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
