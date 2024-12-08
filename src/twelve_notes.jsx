import './style.css';
import twelve_notes from './12notes.jpeg';

function Twelve_notes() {
    return (
        <div className="TwelveNotes">
            <div style={{width: "1626px", height: "791px"}}>
                <div style={{width: "1626px", height: "245px", display: "flex"}}>
                    <img src={twelve_notes} alt="picture" style={{height: "85px", borderRadius: "50%", marginLeft: "574px", marginTop: "100px"}} />
                    <p style={{marginTop: "115px", marginLeft: "25px", fontSize: "50px"}}>12 Notes</p>
                </div>
            <div style={{display: "flex", paddingLeft: "37px"}}>
                <div style={{width: "846px", height: "547px"}}>
                    <ol style={{fontSize: "48px"}}>

                        {/* replace html w/ jsx? */}
                        <li><a href="A1.html" class="plsongA">12 Notes</a></li>
                        <li><a href="A2.html" class="plsongA">Ways To Go</a></li>
                        <li><a href="A3.html" class="plsongA">In A Little</a></li>
                        <li><a href="A4.html" class="plsongA">Different Kind Of Beautiful</a></li>
                        <li><a href="A5.html" class="plsongA">Pick Me</a></li>
                        <li><a href="A6.html" class="plsongA">Sacrifice Tomorrow</a></li>
                    
                    </ol>
                </div>
                <div style={{width: "780px", height: "547px"}}>
                    <ol start="7" style={{fontSize: "48px"}}>
                        
                        {/* replace html w/ jsx? */}
                        <li><a href="A7.html" class="plsongA">I Sent My Therapist To Therapy</a></li>
                        <li><a href="A8.html" class="plsongA">The Arsonist</a></li>
                        <li><a href="A9.html" class="plsongA">Lead Me To Water</a></li>
                        <li><a href="A10.html" class="plsongA">By Now</a></li>
                        <li><a href="A11.html" class="plsongA">King Size Bed</a></li>
                        <li><a href="A12.html" class="plsongA">Loves The Ones Who Leave</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Twelve_notes;
