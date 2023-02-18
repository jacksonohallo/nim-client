import React from 'react';
import moment from 'moment';
import { Box, Typography, Avatar, Grid, Card, CardMedia } from '@mui/material';


const PostDetail = ({ post }) => {
  
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <Typography variant="h3" key={index} sx={{ mb: 4, fontWeight: 'bold' }}>
            {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </Typography>
        );
      case 'paragraph':
        return (
          <Typography variant="body1" key={index} sx={{ mb: 8 }}>
            {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </Typography>
        );
      case 'heading-four':
        return (
          <Typography variant="h4" key={index} sx={{ mb: 4, fontWeight: 'medium' }}>
            {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </Typography>
        );
      case 'image':
        return (
          <CardMedia
            key={index}
            component="img"
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            image={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
return (
<Box component="div" mb={8}>
<Card sx={{ boxShadow: 4 }}>
<CardMedia
       component="img"
       alt=""
       height="400"
       image={post.featuredImage.url}
     />
<Box sx={{ p: 3 }}>
<Grid container alignItems="center" justifyContent="space-between" mb={8}>
<Grid item>
<Avatar alt={post.author.name} src={post.author.photo.url} sx={{ mr: 2 }} />
<Typography variant="h5">{post.author.name}</Typography>
</Grid>
<Grid item>
<Typography variant="subtitle2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
{moment(post.createdAt).format('MMM DD, YYYY')}
</Typography>
</Grid>
</Grid>
<Typography variant="h1" sx={{ mb: 8, fontWeight: 'bold' }}>
{post.title}
</Typography>  
{post.content.raw.children.map((typeObj, index) => {
    const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

    return getContentFragment(index, children, typeObj, typeObj.type);
  })}
</Box>
  </Card>
  </Box>
  );
};

export default PostDetail;