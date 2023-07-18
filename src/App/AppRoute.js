import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout';
import BasePages from './BasePages';

export default function AppRoute() {
  return (
    <Routes> 
      <Route index element={<Navigate to='/infokegiatan'/>} />
      <Route path="*" element={<Layout> <BasePages/> </Layout>} />
    </Routes>
  )
}
