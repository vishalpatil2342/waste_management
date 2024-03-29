import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { ModalsProvider } from '@mantine/modals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider theme={{ primaryColor: 'green' }}>
    <ModalsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ModalsProvider>
  </MantineProvider>,
)
