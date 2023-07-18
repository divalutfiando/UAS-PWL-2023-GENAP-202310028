import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormData = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/form');
      setFormData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Form Data</h1>
      <ul className="list-group">
        {formData.map((data, index) => (
          <li key={index} className="list-group-item">
            <div>
              <img
                src={`http://localhost:8080/api/form/${data.image}`}
                className="card-img-top"
                alt=".."
                style={{ height: "50%", width: "50%" }}
              />
            </div>
            <p className="mb-1">Name: {data.name}</p>
            <p className="mb-1">Email: {data.email}</p>
            <p className="mb-1">Message: {data.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormData;
