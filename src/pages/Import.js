import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const MyComponent = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        enableOfficeEditing: true,
      },
      viewer.current,
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">.</div>
      <div className="webviewer" ref={viewer} style={{ height: '100vh' }}>.</div>
    </div>
    
  );
};

export default MyComponent;








/* import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [filename, setFilename] = useState('');

  const handleGenerateDocument = () => {
    axios.get('http://localhost:5000/generate')
      .then(response => {
        const { filename } = response.data;
        setFilename(filename);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleGenerateDocument}>Generate Document</button>
      {filename && (
        <a href={`http://localhost:5000/${filename}`} download>
          Download Document
        </a>
      )}
    </div>
  );
}

export default App;
 */