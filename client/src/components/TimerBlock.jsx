import styles from "../styles/styles";

function TimerBlock() {
    return (
        <div className={styles.card}>
            <p className={styles.sectionTitle}>Pomodoro Timer</p>
            <div className={styles.largeNumber}>25:00</div>
            <button className={styles.pomodoroButton}>Start</button>
        </div>
    )
}

export default TimerBlock;