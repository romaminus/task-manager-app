import styles from "../styles/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { startTimer, pauseTimer, resumeTimer, stopTimer, setTimeLeft, completePomodoro } from "../redux/slices/pomodoroTimerSlice";

function TimerBlock() {
    const dispatch = useAppDispatch();
    const { isRunning, isPaused, timeLeft, pomodoroCount } = useAppSelector(state => state.pomodoroTimer);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                dispatch(setTimeLeft(timeLeft - 1));
            }, 1000);
        }

        if (timeLeft <= 0 && isRunning) {
            clearInterval(interval);
            dispatch(completePomodoro());
            alert("Pomodoro completed! Time for a break.");
        }

        return () => clearInterval(interval);
    }, [isRunning, timeLeft, dispatch]);

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    };

    const handleStart = () => {
        dispatch(startTimer());
    };

    const handlePause = () => {
        dispatch(pauseTimer());
    };

    const handleResume = () => {
        dispatch(resumeTimer());
    };

    const handleReset = () => {
        dispatch(stopTimer());
    };

    return (
        <div className={styles.card}>
            <p className={styles.sectionTitle}>Pomodoro Timer</p>
            <div className={styles.largeNumber}>{formatTime(timeLeft)}</div>

            <div className={styles.timerButtons}>
                {!isRunning && !isPaused && (
                    <button className={styles.pomodoroButton} onClick={handleStart}>Start</button>
                )}
                {isRunning && (
                    <button className={styles.pomodoroButton} onClick={handlePause}>Pause</button>
                )}
                {isPaused && (
                    <button className={styles.pomodoroButton} onClick={handleResume}>Resume</button>
                )}
                <button className={styles.pomodoroButton} onClick={handleReset}>Reset</button>
            </div>

            <p className="mt-2 text-sm text-gray-600">Completed Pomodoros: {pomodoroCount}</p>
        </div>
    );
}

export default TimerBlock;