import './style.css';
import image from './image.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(""); // Для хранения поискового запроса
    const [error, setError] = useState(""); // Для ошибок, если что-то пойдет не так

    const handleSearch = async (query) => {
        if (query.trim()) {
            try {
                // Отправляем запрос на сервер для поиска по названию песни или альбому
                const response = await fetch(`http://localhost:5000/songs?search=${query}`);
                if (!response.ok) {
                    throw new Error("Ошибка поиска песни");
                }

                // Обрабатываем ответ
                const data = await response.json();
                if (data.songs.length > 0) {
                    const song = data.songs[0]; // Берём первую песню из результатов
                    navigate(`/song/${song.id}`); // Перенаправляем пользователя на страницу с ID песни
                } else {
                    setError("Песня не найдена");
                }
            } catch (error) {
                setError(error.message); // Устанавливаем ошибку
            }
        }
    };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query); // Обновляем поисковый запрос
        handleSearch(query); // Выполняем поиск
    };

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
                        marginRight: "30px",
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
                    value={searchQuery}
                    onChange={handleInputChange} // Обновляем состояние и выполняем поиск
                    style={{
                        width: "243px",
                        height: "33px",
                        marginTop: "15px",
                        marginRight: "20px"
                    }}
                />
            </div>

            {/* Выводим ошибки, если они есть */}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default Header;





