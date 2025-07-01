import styles from "../styles/styles";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAddTask } from "../redux/thunks/tasksThunks";

function FormItem() {
    const [value, setValue] = useState("");
    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.tasks);
    const handleSubmit = (e, value) => {
        e.preventDefault();
        if (value.trim()) {
            dispatch(fetchAddTask({value}));
            if (status === 'succeeded') {
                setValue("");
            }
        }
    };
    return (
        <form className={styles.form} onSubmit={(e)=>{handleSubmit(e, value)}}>
            <div className="flex-grow">
                <input 
                    type="text" 
                    placeholder="Add a new todo" 
                    className={styles.input}
                    value={value}
                    onChange={e=>{setValue(e.target.value)}} />
            </div>
            <button 
            type="submit" className={styles.addButton}>Add</button>   
        </form>
    )
}

export default FormItem;