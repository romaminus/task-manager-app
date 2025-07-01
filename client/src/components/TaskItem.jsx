import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";
import { openModalEdit } from "../redux/slices/modalSlice";
import { fetchDeleteTask, fetchUpdateTask } from "../redux/thunks/tasksThunks";

function TaskItem({ task }) {
    const { id, title, completed, tag } = task;
    const dispatch = useAppDispatch();
    const tags = useAppSelector(state => state.tasks.tag);

    const [isTagListOpen, setIsTagListOpen] = useState(false);

    const handleToggle = () => {
        dispatch(fetchUpdateTask({ id, completed: !completed }));
    };

    const handleChangeTagColor = (newTag) => {
        switch (newTag) {
            case 'work':
                return styles.tagWork;
            case 'personal':
                return styles.tagPersonal;
            case 'other':
                return styles.tagOther;
            default:
                return styles.noTag;
        }
    };

    const handleTagChange = (newTag) => {
        dispatch(fetchUpdateTask({ id, tag: newTag }));
        setIsTagListOpen(false);
        handleChangeTagColor(newTag);
    };
    const handleDeleteTask = () => {
        dispatch(fetchDeleteTask(id));
    };


    return (
        <li 
            className={styles.taskItem} 
            key={id}
            style={{ backgroundColor: handleChangeTagColor(tag) }}
        >
            <div className={styles.taskItemContent}>
                
                <input 
                    type="checkbox" 
                    className={styles.checkbox}
                    checked={completed}
                    onChange={handleToggle}
                />

                <span className={completed ? styles.checkboxChecked : "font-medium"}>
                    {title}
                </span>

                <div className="relative">
                    <span 
                        className={`${styles.tag} ${handleChangeTagColor(tag)} cursor-pointer`}
                        onClick={() => setIsTagListOpen(!isTagListOpen)}
                    >
                        {tag}
                    </span>

                    {isTagListOpen && (
                        <ul className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-lg z-10">
                            {tags.map((t) => (
                                <li 
                                    key={t}
                                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleTagChange(t)}
                                >
                                    {t}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className={styles.taskItemContent}>
                <button 
                    className={styles.modalCloseBtn}
                    onClick={() => dispatch(openModalEdit(id))}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5h2m2.121 2.121l2.122 2.122M12 20h9M16.243 3.757a2 2 0 112.828 2.828L8.828 17.828a4 4 0 01-1.414.828l-4 1 1-4a4 4 0 01.828-1.414l10-10z" />
                    </svg>
                </button>
                <button 
                    className={styles.modalCloseBtn}
                    onClick={handleDeleteTask}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m4-3h2a1 1 0 011 1v1H8V5a1 1 0 011-1h2z" />
                    </svg>
                </button>
            </div>
        </li>
    );
}

export default TaskItem;