import styles from './Button.module.css'
import PropTypes from 'prop-types';

const Button = ({ text }) => {
    return (
        <div className={styles.buttonBorders}>
            <button className={styles.primaryButton}>
                {text}
            </button>
        </div>
    )
}
Button.prototype={
    text: PropTypes.string.isRequired
}

export default Button