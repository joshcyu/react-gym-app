import React from 'react'
import SectionWrapper from './SectionWrapper'
import Exercise from './Exercise'

export default function Workout(props) {
  const {workout} = props

  return (
    <SectionWrapper id={'workout'} header={"Welcome to"} title={['The', 'Danger', 'zone']}>
      <div>
        {workout.map((exercise, i) => {
          return (
            <Exercise exercise={exercise} i={i} key={i}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
