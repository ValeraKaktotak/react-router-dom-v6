import { useParams } from "react-router-dom"

export const EditPage = () => {
    const {id} = useParams()
    return (
        <div>
            Edit {id}
        </div>
    )
}