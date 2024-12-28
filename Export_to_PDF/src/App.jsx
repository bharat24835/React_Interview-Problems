import { useState  , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component'
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  const componentRef = useRef();

  const handleExport = () => {
    const input = componentRef.current;
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
    });

    html2canvas(input, {
      scale: 2, // Increase resolution
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      // Calculate dimensions to fit the page
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;
      const pdfWidth = pageWidth;
      const pdfHeight = pageWidth / ratio; // Maintain aspect ratio of the image

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      // Save PDF
      pdf.save('component.pdf');
    });
  };
  return (
    <>
      <div>
      {/* <button onClick={handlePrint}>Export to PDF</button> */}
      <button onClick={handleExport}>Export to PDF</button>
      <div ref={componentRef} style={{ width: '595px', height: '842px' }}>
        <p>There is nothing to show</p>
        <Component />
      </div>
    </div>
    </>
  )
}

export default App
