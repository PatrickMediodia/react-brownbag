import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export default function ViewProfile() {
    const [user, setUser] = useContext(UserContext);

    return (
        <div className="pre-body">
            <pre>
                {  
                    user === null ? 
                    undefined : 
                    JSON.stringify(user, null, 2) 
                }
            </pre>  
        </div>

    );
}
