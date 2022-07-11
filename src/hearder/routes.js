import React from "react";
import { HashRouter as Router, Outlet, Route,Routes } from "react-router-dom";
import {connect} from "react-redux";
import Login from "./components/login";
import Home from "./components/home";
import ResetPage from "./components/resetPassword";


const RoutePaths=({accountData})=>{
    return(
        <Router>
            <Routes>
                <Route exact path="/"  element={<Login />}/>
                <Route exact path="/home" element={accountData.accessToken ? <Home />:<Outlet />}/>
                <Route path="/resetPage/:userName" 
                            render={({ match }) => (<ResetPage userName={match.params.userName} />)}/>
                <Route path="*" element={<Login replace/> }/>
            </Routes>
        </Router> 
    );
};

const mapStateToProps=(state)=>{
    return{
        accountData: state.accountData
    }
}

export default connect(mapStateToProps,null)(RoutePaths);