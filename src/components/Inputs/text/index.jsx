import styles from  './styles.module.css'

export default function TextField (props) {
    const { error, mask, onChange, ...restProps } = props;
    return (
        <div>
            <input data-testid="input-text" className={styles.input} type="text" onChange={(e) => {
                if(onChange) onChange(e);
                if(mask) e.target.value = mask(e.target.value)
            }} {...restProps} />
            {!!error && <p data-testid="input-error-message" className={styles.error}>Campo obrigatório</p>}
        </div>
    )
}