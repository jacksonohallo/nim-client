import React from 'react';
import moment from "moment";
import {RichText} from "@graphcms/rich-text-react-renderer";
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography } from '@mui/material';

const Container = styled(Box)({
  backgroundColor: 'white',
  padding: '24px',
  fontFamily: 'hygraph'
});

const PostDetail = ({post}) => {

  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Container sx={{ boxShadow: '5px 5px 0px 0px rgba(201, 233, 255, 0.8)', paddingBottom: '24px' }}>
        <Box sx={{ position: 'relative', overflow: 'hidden', boxShadow: 'md', marginBottom: '24px' }}>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </Box>
        <Box sx={{ px: { xs: 2, lg: 0 } }}>
          <Typography variant="h2" component="h1" sx={{ mb: '24px', fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' }, color: 'black' }}>
            {post.title}
          </Typography>
          <RichText
            content={post.content.raw.children}
            renderers={{
              h1: ({ children }) => <Typography variant="h1" sx={{ mb: '16px', fontSize: { xs: '2.5rem', md: '3rem', lg: '3.5rem' }, color: 'black', fontWeight: 'bold', textDecoration: 'underline' }}>{children}</Typography>,
              h2: ({ children }) => <Typography variant="h2" sx={{ mb: '16px', fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' }, color: 'black', fontWeight: 'bold', textDecoration: 'underline' }}>{children}</Typography>,
              ul: ({ children }) => <ul className="list-disc list-inside my-4 text-lg" style={{ color: 'black' }}>{children}</ul>,
              li: ({ children }) => <li className="my-2 text-lg font-bold" style={{ color: 'black' }}>{children}</li>,
              h4: ({ children }) => <Typography variant="h4" style={{color: 'black', fontWeight: 'bold', textDecoration: 'underline' }}>{children}</Typography>,
              h5: ({ children }) => <Typography variant="h5" style={{color: 'black', fontWeight: 'bold', textDecoration: 'underline' }}>{children}</Typography>,
              h6: ({ children }) => <Typography variant="h6" style={{color: 'black', fontWeight: 'bold', textDecoration: 'underline' }}>{children}</Typography>,
              p: ({ children }) => <Typography variant="body1" sx={{ mb: '16px', color: 'black' }}>{children}</Typography>,
              code: ({ children }) => <code className="bg-gray-100 dark:bg-blue-400 rounded-md p-1 text-sm " style={{color: 'black'}}>{children}</code>,
              code_block: ({ children }) => <pre className="bg-white-100 dark:bg-blue-400 overflow-y-scroll rounded-md p-2 text-sm" style={{color: 'black'}}>{children}</pre>,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}



export default PostDetail;
