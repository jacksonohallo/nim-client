import React from 'react';
import { PostDetail,Loader } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if(router.isFallback) {
    return <Loader />
  }

  return (
    <Box sx={{marginLeft:9, marginRight:9 }}>
    <PostDetail post={post} />
    </Box>
  );
};

export default PostDetails;

// Fetch data during build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamics routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}