import './App.css';
import { Header,Hero,Cards } from './components';
import Aos from 'aos';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
Aos.init();
  },[]);
  return (
    <>
     <Header />
     <Hero/>
      <Cards/>
    </>
  );
}

export default App;
