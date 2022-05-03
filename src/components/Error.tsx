import React from 'react'

interface ErrorProps {
    mensaje: string;
}

const Error = ({mensaje}: ErrorProps) => {
  return (
    <div 
        className="bg-red-800  text-white text-center p-3 uppercase font-bold mb-3 rounded">
            <p>{mensaje}</p>
    </div>

  )
}

export default Error