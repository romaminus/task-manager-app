import styles from "../styles/styles";

function CalendarBlock() {
    return (
        <div className={styles.card}>
            <p className={styles.sectionTitle}>Calendar Integration</p>
            <button className={styles.buttonPrimaryCalendar}>
                <img 
                    src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_24_2x.png" 
                    alt="" 
                    className="w-5 h-5"
                />
                <span>Sync with Google Calendar</span>
            </button>
        </div>
    )
}

export default CalendarBlock;