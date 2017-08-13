import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import appointmentApp from './reducers'
import dataService from './services/dataService'
import App from './components/App.jsx'

// Setup a redux store for storing all app data.
const store = createStore(appointmentApp, {}, applyMiddleware(dataService))

// Render the store provider and top-level app component.
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)

// Dispatch the initial loading of the user and appointment data.
// This is handled by the dataService middleware (see services/dataService).
store.dispatch({type: 'GET_USER_DATA'})
store.dispatch({type: 'GET_APPOINTMENT_DATA'})
