// Libraries
import { Link } from 'react-router-dom'

// External CSS
import '../css/Detail.css'

// Icons
import View from '../Images/Icons/view.png'
import Profile from '../Images/Icons/profile.png'

// Components
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Time from '../Images/Icons/time.png'

const GuestDetail = () => {
  return (
    <div className="detail-container">
      <div className="side-navbar-container">
        <SideBar />
      </div>
      <div className='navbar-container'>
        <SearchBar />
      </div>

      <div className='detail-body'>
        <div className='detail-body-wrapper'>
          
          <div className='main-detail-video'>
            <div className='detail-video-head'>
              <video controls muted autoplay loop>
                <source src="" type="video/mp4"/>
              </video>
            </div>
            <h2>
              A title
            </h2>
            <div className='detail-body-video'>
              <img src={View} alt="view" className='view-detail'/>
              <p>
                100
              </p>
              <img src={Time} alt="view" className='view-detail' style={{width: '18px'}}/>
              <p>
                11 Mei 2022
              </p>
            </div>
            <hr style={{backgroundColor: 'white', height: '4px'}}/>
              <div className='profile-in-detail'>
                <Link className='profile-in-detail' to="/sign-in" style={{textDecoration: 'none'}}>
                  <img src={Profile} alt="profile" style={{width: '35px', marginRight: '10px'}}/>
                  <p>
                    User
                  </p>
                </Link>
              </div>
            <div className='description-detail'>
              <p>
                Some description
              </p>
            </div>
          </div>

          <div className='random-video'>
              <div className="home-card-detail" style={{position: 'relative',}}>
              <Link 
              to={`/detail-video/1`} 
              style={{
                textDecoration: 'none', color: 'white'
              }}>
                <div className="home-card-head">
                  <img src="" alt="videothumbnail" style={{height: '230px', marginBottom: '5px'}}/>
                  <h4>
                    User
                  </h4>
                </div>
              </Link>
                <div className="home-card-body">
                  <p
                  style={{
                    cursor: 'pointer'
                  }}
                  >
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
                      <p>12 Mei 2020</p>
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

export default GuestDetail