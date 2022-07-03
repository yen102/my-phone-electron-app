import classNames from "classnames";

export default function Message({ id, address, body, time, read, onClick }) {
    return (
        <div className="message" onClick={onClick}>
            <div className="message__address">
                {address}
            </div>
            <div className="message__body">
                <div>{body}</div>

            </div>
            <div className="message__time">
                {time}
            </div>
            { read == 1 && 
                <div className="message__read">
                    &bull;
                </div>
            }
            
        </div>
    )
}