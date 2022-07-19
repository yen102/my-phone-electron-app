import { useNavigate } from "react-router-dom"
import { useState, useMemo, useEffect } from "react";
import Message from "../components/Message"
import { Type } from "../utils/Type";
import decodeArray from "../utils/ImageUtils";
import { Image } from "antd";
export default function Home(props) {
    // const [list, setList] = useState([{type: Type.MESSAGE, _id: 1, address:"Vinaphone", body: "Hello", time: "7:10", read: 1}]);

    // const renderedList = useMemo(() => (
    // list.map((item) => {
    //         switch(item.type) {
    //             case Type.MESSAGE:
    //                 return <Message id={item._id} address={item.address} body={item.body} read={item.body}/>
    //             default:
    //                 return <div>Hello</div>
    //         }
    //     })
    // ), [list]);
    const [image, setImage] = useState(null)

    window.api.receive('images', (data) => {
        if (data) {
            const id = data.slice(0, 8).toString();
            const title = data.slice(8, 8+256).toString();

            console.log('receive image -----------')
            const image = decodeArray(data.slice(8+256, data.length));
            setImage(image.src);
        }
    })

    // useEffect(() => {
    
    // }, [image])
    return (
        <div className="wrapper">
            <img src={image} />
            {/* {renderedList} */}
        </div>
    )
}