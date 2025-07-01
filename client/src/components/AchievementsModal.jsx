import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeModalAchievements } from "../redux/slices/modalSlice";

function ModalAchievements() {
    const dispatch = useAppDispatch();
    const { modalAchievements: { isOpen } } = useAppSelector(state => state.modal);
    const { achievements, points } = useAppSelector(state => state.gamification);
    const handleClose = () => {
        dispatch(closeModalAchievements());
    }
    const calculateDoneTasks = (achievement) => {
        const doneTasks = points / 50;
        switch(achievement){
            case 'Completed 5 tasks':
                return doneTasks >= 5 ? ' - Done✅' : ' - In progress❌';
            case 'Completed 10 tasks':
                return doneTasks >= 10 ? ' - Done✅' : ' - In progress❌';
            case 'Completed 15 tasks':
                return doneTasks >= 15 ? ' - Done✅' : ' - In progress❌';
            default:
                return ' - In progress❌';
        }
    }
    return (
        <>
            {isOpen && (
                <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h2 className={styles.modalTitle}>Achievements</h2>
                        <button className={styles.modalCloseBtn} onClick={handleClose}>✕</button>
                    </div>
    
                    <ul className="list-disc pl-5 space-y-2">
                        {achievements.map((achievement, index) => (
                            <li key={index}>{achievement} {calculateDoneTasks(achievement)}</li>
                        ))}
                    </ul>
    
                    <div className={styles.modalButtons}>
                        <button className={styles.addButton} onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default ModalAchievements;
