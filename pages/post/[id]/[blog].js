import Home from '../../index';
import { useRouter } from 'next/router'

const Blog = () => {
    const router = useRouter()
    const { id, blog } = router.query

    return (
        <div>
            <Home />
            <h1>Post: {id}</h1>
            <h2>Blog: {blog}</h2>
        </div>
    );
};

export default Blog;