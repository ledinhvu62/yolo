import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { store } from './redux/store'
import { Provider } from 'react-redux'

import Layout from './components/Layout'

import '../node_modules/swiped-events/dist/swiped-events.min.js'

import './sass/index.scss'
import '../node_modules/boxicons/css/boxicons.min.css'

import '../node_modules/react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    //<React.StrictMode>
        <Provider store={store}>
            <Layout />
        </Provider>
    //</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()