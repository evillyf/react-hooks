import React, { useEffect, useState} from 'react'


const EditUserForm  = (props) => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])


    return (
        <form onSubmit={event => {
            event.preventDefault()
            props.updateUser(user.id, user)
        }}>
            <label>Nome</label>
            <input type="text" name="name" value={user.nome} onChange={handleInputChange} />
            <label>Usuário</label>
            <input type="text" name="username" value={user.usuario} onChange={handleInputChange} />
            <button>Atualizar usuário</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancelar
            </button>
        </form>
    )

}

export default EditUserForm