import React from "react";
import "./user.css";

export const User = () =>{
    return(
        <ul className="User">
          <li style={{marginLeft:'12px',width:"110px"}}>MR12313</li>
          <li style={{marginLeft:'68px',width:"430px"}}>Иван Фёдорович Крузенштерн</li>
          <li style={{width:"210px"}}>адмирал</li>
          <li style={{width:"210px"}}>пользователь</li>
          <li style={{width:"110px"}}>Можно</li>
        </ul>
    );
}