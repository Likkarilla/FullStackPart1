import React from 'react'

const Course = ({ course }) => {
  const summa = course.parts.reduce((a, v) => a + v.exercises, 0)

  return (
    <div>
      <h2>{course.name}</h2>
      
      {course.parts.map(part => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      
      <p style={{ fontWeight: "bold" }}>Total of {summa} exercises</p>
    </div>
  )
}

export default Course