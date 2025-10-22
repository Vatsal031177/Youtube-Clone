import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import axios from 'axios';

const Upload = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('video', video);
        formData.append('thumbnail', thumbnail);

        try {
            await axios.post('http://localhost:5000/api/videos/upload', formData);
            // Redirect to home page after successful upload
        } catch (err) {
            console.error('Error uploading video:', err);
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '80px' }}>
            <Typography variant="h4" gutterBottom>
                Upload Video
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Title"
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Description"
                    margin="normal"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    accept="video/*"
                    style={{ display: 'none' }}
                    id="video-file"
                    type="file"
                    onChange={(e) => setVideo(e.target.files[0])}
                />
                <label htmlFor="video-file">
                    <Button
                        variant="contained"
                        component="span"
                        startIcon={<CloudUpload />}
                        style={{ margin: '20px 0' }}
                    >
                        Upload Video
                    </Button>
                </label>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Upload;
