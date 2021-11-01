import React from 'react';

import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRouter = ({ children, ...rest }) => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}

            >

            </Route>

        </div>
    );
};

export default PrivateRouter;