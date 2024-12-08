import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FolderPicker = () => {
  const [fileTree, setFileTree] = useState([]);

  const handleFolderSelection = (event) => {
    const files = Array.from(event.target.files);
    const tree = buildFileTree(files);
    setFileTree(tree);
  };

  const buildFileTree = (files) => {
    const tree = {};

    files.forEach((file) => {
      const pathParts = file.webkitRelativePath.split("/");
      pathParts.reduce((acc, part, index) => {
        if (!acc[part]) {
          acc[part] = index === pathParts.length - 1 ? file.name : {};
        }
        return acc[part];
      }, tree);
    });

    return tree;
  };

  const renderTree = (node) => {
    if (typeof node === "string") {
      return <li key={node}>📄 {node}</li>;
    }
    return (
      <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
        {Object.entries(node).map(([name, child]) => (
          <li key={name}>
            {typeof child === "string" ? (
              <>📄 {name}</>
            ) : (
              <>
                📁 {name}
                {renderTree(child)}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container my-4">
      <h1>Folder Picker</h1>
      <div className="mb-3">
        <label className="btn btn-primary">
          Open Folder
          <input
            type="file"
            webkitdirectory="true"
            multiple
            style={{ display: "none" }}
            onChange={handleFolderSelection}
          />
        </label>
      </div>
      <div className="mt-4">
        <h4>Folder Hierarchy:</h4>
        {fileTree.length === 0 ? (
          <p>No folder selected</p>
        ) : (
          <div>{renderTree(fileTree)}</div>
        )}
      </div>
    </div>
  );
};

export default FolderPicker;
