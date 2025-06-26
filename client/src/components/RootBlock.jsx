import TasksList from "./TasksList";
import GamificationBlock from "./GamificationBlock";
import CalendarBlock from "./CalendarBlock";
import TimerBlock from "./TimerBlock";
import FormItem from "./FormItem";
import styles from "../styles/styles";
import EditModal from "./EditModal";

function RootBlock() {
    return (
        <div className="bg-[#B9D0AA] p-6 min-h-screen flex justify-center items-center">
            <div className={styles.rootBlockContainer}>
                <div className={styles.taskListContainer}>
                    <FormItem />
                    <TasksList />
                </div>
                <div className="space-y-4">
                    <GamificationBlock />
                    <CalendarBlock />
                    <TimerBlock />
                </div>
                <EditModal />
            </div>
        </div>
    )
}

export default RootBlock;