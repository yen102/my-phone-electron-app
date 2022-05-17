import { useNavigate } from "react-router-dom"
export default function Welcome() {
    let navigate = useNavigate();
    const login = () => {
        console.log('login')
        navigate("/login")
    }
    return (
        <div className="wrapper">
            <h1>Welcome hihi</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}