import React from 'react'
import { Route, Switch, BrowserRouter} from 'react-router-dom'
import '../src/api/config/config.js'
import 'typeface-saira'
import './App.css'
import { Button, Input } from './components/atoms'

function App() {
  return (
    <div className="App">
             <Button >
               Oiiii
             </Button>
             <Input textLabel='General' />
    </div>
  )
}

export default App
