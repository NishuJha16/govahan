// ExcelReader.js
import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

const ExcelReader = () => {
  const [excelData, setExcelData] = useState(null);

  const fetchData = async () => {
    try {
      // Replace 'YOUR_PUBLIC_EXCEL_FILE_URL' with the actual public Excel file URL
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/19iSN5IH_bClpC3MAk6bR1kt1x5kpwV3k75yYzmmfd4c/edit?usp=sharing",
        {
          responseType: "arraybuffer",
        }
      );

      const data = new Uint8Array(response.data);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      setExcelData(jsonData);
    } catch (error) {
      console.error("Error fetching or reading Excel data:", error);
    }
  };

  return (
    <div>
      <h1>Excel Reader</h1>
      <button onClick={fetchData}>Fetch Excel Data</button>

      {excelData && (
        <div>
          <h2>Excel Data:</h2>
          <pre>{JSON.stringify(excelData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ExcelReader;
