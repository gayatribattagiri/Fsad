import React from 'react';
import { Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#253640', color: 'white', mt: 10 }}>
      {/* Main Footer Content Grid */}
      <Grid
        container
        spacing={3}
        sx={{
          px: { xs: 2, sm: 4, md: 10 },
          py: 5,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontSize: { xs: '0.6rem', sm: '1.2rem', md: '1.4rem' },
              fontWeight: 'bold',
            }}
          >
            Company
          </Typography>
          {['About', 'Blog', 'Press', 'Jobs', 'Partners'].map((text) => (
            <Typography
              key={text}
              sx={{
                fontSize: { xs: '0.5rem', sm: '1rem', md: '1.1rem' },
                mb: 1,
              }}
            >
              <Link href="#" underline="hover" color="inherit">
                {text}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Documentation Section */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontSize: { xs: '0.6rem', sm: '1.2rem', md: '1.4rem' },
              fontWeight: 'bold',
            }}
          >
            Documentation
          </Typography>
          {['Guides', 'API Status'].map((text) => (
            <Typography
              key={text}
              sx={{
                fontSize: { xs: '0.5rem', sm: '1rem', md: '1.1rem' },
                mb: 1,
              }}
            >
              <Link href="#" underline="hover" color="inherit">
                {text}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Solutions Section */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontSize: { xs: '0.6rem', sm: '1.2rem', md: '1.4rem' },
              fontWeight: 'bold',
            }}
          >
            Solutions
          </Typography>
          {['Marketing', 'Analytics', 'Commerce', 'Insights', 'Support'].map((text) => (
            <Typography
              key={text}
              sx={{
                fontSize: { xs: '0.5rem', sm: '1rem', md: '1.1rem' },
                mb: 1,
              }}
            >
              <Link href="#" underline="hover" color="inherit">
                {text}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontSize: { xs: '0.6rem', sm: '1.2rem', md: '1.4rem' },
              fontWeight: 'bold',
            }}
          >
            Legal
          </Typography>
          {['About', 'Claims', 'Privacy', 'Terms'].map((text) => (
            <Typography
              key={text}
              sx={{
                fontSize: { xs: '0.5rem', sm: '1rem', md: '1.1rem' },
                mb: 1,
              }}
            >
              <Link href="#" underline="hover" color="inherit">
                {text}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Bottom Footer */}
      <Box sx={{ bgcolor: '#1c2b33', textAlign: 'center', py: 3 }}>
        <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
          Keep scrolling, Keep smiling.
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
          Icons by{' '}
          <Link href="https://www.freepik.com" underline="always" color="inherit">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com" underline="always" color="inherit">
            www.flaticon.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
