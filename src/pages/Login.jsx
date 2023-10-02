import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth'; // Import the methods directly
import { auth } from '../firebase'; // adjust the import to your file structure
import styled from 'styled-components';

function Login({theme}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use the method directly
      console.log('Signed in successfully');
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signed up successfully');
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent successfully');
    } catch (error) {
      console.error('Error sending password reset email', error);
    }
  };

  return (
    <PageContainer color={theme.back3}>
        <LoginContainer color={theme.back2}>
            {/* <TitleContainer>myKeyGuru</TitleContainer> */}
            <InfoContainer>
                <InputContainer textColor={theme.text} color={theme.back1} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <InputContainer textColor={theme.text} color={theme.back1} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </InfoContainer>
            {isSignUp ? (
                <ButtonContainer textColor={theme.text} color={theme.secondary} onClick={signUp}>Sign Up</ButtonContainer>
            ) : (
                <ButtonContainer textColor={theme.text} color={theme.secondary} onClick={signIn}>Sign In</ButtonContainer>
            )}
            <ButtonContainer textColor={theme.text} color={theme.back4} onClick={resetPassword}>Forgot Password</ButtonContainer>
            <ButtonContainer textColor={theme.text} color={theme.primary} onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Already have an account? Sign In' : 'Create an account'}
            </ButtonContainer>
        </LoginContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: ${props => props.color}
`
const TitleContainer = styled.div`
    font-size: 2.4rem;
    font-weight: 800;
    /* color: gray; */
`
const LoginContainer = styled.div`
    display: flex;
    width: 25%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 1.3rem;
    border-radius: 2rem;

    background-color: ${props => props.color};
`;
const ButtonContainer = styled.button`
    width: 100%;
    border-radius:1rem;
    background-color: ${props => props.color};
    color: ${props => props.textColor};
`
const InputContainer = styled.input`
    width: 100%;
    height: 2.5rem;
    border-radius:1rem;
    border: 0;
    /* padding: 1rem; */
    text-align: center;
    color: ${props => props.textColor};

    background-color: ${props => props.color}
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    padding-bottom: 1rem;

`
export default Login;
