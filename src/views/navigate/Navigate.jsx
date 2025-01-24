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


  return (
    <div className={`${styles.main} ${!isVisible ? styles.hidden : ''}`}>
      <ConsoleEffect preText='~$' texts={['Diego Alejandro', 'Agudelo Rendon', 'Ingeniero Informático']} colors={['white', 'white']}/>
      <div className={styles.buttons}>
        <div className={styles.btn}>
          <Button text="Home" />
        </div>
        <div className={styles.btn}>
          <Button text="Experience" />
        </div>
        <div className={styles.btn}>
          <Button text="About Me" />
        </div>
        <div className={styles.btn}>
          <Button text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Navigate;
