import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@material-ui/core';
import { Search, VideoCall, AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    YourTube
                </Typography>
                
                <div style={{ flexGrow: 1, margin: '0 20px' }}>
                    <form onSubmit={handleSearch}>
                        <InputBase
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ backgroundColor: 'white', padding: '5px 10px', borderRadius: '4px' }}
                            fullWidth
                        />
                    </form>
                </div>

                <Button
                    component={Link}
                    to="/upload"
                    startIcon={<VideoCall />}
                    color="inherit"
                >
                    Upload
                </Button>
                
                <Button
                    component={Link}
                    to="/login"
                    startIcon={<AccountCircle />}
                    color="inherit"
                >
                    Sign In
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
