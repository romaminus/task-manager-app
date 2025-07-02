import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeModalEdit } from "../redux/slices/modalSlice";
import { useState } from "react";
import { fetchUpdateTask } from "../redux/thunks/tasksThunks";

function EditModal() {
    const dispatch = useAppDispatch();
    const { modalEdit: { isOpen, id } } = useAppSelector(state => state.modal);
    const [currentText, setCurrentText] = useState('');

    const handleClose = () => {
        setCurrentText('');
        dispatch(closeModalEdit());
    };

    const handleSave = () => {
        dispatch(fetchUpdateTask({ id, title: currentText }));
        setCurrentText('');
        dispatch(closeModalEdit());
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Edit Task</h2>
                    <button className={styles.modalCloseBtn} onClick={handleClose}>✕</button>
                </div>

                <textarea
                    className={styles.modalTextarea}
                    value={currentText}
                    onChange={(e) => setCurrentText(e.target.value)}
                    placeholder="Enter new task text..."
                />

                <div className={styles.modalButtons}>
                    <button className={styles.modalCancelBtn} onClick={handleClose}>
                        Cancel 
                    </button>
                    <button
                        className={styles.addButton}
                        onClick={handleSave}
                        disabled={!currentText.trim()}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;