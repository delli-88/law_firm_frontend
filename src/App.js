import NavBar from './components/NavBar/NavBar';
import styles from './App.module.css'
import HeroSection from './components/HeroSection/HeroSection';
import Intro from './components/Intro/Intro';
import Success from './components/Success/Success';
import Practices from './components/Practices/Practices';
import Testimonials from './components/Testimonials/Testimonials';
import Team from './components/Team/Team';
import Faqs from './components/Faqs/Faqs';
import Subscribe from './components/Subscribe/Subscribe';

const App = () => {
  return (
    <div className={styles.container}>
      <NavBar/>
      <HeroSection />
      <Intro />
      <Success />
      <Practices />
      <Testimonials />
      <Team />
      <Faqs />
      <Subscribe />
    </div>
  );
}

export default App;
