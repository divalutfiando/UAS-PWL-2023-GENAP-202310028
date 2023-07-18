import React from "react";
import slider from "../../../src/Assets/slider.jpg";
import slider2 from "../../../src/Assets/slider2.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/Infokegiatan.css";

export default function DaftarKegiatan() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        style={{
          marginTop: "10px",
        }}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider} className="d-block w-100" alt="Slider 1" />
          </div>

          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="Slider 2" />
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "justify",
          padding: "10px",
          backgroundColor: "grey",
          borderRadius: "0 0 10px 10px",
          fontSize: "12px",
        }}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>

      <div>
        <h3 className="text-dark mt-4">Daftar-Daftar Kegiatan Akademik</h3>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://www.eventhunterindonesia.com/wp-content/uploads/2018/09/Medical-weed-business-seminar1-1024x493.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Seminar atau Webinar</h5>
              <p className="card-text">
                Event Seminar
              </p>
            </div>
            <div className="card-footer">
              <Link to={"/formkegiatan"}>
                <small className="text-muted">Daftar Sekarang</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://assets.pikiran-rakyat.com/crop/0x236:1080x900/x/photo/2021/06/19/647453517.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Kampus Merdeka</h5>
              <p className="card-text">
              Kampus Merdeka adalah cara terbaik berkuliah. 
Dapatkan kemerdekaan untuk membentuk masa depan yang 
sesuai dengan aspirasi kariermu.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Daftar Sekarang</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://www.gamelab.id/uploads/news/berita-2478-mengenal-apa-itu-program-studi-independen-bersertifikat-sib-kampus-merdeka-20230529-184055.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Studi Independen Bersertifikat</h5>
              <p className="card-text">
              Studi Independen Bersertifikat atau SIB adalah salah satu program yang termasuk ke dalam MSIB Kampus Merdeka. Program SIB memiliki beberapa keunggulan yang bisa menjadi alasan kenapa kamu harus memilihnya.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Daftar Sekarang</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
