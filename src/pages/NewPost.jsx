import { useAuth } from "hook/useAuth"

export const NewPost = () => {
    const {user} = useAuth()
    return(
        <div>
            <h1>Hello {user}!!!</h1>
            Add new post...
        </div>
    )
}