import { Route, Routes } from 'react-router-dom';
import Homes from './Pages/Homes.jsx';
import './App.css';
import Login from './Pages/Login.jsx';
import Sample from './Pages/Sample.jsx';
import HospitalRegistration from './Pages/HospitalRegistration.jsx';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Homes />} />
      <Route path='/login' element={<Homes register={false}/>} />
      <Route path='/register' element={<Homes register={true} />} />
      <Route path='/sample' element={<Sample/>} />
      <Route path='/hospitalregistration' element={<HospitalRegistration />} />
    </Routes>
  );
}

export default App;

