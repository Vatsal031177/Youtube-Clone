import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Avatar, Button, TextField } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import axios from 'axios';

const VideoPlayer = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
                setVideo(res.data);
            } catch (err) {
                console.error('Error fetching video:', err);
            }
        };
        fetchVideo();
    }, [id]);

    const handleComment = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/api/comments`, {
                videoId: id,
                content: comment
            });
            setComment('');
            // Refresh comments
        } catch (err) {
            console.error('Error posting comment:', err);
        }
    };

    if (!video) return <div>Loading...</div>;

    return (
        <Container maxWidth="lg" style={{ marginTop: '80px' }}>
            <video
                src={video.videoUrl}
                controls
                style={{ width: '100%', maxHeight: '70vh' }}
            />
            <Typography variant="h5" style={{ marginTop: '20px' }}>
                {video.title}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                <Avatar src={video.creator.avatar} />
                <Typography variant="subtitle1" style={{ margin: '0 10px' }}>
                    {video.creator.name}
                </Typography>
                <Button startIcon={<ThumbUp />}>Like</Button>
                <Button startIcon={<ThumbDown />}>Dislike</Button>
            </div>
            <form onSubmit={handleComment}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </form>
        </Container>
    );
};

export default VideoPlayer;
