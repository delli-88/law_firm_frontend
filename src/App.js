import NavBar from './components/NavBar/NavBar';
import styles from './App.module.css'
import HeroSection from './components/HeroSection/HeroSection';

const App = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
      <HeroSection />
    </div>
  );
}

export default App;
