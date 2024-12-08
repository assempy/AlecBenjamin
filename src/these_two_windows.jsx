import './style.css';
import two_wind from './2wind.jpeg';

function These_Two_Windows () {
    return (
        <div className="TheseTwoWindows">
            <div style={{width: "1626px", height: "791px"}}>
                <div style={{width: "1626px", height: "245px", display: "flex"}}>
                    <img src={two_wind} alt = "picture" style={{height: "85px", borderRadius: "50", marginLeft: "538px", marginTop: "100px"}}/>
                    <p style={{marginTop: "115px", marginLeft: "25px", fontSize: "50px"}}>These Two Windows</p>
                </div>
                <div style={{display: "flex", paddingLeft: "37px"}}>
                    <div style={{width: "846px", height: "547px"}}>
                        <ol style={{fontSize: "48px"}}>


                            <li><a href="B1.html" class="plsongA">Mind Is A Prison</a></li>
                            <li><a href="B2.html" class="plsongA">Demons</a></li>
                            <li><a href="B3.html" class="plsongA">Oh My God</a></li>
                            <li><a href="B4.html" class="plsongA">The Book of You & I</a></li>
                            <li><a href="B5.html" class="plsongA">Match In The Rain</a></li>

                            
                        </ol>
                    </div>


                    <div style={{width: "780px", height: "547px"}}>
                        <ol start="6" style={{fonSize: "48px"}}>

                            <li><a href="B6.html" class="plsongA">Jesus In LA</a></li>
                            <li><a href="B7.html" class="plsongA">I’m Not A Cynic</a></li>
                            <li><a href="B8.html" class="plsongA">Alamo</a></li>
                            <li><a href="B9.html" class="plsongA">Must Have Been The Wind</a></li>
                            <li><a href="B10.html" class="plsongA">Just Like You</a></li>


                        </ol>
                    </div>
                </div>
            </div>
        </div>      
    );
}
export default These_Two_Windows;      