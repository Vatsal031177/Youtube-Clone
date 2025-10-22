import React from 'react';
import { Card, CardMedia, CardContent, Typography, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    return (
        <Card component={Link} to={`/video/${video._id}`} style={{ textDecoration: 'none' }}>
            <CardMedia
                component="img"
                height="140"
                image={video.thumbnail}
                alt={video.title}
            />
            <CardContent>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Avatar
                        src={video.creator.avatar}
                        style={{ marginRight: '12px' }}
                    />
                    <div>
                        <Typography variant="subtitle1" component="h3">
                            {video.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {video.creator.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {video.views} views • {video.createdAt}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
