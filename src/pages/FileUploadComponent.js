import React from 'react';
import FileReader from 'react-file-reader';

const FileUploadComponent = ({ onFileUpload }) => {
  const handleFileRead = (e) => {
    const content = e.target.result;
    onFileUpload(content);
  };

  return (
    <FileReader handleFiles={handleFileRead} fileTypes=".docx">
      <button>เลือกไฟล์</button>
    </FileReader>
  );
};

export default FileUploadComponent;
