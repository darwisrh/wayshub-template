// Libraries
import { Link } from "react-router-dom"

// Components
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar"

// Icons
import View from '../Images/Icons/view.png'
import Time from '../Images/Icons/time.png'

// External CSS
import '../css/Home.css'

// const minWidth = {
//   display: 'flex',
//   justifyContent: 'start',
//   width: '1100px',
//   transition: '0.5s',
//   position: 'relative',
//   left: '280px'
// }

// const maxWidth = {
//   display: 'flex',
//   justifyContent: 'start',
//   position: 'relative',
//   left: '30px',
//   transition: '0.5s',
// }

const Home = () => {
  return (
    <div className="home-container">
      <div className="side-navbar-container">
        <SideBar/>
      </div>
      <div className='navbar-container'>
        <SearchBar/>
      </div>
      <div className="home-body">
        <div className="home-body-wrapper">
              <div className="home-card">
              <Link
              to={`/detail-video/1`}
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
                  <p
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: '#555555'
                    }}>
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
                      <p>22 Januari 2019</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Home