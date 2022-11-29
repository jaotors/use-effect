import React, { useState, useEffect } from 'react'
import randomColor from 'randomcolor'

import './App.css'
import UserFilteredList from './components/UserFIlteredList'

const USER_LIST = [
  {
    name: 'Jao'
  },
  {
    name: 'Joseph'
  },
  {
    name: 'Ray'
  },
  {
    name: 'carl'
  },
  {
    name: 'Russell'
  },
  {
    name: 'Marc'
  },
  {
    name: 'Renie'
  },
  {
    name: 'Drix'
  },
  {
    name: 'Del'
  },
  {
    name: 'Juvy'
  }
]

const USER_LIST_WITH_ID = USER_LIST.map((user, idx) => {
  return { ...user, id: idx }
})

function App() {
  const [users, setUsers] = useState(USER_LIST_WITH_ID)

  const handleAddColor = () => {
    setUsers([...users, { name: randomColor(), id: new Date().getTime() }])
  }

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className='App'>
      <div>
        <button onClick={handleAddColor}>Add</button>
      </div>
      <UserFilteredList list={users} onDelete={handleDelete} />
    </div>
  )
}

export default App
