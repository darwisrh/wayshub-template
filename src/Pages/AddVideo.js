// Libraries
import Form from 'react-bootstrap/Form'

// Components
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar"

// External CSS
import '../css/Edit.css'

const AddVideo = () => {
  return (
    <div className="edit-container">
      <div className="side-navbar-container">
        <SideBar/>
      </div>
      <div className='navbar-container'>
        <SearchBar/>
      </div>
      <div className="edit-body">
        <div className="edit-body-wrapper">

          <div className="main-edit-channel">
            <div className="header-edit">
              <h2>Add Video</h2>
            </div>
            <Form>
            <Form.Group className="mb-3 edit-form" controlId="formBasicEmail">
              <Form.Control 
              className="form-edit-control-top" 
              type="text" 
              placeholder="Title"
              style={{
                marginRight: '20px'
              }}
              />
              <Form.Control 
              className="form-edit-control-top edit-file" 
              type="file"
              />
            </Form.Group>
            <Form.Group style={{zIndex: 'inherit'}} className="mb-3" >
              <Form.Control
                as="textarea"
                className="form-edit-control-top"
                placeholder="Description"
                style={{ height: '250px' }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control 
                className="form-edit-control-top edit-file" 
                type="file"
                />
            </Form.Group>
            <button className="save-button" type="submit">Add</button>
            </Form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddVideo