import React from 'react'
import { FormButton, FormInput, FormLabel,FormH1,FormContent,Container,FormWrap,Icon,Form,Text } from './SiginElements'

const SignIn = () => {
  return( <>
  <Container>
    <FormWrap>
        <Icon to="/">fore C sales</Icon>
        <FormContent>
            <Form action='#'>
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type="email" required/>
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type='password' required/>
                <FormButton type='submit' onClick="">Sign In</FormButton>
            </Form>
        </FormContent>
    </FormWrap>
  </Container>
  
  </>
  )
}

export default SignIn;