import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CameraIcon from '@mui/icons-material/Camera';

import styles from './NavBar.module.scss'

export default function NavBar () {
    return (
      <AppBar className={styles.appBar} position="relative">
          <Toolbar className={styles.toolbar} variant="dense">
            <a href="/" className={styles.logoLink}>
              <CameraIcon sx={{ mr: 2 }} />
              <Typography variant="h6" color="inherit" noWrap >
                  РосМатика
              </Typography>
            </a>

            <a href='/charts' className={styles.logoLink} >Графики</a>
          </Toolbar>
      </AppBar>
    )
};