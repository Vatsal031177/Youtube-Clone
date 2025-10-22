import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/videos');
                setVideos(res.data);
            } catch (err) {
                console.error('Error fetching videos:', err);
            }
        };
        fetchVideos();
    }, []);

    return (
        <Container maxWidth="lg" style={{ marginTop: '80px' }}>
            <Grid container spacing={3}>
                {videos.map((video) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={video._id}>
                        <VideoCard video={video} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
