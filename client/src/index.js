import React from 'react'
import ReactDOM from 'react-dom/client'

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