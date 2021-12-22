import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// export type UserType2 = {
//     _id2: string // need to fix any
//     name2: string // need to fix any
// }



// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any
    // const [users2, setUsers2] = useState<Array<UserType2>>([]) // need to fix any

    const addUserCallback = (name: string,
                             // name2: string
    ) => {
        const user ={
            _id: v1(),
            // _id2: v1(),
            name,
            // name2
        }
        // need to fix any
        setUsers([...users, user]) // need to fix
        // setUsers2([...users2, user]) // need to fix
    }

    return (
        <div>            <hr/>
            <div> homeworks </div>
            <hr/>

            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                // users2={users2}
                addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
