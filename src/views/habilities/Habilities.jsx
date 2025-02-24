import { Box } from '@mui/material';
import SkillBars from '../../components/skillBars/SkillBar';
import styles from './Habilities.module.css';
import Title from '../../components/texts/Title';

const Habilities = () => {
  return (
    <div className={styles.main} id='hm-about'>
      <Box
        className={`nav-top-padding`}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }
        }}>
        <div className={styles.description}>
          <Title text={'Descripción personal'} variant='h5' />
          {/* <hr /> */}
          <p>
            Ingeniero Informático en último semestre con una sólida formación académica e interés en el desarrollo de software y la gestión de sistemas. Posee habilidades y experiencia en las diferentes áreas del desarrollo de software, ingeniería de software, análisis de datos y resolución de problemas.
          </p>

          <p>
            Reconocido por tener una actitud proactiva y se adapta rápidamente a entornos cambiantes. No se limita a un solo paradigma, siempre busca explorar nuevas perspectivas.
          </p>
          <p>
            Destacado por ser un colaborador comprometido, siempre dispuesto a brindar apoyo a los compañeros con una actitud positiva. Además acepta las críticas constructivas como oportunidades valiosas para mejorar y crecer profesionalmente.
          </p>
          <Title text={'Información personal'} variant='h5' />
          <p>
            <strong>Fecha de Nacimiento: </strong> 4 de Marzo de 2002
          </p>
          <p>
            <strong>Residencia:</strong> Medellín, Colombia
          </p>
          <p>
            <strong>Forma de trabajo:</strong> Mixta o Presencial
          </p>
        </div>
        <div className={styles.Habilities}>
          <SkillBars />
        </div>
      </Box>
    </div>
  )
}

export default Habilities