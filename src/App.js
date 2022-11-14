import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import MadLibsList from './components/madlibs-list/madlibs-list.component';
import Quiz from './components/quiz/quiz.component';
import './App.css';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/madlibs' element={<MadLibsList/>} />
      <Route path='/quiz' element={<Quiz/>} />
    </Routes>
  )
};

export default App;
