import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'




const App = () => {
  const usersData = [
    { id: 1, nome: "Ana", usuario: "Redes"},
    { id: 2, nome: "Evilly", usuario: "Desenvolvimento"},
    { id: 3, nome: "Yasmin", usuario: "Infraestrutura"},
  ]



  const initialFormState = { id: null, nome: '', usuario: ''}
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState (false)



const addUser = (user) => {
  user.id = users.length + 1
  setUsers([...users, user])
}



const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id !== id))
  setEditing(false)
}



const editRow = (user) => {
  setEditing(true)
  setCurrentUser({ id: user.id, nome: user.nome, Usuario: user.usuario})
}


const updateUser = (id, updateUser) => {
  setEditing(false)
  setUsers(users.map((user) => (user.id === id ? updateUser : user)))
}






  return (
    <div className="container">
      <h1>CRUD App - Hooks</h1>
      <h3>Evilly Ferreira</h3>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2> Atualizar Usuário</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
              </div>
          ) : (
            <h2>Adicionar usuário</h2>
          )}
          <h2>Adicionar usuário</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
            <h2>Todos usuários</h2>
            <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
          </div>
        </div>
      </div>

  )
}


export default App