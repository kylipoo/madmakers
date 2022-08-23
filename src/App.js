import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Story1 from './components/story/story1.component';
import './App.css';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/story1' element={<Story1/>} />
    </Routes>
  )
};

export default App;
