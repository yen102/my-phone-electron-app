import { Link, useNavigate } from "react-router-dom"
import AppButton from "../AppButton"

export default function AppHeader() {
    const navigate= useNavigate();
    return (
        <div className="header">
            <div className="header__title">
                MY PHONE
            </div>
            <div className="header__connect_button">
                <AppButton type="important" onClick={() => {
                    navigate("/", { replace : true })
                }}>
                    Connect
                </AppButton>
            </div>
        </div>
    )
}