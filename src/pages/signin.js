import React,{useState,useEffect} from 'react'
import firebase from 'firebase/compat';
import './signin.css'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import SignIn from '../components/Signin';
import Prediction from './prediction';
const SigninPage = () => {
const [user,setUser]=useState('');
const [email,setEmail]=useState('');
const [Password,setPassword]=useState('');
const [emailError,setEmailError]=useState('');
const [PasswordError,setPasswordError]=useState('');
const [hasAccount,setHasAccount]=useState(false);
const clearInputs=()=>{
  setEmail('');
  setPassword('');
}
const clearErrors=()=>{
  setEmailError('');
  setPasswordError('');
}
const handleLogin=()=>{
  clearErrors();
  firebase.auth().signInWithEmailAndPassword(email,Password).catch(err=>{
    switch(err.code){
      case "auth/Invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        setEmailError(err.message);
        break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;
    }
  });
};
const handleSignup=()=>{
  clearErrors();
  firebase.auth().createUserWithEmailAndPassword(email,Password).catch(err=>{
    switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
      
        setEmailError(err.message);
        break;
      case "auth/weak-password":
        setPasswordError(err.message);
        break;
    }
  });
};
const handleSignout=()=>{
  firebase.auth().signOut();
};
const authListner=()=>{
  firebase.auth().onAuthStateChanged(user=>{
    if(user){
      clearInputs();
      setUser(user);
      
    }
    else{
      setUser('');
    }
  });
};
useEffect(()=>{
authListner();
},[]);
  return (
    <div>
      { user ? (
        <Prediction handleSignout={handleSignout}/>
     ) :(
        <SignIn
                email={email}
                setEmail={setEmail}
                Password={Password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                PasswordError={PasswordError}
                />
)}  
</div>
)};

export default SigninPage;