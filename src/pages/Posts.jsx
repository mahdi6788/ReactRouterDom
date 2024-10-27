import { Link } from "react-router-dom"

function Posts(){
    return(
        <div>
            <h1>Posts</h1>

            <ul>
                <li>
                    <Link to="1">Post1</Link>
                </li>
                <li>
                <Link to="2">Post2</Link>
                </li>
                <li>
                <Link to="3">Post3</Link>
                </li>

            </ul>
            
        </div>
    )
}

export default Posts