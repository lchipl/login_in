import React from "react";
import "./userlist.css"

import {User} from "../User/user";

export const UserList = () =>{
    return(
        <div className="UserList">
           <User />
           <User />
           <User />
           <User />
           <User />
        </div>
    );
}