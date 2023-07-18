import React from "react";
import { Route, Routes } from "react-router-dom";
import DaftarKegiatan from "../Layout/Pages/DaftarKegiatan";
import FormKegiatan from "../Layout/Pages/FormKegiatan";
import InfoKegiatan from "../Layout/Pages/InfoKegiatan";
import TentangKami from "../Layout/Pages/TentangKami";
import HasilForm from "../Layout/Pages/HasilForm";
import Admin from "../Layout/Admin/Admin";
import Login from "../Layout/Admin/Login";
import SignUp from "../Layout/Admin/SignUp";

export default function BasePages() {
  return (
    <Routes>
      <Route index element={<DaftarKegiatan />} />
      <Route path="daftarkegiatan" element={<DaftarKegiatan />} />
      <Route path="infokegiatan" element={<InfoKegiatan />} />
      <Route path="tentangkami" element={<TentangKami />} />
      <Route path="formkegiatan" element={<FormKegiatan />} />
      <Route path="hasilform" element={<HasilForm />} />
      <Route path="login" element={<Login />}/>
      <Route path="signUp" element={<SignUp />}/>
      <Route path="admin" element={<Admin />} />

    </Routes>
  );
}
