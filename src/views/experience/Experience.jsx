import { Box } from '@mui/material'
import TimeLineAcademic from '../../components/timeLines/TimeLineAcademic'
import TimeLine from '../../components/timeLines/TimeLineExperience'
import styles from './Experience.module.css'
const Experience = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: {xs: 'column', md:'row' }
    }}
    id='experience'
    >
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
    </Box>
  )
}

export default Experience