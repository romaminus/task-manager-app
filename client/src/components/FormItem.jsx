import styles from "../styles/styles";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addTask } from "../redux/slices/tasksSlice";

function FormItem() {
    const [value, setValue] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (e, value) => {
        e.preventDefault();
        if (value.trim()) {
            dispatch(addTask(value));
            setValue("");
            // localStorage.clear()
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