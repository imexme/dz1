import React from 'react'
import HW1 from "./HW1";
import './Message.css'

function Message(props: any) {



    return (

        <div className={"message"}>

            <div style={{
                backgroundImage: `url(${props.avatar})`,
                height: "50px",
                width: "50px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: 25,
                position:"absolute",
                marginTop: "5px",
                marginLeft: "7px"
            }}>   </div>

            <div className={"messagecont"}>
                <h3 className={"name"}>{props.name} </h3>
                 <span className={"singlemessage"}>{props.message} </span>
                 <span className={"time"}>{props.time} </span>
                        {/*{messageData}*/}
            </div>
        </div>

    )
}

export default Message
