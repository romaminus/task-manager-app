import TasksList from "./TasksList";
import GamificationBlock from "./GamificationBlock";
import CalendarBlock from "./CalendarBlock";
import TimerBlock from "./TimerBlock";
import FormItem from "./FormItem";
import styles from "../styles/styles";
import EditModal from "./EditModal";
import ModalAchievements from "./AchievementsModal";
import ModalLeaderboard from "./LeaderboardModal";
import { fetchAllTasks, fetchPoints } from "../redux/thunks/tasksThunks";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";

function RootBlock() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllTasks());
        dispatch(fetchPoints());
    }, [dispatch]);

    return (
        <div className={styles.appBg}>
            <div className={styles.rootBlockContainer}>
                <div className={styles.taskListContainer}>
                    <FormItem />
                    <TasksList />
                </div>
                <div className="space-y-4">
                    <GamificationBlock />
                    <TimerBlock />
                    <CalendarBlock />
                </div>
                <EditModal />
                <ModalAchievements />
                <ModalLeaderboard />
            </div>
        </div>
    )
}

export default RootBlock;