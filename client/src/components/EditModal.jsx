import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeModalEdit } from "../redux/slices/modalSlice";
import { useState } from "react";
import { editTask } from "../redux/slices/tasksSlice";

function EditModal() {
    const dispatch = useAppDispatch();
    const { modalEdit: { isOpen, id } } = useAppSelector(state => state.modal);
    const [currentText, setCurrentText] = useState('');

    const handleClose = () => {
        setCurrentText('');
        dispatch(closeModalEdit());
    };

    const handleSave = () => {
        dispatch(editTask({ id, currentText }));
        setCurrentText('');
        dispatch(closeModalEdit());
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Редагувати завдання</h2>
                    <button className={styles.modalCloseBtn} onClick={handleClose}>✕</button>
                </div>

                <textarea
                    className={styles.modalTextarea}
                    value={currentText}
                    onChange={(e) => setCurrentText(e.target.value)}
                    placeholder="Введіть новий текст завдання..."
                />

                <div className={styles.modalButtons}>
                    <button className={styles.modalCancelBtn} onClick={handleClose}>
                        Скасувати
                    </button>
                    <button
                        className={styles.modalSaveBtn}
                        onClick={handleSave}
                        disabled={!currentText.trim()}
                    >
                        Зберегти
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;