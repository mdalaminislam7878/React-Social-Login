import './app.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './pages/NotFound';
import { useEffect, useState } from 'react';
import { backendServer } from './Site';

const App = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch(`${backendServer}/auth/login/success`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Credentials': true,
            },
        }).then(res => {
            console.log(res)
            if(res) return res.json();
            throw new Error("Athuntication is failed")
        }).then(data => {
            setUser(data.user);
        }).catch(err => {
            console.log(err.message);
        })
    }, [])
    return (  
        <BrowserRouter>
            <div className="App">
                <Navbar user= {user} />
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="login" 
                        element={ user ? <Navigate to="/" /> : <Login /> } 
                    />
                    <Route path={ `post/:id` } 
                        element={ user ? <Post /> : <Navigate to= "/" /> } 
                    />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
 
export default App;