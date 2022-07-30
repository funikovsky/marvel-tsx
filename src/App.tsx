import { Header } from './components/Header';

import { Wrapper } from './components/Wrapper';
import { MainPages } from './pages/MainPages';

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <MainPages />
      </Wrapper>
    </>
  );
}

export default App;
