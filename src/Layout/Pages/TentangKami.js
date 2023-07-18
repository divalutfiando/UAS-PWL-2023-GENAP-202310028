import React from 'react';
import '../../css/TentangKami.css';
import ibikgedung from "../../Assets/ibikgedung.jpg"

const TentangKami = () => {
  return (
    <div className="container" style={{marginTop: "5rem"}}>
      <div className="row">
        <div className="col-md-6">
          <img
            src={ibikgedung}
            alt="Tentang Kami"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Tentang Kami</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            ipsum lorem. Nullam eu fermentum mauris, eget sagittis enim. Duis
            facilisis sem vitae lorem pharetra consectetur. Phasellus pharetra,
            velit id vulputate ullamcorper, eros enim eleifend est, ut dapibus
            erat ex ac orci.
          </p>
          <p>
            Proin ullamcorper, sem id tincidunt commodo, tellus sem fringilla
            nulla, id molestie tellus odio at elit. Ut pretium cursus turpis ac
            consectetur. Curabitur malesuada risus id ligula vestibulum, eget
            consequat risus tincidunt. Aliquam suscipit accumsan nisi at
            dignissim. Sed rutrum leo ac malesuada fermentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
