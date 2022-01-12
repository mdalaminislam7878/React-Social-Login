import GoogleIcon from '../assets/images/google.png';
import FacebookIcon from '../assets/images/facebook.png';
import GithubIcon from '../assets/images/github.png';

const Login = () => {

    const google = () => {
        window.open('http://localhost:5000/auth/google', '_self')
    }

    const github = () => {
        window.open('http://localhost:5000/auth/github', '_self')
    }

    const facebook = () => {
        window.open('http://localhost:5000/auth/facebook', '_self')
    }

    return ( 
        <div className="login">
            <h1 className="loginTitle">Choose a login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={ google } >
                        <img src={ GoogleIcon } alt="google-icon" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={ facebook }>
                        <img src={ FacebookIcon } alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github" onClick={ github }>
                        <img src={ GithubIcon } alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <input type="submit" value="Login" />
                </div>
            </div>
        </div>
    );
}
 
export default Login;