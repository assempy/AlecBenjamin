import './style.css';
import two_wind from './2wind.jpeg';
import B6 from './B6.jpg';
import React from 'react';

function Jesus_in_la_song () {
    const lyrics = [
        "Well, I shook hands with the devil",
        "Down on the south side",
        "And he bought us both a drink",
        "With a pad and a pencil sat by his side",
        "I said, 'Tell me what you think'",
        "I've been looking for my savior, looking for my truth",
        "I even asked my shrink",
        "He brought me down to his level",
        "Said, 'Son, you're not special'",
        "You won't find him where you think",
        "You won't find him down on sunset",
        "Or at a party in the hills",
        "At the bottom of the bottle",
        "Or when you're tripping on some pills",
        "When they sold you the dream you were just 16",
        "Packed a bag and ran away",
        "And it's a crying shame you came all this way",
        "Cause you won't find Jesus in LA",
        "And it's a crying shame you came all this way",
        "Cause you won't find Jesus in LA",
        "Took a sip of his whiskey",
        "Said, 'Now that you're with me'",
        "Well, I think that you should stay",
        "Yeah, I know you've been busy",
        "Searching through the city",
        "So let me share the way",
        "I know I'm not your savior",
        "Know I'm not your truth",
        "But I think we could be friends",
        "He said 'Come down to my level'",
        "Hang out with the devil",
        "Let me tell you, in the end",
        "You won't find him down on sunset",
        "Or at a party in the hills",
        "At the bottom of the bottle",
        "Or when you're tripping on some pills",
        "When they sold you the dream you were just 16",
        "Packed a bag and ran away",
        "And it's a crying shame you came all this way",
        "Cause you won't find Jesus in LA",
        "And it's a crying shame you came all this way",
        "Cause you won't find Jesus in LA",
        "And that is when I knew that it was time to go home",
        "And that is when I realized that I was alone",
        "And all the vibrant colors from the lights fade away",
        "And I don't care what they say",
        "You won't find him down on sunset",
        "Or at a party in the hills",
        "At the bottom of the bottle",
        "Or when you're tripping on some pills",
        "When they sold you the dream you were just 16",
        "Packed a bag and ran away",
        "And it's a crying shame you came all this way",
        "Cause you won't find Jesus in LA",
        "I won't find him down on sunset",
        "Or at a party in the hills",
        "At the bottom of the bottle",
        "Or when I'm tripping on some pills",
        "When they sold me the dream I was just 16",
        "Packed my bag and ran away",
        "And it's a crying shame I came all this way",
        "Cause I won't find Jesus in LA",
        "And it's a crying shame I came all this way",
        "Cause I won't find Jesus in LA"
    ];

    return (
        <div className="JesusInLA">
            <div style={{ width: 1626, height: 1500 }}>
                <div style={{ width: 1626, height: 245, display: "flex" }}>
                    <img
                        src={two_wind}
                        alt="picture"
                        style={{
                            height: 85,
                            borderRadius: "50%",
                            marginLeft: 500,
                            marginTop: 100
                        }}
                    />
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
                        Jesus in LA
                    </p>
                </div>
                <div style={{ display: "flex", paddingLeft: 37 }}>
                    <div style={{ width: 653 }}>
                        <p className="lyrics">
                            {lyrics.map((line, index) => (
                                <span key={index}>{line}<br /></span>
                            ))}
                        </p>
                    </div>
                    <div style={{ width: 975, alignContent: "center" }}>
                        <img
                            src={B6}
                            alt="picture"
                            style={{ width: 700, marginLeft: 200 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jesus_in_la_song;