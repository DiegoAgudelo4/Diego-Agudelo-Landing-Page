import styles from './Principal.module.css';

const texts= ["Ingeniero", "Informático"]
const Principal = () => {
  return (
    <>
      <div className={styles.main} id='hm-home'>
        <section className={styles.header} >
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              {texts.map((text, index) =>(
                <span key={`${text}-${index}`} data-text={`${text}`}>{text}</span>
              ))}
            </h1>
            <span className={styles.topTitle}>Software</span>
            <span className={styles.bottomTitle}>Developer</span>
          </div>
        </section>
      </div>
    </>
  )
}

export default Principal