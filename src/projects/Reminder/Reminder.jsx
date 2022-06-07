import { useState } from 'react'
import { data } from './data'
import { ReminderStyled, ReminderSection } from './Reminder.styled'
import List from './List'

function Reminder() {
    const [people, setPeople] = useState(data)

    return (
        <>
            <ReminderStyled>
                <ReminderSection>
                    <h3>{people.length} birthdays today</h3>
                    <List people={people} />
                    <button onClick={() => setPeople([])}>Clear All</button>
                </ReminderSection>
            </ReminderStyled>
        </>
    )
}

export default Reminder
