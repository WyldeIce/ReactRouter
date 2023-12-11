import {useParams, Link} from "react-router-dom"

const SingleUser = ({users}) => {
    const params = useParams()
    const id = params.id*1

    const user = users.find((user) => {
        return user.id === id
    })

    if(!user) {
        return null
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
            <Link to="/users">
                Back to all Users
            </Link>
        </div>
    )
}

export default SingleUser