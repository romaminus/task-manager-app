import styles from "../styles/styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

function CalendarBlock() {
    const [date, setDate] = useState(new Date());

    return (
        <div className={styles.card}>
            <p className={styles.sectionTitle}>Calendar</p>
            <Calendar 
                value={date} 
                onChange={setDate} 
                className="w-full mb-2 rounded-xl"
            />
        </div>
    )
}

export default CalendarBlock;