import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const ProfilePage = () => {

    const { setLoggedUser } = useContext(AuthContext)

    return (

        <h1>ESTE ES TU PERFILLLLLL</h1>
    )

}

export default ProfilePage