import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './screens/Welcome';
import DisplayQR from './screens/DisplayQR';
import AppHeader from './components/AppHeader';
import TaskBar from './components/TaskBar';
import './styles/App.scss';

function App() {
  const connect = () => {
    
  }
  return (
    <div className='App'>
      <BrowserRouter>
      <div className='main'>
        <AppHeader/>
      
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/qr" element={<DisplayQR/>}/>
            {/* <Route path="/home" element={}/> */}
          </Routes>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
