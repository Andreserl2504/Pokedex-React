// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './Styles/index.css'
import { FilterProvider } from './context/Filters.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <FilterProvider>
        <App />
    </FilterProvider>
)
