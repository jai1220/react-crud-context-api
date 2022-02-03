import React from "react";
import user from "../images/user.png"

const ContactCard = (props) => {

    const {id, name, email} = props.keyContact;

    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i 
                style={{color:"red"}} 
                className="trash alternate outline icon"
                onClick = { () => props.clickHandler(id)  } >
                
            </i>
        </div>
    );
};

export default ContactCard;
