import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/loginPage/loginPage';
import Register from './pages/registerPage/register';
import { QueryClient, QueryClientProvider } from 'react-query'

import ListOfUsers from './pages/listOfUsers/listOfUsers';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './pages/main/mainPage';
import NavBar from './pages/nav/nav';
import TopNav from './pages/topNav/topNav';
import Loan from './pages/loan/loan';
import BaseInfo from './pages/baseInfo/baseInfo';
import ListOfLoanTypes from './pages/loan/loanTypes';
import ContractItems from './pages/contractPage/contractItems';
import Hokms from './pages/hokm/hokms';
import OrgChart from './pages/orgChart/orgChart'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}> 
        <TopNav/>
        <Router>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <NavBar/>
                </Route>
                <Route exact path="/admin">
                    <Login/>
                </Route>
                <Route path="/user">
                    <Login/>
                </Route>
                <Route exact path={'/admin/MainPage'}>
                    <MainPage/>
                </Route>
                <Route exact path={'/admin/MainPage/karmandan'}>
                    <ListOfUsers/>
                </Route>
                <Route path={'/admin/MainPage/karmandan/registerUser'}>
                    <Register/>
                </Route>
                <Route exact path={'/admin/MainPage/baseInfo'}>
                    <BaseInfo/>
                </Route>
                <Route path={'/admin/MainPage/loans'}>
                    <Loan/>
                </Route>
                <Route path={'/admin/MainPage/baseInfo/loanTypes'}>
                    <ListOfLoanTypes/>
                </Route>
                <Route path={'/admin/MainPage/baseInfo/contractItems'}>
                    <ContractItems/>
                </Route>
                <Route path={'/admin/MainPage/hokms'}>
                    <Hokms/>
                </Route>
                <Route path={'/admin/MainPage/baseInfo/OrganizationChart'}>
                    <OrgChart/>
                </Route>
            </Switch>
            {/* <OrgChart nodes={
                                     [{id: 1, name: "Name1" , title: "Tytle1" },
                                     {id: 2, pid: 1, name: "Name2" , title: "Tytle2" },
                                     {id: 3, pid: 1, name: "Name3" , title: "Tytle3" }]} /> */}
        </Router>
        {/* <Login/>
        <Register/>
        <CreateRole/>
        <RoleToUser/>
        <RemoveRFU/>
        <ListOfUsers/>
        <ChangePassByAd/>
        <ChangePassByUser/> */}
        {/* <MainPage/> */}
        {/* <Loan/> */}
        {/* <ListOfLoanTypes/> */}
        {/* <ListOfContractDet/> */}
    </QueryClientProvider>
  );
}
export default App;
