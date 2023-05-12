import React from 'react'
import { Box, Stack, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BigImage from '@assets/img/8600.jpg';

const TeacherNavigation = () => {
  const links = [
    { id: 1, title: 'Устная работа', link: '/'},
    { id: 2, title: 'Самостоятельные работы', link: '/'},
    { id: 3, title: 'Элементарные тренажеры', link: '/'},
    { id: 4, title: 'Реальная математика', link: '/'}
  ]

  return (
    <Box mb="30px"
      className="bigBlock"
      sx={{ maxWidth: 1000}}
    >

      <Stack direction="row">
      <Typography
            component="h3"
            variant = "h4"
            align="left"
            color="#2a8b2c"
            gutterBottom
        >
            Преподаватель
        </Typography>
        <Box className = "bigBlockText">
          {links.map((linkData) => (
            <Typography
              component={ Link } to = "/"
              variant="h5"
              display = "block"
              sx={{ color: "#6a2292", textDecoration: "none", lineHeight: "250%" }}
            >{ linkData.title } </Typography>
          ))}
        </Box>
        <Box 
          sx={{ width: '50%' }}
        >
            <img src={BigImage} 
               className='imgBlock'
            />
        </Box>
      </Stack>
    </Box>
  )
}

export default TeacherNavigation

