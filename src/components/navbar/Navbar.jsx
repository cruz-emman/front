import React from 'react'
import {Avatar, Box, IconButton, InputAdornment, TextField, Typography} from '@mui/material'
import Logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {NavbarBoxContainer,StyledBadge,NavbarBoxRightContainer,NavbarContainer, NavbarboxRightTextContainer, NavbarBoxRightContainerUser, SearchBox} from './style.jsx'
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {currentUser} = useSelector((state) => state.auth)

  return (
    <Box sx={{boxShadow: 2, paddingBottom: 2}}>
      <Box sx={{display: 'flex',flexDirection: 'column', gap: 2}}>
        <Box sx={{display:'flex',alignSelf: 'center'}}>
          <Box sx={{width:150}} component="img" src={Logo} />
        </Box>


        <NavbarContainer>


        <NavbarBoxContainer>E-BENTA</NavbarBoxContainer>


          <NavbarBoxContainer>
            <SearchBox>
            <TextField
                label="With normal TextField"
                InputProps={{
                  endAdornment: (
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                  )
                }}
              /> 
            </SearchBox>
          </NavbarBoxContainer>
          
          <NavbarBoxContainer>

            <NavbarBoxRightContainer>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

              <NavbarBoxRightContainerUser>
                <NavbarboxRightTextContainer>Hello, {currentUser?.firstName}</NavbarboxRightTextContainer>
              </NavbarBoxRightContainerUser>

              <IconButton>
                 <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </IconButton>
            </NavbarBoxRightContainer>

            
          </NavbarBoxContainer>
        </NavbarContainer>
      </Box>
    </Box>
  )
}

export default Navbar  