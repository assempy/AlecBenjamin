import './style.css';
import image from './image.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <div className="Header">
            <div style={{ display: "flex" }}>
                <img src={image} style={{ height: "37px", marginTop: "15px" }} alt="Logo" />
                <p style={{ color: "white", fontSize: "20px", marginLeft: "10px" }}>Promote your music</p>
            </div>
            <div style={{ display: "flex" }}>
                <button
                    onClick={() => navigate(-1)} // Возврат на предыдущую страницу
                    style={{
                        marginTop: "20px",
                        marginRight: "150px",
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
                {/* Поисковик закомментирован */}
                {/* <input
                    type="text"
                    placeholder="Search for a song"
                    value={searchQuery}
                    onChange={handleInputChange} // Обновляем состояние и выполняем поиск
                    style={{
                        width: "243px",
                        height: "33px",
                        marginTop: "15px",
                        marginRight: "20px"
                    }}
                /> */}
            </div>
        </div>
    );
}

export default Header;





