import { useNavigate } from "react-router";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/')
        }
    }

    return (
        <button onClick={handleBackButton}>
            🔙 GO BACK
        </button>
    )
}

export default BackButton;