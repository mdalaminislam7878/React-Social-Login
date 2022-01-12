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
    useEffect(() => {
        fetch(`https://mdalaminislam787-social.herokuapp.com/auth/login/success/`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
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
    console.log(user);
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