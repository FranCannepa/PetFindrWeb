import React, { useEffect, useState } from 'react'
import { NavigationContainer, WelcomeMessage } from './HomeElements/HomeElements'
import { PrimaryButton, Container, StyledContainer, ErrorTitle } from '../Common/CommonElements/CommonElements'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <div>
            {isLoggedIn ? (<Container>
                <StyledContainer>
                    <WelcomeMessage>Welcome to PetFindr!</WelcomeMessage>
                    <NavigationContainer>
                        <PrimaryButton onClick={() => {
                            navigate('/list_reports')
                        }}>View Reports</PrimaryButton>
                        <PrimaryButton onClick={() => {
                            navigate('/new_report')
                        }}>Submit Report</PrimaryButton>
                        <PrimaryButton onClick={() => {
                            localStorage.clear();
                            navigate('/login')
                        }}>Logout</PrimaryButton>
                    </NavigationContainer>
                </StyledContainer>
            </Container>) : (<Container>
                <ErrorTitle>
                    Acceso Denegado
                </ErrorTitle>
                <PrimaryButton onClick={() => {
                    navigate("/login")
                }}>Log In</PrimaryButton>
            </Container>)}

        </div>
    )
}

export default Home