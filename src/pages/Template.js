import { Helmet } from 'react-helmet-async';
import { Link} from 'react-router-dom';
// @mui
import {
  Card,
  Container,
} from '@mui/material';



export default function UserPage() {
 
  return (
    <div>
      <Helmet>
        <title> Template | Super Hr </title>
      </Helmet>

      <Container >
        
         
          <div className="draft clip-contents">
      <div className="group-253">
        <div className="group-833">
          

          
          <div className="frame-464">
            <div className="frame-140">
              <p className="create-anew-or-edit-temp">
                Create a new or edit Template
              </p>
              <p className="start-creating-your-tem">
                Start creating your template by collecting the most relevant
                type
              </p>
            </div>

            <div className="frame-463 card">
           <div className="frame-40   clip-contents" >
           <Link to="/create">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v3xrz7qche-817%3A325?alt=media&token=2075ef7d-38e1-4e8f-a1f3-40eef477d9e5"
                      alt="Not Found"
                      className="plus"
                    />
                    <p type="button"  className="blank-template">Blank template</p>
                    </Link>
                  <p className="create-customs-templat">
                    Create customs template as your required
                  </p>
              </div>
              <div className="frame-142 clip-contents">
                 <Link to="../Import">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v3xrz7qche-817%3A333?alt=media&token=372103ff-f5bf-4a37-941a-0eef0b234551"
                      alt="Not Found"
                      className="upload"
                    />
                    <p className="import-your-file">Import your file</p>
                    </Link>
                  <p className="to-upload-your-docs-or-pd">
                    To upload your DOCs or PDFs from your device
                  </p>
              </div>
              <div className="frame-143 clip-contents">
                 
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v3xrz7qche-817%3A342?alt=media&token=a2ba7d17-0684-4d5e-854b-649a62fdf6be"
                      alt="Not Found"
                      className="link"
                    />
                    <p className="embed-the-link">Embed the link</p>
             
                  <p className="works-with-links-of-pdfs">
                    Works with links of PDFs, Google Drive, and more...
                  </p>
              </div>
            </div>
          </div>
          <div className="frame-466">
            <div className="frame-141">
              <p className="your-created-templates">Your created templates</p>
              <p className="your-templates-will-be-a">
                your templates will be appeared here
              </p>
            </div>
            <div className="frame-465 card">
              <div className="frame-43 clip-contents">
               <Link to="../Doctemplate"> <p className="frame-460">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v3xrz7qche-817%3A354?alt=media&token=4a27d2d1-0d1b-4c6d-b137-f9a378857af2"
                    alt="Not Found"
                    className="file-text-1"
                  />
                  <p  className="employee-contracts">Employee contracts</p>
                </p></Link>
              </div>
              <div className="frame-44 clip-contents">
                <div className="frame-461">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v3xrz7qche-817%3A363?alt=media&token=9fce92a9-1ef8-43d0-8a1f-8b4b995ac130"
                    alt="Not Found"
                    className="file-text-2"
                  />
                  <p className="ndas">NDAs</p>
                </div>
              </div>
              <div className="frame-45 clip-contents">
                <div className="frame-462">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v3xrz7qche-817%3A372?alt=media&token=a23a83e5-fb1a-4788-b46d-cf68dd65565b"
                    alt="Not Found"
                    className="file-text-3"
                  />
                  <p className="client-contracts">Client contracts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
      </Container>

     
    </div>
  );
}
