import styles from "../styles/styles";
import TaskItem from "./TaskItem";
import { useAppSelector } from "../redux/hooks";

function TasksList() {
    const tasks = useAppSelector(state => state.tasks.data);

    return (
        <div className={styles.taskListContainer}>
            <h2 className={styles.sectionTitle}>TO-DO LIST</h2>
            <ul id="task-list" className="space-y-3">
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>

            <div className="flex space-x-2 mt-4">
                <button className={styles.buttonFilter}>All tags</button>
                <button className={styles.buttonFilter}>Any priority</button>
                <button className={styles.buttonFilter}>Due date</button>
            </div>
        </div>
    )
}

export default TasksList;