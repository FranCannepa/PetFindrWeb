import { Fragment, useEffect, useState } from 'react';
import { LoginPanel, LogoContainer } from './Login/LoginElements'
import axios from 'axios';
import { PrimaryButton } from '../Common/CommonElements/CommonElements';
import Logo from '../../Assets/Images/appLogo.png'
import { useNavigate } from "react-router-dom";




const Home = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Both email and password are required');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3080/login', {
                email: email,
                password: password
            });
            debugger
            if (response.data.code === 200) {
                let formData = response.data.result;
                localStorage.setItem('currentUser', formData.username)
                localStorage.setItem('currentUserID', formData._id)
                navigate("/")
            } else if (response.data.code === 404) {
                alert("No hay usuarios")
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('currentUser') && localStorage.getItem('currentUserID')) {
            navigate('/')
        }
    }, [])


    return (
        <Fragment>



            <LoginPanel>
                <LogoContainer><img src={Logo}></img></LogoContainer>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='Email'
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(handlePasswordChange)}
                            placeholder='Password'
                            required
                        />
                    </div>
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </form>
            </LoginPanel>



        </ Fragment>
    );
}

export default Home;