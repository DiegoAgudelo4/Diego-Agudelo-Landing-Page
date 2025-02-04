import SkillBars from '../../components/skillBars/SkillBar';
import styles from './Habilities.module.css';

const Habilities = () => {
  return (
    <div className={styles.main} id='about'>

      <div className={styles.description}>
        <h3>Descripción personal</h3>
        <hr />
        <p>
          Estudiante de ingeniería informática en últimos semestres con
          una sólida formación académica e interés en el desarrollo de
          software y la gestión de sistemas. Posee habilidades en
          programación, análisis de datos y resolución de problemas.
        </p>
        <p>
          Reconocido por tener una actitud proactiva y se adapta
          rápidamente a entornos cambiantes. No se limita a un solo
          paradigma, siempre busca explorar nuevas perspectivas.
        </p>
        <p>Destacado por ser un colaborador comprometido, siempre
          dispuesto a brindar apoyo a los compañeros con una actitud
          positiva. Además acepta las críticas constructivas como
          oportunidades valiosas para mejorar y crecer profesionalmente.
        </p>
        <h3>
          Información Personal
        </h3>
        <hr />
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
    </div>
  )
}

export default Habilities