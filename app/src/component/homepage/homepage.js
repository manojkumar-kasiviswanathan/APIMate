import React from 'react';
import { Button } from 'react-bootstrap';
 import DraggablePanel from '../sidepanel/DraggablePanel';
 import 'bootstrap/dist/css/bootstrap.min.css';

 function HomePage() {

 return (
    <div className="App">
       <h1 className="text-center mt-4">React Side Panel</h1>
       <DraggablePanel />
     </div>
   );
 }
 
 export default HomePage;