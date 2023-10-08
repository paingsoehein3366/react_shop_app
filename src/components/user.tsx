import React from "react";
import "../App.css";

interface User {
    name: string;
    email: string;
    age: number;
}
interface Prop {
    user: User;
}

const User = ({user}:Prop) => {
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}
export default User;