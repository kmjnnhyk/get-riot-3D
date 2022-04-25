import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, ShowDataPage, NotFound } from '@/pages';
import Searcher from '@components/Searcher';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Searcher가 보이는 페이지 */}
        <Route element={<Searcher />}>
          <Route path="/" element={<Home />} />
          <Route path="/showdata/:summoner" element={<ShowDataPage />} />
        </Route>

        {/* Searcher가 보이는 않는 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
