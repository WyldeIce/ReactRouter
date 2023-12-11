import {useParams, Link} from "react-router-dom"

const SinglePost = ({posts}) => {
    const params = useParams()
    const id = params.id*1

    const post = posts.find((post) => {
        return post.id === id
    })

    if(!post) {
        return null
    }

    return (
        <div>
            <p>User {post.userId} posted:</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to="/posts">
                Back to all Posts
            </Link>
        </div>
    )
}

export default SinglePost