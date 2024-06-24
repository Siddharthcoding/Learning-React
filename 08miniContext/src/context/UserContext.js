import React from "react";

// every context gives a provider
const UserContext = React.createContext()

export default UserContext;


// now it is a provider, every component in it can access states from global UserContext
// Context is like a global variable
{/* <UserContext>
<Login />
<Card>
    <Data />
</Card>
</UserContext> */}