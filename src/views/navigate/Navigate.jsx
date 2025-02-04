import { useEffect, useState } from 'react';
import Button from '../../components/buttons/Button';
import styles from './Navigate.module.css';
import ConsoleEffect from '../../components/consoleEffect/ConsoleEffect';

const Navigate = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={`${styles.main} ${!isVisible ? styles.hidden : ''}`}>
      <ConsoleEffect preText='~$' texts={[ 'Página en construcción','Diego Alejandro', 'Agudelo Rendon']} colors={['white', 'white']}/>
      <div className={styles.buttons}>
        <div className={styles.btn} onClick={() => handleScrollTo('home')}>
          <Button text="Home"/>
        </div>
        <div className={styles.btn} onClick={() => handleScrollTo('about')}>
          <Button text="About Me" />
        </div>
        <div className={styles.btn} onClick={() => handleScrollTo('experience')}>
          <Button text="Experience" />
        </div>
        <div className={styles.btn} onClick={() => handleScrollTo('contact')}>
          <Button text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Navigate;
