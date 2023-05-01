import * as Yup from 'yup'
// using yup for form validation 
export const signUpSchema=Yup.object({
    name:Yup.string().min(5).max(20).required('Please Enter name'),
    email:Yup.string().email().required('Enter Valid email'),
    password:Yup.string().min(6).required('Enter your password'),
   confirm_password:Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'),null],'Password must match')
})