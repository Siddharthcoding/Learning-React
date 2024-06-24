import React from "react";
import UserContext from "./UserContext";

// jo bhi iske paas aa rha h usko as it is pass krdo {children}
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        //passing an object as prop in value
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider