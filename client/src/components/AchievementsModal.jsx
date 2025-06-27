import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeModalAchievements } from "../redux/slices/modalSlice";

function ModalAchievements() {
    const dispatch = useAppDispatch();
    const { modalAchievements: { isOpen } } = useAppSelector(state => state.modal);

    const handleClose = () => {
        dispatch(closeModalAchievements());
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
                        <li>Completed 5 tasks</li>
                        <li>Completed 10 tasks</li>
                        <li>3-day streak</li>
                    </ul>
    
                    <div className={styles.modalButtons}>
                        <button className={styles.modalCancelBtn} onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default ModalAchievements;
