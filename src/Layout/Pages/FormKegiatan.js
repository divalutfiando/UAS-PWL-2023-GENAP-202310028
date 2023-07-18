import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('image', selectedImage);

    try {
      await axios.post('http://localhost:8080/api/form', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Data berhasil dikirim!');
      setName('');
      setEmail('');
      setMessage('');
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  // UNTUK KEMBALI KE HALAMAN SEBELUMNYA
  const handleBack = () => {
    window.history.back(); // Go back to the previous page
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop: "2rem"}}>
      <button className="back-button btn btn-primary" style={{width: "60px", height: "30px", marginTop: "3px", paddingTop: "3px"}} onClick={handleBack}>
        Back
      </button>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          className="form-control"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          className="form-control"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          className="form-control"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          className="form-control-file"
          type="file"
          accept="image/*"
          id="image"
          onChange={handleImageChange}
          required
        />
      </div>
      <button className="form-button btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
