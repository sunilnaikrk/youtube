import YTlogo from '../images/youtube_logo_icon_168737.png'
import YTwatch from '../images/movie-symbol-of-video-camera_icon-icons.com_72981.png'
import YTbell  from '../images/alarm-bell_icon-icons.com_68596.png'
import YTpr from '../images/user_person_profile_avatar_icon_190943.png'
import '../styles/navbar.css'

import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <div className="navbar">
            <div className="logo">
                <img width={50} src={YTlogo} alt="" />
            </div>
            <div className="searchbar">
            <input placeholder='Search videos' type="search" />
            </div>

            <div className="useroption">
                <div className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/add-Video">Add video</Link>
                </div>

                {/* <img height={25} src={YTwatch} alt="" />
                <img height={25} src={YTbell} alt="" />
                <img height={25} src={YTpr} alt="" /> */}
                <div className="profile">
                <h4>S</h4>
                </div>
            </div>
        </div>
    )
    
}
export default Navbar;