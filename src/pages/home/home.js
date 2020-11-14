import React from "react";
 
import {Header} from "./header/header";
import {UserList} from "./section/UsersList/userlist";
export const Home = () =>{
    return(
        <div >
           <Header />
           <UserList />
        </div>
    );
}