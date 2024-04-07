import React from 'react'

const Activity = ({ params }: { params: { id: string } }) => {
  return (
    <div>Activity: #{params.id}</div>
  )
}

export default Activity
