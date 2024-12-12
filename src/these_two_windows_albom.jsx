import './style.css';
import two_wind from './2wind.jpeg';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function These_Two_Windows () {
    const songs = [ 
        { id: 1, title: "Mind Is A Prison", link: "/mind_is_a_prison_song" },
        { id: 2, title: "Demons", link: "/demons_song" },
        { id: 3, title: "Oh My God", link: "/oh_my_god_song" },
        { id: 4, title: "The Book of You & I", link: "/the_book_of_you_&_i_song" },
        { id: 5, title: "Match In The Rain", link: "/match_in_the_rain_song" },
        { id: 6, title: "Jesus In LA", link: "/jesus_in_la_song" },
        { id: 7, title: "I’m Not A Cynic", link: "/i’m_not_a_cynic_song" },
        { id: 8, title: "Alamo", link: "/alamo_song" },
        { id: 9, title: "Must Have Been The Wind", link: "/must_have_been_the_wind_song" },
        { id: 10, title: "Just Like You", link: "/just_like_you_song" },
    ];
    const navigate = useNavigate();

    const handleSong = (event, link) => {
        event.preventDefault();
        console.log(link);
        navigate(link);
    };

    // Разделение массива на две части
    const firstColumn = songs.slice(0, 5);
    const secondColumn = songs.slice(5);

    return (
        <div className="TheseTwoWindows">
            <div style={{ width: "1626px", height: "791px" }}>
                <div style={{ width: "1626px", height: "245px", display: "flex" }}>
                    <img
                        src={two_wind}
                        alt="picture"
                        style={{
                            height: "85px",
                            borderRadius: "50%",
                            marginLeft: "574px",
                            marginTop: "100px",
                        }}
                    />
                    <p style={{ marginTop: "115px", marginLeft: "25px", fontSize: "50px" }}>
                        These Two Windows
                    </p>
                </div>
                <div style={{ display: "flex", paddingLeft: "37px" }}>
                    {/* Первый столбец */}
                    <div style={{ width: "846px", height: "547px" }}>
                        <ol style={{ fontSize: "48px" }}>
                            {firstColumn.map((song) => (
                                <li key={song.id}>
                                    <a
                                        href="#"
                                        onClick={(event) => handleSong(event, song.link)}
                                        className="MindIsAPrison"
                                    >
                                        {song.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                    {/* Второй столбец */}
                    <div style={{ width: "780px", height: "547px" }}>
                        <ol start="6" style={{ fontSize: "48px" }}>
                            {secondColumn.map((song) => (
                                <li key={song.id}>
                                    <a
                                        href="#"
                                        onClick={(event) => handleSong(event, song.link)}
                                        className="JesusInLA"
                                    >
                                        {song.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default These_Two_Windows;