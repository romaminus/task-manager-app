import styles from "../styles/styles";

function GamificationBlock() {
    return (
        <div className={styles.card}>
            <p className={styles.sectionTitle}>Gamification</p>
            <p className={styles.largeNumber}>
                <span className="text-yellow-500">&#11088;</span>
                2350
            </p>
            <button 
                className={styles.buttonPrimary}
                onClick={() => {
                    localStorage.clear();
                }}
            >Achievements</button>
            <button 
                className={styles.buttonPrimary}
                // onClick={handleLeaderboard}
            >Leaderboard</button>
        </div>
    )
}

export default GamificationBlock;