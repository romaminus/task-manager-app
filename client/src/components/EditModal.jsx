import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeModal } from "../redux/slices/modalSlice";
import { useState } from "react";
import { editTask } from "../redux/slices/tasksSlice";

function EditModal() {
  const dispatch = useAppDispatch();
  const { isOpen, id } = useAppSelector(state => state.modal);
  const [currentText, setCurrentText] = useState('');

  const handleClose = () => {
    setCurrentText('');
    dispatch(closeModal())
  }
  const handleSave = () => {
    dispatch(editTask({ id, currentText }));
    setCurrentText('');
    dispatch(closeModal());
  }
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Редагувати завдання</h2>
              <button onClick={handleClose} className={styles.modalCloseBtn}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <textarea
              className={styles.modalTextarea}
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              placeholder="Введіть новий текст завдання..."
            />

            <div className={styles.modalButtons}>
              <button onClick={handleClose} className={styles.modalCancelBtn}>
                Скасувати
              </button>
              <button
                onClick={handleSave}
                className={styles.modalSaveBtn}
                disabled={!currentText.trim()}
              >
                Зберегти
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
