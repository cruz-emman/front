import {styled, Typography } from '@mui/material'
import Badge from '@mui/material/Badge';

export const NavbarContainer = styled('div')({
    paddingY: '10px',
    paddingX: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

})

export const NavbarBoxContainer = styled('div')({
    flex: 1,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-around',
})

export const NavbarBoxRightContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
})

export const StyledBadge = styled(Badge)(({theme}) =>({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    
}))

export const NavbarBoxRightContainerUser = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
})

export const NavbarboxRightTextContainer = styled(Typography)({
    fontSize: '12px',
    color: 'gray'
})


export const SearchBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    alignItems:'center'
})