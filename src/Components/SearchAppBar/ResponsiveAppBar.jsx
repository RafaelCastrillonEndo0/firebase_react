import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import narutoLogo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';  
const pages = ['Home', 'Buscar', 'Favoritos'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C2F33', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={narutoLogo} alt="Naruto Logo" style={{ height: '60px', width: 'auto', marginRight: '8px' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Ninja Naruto", monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FFA500',
              textDecoration: 'none',
            }}
          >
            NARUTO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: '#2C2F33' }}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#FFA500' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: '"Ninja Naruto", monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FFA500',
              textDecoration: 'none',
            }}
          >
            NARUTO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} 
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  border: '1px solid #FFA500',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: '#FFA500',
                    color: 'black',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
