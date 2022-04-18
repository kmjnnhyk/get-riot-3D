import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, ShowDataPage, NotFound } from '@/pages';
import Searcher from './components/Searcher';

function App() {
	return (
		<BrowserRouter>
			{/* 
        // FIXME: 얘는 Header,Footer 같은건지?? 404(not found)에도 있어야하는게 아니라면, Home 또는 ShowDataPage 컴포넌트 안에 들어가는게 좋을 것 같습니다.
			  <Searcher /> 
      */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="showdata/:summoner" element={<ShowDataPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
