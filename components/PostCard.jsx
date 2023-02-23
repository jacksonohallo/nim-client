import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const PostCard = ({ post }) => {
    
    return (
  <Card sx={{ height: '100%',  display: 'flex', flexDirection: 'column', borderRadius: '15px' , alignItems:"center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={post.featuredImage.url} 
          alt={post.title} 
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
          <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {post.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link href={`/post/${post.slug}`}>
          Read More  
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;

