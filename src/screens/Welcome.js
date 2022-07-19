import { Link, useNavigate } from 'react-router-dom'
import welcome from '../assets/welcome.jpg'
import AppButton from '../components/AppButton'

export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <div className="container">
                <div className="welcome-left">
                    <div className="welcome-left__text">
                        Connect Your Phone With Your PC
                    </div>
                    <div className="welcome-left__button">
                        <AppButton type="important" onClick={() => {
                            navigate("qr", {replace: true})
                        }}>
                            <div className="welcome-left__button__text"> 
                                Connect
                            </div>
                        </AppButton>
                    </div>
                </div>
                <div className="welcome-image">
                    <img src={welcome}></img>
                </div>
            </div>
        </div>
    )
}