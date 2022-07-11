import { useState, useEffect } from 'react';
import{db}from "../Firebase/firebase"
import firebase from 'firebase/compat';
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [emailError,setEmailError]=useState('');
  const [email,setEmail]=useState('');
const [Password,setPassword]=useState('');
 const [user,setUser]=useState('');
 const [PasswordError,setPasswordError]=useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  };
  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
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
  const handleSubmit =(e)  => {
    e.preventDefault();
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
    /* db.collection('Users').add({
        Username:values.username,
        email:values.email,
        password:values.password

    }) */
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;