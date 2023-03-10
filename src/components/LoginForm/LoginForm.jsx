import TextField from "../TextField/TextField";
import Button from "../Button/Button";

import useForm from "../../shared/hooks/useForm";

import fields from "./fields";
import initialState from "./initialState";

import styles from "./login-form.module.css";

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const {email, password} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField className={styles.formInput} value={email} handleChange={handleChange} {...fields.email} />
            <TextField className={styles.formInput} value={password} handleChange={handleChange} {...fields.password} />
            <Button className={styles.btn}>Login</Button>
        </form>
    )
}

export default LoginForm;