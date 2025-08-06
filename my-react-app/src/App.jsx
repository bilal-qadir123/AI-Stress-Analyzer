import React, { useEffect, useState } from 'react';
import { EmailProvider, useEmail } from './EmailContext';
import AppRoutes from './AppRoutes';

function App() {
  const [data, setData] = useState("");
  const { email } = useEmail();
  console.log("Email from App:", email);

  useEffect(() => {
    fetch("http://localhost:5000/") 
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.message);  
        console.log("Data:", data.message); 
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <EmailProvider>
      <AppRoutes />
    </EmailProvider>
  );
}

export default App;
