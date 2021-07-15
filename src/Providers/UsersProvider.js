import React, { useState, createContext, useEffect } from 'react';
import axios from "axios"





export const UsersProviders = createContext({
    users: [],
    isLoading: true,
    submitAddNewUser: () => { },
    deleteUser: () => { },
})



const ContextProviders = ({ children }) => {
    const [users, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get('/students')
            .then(({ data }) => {
                setUser(data.students)
            })
            .catch(err => console.log(err));
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])


    const deleteUser = (name) => {
        const newUserList = users.filter((elem) => elem.name !== name);
        setUser(newUserList);
    };




    const submitAddNewUser = (formValues) => {
        const newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        }
        setUser([newUser, ...users]);
    }
    return (
        <UsersProviders.Provider
            value={{
                users,
                submitAddNewUser,
                deleteUser,
                isLoading
            }}
        >
            {children}
        </UsersProviders.Provider>
    )
}

export default ContextProviders