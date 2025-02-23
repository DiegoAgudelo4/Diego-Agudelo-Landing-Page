import { Box } from '@mui/material'
import TimeLineAcademic from '../../components/timeLines/TimeLineAcademic'
import TimeLine from '../../components/timeLines/TimeLineExperience'
import styles from './Experience.module.css'
import Title from '../../components/texts/Title'
const Experience = () => {
  return (
    <Box id='hm-experience'
      className={`nav-top-padding`}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }
      }}

    >
      <div className={styles.experience}>
        <Title text={"Experiencia Laboral"} variant='h5'/>
        <TimeLine />
      </div>
      <div className={styles.academic}>
      <Title text={"Estudios"} variant='h5'/>
        <TimeLineAcademic />
      </div>
    </Box>
  )
}

export default Experience