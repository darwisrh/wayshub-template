// Libraries
import { Link } from 'react-router-dom'
import { Form, FloatingLabel } from 'react-bootstrap'

// External CSS
import '../css/Detail.css'

// Icons
import View from '../Images/Icons/view.png'
import Profile from '../Images/Icons/profile.png'

// Components
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Time from '../Images/Icons/time.png'

const DetailPage = () => {
  return (
    <div className="detail-container">
      <div className="side-navbar-container">
        <SideBar/>
      </div>
      <div className='navbar-container'>
        <SearchBar/>
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
              Title
            </h2>
            <div className='detail-body-video'>
              <img src={View} alt="view" className='view-detail'/>
              <p>
                100
              </p>
              <img src={Time} alt="view" className='view-detail' style={{width: '18px'}}/>
              <p>
                15 Desember 2019
              </p>
            </div>
            <hr style={{backgroundColor: 'white', height: '4px'}}/>
              <div className='profile-in-detail'>
                <div
                className='profile-in-detail' style={{
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}>
                      <img 
                      src={Profile} 
                      alt="profile" 
                      style={{
                        width: '35px',
                        height: '35px', 
                        marginRight: '10px'
                      }}/>
                  <p>
                    User
                  </p>
                </div>
              </div>
            <div className='description-detail'>
              <p>
                Yoooooooooooooooo what's up
              </p>
            </div>
            <hr style={{backgroundColor: 'white', height: '4px'}}/>
            <div className='comment-section'>
              <div className='comment-profile'>
                <div className='profile-section'>
                      <img 
                      src={Profile} 
                      alt="profile" 
                      style={{
                        width: '35px',
                        height: '35px', 
                        marginRight: '10px'
                      }}/>
                  <p>
                    User
                  </p>
                </div>
                <div>
                  <Form>
                    <FloatingLabel
                    controlId="floatingTextarea2" 
                    label="Description Channel">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        className='comment-control'
                      />
                    </FloatingLabel>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'end'
                    }}>
                      <button className='send-button' type='submit'>Send</button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <hr style={{backgroundColor: 'white', height: '4px'}}/>
            <div className='comments-container'>
                <div className='comment-prof-container' style={{
                  marginBottom: '40px'
                }}>
                  <div className='profile-commented'>
                      <img 
                      src={Profile} 
                      alt="profile" 
                      style={{
                        width: '35px',
                        height: '35px', 
                        marginRight: '10px'
                      }}/>
                    <p>
                      User
                    </p>
                  </div>
                  <div className='comments-value'>
                    <p>
                      A comment
                    </p>
                  </div>
                </div>
            </div>
          </div>

          <div className='random-video'>
              <div className="home-card-detail">
              <Link
              to={`/detail-video/1`}
              style={{
                textDecoration: 'none', 
                color: 'white'
              }}
              >
                <div className="home-card-head">
                  <img src="" alt="videothumbnail" style={{height: '230px', marginBottom: '5px'}}/>
                  <h4>
                    A title
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
                      <p>14 January 1943</p>
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

export default DetailPage