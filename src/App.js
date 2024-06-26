import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './pages/registerPage/register'
import { QueryClient, QueryClientProvider } from 'react-query'
import ListOfUsers from './pages/listOfUsers/listOfUsers'
import React, {useState} from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from '../src/pages/loginPage/login'
import MainPage from './pages/main/mainPage'
import TopNav from './pages/topNav/topNav'
import Loan from './pages/loan/loans/loan'
import BaseInfo from './pages/baseInfo/baseInfo'
import ListOfLoanTypes from './pages/loan/loanType/loanTypes'
import ContractTypes from './pages/contractTypes/contractTypes';
import Contracts from './pages/contracts/contracts'
import OrgChart from './pages/orgChart/orgChart'
import ListOfRoles from './pages/createRole/listOfRoles'
import Mosaede from './pages/mosaede/mosaede'
import ListOfBimeTypes from './pages/bime/bimeTypes'
import MahalKhedmat from './pages/mahalKhedmat/mahalKhedmat'
import Maliat from './pages/maliat/maliat'
import SalaryItems from './pages/salaryItems/salaryItems'
import Mohasebe from './pages/mohasebe/mohasebe'
import NotFound from './pages/404/notFound'
import { UserContext } from './userContext'
import { Flip, ToastContainer } from 'react-toastify'


function App() {
    const [user, setUser] = useState(null);
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                retry:1,
                refetchOnReconnect: false,
                refetchInterval: false
            },
            mutations: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                retry:1,
                refetchOnReconnect: false,
                refetchInterval: false
            }
        },
      })
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
                        <ContractTypes/>
                    </Route>
                    <Route path={'/MainPage/hokms'}>
                        <TopNav/>
                        <Contracts/>
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
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Flip}
            />
        </QueryClientProvider>
    );
}
export default App;
