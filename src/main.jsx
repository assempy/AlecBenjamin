import './style.css';
import alex from './alex.jpeg';
import twelve_notes from './12notes.jpeg';
import second_wind from './2wind.jpeg';

function Header() {
    return (
        <div className="Main"> 
            <div style={{width: "1626px", height: "791px"}}>
                <div style={{width: "1626px", height: "245px", display: "flex"}}>
                    <img 
                        src={alex} 
                        alt="picture" 
                        style={{height: "85px", borderRadius: "50%", marginLeft: "453px", marginTop: "100px"}} 
                    />
                    <p style={{marginTop: "115px", marginLeft: "25px", fontSize: "50px"}}>Songs of Alec Benjamin</p>
                </div>
                <div style={{display: "flex", paddingLeft: "37px"}}>
                    <div style={{width: "846px", height: "547px", fontSize: "40px", paddingLeft: "258px", display: "flex", flexDirection: "column"}}>
                        <img src={twelve_notes} style={{height: "400px", width: "400px"}}/>
                        <a href="12notes.html" className="plsongA" style={{marginTop: "20px", marginLeft: "25px"}}>12 Notes</a>
                    </div>
                    <div style={{width: "780px", height: "547px", fontSize: "40px", display: "flex", flexDirection: "column"}}>
                        <img src={second_wind} style={{height: "400px", width: "400px"}} />
                        <a href="2wind.html" className="plsongA" style={{marginTop: "20px", marginLeft: "20px"}}>These Two Windows</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;    
