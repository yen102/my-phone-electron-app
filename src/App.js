import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Login from './screens/Login';


function App() {

  return (
    <div className='App'>
      <h1>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
