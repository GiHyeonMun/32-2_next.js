// /pages/posts/[pid].js
// /post/foo, /post/bar

import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter()
    // {"pid": "foo"}, {"pid": "bar"}
    const { pid } = router.query
    return <p>Post: {pid}</p>
}