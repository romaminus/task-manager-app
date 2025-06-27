import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { openModalAchievements, openModalLeaderboard } from "../redux/slices/modalSlice";

function GamificationBlock() {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(state => state.tasks.data);
    // temporary solution for points calculation
    const totalPoints = tasks.filter(task => task.completed).length * 50;
    
    return (
        <div className={styles.card}>
            <p className={styles.sectionTitle}>Gamification</p>
            <p className={styles.largeNumber}>
                <span className="text-yellow-500">&#11088;</span>
                {totalPoints}
            </p>
            <button 
                className={styles.buttonPrimary}
                onClick={() => dispatch(openModalAchievements())}
            >Achievements</button>
            <button 
                className={styles.buttonPrimary}
                onClick={() => dispatch(openModalLeaderboard())}
            >Leaderboard</button>
        </div>
    )
}

export default GamificationBlock;