"use client"
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const el = document.querySelector('.preload')
    if (!el) return
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease'
      el.style.opacity = '0'
      setTimeout(() => el.remove(), 650)
    }, 200)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {/* preload */}
      <div className="preload preload-container">
        <div className="preload-logo">
          <div className="spinner"></div>
          <span className="icon icon-villa-fill"></span>
        </div>
      </div>
      {/* /preload */}

          {/* Main Header */}
          <header id="header" className="main-header header-fixed fixed-header">
            {/* Header Lower */}
            <div className="header-lower">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner-header">
                    <div className="inner-header-left">
                      <div className="logo-box flex">
                        <div className="logo"><a href="/"><img src="/images/logo.png" alt="logo" width="83" height="24" /></a></div>
                      </div>
                      <div className="nav-outer flex align-center">
                        {/* Main Menu */}
                        <nav className="main-menu show navbar-expand-md">
                          <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                              <li className="current"><a href="/">Home</a></li>
                              <li><a href="/#why-nfrg">Why NFRG</a></li>
                              <li><a href="https://nfrg-web-app.vercel.app/" target="_blank" rel="noopener noreferrer">Mentorship</a></li>
                              <li><a href="/har-listings">Listings</a></li>
                              <li><a href="/#leadership">Leadership</a></li>
                              <li><a href="/#insights">Insights</a></li>
                              <li><a href="/blogs">Blog</a></li>
                              <li><a href="/#contact">Contact</a></li>
                            </ul>
                          </div>
                        </nav>
                        {/* Main Menu End */}
                      </div>
                    </div>
                    <div className="inner-header-right header-account">
                      <a href="/#contact" className="tf-btn btn-line btn-login">
                        Contact Us
                      </a>
                      <div className="flat-bt-top">
                        <a className="tf-btn primary" href="https://nfrg-web-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M10.5 2.5C10.5 2.5 14.5 4.5 14.5 10C14.5 15.5 10.5 17.5 10.5 17.5M10.5 2.5C10.5 2.5 6.5 4.5 6.5 10C6.5 15.5 10.5 17.5 10.5 17.5M10.5 2.5V17.5M4.5 8H16.5M4.5 12H16.5"
                              stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round" />
                          </svg>
                          Join Mentorship
                        </a>
                      </div>
                    </div>

                    <div className="mobile-nav-toggler mobile-button"><span></span></div>

                  </div>
                </div>
              </div>
            </div>
            {/* End Header Lower */}

            {/* Mobile Menu */}
            <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>
            <div className="mobile-menu">
              <div className="menu-backdrop"></div>
              <nav className="menu-box">
                <div className="nav-logo"><a href="/"><img src="images/logo.png" alt="nav-logo" width="87" height="22" /></a></div>
                <div className="bottom-canvas">
                  <div className="login-box flex align-center">
                    <a href="#modalLogin" data-bs-toggle="modal">Login</a>
                    <span>/</span>
                    <a href="#modalRegister" data-bs-toggle="modal">Register</a>
                  </div>
                  <div className="menu-outer"></div>
                  <div className="button-mobi-sell">
                    <a className="tf-btn primary" href="https://nfrg-web-app.vercel.app/" target="_blank" rel="noopener noreferrer">Join Mentorship</a>
                  </div>
                  <div className="mobi-icon-box">
                    <div className="box d-flex align-items-center">
                      <span className="icon icon-phone2"></span>
                      <div>
                        <div>Cell: <a href="tel:8329692391">832-969-2391</a></div>
                        <div>Main LPT Office: <a href="tel:8773662313">877-366-2313</a></div>
                      </div>
                    </div>
                    <div className="box d-flex align-items-center">
                      <span className="icon icon-mail"></span>
                      <div>
                        <div>General: <a href="mailto:james.scott@navyfellasrealtygroup.com">james.scott@navyfellasrealtygroup.com</a></div>
                        <div>Support &amp; Billing: <a href="mailto:ashley.henkis@navyfellasrealtygroup.com">ashley.henkis@navyfellasrealtygroup.com</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            {/* End Mobile Menu */}

          </header>
          {/* End Main Header */}
    </>
  )
}
