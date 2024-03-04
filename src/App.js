import './App.css';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Route, Routes } from 'react-router-dom';

import IndexTwo from './pages/index-two';


function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexTwo/>}/>
    </Routes>
  );
}

export default App;
