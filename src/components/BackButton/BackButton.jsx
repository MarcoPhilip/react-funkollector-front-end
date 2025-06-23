import { useNavigate } from "react-router";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)}>
            🔙 GO BACK
        </button>
    )
}

export default BackButton;