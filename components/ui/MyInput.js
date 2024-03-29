import styles from './MyInput.module.css'

const MyInput = ({
    label,
    type = 'text',
    className,
    value,
    placeholder,
    onChangeHandler,
    onBlurHandler,
}) => {
    return (
        <div className={`${styles.ipBox}`}>
            <label htmlFor="uname" className={`${styles.label}`}>{label}:</label>
            <input
                required
                id={label}
                type={type}
                name={label}
                value={value}
                onBlur={onBlurHandler}
                placeholder={placeholder}
                onChange={onChangeHandler}
                className={`form-control ${styles.ip} ${className}`}
            />
        </div>
    )
}

export default MyInput
