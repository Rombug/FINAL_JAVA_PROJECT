import {useParams} from "react-router-dom";

const UpdateTransport = () => {
    const {transportId} = useParams();
    return(
        <div>update TTP with this id -> {transportId}</div>
    )
}

export default UpdateTransport;