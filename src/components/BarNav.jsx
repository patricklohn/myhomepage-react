import React from 'react'
import "./BarNav.css"
import LogoImg from "../assets/img/LogoPklDeveloper.jpg"

const BarNav = () => {
  return (
    <div className='container-nav-bar'>
        <nav>
            <a href="/"><img src={LogoImg} alt="Logo Pkl" /></a>
            <div>
                <ul>
                    <li><a href="#"><i class="bi bi-whatsapp"></i></a></li>
                    <li><a href="https://github.com/patricklohn" target='blanck'><i class="bi bi-github"></i></a></li>
                </ul>
            </div>
        </nav>
        <div className='container-nav-menu'>
        <nav>
            <ul>
              <li>Teste</li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default BarNav
