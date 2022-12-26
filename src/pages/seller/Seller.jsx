import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import { publicRequest } from '../../utils.js/requestMethod'
import BeatLoader from "react-spinners/BeatLoader";


const Seller = () => {

    const {id} = useParams()

    const [sellerInfo, setSellerInfo] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
            const getUserInfo = async() =>{
                try {
                    const res = await publicRequest.get(`/user/find/${id}`)
                    setSellerInfo(res.data)
                    setLoading(false)
                } catch (error) {
                    
                }
            }
            getUserInfo()
    },[setLoading,id,setSellerInfo])
   

  return (
   <>
   {loading ? (
         <BeatLoader 
         color="#36d7b7" 
         loading={loading}
         size={50}
         aria-label="Loading Spinner"
         data-testid="loader"
     />
   ): <Box>
    <Typography>{sellerInfo._id}</Typography>
    <Typography>{sellerInfo.lastName}</Typography>
    <Typography>{sellerInfo.middleName}</Typography>
    <Typography>{sellerInfo.firstName}</Typography>

   </Box>
   }
   </>
  )
}

export default Seller