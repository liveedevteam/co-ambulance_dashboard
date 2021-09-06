import React, { useState, useEffect } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom"
import axios from 'axios';
import Loading from '../containers/pages/Loading';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/auths/get/user-profile`
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('actk')}`
        }
        axios.get(url, { headers })
            .then(response => {
                if (response.status === 200) {
                    setIsLogin(true)
                    setIsLoading(false)
                } else {
                    window.localStorage.removeItem('actk')
                    setIsLogin(false)
                    setIsLoading(false)
                }
            }).catch(err => {
                console.log(err)
                setIsLogin(false)
                setIsLoading(false)
                window.localStorage.removeItem('actk')
            })
    }, []);

    if (isLoading) return <Loading />
    else if (!isLoading)
        return (<Route
            {...rest}
            render={(props) => {
                return isLogin ? <Component {...props} /> : <Redirect to="/" />;
            }}
        />)
    else return <Loading />
}

export default withRouter(PrivateRoute)