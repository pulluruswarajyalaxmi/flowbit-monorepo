import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ display: 'flex', padding: 20 }}>
      <div style={{ width: '50%', borderRight: '1px solid #ccc' }}>
        <input type="file" onChange={onFileChange} />
        {file && (
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        )}
      </div>
      <div style={{ width: '50%', padding: 20 }}>
        <h2>Extracted Data (Demo)</h2>
        <p>Vendor: Demo Vendor</p>
        <p>Invoice No: INV-001</p>
        <p>Total: $100.00</p>
      </div>
    </div>
  );
                 }
