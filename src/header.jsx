import './style.css';
import image from './image.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate(); // Хук для навигации

    return (
        <div className="Header">
            <div style={{ display: "flex" }}>
                <img src={image} style={{ height: "37px", marginTop: "15px" }} alt="Logo" />
                <p style={{ color: "white", fontSize: "20px", marginLeft: "10px" }}>Promote your music</p>
            </div>
            <div style={{ display: "flex" }}>
                <button 
                    onClick={() => navigate(-1)} // обработчик события
                    style={{
                        marginTop: "20px",
                        marginRight: "10px",
                        height: "30px",
                        width: "80px",
                        borderRadius: "20px",
                        cursor: "pointer",
                        backgroundColor: "white",
                        color: "black",
                        border: "none"
                    }}
                >
                    Go back
                </button>
                <input 
                    type="text" 
                    placeholder="Search for a song" 
                    style={{
                        width: "243px", 
                        height: "33px", 
                        marginTop: "15px", 
                        marginRight: "20px"
                    }} 
                />
            </div>
        </div>
    );
}

export default Header;





