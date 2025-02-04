import TimeLineAcademic from '../../components/timeLines/TimeLineAcademic'
import TimeLine from '../../components/timeLines/TimeLineExperience'
import styles from './Experience.module.css'
const Experience = () => {
  return (
    <div className={styles.main} id='experience'>
      <div className={styles.experience}>
        <h3>
          Experiencia Laboral
        </h3>
        <hr />
        <TimeLine />
      </div>
      <div className={styles.academic}>
        <h3>Estudios</h3>
        <hr />
        <TimeLineAcademic />
      </div>
    </div>
  )
}

export default Experience