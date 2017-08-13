import { combineReducers } from 'redux'
import appointments from './appointments'
import user from './user'

// Combine the user and appointments reducers for use by the app's data store.
const appointmentApp = combineReducers({
    user,
    appointments
})

export default appointmentApp
