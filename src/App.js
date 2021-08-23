import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/loginPage/loginPage'
import Register from './pages/registerPage/register'
import { QueryClient, QueryClientProvider } from 'react-query'
import ListOfUsers from './pages/listOfUsers/listOfUsers'
import React, {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import MainPage from './pages/main/mainPage'
import TopNav from './pages/topNav/topNav'
import Loan from './pages/loan/loan'
import BaseInfo from './pages/baseInfo/baseInfo'
import ListOfLoanTypes from './pages/loan/loanTypes'
import ContractItems from './pages/contractPage/contractTypes'
import Hokms from './pages/hokm/hokms'
import OrgChart from './pages/orgChart/orgChart'
import ListOfRoles from './pages/createRole/listOfRoles'
import AddUser from './pages/addUser/addUser'
import Mosaede from './pages/mosaede/mosaede'
import ListOfBimeTypes from './pages/bime/bimeTypes'
import MahalKhedmat from './pages/mahalKhedmat/mahalKhedmat'
import Maliat from './pages/maliat/maliat'
import SalaryItems from './pages/salaryItems/salaryItems'
import Mohasebe from './pages/mohasebe/mohasebe'
import NotFound from './pages/404/notFound'
import { UserContext } from './userContext'

const queryClient = new QueryClient()
function App() {
    const [user, setUser] = useState(null);
    return (
        <QueryClientProvider client={queryClient}> 
            <UserContext.Provider value={{ user, setUser }}>
            <Router>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path={'/'}>
                        <Login/>
                    </Route>
                    {true &&
                        <Route exact path={'/MainPage'}>
                            <TopNav/>
                            <MainPage/>
                        </Route>
                    }
                    <Route exact path={'/MainPage/karmandan'}>
                        <TopNav/>
                        <ListOfUsers/>
                    </Route>
                    <Route path={'/MainPage/karmandan/registerUser'}>
                        <TopNav/>
                        <Register/>
                    </Route>
                    <Route exact path={'/MainPage/baseInfo'}>
                        <TopNav/>
                        <BaseInfo/>
                    </Route>
                    <Route exact path={'/MainPage/salaryItems'}>
                        <TopNav/>
                        <SalaryItems/>
                    </Route>
                    <Route path={'/MainPage/loans'}>
                        <TopNav/>
                        <Loan/>
                    </Route>
                    <Route path={'/MainPage/mosaede'}>
                        <TopNav/>
                        <Mosaede/>
                    </Route>
                    <Route path={'/MainPage/Mohasebe'}>
                        <TopNav/>
                        <Mohasebe/>
                    </Route>
                    <Route path={'/MainPage/baseInfo/loanTypes'}>
                        <TopNav/>
                        <ListOfLoanTypes/>
                    </Route>
                    <Route path={'/MainPage/baseInfo/ListOfBimeTypes'}>
                        <TopNav/>
                        <ListOfBimeTypes/>
                    </Route>
                    <Route path={'/MainPage/baseInfo/contractItems'}>
                        <TopNav/>
                        <ContractItems/>
                    </Route>
                    <Route path={'/MainPage/hokms'}>
                        <TopNav/>
                        <Hokms/>
                    </Route>
                    <Route path={'/MainPage/baseInfo/OrganizationChart'}>
                        <TopNav/>
                        <OrgChart/>
                    </Route>
                    <Route path={'/MainPage/baseInfo/ListOfRoles'}>
                        <TopNav/>
                        <ListOfRoles/>
                    </Route>
                    <Route path={'/MainPage/baseInfo/MahalKhedmat'}>
                        <TopNav/>
                        <MahalKhedmat/>
                    </Route>
                    <Route path={'/MainPage/baseInfo/Maliat'}>
                        <TopNav/>
                        <Maliat/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
            </UserContext.Provider>
            {/* <AddUser/> */}
        </QueryClientProvider>
    );
}
export default App;
