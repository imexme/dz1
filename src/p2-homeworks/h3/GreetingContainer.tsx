import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import './Greeting.module.css'


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    // users2: Array<UserType2> // need to fix any
    addUserCallback: (name:string, name2:string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики


//zamykanie ? kak?
// contejnernajka logika?

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [name2, setName2] = useState<string>('') // need to fix any
    // const [name2, setName2] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = e.currentTarget.value.trim() // need to fix


        if (trimmedName) {
            setName(trimmedName)
            // setName2(trimmedName)
            setError('')
        } else {
            setName('')
            // setName2('')
            setError('Name is require')
        }

    }


    const addUser = () => {
    addUserCallback(name, name2)
        alert(`Hello ${name} !`) //need to fix
    }


    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    // const onEnter2 = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter' && name2) {
    //         addUser()
    //         setName2('')
    //     }
    // }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            // name2={name2}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
            // onEnter2={onEnter2}
        />
    )
}

export default GreetingContainer
