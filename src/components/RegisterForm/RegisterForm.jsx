import TextField from "../TextField/TextField";
import Button from "../Button/Button";

import useForm from "../../shared/hooks/useForm";

import fields from "./fields";
import initialState from "./initialState";

import styles from "./register-form.module.css";

const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const {name, email, password} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField className={styles.formInput} value={name} handleChange={handleChange} {...fields.name} />
            <TextField className={styles.formInput} value={email} handleChange={handleChange} {...fields.email} />
            <TextField className={styles.formInput} value={password} handleChange={handleChange} {...fields.password} />
            <Button className={styles.btn}>Register</Button>
        </form>
    )
}

export default RegisterForm;