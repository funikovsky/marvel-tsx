import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';

import { Wrapper } from './components/Wrapper';
import { MainPages } from './pages/MainPages';
import { ComicsPages } from './pages/ComicsPage';

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/comics" element={<ComicsPages />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
