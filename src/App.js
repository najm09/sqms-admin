import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Login from './features/Login/login'
import Dashboard from './features/Dashboard/dashboard';
import ErrorPage from './Components/Error';
import { setUpAxios } from './Services/setUpAxios';
import { store } from './Store/store';

setUpAxios(axios);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <main>
            <Routes>
              <Route path={"/"} element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/error' element={<ErrorPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
