import { useState } from 'react'
import './App.css'
import GradeCalculator from './components/GradeCalculator'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Calculateur de Moyennes ISET</h1>
        <p>Système de calcul des moyennes pour les programmes IT 2019-2023</p>
      </header>
      <main>
        <GradeCalculator />
      </main>
    </div>
  )
}

export default App
