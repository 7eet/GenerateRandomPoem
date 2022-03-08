import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(()=>{
    const url = 'https://poetrydb.org/random';
    fetch(url).then(response => response.json()).then(data => setRepos(data));
  }, [])

  return (
    <div>
      <Header />
      <Home dataPassing={repos} />
      <Footer />
    </div>
  );
}

export default App;
