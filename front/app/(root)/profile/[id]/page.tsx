import React from 'react'

const ProfilePage = ({ params }: {params: {id: string}}) => {
  return (
    <div>ProfilePage: {params.id}</div>
  )
}

export default ProfilePage
