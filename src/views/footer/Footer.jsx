import styles from './Footer.module.css'

const Footer = () => {
  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.main} id='hm-contact'>
      <div className={styles.footerBasic}>
        Contáctame via redes sociales
        <footer style={{ marginTop: '20px' }}>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/-diego-agudelo/">
              <i className="icon ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/DiegoAgudelo4">
              <i className="icon ion-social-github"></i>
            </a>
          </div>
          <ul className={styles.listInline}>
            <li className="list-inline-item" onClick={() => handleScrollTo('home')}>Home</li>
          </ul>
          <p className={styles.copyright}>Diego Alejandro Agudelo Rendon © 2025</p>
        </footer>
      </div>
    </div>
  )
}

export default Footer