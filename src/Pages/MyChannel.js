// Libraries
import { Link } from "react-router-dom"

// Components
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar"

// External CSS
import '../css/MyChannel.css'

// Images
import Banner from '../Images/banner.webp'
import Profile from '../Images/Icons/profile-100px.png'
import View from '../Images/Icons/view.png'
import Time from '../Images/Icons/time.png'

const MyChannel = () => {
  return (
    <div className="my-channel-container">
      <div className="side-navbar-container">
        <SideBar />
      </div>
      <div className='navbar-container'>
        <SearchBar />
      </div>

      <div className="my-channel-body">
        <div className="my-channel-wrapper">
          
          <div className="my-channel-main">
            <div className="my-channel-banner">
              <img src={Banner} alt="banner" />
            </div>
            <div className="my-channel-body">
              <div className="my-channel-body-wrapper">
                
                <div className="my-channel-body-header">
                  <div className="channel-left-side">
                        <img src={Profile} alt="profile" style={{
                          width: '100px',
                          height: '100px'
                        }}/>
                    <div className="channel-left-text">
                      <p>
                        User
                      </p>
                      <p>
                        100k Subscriber
                      </p>
                    </div>
                  </div>
                  <div className="channel-right-side">
                    <Link to="/edit-channel">
                      <button>Edit Channel</button>
                    </Link>
                  </div>
                </div>
                <div className="my-channel-body-body">
                  <Link to="/my-channel" style={{textDecoration: 'none'}}>
                    <p style={{color: '#FF7A00'}}>Video</p>
                  </Link>
                  <Link to="/my-channel/description" style={{textDecoration: 'none'}}>
                    <p>Description Channel</p>
                  </Link>
                </div>
                <hr style={{
                  margin: 0,
                  backgroundColor: 'white',
                  height: '4px'
                }}/>
                <div className="my-channel-videos">
                    <div className="home-card">
                    <Link 
                    to={`/detail-video`} 
                    style={{
                      textDecoration: 'none', 
                      color: 'white'
                    }}>
                      <div className="home-card-head">
                        <img src="" alt="videothumbnail" style={{marginBottom: '10px'}}/>
                        <h4>
                          Some title
                        </h4>
                      </div>
                    </Link>
                      <div className="home-card-body">
                        <p>
                          User
                        </p>
                        <div className="view-time">
                          <div style={{
                            display: 'flex'
                          }}>
                            <img src={View} alt="view" style={{width: '24px', height: '24px'}}/>
                            <p>100.000</p>
                          </div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <img src={Time} alt="time" style={{width: '18px', height: '18px'}}/>
                            <p>1 February 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default MyChannel