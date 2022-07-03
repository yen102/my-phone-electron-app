import { useNavigate } from "react-router-dom"
import { useState, useMemo, useEffect } from "react";
import Message from "../components/Message"
import { Type } from "../utils/Type";


export default function Welcome(props) {
    const [list, setList] = useState([{type: Type.MESSAGE, _id: 1, address:"Vinaphone", body: "Hello", time: "7:10", read: 1}]);

    const renderedList = useMemo(() => (
    list.map((item) => {
            switch(item.type) {
                case Type.MESSAGE:
                    return <Message id={item._id} address={item.address} body={item.body} read={item.body}/>
                default:
                    return <div>Hello</div>
            }
        })
    ), [list]);
    return (
        <div className="wrapper">
            {renderedList}
        </div>
    )
}