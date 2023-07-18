import React from 'react'
import Sidebars from './Components/Sidebars'
import "bootstrap/dist/css/bootstrap.css"
import BasePages from '../App/BasePages'

export default function Layout(props) {
  return (
    <Sidebars>

      <BasePages/>

    </Sidebars>
  )
}
