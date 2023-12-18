import React from 'react'
import { Box, Typography } from '@mui/material';

import styles from './Footer.module.scss'

export default function Footer () {
    return (
      <Box component="footer" className={styles.footer}>
        <Typography
            variant="subtitle1"
            component="p"
            className={styles.heading}
        >
            Давайте учиться вместе
        </Typography>
        <Typography variant="body2"  className={styles.copyright}>
            {new Date().getFullYear()}
        </Typography>
    </Box>
    )
}