import React from 'react';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Loader } from '../../components';
import Grid from '@mui/material/Grid';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Grid container spacing={2}  paddingRight='70px' paddingLeft="70px">
      {posts.map((post, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex',
        justifyContent: 'center',}}>
          <PostCard post={post.node} />
        </Grid>
      ))}
    </Grid>
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