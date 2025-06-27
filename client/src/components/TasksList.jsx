import styles from "../styles/styles";
import TaskItem from "./TaskItem";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

function TasksList() {
    const {data: tasks, tag: [work, personal, other]} = useAppSelector(state => state.tasks);
    const [activeTag, setActiveTag] = useState(null);

    const filteredTasks = activeTag ? tasks.filter(task => task.tag === activeTag) : tasks;

    return (
        <div className={styles.taskListContainer}>
            {/* <h2 className={styles.sectionTitle}>TO-DO LIST</h2> */}
            
            <ul id="task-list" className="space-y-3">
                {filteredTasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
            <div className="flex justify-around mb-2 space-x-2 mt-4">
                <button 
                className={`${styles.buttonFilter} ${activeTag === null ? styles.active : ''}`}
                onClick={() => setActiveTag(null)}>All tags</button>
                <button 
                className={`${styles.buttonFilter} ${activeTag === 'work' ? styles.active : ''}`}
                onClick={() => setActiveTag('work')}>{work}</button>
                <button 
                className={`${styles.buttonFilter} ${activeTag === 'personal' ? styles.active : ''}`}
                onClick={() => setActiveTag('personal')}>{personal}</button>
                <button 
                className={`${styles.buttonFilter} ${activeTag === 'other' ? styles.active : ''}`}
                onClick={() => setActiveTag('other')}>{other}</button>
            </div>
        </div>
    )
}

export default TasksList;