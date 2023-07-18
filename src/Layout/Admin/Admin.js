import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Form.css';

const Form = () => {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);
    formData.append('image', selectedImage);

    try {
      await axios.post('http://localhost:8080/api/form', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Data berhasil dikirim!');
      setJudul('');
      setDeskripsi('');
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <div className="form-group">
        <h1 className='text-center'>Form Isi Data Kegiatan</h1>
        <label htmlFor="judul">Judul:</label>
        <input
          className="form-control"
          type="text"
          id="judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="deskripsi">Deskripsi:</label>
        <textarea
          className="form-control"
          id="deskripsi"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          className="form-control"
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
