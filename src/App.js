import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import MadLibsList from './components/madlibs-list/madlibs-list.component';
import JokesList from './components/jokes-list/jokes-list.component';
import './App.css';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/madlibs' element={<MadLibsList/>} />
      <Route path='/jokes' element={<JokesList/>} />

    </Routes>
  )
};

export default App;
