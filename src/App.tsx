import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, NotFound } from '@/pages';
import ShowCardsPage from './pages/ShowCardsPage/ShowCardsPage';
import ShowResultPage from './pages/ShowResultPage/ShowResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcards" element={<ShowCardsPage />} />
        <Route path="/showcards/result" element={<ShowResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
