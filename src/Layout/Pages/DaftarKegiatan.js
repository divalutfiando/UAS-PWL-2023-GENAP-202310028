import React, { useEffect, useState } from "react";
import slider from "../../Assets/slider.jpg";
import slider3 from "../../Assets/slider3.jpg";
import "../../css/DaftarKegiatan.css";

export default function DaftarKegiatan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/form");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          maxWidth: "100%"
        }}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider} className="d-block w-100" alt="Slider 1" />
          </div>

          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="Slider 2" />
          </div>
        </div>
      </div>

      <div className="row">
        {data.length > 0 &&
          data.map((v, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={"https://mbkm.unila.ac.id/wp-content/uploads/2021/06/MBKM-Unila.jpg"}
                  className="card-img-top"
                  alt={v.judul}
                />
                <div className="card-body">
                  <h5 className="card-title">{v.judul}</h5>
                  <p className="card-text">{v.deskripsi}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
