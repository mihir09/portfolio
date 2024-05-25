import "./ResumeRenderStyles.css";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Resume from "../assets/MihirResume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeRender = () => {
  return (
    <div className="resume-container">
      <div className="resume-viewer">
        <Document file={Resume}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={1.3}
          />
        </Document>
      </div>
      <a
        href="https://drive.google.com/file/d/1Vl4x-QexJahwyVDSie6WqaHfr4c1ckLp/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="resume-download-btn"
      >
        <button className="btn">Download</button>
      </a>
    </div>
  );
};
export default ResumeRender;
