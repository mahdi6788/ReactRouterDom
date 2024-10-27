import { replace, useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        navigate("/dashboard", {replace: true, state: "Here"})
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleClick}>
                <button>LogIn</button>
            </form>

        </div>
    )
}

export default Login