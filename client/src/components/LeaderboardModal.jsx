import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeModalLeaderboard } from "../redux/slices/modalSlice";

function ModalLeaderboard() {
    const dispatch = useAppDispatch();
    const { modalLeaderboard: { isOpen } } = useAppSelector(state => state.modal);
    let { leaderboard } = useAppSelector(state => state.gamification);
    const handleClose = () => {
        dispatch(closeModalLeaderboard());
    }
    
    return (
        <>
            {isOpen && (
                <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h2 className={styles.modalTitle}>Leaderboard</h2>
                        <button className={styles.modalCloseBtn} onClick={handleClose}>✕</button>
                    </div>
    
                    <ol className="list-decimal pl-5 space-y-1">
                        {leaderboard.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
    
                    <div className={styles.modalButtons}>
                        <button className={styles.addButton} onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default ModalLeaderboard;