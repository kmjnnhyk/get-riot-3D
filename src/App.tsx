import useRiotAPI from './hooks/useRiotAPI';
import MainPage from './pages/index';

function App() {
  console.log(useRiotAPI('흑순이', { refetchOnWindowFocus: false }));

  return <MainPage />;
}

export default App;
