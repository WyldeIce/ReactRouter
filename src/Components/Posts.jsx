import {Link} from "react-router-dom"

const Posts = ({posts}) => {
    return (
      <div className="postBody">
        <h1 className="postHeader">Posts</h1>
        <ul>
          {
            posts.map((post) => {
              return (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  export default Posts