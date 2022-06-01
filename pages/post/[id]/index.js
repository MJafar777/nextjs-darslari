import Link from "next/link";
import { useRouter } from "next/router";
import Home from '../../index';

const Post = () => { //Postni ichida Bloglarga o'tish uchun
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <Home />
            <h1>Posthhh: {id}</h1>
            <ul>
                <li>
                    <Link href="/post/[id]/[blog]" as={`/post/${id}/1`}>
                        <a>1-Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]/[blog]" as={`/post/${id}/2`}>
                        <a>2-Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]/[blog]" as={`/post/${id}/3`}>
                        <a>3-Blog</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Post;