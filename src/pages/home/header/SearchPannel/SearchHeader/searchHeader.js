import React from 'react';
import  './searchHeader.css';
export  const SearchHeader = () =>{
    return(
        <ul className='searcHeader'>
            <li style={{marginLeft:'12px',width:"110px"}}>ID</li>
            <li style={{marginLeft:'68px',width:"430px"}}>ФИО</li>
            <li style={{width:"210px"}}>Должность</li>
            <li style={{width:"210px"}}>Права</li>
            <li style={{width:"110px"}}>Редактировать</li>
        </ul>
    )
}
