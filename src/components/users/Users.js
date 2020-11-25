import React from 'react'
import react, { useEffect, useState } from 'react';
import {useHistory, useParams}  from 'react-router-dom';
import axios from 'axios';

const User = () => {

    const [user, setUsers] = useState({
        name: "",
        username: "",
        email: "",
        
        phone: "",
        website: "",
        
    });

    const {id} = useParams();
    useEffect(()=>{
        loadUser();
    })

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setUsers(res.data);
        
    }


    return(
        <>
        <div className="container my-5">


    <h1>{user.id}</h1>
         
        Name:<p>{user.name}</p> <br/>
        UserName:<p>{user.username}</p> <br/>
        Email:<p>{user.email}</p>    <br/>
        
        Phone:<p>{user.phone}</p>    <br/>
        Website:<p>{user.website}</p>  <br/>
        
        </div>
        </>
    )
};

export default User;

