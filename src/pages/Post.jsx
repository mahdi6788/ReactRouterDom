import { Link, useParams } from "react-router-dom"
/// similar to backend database
const posts = [
    {
        id: 1,
        title:"book1",
        price: 100
    },
    {
        id: 2,
        title:"book2",
        price: 200
    },
    {
        id: 3,
        title:"book3",
        price: 300
    }
]


function Post() {
    /// useParams gets the second part of address bar named params to use for fetching or finding specific data from database to show on the relavant page
    const {id} = useParams()

    //// find data from database. in reality, should fetch data from backend
    const post = posts.find(p => p.id === Number(id))

    return (
    <div>
        <h1>Details</h1>
        <div>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Price: {post.price}</p>
        </div>
        <div>
            {/* haere should use absolute path: "/posts" not reletive path: "posts"
            because when we use reletive path to address from a page based on that page.  */}
            <Link to="/posts">Back to posts</Link>
        </div>
    </div>
   )
}

export default Post