import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Box, display } from '@mui/system';

export default function PostCard({post}) {
  return (

          <Card sx={{ maxWidth: 345, }}>
      <CardMedia
           component="img"
           alt=""
           height="200"
           image={post.featuredImage.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link href={`/post/${post.slug}`} color="inherit">
          {post.title}
        </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {post.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small">
          <Link href={`/post/${post.slug}`} variant="contained" color="primary">
          Continue Reading
        </Link>
        </Button>
      </CardActions>
    </Card>

  );
}
