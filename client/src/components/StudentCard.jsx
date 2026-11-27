import React from 'react'

const StudentCard = (props) => {
  return (
    <div>
      <h2 className="text-lg font-bold">
        {props.Name}
      </h2>
      <p className="mt-2 text-3xl text-green-700">
        {props.Roll}
      </p>

    </div>
  )
}

export default StudentCard