import React, { useEffect, useState } from 'react'

const UserFilteredList = ({ list = [], onDelete }) => {
  const [userList, setUserList] = useState(list)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (searchQuery === '') {
      setUserList(list)
    } else {
      setUserList(
        list.filter((u) => u.name.toLowerCase().includes(searchQuery))
      )
    }
  }, [list, searchQuery])

  return (
    <div>
      <div>
        <label>Search:</label>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul>
        {userList.map((user) => (
          <li>
            {user.id}-{user.name}
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserFilteredList
