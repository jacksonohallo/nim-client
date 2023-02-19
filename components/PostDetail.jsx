import React from 'react';
import { Box, Typography, Avatar, ImageList, ImageListItem, styled } from '@mui/material';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <strong key={index}>{text}</strong>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <Typography key={index} variant="h3" sx={{ mb: 5, fontWeight: 'bold' }}>
            {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </Typography>
        );
      case 'paragraph':
        return (
          <Typography key={index} variant="body1" sx={{ mb: 2 }}>
            {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </Typography>
        );
      case 'heading-four':
        return (
          <Typography key={index} variant="h4" sx={{ mb: 4, fontWeight: 'medium' }}>
            {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </Typography>
        );
      case 'image':
        return (
          <Box key={index}>
            <ImageList cols={1} sx={{ mb: 2 }}>
              <ImageListItem>
                <img
                  alt={obj.title}
                  height={obj.height}
                  width={obj.width}
                  src={obj.src}
                  style={{ objectFit: 'cover' }}
                />
              </ImageListItem>
            </ImageList>
            {obj.title && (
              <Typography variant="caption"  sx={{ color: 'text.secondary', mb: 2   }}>
                {obj.title}
              </Typography>
            )}
          </Box>
        );
      default:
        return modifiedText;
    }
  };

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    marginRight: theme.spacing(1),
  }));

  return (
<Box sx={{ backgroundColor: 'background.paper', boxShadow: 3, borderRadius: '12px', py: 2, my: 2 }}>
      <Box sx={{ position: 'relative', overflow: 'hidden', mb: 6, boxShadow: 2 }}>
        <img src={post.featuredImage.url} alt="" sx={{ width: '10%', height: 'auto' }} />
      </Box>
      <Box sx={{ px: { xs: 2, lg: 0 } }}>
          <Typography>{post.title}</Typography>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
          return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </Box>
      </Box>
  );
};

export default PostDetail;