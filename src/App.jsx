import { useState } from "react"
import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import { generateWorkout } from "./utls/functions"
import { render } from "react-dom"

function App() {
  const [workout, setWorkout] = useState(null)
  let [poison, setPoison] = useState('individual')
  let [muscles, setMuscles] = useState([])
  let [goal, setGoal] = useState('strength_power')
  let [renderDisplays, setRenderDisplays] = useState(false)

  function updateWorkout() {
    if (muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goal})
    console.log(newWorkout)
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  function showDisplay() {
    setRenderDisplays(!renderDisplays)
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
     {!renderDisplays ? <Hero showDisplay={showDisplay} renderDisplays={renderDisplays}/>: <div></div>}
    {renderDisplays? <Generator 
     poison={poison} 
     setPoison={setPoison}
     muscles={muscles}
     setMuscles={setMuscles}
     goal={goal}
     setGoal={setGoal}
     updateWorkout={updateWorkout}/>: <div></div>}
     {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
