import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../service';
import { PostCard, Loader } from '../../components';
import { Grid } from '@mui/material';


const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    
    <Grid container spacing={2} sx={{marginLeft:8, marginRight:8}}>
      {posts.map((post, index) => (
        <Grid item xs={4} key={index}>
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