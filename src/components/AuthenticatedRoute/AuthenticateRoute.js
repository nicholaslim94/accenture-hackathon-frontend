import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"


function AuthenticatedRoute({children, ...rest}) {
    const authContext = useContext(AuthContext)

    return( 
        <Route 
            {...rest} 
            render={
                ({location}) =>
                    authContext.authenticated ? (children) : (<Redirect to={{pathname: "/", state: {from: location}}}/>)
            }
        />
    )
}

export default AuthenticatedRoute