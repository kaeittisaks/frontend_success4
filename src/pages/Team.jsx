
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, WordExport, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';
// Inject require module.
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt+QHJqVEZrW05FdUBAXWFKblR8R2BTf1lgFChNYlxTR3ZZQ15iQHpRc0NqXXZY;Mgo+DSMBPh8sVXJ1S0R+XVFPcUBDXnxLflF1VWRTfV16dFJWACFaRnZdQV1lSH1Sf0FhXHlXdnNT;ORg4AjUWIQA/Gnt2VFhiQlBEfVhdXGBWfFN0RnNedVxzflVBcDwsT3RfQF5jT39Qd0xnW3pYeXxRQA==;MjQxMDAzOUAzMjMxMmUzMDJlMzBhbk80T3ZTNkhoU3JFNjY2SHJyRUNKRWRBdldyalBVWUV6UXBoNTlaeU44PQ==;MjQxMDA0MEAzMjMxMmUzMDJlMzBJbFY4NHlBc3BqclU0WC8vYThYc0gzWFdESGpoK0k2SFBKakkvbzVuYTdzPQ==;NRAiBiAaIQQuGjN/V0d+Xk9FdlRFQmJKYVF2R2BJeFRyd19GZ0wxOX1dQl9gSXhSdURqXX1bd3RTRWY=;MjQxMDA0MkAzMjMxMmUzMDJlMzBrZENjV1lRWWNNdElCK1VNdzRLWjFLL3BDbC9ySExVTnhGSi9mdUx6bk5RPQ==;MjQxMDA0M0AzMjMxMmUzMDJlMzBFQzg0UTVhdW01eTEvTDBtdytkb1pIa2ZJdTYxNHlLdEV1SXN0WGdNM2V3PQ==;Mgo+DSMBMAY9C3t2VFhiQlBEfVhdXGBWfFN0RnNedVxzflVBcDwsT3RfQF5jT39Qd0xnW3pZcXFUQA==;MjQxMDA0NUAzMjMxMmUzMDJlMzBtaFVPTk1FNnF2ekhFSFI2TTQ2QUVyTTBEMVBBN0lWRnZoMjJWbWlmYkhrPQ==;MjQxMDA0NkAzMjMxMmUzMDJlMzBPM3pjdEViN1BBeFVvT2xGWXVVdEJGNUpZTHpGeEZEc0dqdlVRSHg3cmNnPQ==;MjQxMDA0N0AzMjMxMmUzMDJlMzBrZENjV1lRWWNNdElCK1VNdzRLWjFLL3BDbC9ySExVTnhGSi9mdUx6bk5RPQ==');

DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, WordExport);


function App() {
    let documenteditor;
    function save() {
        // Download the document in docx format.
        documenteditor.save('sample', 'Docx');
    }
    return (<div>
                <button onClick={save}>Save</button>
                <DocumentEditorComponent id="container" 
                height={'330px'} 
                ref={(scope) => { documenteditor = scope; }} 
                isReadOnly={false} 
                enableSelection
                enableEditor
                enableSfdtExport
                enableWordExport/>
            </div>);
}
export default App;
 // ReactDOM.render(<App />, document.getElementById('sample'));















