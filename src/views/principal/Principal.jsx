import styles from './Principal.module.css';

const Principal = () => {
  return (
    <>
      <div className={styles.main} id='home'>
        <section className={styles.header} >
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              <span data-text="Ingeniero">Ingeniero</span>
              <span data-text="Informático">Informático</span>
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