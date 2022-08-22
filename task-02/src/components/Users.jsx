import React from 'react'

const Users = () => {
    
    const usersDisplay = [
        {name:'Muhammad', id: 1},
        {name: 'Sarfaraz', id: 2},
        {name: 'Ali', id:3},
        {name: 'Jaffery', id:4}
    ]

    return (
    <div>
        {usersDisplay.map(user => {
            return (
                <div key={user.id}>My name is {user.name} and my id is {user.id}</div>
            )
        })}
    </div>
  )
}

export default Users