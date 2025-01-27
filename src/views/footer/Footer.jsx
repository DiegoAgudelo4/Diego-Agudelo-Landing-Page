import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.main} id='contact'>
      <div className={styles.footerBasic}>
        <footer>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/-diego-agudelo/">
              <i className="icon ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/DiegoAgudelo4">
              <i className="icon ion-social-github"></i>
            </a>
          </div>
          <ul className={styles.listInline}>
            <li className="list-inline-item"><a href="#">Home</a></li>
          </ul>
          <p className={styles.copyright}>Diego Alejandro Agudelo Rendon © 2025</p>
        </footer>
      </div>
    </div>
  )
}

export default Footer