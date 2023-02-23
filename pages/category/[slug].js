import React from 'react';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Loader } from '../../components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  const theme = useTheme();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, margin: 'auto', maxWidth: theme.breakpoints.values.lg }}>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PostCard post={post.node} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPost;


// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
