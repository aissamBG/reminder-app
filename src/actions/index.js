import { ADD_REMINDER, CLEAR_REMINDERS, REMOVE_REMINDER } from '../types'

export const Add_reminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    return action;
}
export const Remove_reminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id
    }
    console.log('action', action)
    return action
}
export const Clear_reminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    }
    return action
}