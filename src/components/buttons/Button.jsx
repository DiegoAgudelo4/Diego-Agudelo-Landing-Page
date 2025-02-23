import { formLabelClasses } from '@mui/material';
import styles from './Button.module.css'
import PropTypes from 'prop-types';

const Button = ({ text, active = false }) => {
    return (
        <div className={`${styles.buttonBorders} `}>
            <button className={`${styles.primaryButton} ${active ? styles.active: "" } `}>
                {text}
            </button>
        </div>
    )
}
Button.prototype={
    text: PropTypes.string.isRequired
}

export default Button