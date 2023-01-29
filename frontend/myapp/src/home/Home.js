import React from 'react';
import {Link} from "react-router-dom"
import {Box, Typography, Button} from '@mui/material'

const Home = () => {
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img src="/1079100.jpg" alt="Road" width={"100%"} height="70%" />
      <Typography 
           fontFamily={"Dancing Script, cursive"}
           variant="h3" 
           textAlign={'center'}
           width= "100%" 
           sx={{position : "absolute",top: "0px", color: "#111115de", background: "#B2C8DF"}}>
          Live Young,Live Free
      </Typography>
      <Box 
          width="100%" 
          height="30"
          display={"flex"}
          flexDirection="column"
       >

       <Typography
          fontFamily = {'quicksand'}
          textAlign={'center'}
          variant="h4"
          padding={4}
       >
           Share Your Travel Diaries With Us
       </Typography>
       <Box margin="auto">
          <Button variant="outlined" sx={{mr: 2}}>
             Share your Story
          </Button>
          <Button LinkComponent={Link} to="/diaries" variant="contained" sx={{ml: 2}}>
             View Diaries
          </Button>
       </Box>
       </Box>
    </Box>
  )
}

export default Home;