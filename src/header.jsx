import './style.css';
import image from './image.png';

function Header() {
    return (
        <div className="Header">
            <div style={{display: "flex"}}>
            <img src={image} style={{height: "37px", marginTop: "15px"}} />
            <p style={{color: "white", fontSize: "20px", marginLeft: "10px"}} >Promote your music</p>
            </div>
            <div style={{display: "flex"}}>
                <form action="mainpage.html">
                <button style={{marginTop: "20px", marginRight: "10px", height: "30px", width: "80px", borderRadius: "20px"}}>Go back</button>
                </form>
                <input type="text" placeholder="Search for an album" style={{width: "243px", height: "33px", marginTop: "15px", marginRight: "20px"}}/>
            </div>
        </div>
    );
}
export default Header;





