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
            <ul id="task-list" className="space-y-3">
                {filteredTasks.length !== 0 ? (filteredTasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))) : (<p className={'text-center text-gray-500 p-2'}>No items yet. Add first!</p>)}
            </ul>
            <div className={styles.taskButtonContainer}>
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