import './app.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './pages/NotFound';
import { useEffect, useState } from 'react';

const App = () => {
    const [user, setUser] = useState(null);
    const path = "React-Social-Login";
    useEffect(() => {
        fetch('http://localhost:5000/auth/login/success', {
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
                    <Route path={ path } element={ <Home />} />
                    <Route path={ `${path}/login` } 
                        element={ user ? <Navigate to={ path } /> : <Login /> } 
                    />
                    <Route path={ `post/:id` } 
                        element={ user ? <Post /> : <Navigate to={ path } /> } 
                    />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
 
export default App;