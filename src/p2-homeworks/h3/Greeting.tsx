import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    // name2: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {



    const inputClass = error // need to fix with (?:)



    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   // className={inputClass ? "error" : ""}
                   onKeyDown={onEnter}


            />

            {/*<input value={name2}*/}
            {/*       onChange={setNameCallback}*/}
            {/*       // className={inputClass ? "error" : ""}*/}
            {/*       onKeyDown={onEnter}*/}


            {/*/>*/}

            <span>{error}</span>
            <button onClick={addUser} className="button">ADD</button>
            {/*{error && <div className="error">{error}</div>}*/}

            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
