import React, {useEffect} from 'react'
import {Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Link, useNavigate } from 'react-router-dom'
import login from '../../assets/banner.jpg'
import Logo from '../../assets/tua.png'
import { registerUser } from '../../redux/apiCalls'
import { resetState } from '../../redux/authSlice'


//const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ID_REGEX = /^[0-9]{10}$/;
//const CONTACT_REGEX = /^(09|\+639)\d{9}$/;


const Register = () => {
  const {isError, isSuccess, message} = useSelector((state) =>  state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const {register, handleSubmit, watch , formState: {errors}} = useForm({
    firstName: '',
    middleName: '',
    lastName: '',
    studentNumber: '',
    email: '',
    department: '',
    password: '',
    confirmPassword: ''
  })
    

  const onSubmit =  ({firstName, middleName, lastName, email, password, studentNumber, department}) => {
    let user = {firstName, middleName, lastName, email, password, studentNumber, department}
     registerUser(user,dispatch)
    
  }

  useEffect(() =>{
    if(isError){
      toast.error("Email or Student ID already exists")
    }
  },[isError, dispatch, isSuccess])

  useEffect(() =>{
      if(isSuccess){
        toast.success(message)
        setTimeout(() =>{
          navigate('/login')
        }, "1000")
      }
      dispatch(resetState())
  },[dispatch, isSuccess,navigate,message])


  return (
    <Box sx={{display: 'flex', alignItems:'center', justifyContent:'center', 
    height: '100vh', width: '100vw', position: 'relative'}}>
      <Box component="img" sx={{height: '100%', width:'100%', objectFit:'cover', position: 'absolute', top: 0, left: 0, zIndex: 2}} src={login}  />
      <Box component="div" sx={{height: '100%', width: '100%', objectFit:'cover', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(122, 139, 120, 0.8)',zIndex: 3}}   />
      <Container maxWidth="xl" sx={{position: 'absolute', zIndex: 5}}>
          <Box sx={{display:'flex', alignItems:'center', justifyContent: 'center'}} >
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection: 'column', height:'100%', width: '400px', backgroundColor:"white",   padding:'20px', gap: "5px",    
                boxShadow: 3,
                borderRadius: '15px'}}>

                    <Box sx={{display: 'flex', alignItems:'center', justifyContent:'center', padding: '20px',width: '150px' }}>
                        <Box component="img" sx={{width: '100%', height: '100%', objectFit: 'contain'}} src={Logo}></Box>
                    </Box>

                    <Typography my={2} sx={{ typography: {xs: 'body1', md: 'h5'}}}>E-Benta || TUA-MARKETPLACE</Typography>


                    <form  onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '100%'}}>
                      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: '5px'}}>
                            <TextField   
                                variant="outlined"
                                name="firstName"
                                required
                                label="First name"
                                {...register('firstName', {required: "Required"})}
                                error={!!errors?.firstName}
                                helperText={errors?.firstName ?errors.firstName.message: null}
                            />
                            <TextField   
                                variant="outlined"
                                name="middleName"
                                label="Middle name"
                                {...register('middleName')}

                            />
                            <TextField   
                                variant="outlined"
                                name="lastName"
                                required
                                label="Last name"
                                {...register('lastName', {required: "Required"})}
                                error={!!errors?.lastName}
                                helperText={errors?.lastName ?errors.lastName.message: null}
                            />
                          </Box>
                        <TextField variant="outlined" name="studentNumber" label="Student ID" required fullWidth type="text"  {...register('studentNumber', {required: "Required", pattern: {value: ID_REGEX,  message: "Please Enter your Student ID properly" }})}
                            error={!!errors?.studentNumber}
                            helperText={errors?.studentNumber ? errors.studentNumber.message: null} />
                        <TextField variant="outlined" name="email" label="Email" required fullWidth type="text"  {...register('email', {required: "Required", pattern: { message: "It should be a valid email address!" }})}
                            error={!!errors?.email}
                            helperText={errors?.email ?errors.email.message: null} />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue=""
                                name="department"
                                label="Department"
                                required
                                {...register('department')}
                              >
                                <MenuItem value="CAHS">College of Allied Health and Sciences</MenuItem>
                                <MenuItem value="CASE">College of Arts, Sciences and Education </MenuItem>
                                <MenuItem value="CBMA">College of Business Management and Accountancy</MenuItem>
                                <MenuItem value="CEIS">College of Engineering and Information Sciences</MenuItem>
                                <MenuItem value="CHTM">College of Hospitality and Tourism Management </MenuItem>
                                <MenuItem value="CMT">College of Medical Technology</MenuItem>
                                <MenuItem value="SLCN">St. Lukes College of Nursing</MenuItem>
                              </Select>
                          </FormControl>

                        <TextField variant="outlined" name="password" label="Password" required fullWidth type="password"  {...register('password', {required: "Required", pattern: {value: PWD_REGEX,  message: "Password should be 8-24 characters and include at least 1 letter, 1 number and 1 special character!" }})}
                            error={!!errors?.password}
                            helperText={errors?.password ? errors.password.message: null} />
                        <TextField variant="outlined" name="password1" label="Confirm Password" required fullWidth type="password" {...register('password1', {
                              required: "Required",
                              validate: (value) => {
                                return value === watch('password') || 'Password does not match'
                              }
                            })}                   
                            error={!!errors?.password1}
                            helperText={errors?.password1 ? errors.password1.message: null} />
                        <Button fullWidth type="submit" variant="contained">Register</Button>

                    </form>
                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop: 4,gap: 2}}>
                      <Typography variant="body2" color="text.secondary">Already have account?</Typography>
                      <Link to="/login" style={{textDecoration: 'none'}}>
                        <Button size="small" type="submit" color="secondary"  variant="outlined">Login Here</Button>
                      </Link>
                    </Box>
               </Box>
          </Box>
      </Container>
    </Box>
  )
}

export default Register