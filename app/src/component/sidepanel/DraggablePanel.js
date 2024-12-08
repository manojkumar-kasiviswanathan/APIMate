import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import './DraggablePanel.css';
import FolderPicker from '../openFolder/FolderPicker';

const DraggablePanel = () => {
  const [panelWidth, setPanelWidth] = useState(300); // Default width of the panel
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 200), 600); // Restrict width between 200px and 600px
      setPanelWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="draggable-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Left Panel */}
      <div
        className="left-panel"
        style={{ width: `${panelWidth}px` }}
      >
       <FolderPicker />
        {/* <p>This is the draggable panel.</p> */}
      </div>

      {/* Resizer */}
      <div
        className="resizer"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></div>

      {/* Right Panel */}
      <div className="right-panel">
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default DraggablePanel;
