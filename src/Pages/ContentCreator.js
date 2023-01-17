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

const ContentCreator = () => {
  return (
    <div className="my-channel-container">
      <div className="side-navbar-container">
        <SideBar/>
      </div>
      <div className='navbar-container'>
        <SearchBar/>
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

                    {/* {
                        getChannelById?.photo ? (
                          <img src={getChannelById?.photo} alt="profile" style={{
                            width: '100px',
                            height: '100px'
                          }}/>
                        ) : ( */}
                          <img src={Profile} alt="profile" style={{
                            width: '100px',
                            height: '100px'
                          }}/>
                      {/* //   )
                      // } */}

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
                    <Link >
                      {/* {
                        channelId?.other_id ? (
                          <button 
                          style={{
                            backgroundColor: 'grey',
                            padding: '10px 20px',
                            fontSize: '18px',
                            fontWeight: 600,
                            color: 'white',
                            borderRadius: '5px',
                            border: '1px solid grey',
                          }}
                          onClick={(e) => handleUnsub.mutate(e)}
                          >
                            unsubscribe
                          </button>
                        ) : ( */}
                          <button>
                            Subscribe
                          </button>
                        {/* )
                      } */}
                    </Link>
                  </div>
                </div>
                <hr style={{
                  margin: '10px 0px',
                  backgroundColor: 'white',
                  height: '4px'
                }}/>
                <div className="my-channel-videos">
                {/* {
                  getChannelById?.video.map(video => ( */}
                    <div className="home-card">
                    <Link to={`/detail-video`} style={{textDecoration: 'none', color: 'white'}}>
                      <div className="home-card-head">
                        <img src="" alt="videothumbnail" style={{marginBottom: '10px'}}/>
                        <h4>
                          Make my self a billionare for 5 minutes straight
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
                            <p>100</p>
                          </div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <img src={Time} alt="time" style={{width: '18px', height: '18px'}}/>
                            <p>12 agustus 203</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* ))
              } */}
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ContentCreator