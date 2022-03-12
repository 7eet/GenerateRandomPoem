import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  const [repos, setRepos] = useState({isLoading: true, data: []});

  const url = 'https://poetrydb.org/random';
  // const url = "https://www.poemist.com/api/v1/randompoems";

  useEffect(()=>{
    reload();
  }, []);


  const reload = () => {
    setRepos({isLoading: true, data: []});
    fetch(url).then(response => response.json()).then(data => setRepos({isLoading: false, data: data}));
  }

  return (
    <div>
      <Header />
      <Home dataPassing={repos} reload={reload} />
      <Footer />
    </div>
  );
}

export default App;
