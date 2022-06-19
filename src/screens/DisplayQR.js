import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { verifyAndroid } from "../utils/verifyAndroid";
export default function DisplayQR() {
    const [myQR, setMyQR] = useState('')
    // ipcRenderer.on('myIP', (event, arg) => {
    //     console.log('---------arg', arg)
    // })
    window.api.receive('myQR', (data) => {
        setMyQR(data)
    })

    window.api.receive('verifyRes', (data) => {
        console.log('verifyRes', data);
        if (data == true) {
            
        }
    })

    useEffect(() => {
        window.api.send('getMyQR', 'hello')
    }, [])

    useEffect(() => {
        console.log(myQR)
    }, [myQR])
    return (
        <div className="wrapper">
            <div className="qr-container">
                <div className="qr-container__qr-code">
                    {myQR && 
                        <QRCode value={myQR}></QRCode>
                    }
                </div>
                <div className="qr-container__guide-text">
                    Scan with My Phone app on Android devices to connect to this PC
                </div>
            </div>
        </div>
    )
}