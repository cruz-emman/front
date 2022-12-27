import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { publicRequest } from '../../utils.js/requestMethod'
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {

  
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

 useEffect(() =>{
  const getAllUsers = async () =>{
    try {
      const res = await publicRequest.get(`/user`)
      setUsers(res.data)
      setLoading(false)
    } catch (error) {
      
    }
  }
  getAllUsers()
 },[setUsers, setLoading])

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
    ): (
      <Box>
        <Navbar/>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
            </tr>
          </tbody>

           {users.map((user) => (

             <tr key={user._id}>
              <Link to={`/sProfile/${user._id}`}>
              <td>{user?._id}</td>
              </Link>
            </tr>

           ))}

        </table>
      </Box>
    )}
    </>
  )
}

export default Home