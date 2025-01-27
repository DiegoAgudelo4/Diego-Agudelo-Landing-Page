import TimeLineAcademic from '../../components/timeLines/TimeLineAcademic'
import TimeLine from '../../components/timeLines/TimeLineExperience'
import styles from './Experience.module.css'
const Experience = () => {
  return (
    <div className={styles.main} id='experience'>
      <div>
        <h3>
          Experiencia Laboral
        </h3>
        <TimeLine />

      </div>
      <div>
        <h3>Estudios</h3>
        <TimeLineAcademic />
      </div>
    </div >
  )
}

export default Experience