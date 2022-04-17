import { Route, Routes } from 'react-router-dom';
import { Home, ShowDataPage } from '@/pages';
import Searcher from './components/Searcher';

function App() {
  return (
    <>
      <Searcher />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='showdata/:summoner' element={<ShowDataPage />} />
      </Routes>
    </>
  );
}

export default App;
