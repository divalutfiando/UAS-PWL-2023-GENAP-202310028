import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/Sidebars.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { NavLink } from "react-router-dom";
import ibik from "../../Assets/ibik.png";

export default function Sidebars(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuList = [
    { id: 1, name: "Daftar Kegiatan", path: "/daftarkegiatan", icon: "bi-house" },
    { id: 2, name: "Info Kegiatan", path: "/infokegiatan", icon: "bi-table" },
    { id: 3, name: "Tentang Kami", path: "/tentangkami", icon: "bi-question-circle" }
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid" >
      <div className="row flex-nowrap" style={{Position: "fixed"}}>
        <div className={`col-auto col-md-3 col-xl-2 px-0 sideawal ${menuOpen ? 'open' : ''}`}>
          <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white bgside">
            <button
              className="navbar-toggler d-flex align-items-center w-100 pb-3 mb-md-0 me-md-auto text-dark text-decoration-none text-center btnt"
              onClick={handleMenuToggle}
            >
              <span className="d-flex fs-5 d-none d-sm-inline pt-3 text-center align-middle tatas">
                <img src={ibik} alt=".." className="Libik align-middle" />
                IBI Kesatuan
              </span>
            </button>

            <ul className="nav nav-pills flex-column tmawal" id="menu">
              {menuList.map((v, index) => (
                <li className="nav-item text-decoration-none tisi" key={v.id}>
                  <NavLink className="nav-link align-middle px-0 text-decoration-none tmenu" to={v.path}>
                    <i className={`bi me-2 fs-5 text-white ${v.icon}`}></i>
                    {v.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
       <main style={{ flex: "1" }}>{props.children}</main>
      </div>
    </div>
  );
}
