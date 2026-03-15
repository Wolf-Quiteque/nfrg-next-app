import Script from 'next/script'

export default function BlogDetailPage() {
  return (
    <>

          {/* Page Title */}
          <section className="flat-title-page" style={{backgroundImage:'url(images/page-title/page-title-2.jpg)'}}>
            <div className="container">
              <div className="breadcrumb-content">
                <ul className="breadcrumb">
                  <li><a href="/" className="text-white">Home</a></li>
                  <li className="text-white">/ Pages</li>
                  <li className="text-white">/ Latest News</li>
                </ul>
                <h1 className="text-center text-white title">Latest News</h1>
              </div>
            </div>
          </section>
          {/* End Page Title */}

          {/* Section Blog Detail */}
          <section className="flat-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="flat-blog-detail">
                    <div className="mb-30 pb-30 line-b">
                      <h3 className="title fw-8">Building gains into housing stocks and how to trade the
                        sector</h3>
                      <ul className="meta-blog">
                        <li className="item">
                          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M11.9883 12.4831C11.5225 11.8664 10.9198 11.3662 10.2278 11.022C9.53575 10.6779 8.77324 10.4991 8.00033 10.4998C7.22743 10.4991 6.46492 10.6779 5.77288 11.022C5.08084 11.3662 4.47816 11.8664 4.01233 12.4831M11.9883 12.4831C12.8973 11.6746 13.5384 10.6088 13.8278 9.4272C14.1172 8.24555 14.0405 7.00386 13.608 5.86679C13.1754 4.72972 12.4075 3.75099 11.4059 3.0604C10.4044 2.36982 9.21656 2 8 2C6.78344 2 5.59562 2.36982 4.59407 3.0604C3.59252 3.75099 2.82455 4.72972 2.39202 5.86679C1.95949 7.00386 1.88284 8.24555 2.17221 9.4272C2.46159 10.6088 3.10333 11.6746 4.01233 12.4831M11.9883 12.4831C10.891 13.4619 9.47075 14.0019 8.00033 13.9998C6.52969 14.0021 5.10983 13.4621 4.01233 12.4831M10.0003 6.4998C10.0003 7.03024 9.78962 7.53894 9.41455 7.91402C9.03948 8.28909 8.53077 8.4998 8.00033 8.4998C7.4699 8.4998 6.96119 8.28909 6.58612 7.91402C6.21105 7.53894 6.00033 7.03024 6.00033 6.4998C6.00033 5.96937 6.21105 5.46066 6.58612 5.08559C6.96119 4.71052 7.4699 4.4998 8.00033 4.4998C8.53077 4.4998 9.03948 4.71052 9.41455 5.08559C9.78962 5.46066 10.0003 5.96937 10.0003 6.4998Z"
                              stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-primary fw-6">Kathryn Murphy</span>
                        </li>
                        <li className="item">
                          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.5 8.5V8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5H13C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8V8.5M8.70667 4.20667L7.29333 2.79333C7.20048 2.70037 7.09022 2.62661 6.96886 2.57628C6.84749 2.52595 6.71739 2.50003 6.586 2.5H3C2.60218 2.5 2.22064 2.65804 1.93934 2.93934C1.65804 3.22064 1.5 3.60218 1.5 4V12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5H13C13.3978 13.5 13.7794 13.342 14.0607 13.0607C14.342 12.7794 14.5 12.3978 14.5 12V6C14.5 5.60218 14.342 5.22064 14.0607 4.93934C13.7794 4.65804 13.3978 4.5 13 4.5H9.414C9.14887 4.49977 8.89402 4.39426 8.70667 4.20667Z"
                              stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-primary fw-6">Furniture</span>
                        </li>
                        <li className="item">
                          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5.75 6.5C5.75 6.56631 5.72366 6.62989 5.67678 6.67678C5.62989 6.72366 5.5663 6.75 5.5 6.75C5.4337 6.75 5.37011 6.72366 5.32322 6.67678C5.27634 6.62989 5.25 6.56631 5.25 6.5C5.25 6.4337 5.27634 6.37011 5.32322 6.32322C5.37011 6.27634 5.4337 6.25 5.5 6.25C5.5663 6.25 5.62989 6.27634 5.67678 6.32322C5.72366 6.37011 5.75 6.4337 5.75 6.5ZM5.75 6.5H5.5M8.25 6.5C8.25 6.56631 8.22366 6.62989 8.17678 6.67678C8.12989 6.72366 8.0663 6.75 8 6.75C7.9337 6.75 7.87011 6.72366 7.82322 6.67678C7.77634 6.62989 7.75 6.56631 7.75 6.5C7.75 6.4337 7.77634 6.37011 7.82322 6.32322C7.87011 6.27634 7.9337 6.25 8 6.25C8.0663 6.25 8.12989 6.27634 8.17678 6.32322C8.22366 6.37011 8.25 6.4337 8.25 6.5ZM8.25 6.5H8M10.75 6.5C10.75 6.56631 10.7237 6.62989 10.6768 6.67678C10.6299 6.72366 10.5663 6.75 10.5 6.75C10.4337 6.75 10.3701 6.72366 10.3232 6.67678C10.2763 6.62989 10.25 6.56631 10.25 6.5C10.25 6.4337 10.2763 6.37011 10.3232 6.32322C10.3701 6.27634 10.4337 6.25 10.5 6.25C10.5663 6.25 10.6299 6.27634 10.6768 6.32322C10.7237 6.37011 10.75 6.4337 10.75 6.5ZM10.75 6.5H10.5M1.5 8.50667C1.5 9.57333 2.24867 10.5027 3.30467 10.658C4.02933 10.7647 4.76133 10.8467 5.5 10.904V14L8.28933 11.2113C8.42744 11.0738 8.61312 10.9945 8.808 10.99C10.1091 10.958 11.407 10.8471 12.6947 10.658C13.7513 10.5027 14.5 9.574 14.5 8.506V4.494C14.5 3.426 13.7513 2.49733 12.6953 2.342C11.1406 2.11381 9.57135 1.99951 8 2C6.40533 2 4.83733 2.11667 3.30467 2.342C2.24867 2.49733 1.5 3.42667 1.5 4.494V8.506V8.50667Z"
                              stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-variant-1">0 comment</span>
                        </li>
                        <li className="item">
                          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.60218 2.15804 4.22064 2.43934 3.93934C2.72064 3.65804 3.10218 3.5 3.5 3.5H12.5C12.8978 3.5 13.2794 3.65804 13.5607 3.93934C13.842 4.22064 14 4.60218 14 5V12.5M2 12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H12.5C12.8978 14 13.2794 13.842 13.5607 13.5607C13.842 13.2794 14 12.8978 14 12.5M2 12.5V7.5C2 7.10218 2.15804 6.72064 2.43934 6.43934C2.72064 6.15804 3.10218 6 3.5 6H12.5C12.8978 6 13.2794 6.15804 13.5607 6.43934C13.842 6.72064 14 7.10218 14 7.5V12.5"
                              stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-variant-1">April 6, 2023</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pb-30 line-b">
                      <p className="text-black-2 fw-6">The housing sector has long been a focal point for
                        investors seeking stability and growth. Understanding the dynamics of housing
                        stocks and effectively trading within this sector can lead to substantial gains.
                      </p>
                      <div className="my-30 round-30 o-hidden">
                        <img className="lazyload w-100" data-src="images/blog/banner-blog.jpg"
                          src="images/blog/banner-blog.jpg" alt="img-blog" />
                      </div>
                      <h5 className="mb-16 text-black-2">Understanding Housing Stocks</h5>
                      <p className="mb-20">Housing stocks encompass companies involved in various aspects of
                        the real estate industry, including homebuilders, developers, and related
                        service providers. Factors influencing these stocks range from interest rates
                        and economic indicators to trends in homeownership rates.</p>
                      <p className="mb-20">Pay close attention to economic indicators such as employment
                        rates, GDP growth, and consumer confidence. A strong economy often correlates
                        with increased demand for housing, benefiting related stocks.</p>
                      <div className="my-20 flat-quote">
                        <blockquote className="quote text-primary">
                          &quot;Lower rates can boost homebuying activity, benefiting housing stocks, while
                          higher rates may have the opposite effect.&quot;
                        </blockquote>
                        <cite className="author text-primary fw-5">said Mike Fratantoni, MBA&apos;s chief
                          economist.</cite>
                      </div>
                      <div className="box-image grid-2 gap-20 mb-20">
                        <div className="overflow-hidden round-30">
                          <img className="w-100" src="images/blog/blog-md-1.jpg" alt="imag-blog" />
                        </div>
                        <div className="overflow-hidden round-30">
                          <img className="w-100" src="images/blog/blog-md-2.jpg" alt="imag-blog" />
                        </div>
                      </div>
                      <h5 className="mb-16 text-black-2">Identify Emerging Trends</h5>
                      <p className="mb-20">Stay informed about emerging trends in the housing market, such as
                        the demand for sustainable homes, technological advancements, and demographic
                        shifts. Companies aligning with these trends may present attractive investment
                        opportunities.</p>
                      <p>Take a long-term investment approach if you believe in the stability and growth
                        potential of the housing sector. Look for companies with solid fundamentals and
                        a track record of success. For short-term traders, capitalize on market
                        fluctuations driven by economic reports, interest rate changes, or
                        industry-specific news. Keep a close eye on earnings reports and government
                        housing data releases.</p>
                    </div>

                    <div className="mt-16 d-flex justify-content-between flex-wrap gap-16">
                      <div className="d-flex flex-wrap align-items-center gap-12">
                        <span className="text-black fw-6">Tag:</span>
                        <ul className="d-flex flex-wrap gap-9">
                          <li><a href="#" className="blog-tag">Furniture</a></li>
                          <li><a href="#" className="blog-tag">Interior</a></li>
                        </ul>
                      </div>
                      <div className="d-flex flex-wrap align-items-center gap-16">
                        <span className="font-rubik text-variant-1">Share this post:</span>
                        <ul className="d-flex flex-wrap gap-12">
                          <li><a href="#" className="box-icon line w-44 round">
                              <i className="icon icon-fb"></i>
                            </a></li>
                          <li><a href="#" className="box-icon line w-44 round">
                              <i className="icon icon-x"></i>
                            </a></li>
                          <li><a href="#" className="box-icon line w-44 round">
                              <i className="icon icon-in"></i>
                            </a></li>
                          <li><a href="#" className="box-icon line w-44 round">
                              <i className="icon icon-instargram"></i>
                            </a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="wrap-review">
                      <div className="pb-12 line-b mb-0">
                        <h5 className="text-black-2">Comment (4)</h5>
                      </div>
                      <ul className="box-review">
                        <li className="list-review-item">
                          <div className="avatar avt-60">
                            <img src="images/avatar/avt-2.jpg" alt="avatar" />
                          </div>
                          <div className="content">
                            <div className="name">Kathryn Murphy</div>
                            <p>It&apos;s really easy to use and it is exactly what I am looking for. A
                              lot of good looking templates &amp; it&apos;s highly customizable. Live
                              support is helpful, solved my issue in no time.</p>
                            <div className="action mt-12">
                              <div className="d-flex align-items-center gap-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span className="font-rubik">Useful</span>
                              </div>
                              <div className="d-flex align-items-center gap-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span className="font-rubik">Not helpful </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-review-item">
                          <div className="avatar avt-60">
                            <img src="images/avatar/avt-3.jpg" alt="avatar" />
                          </div>
                          <div className="content">
                            <div className="name">Brooklyn Simmons</div>
                            <p>It&apos;s really easy to use and it is exactly what I am looking for. A
                              lot of good looking templates &amp; it&apos;s highly customizable. Live
                              support is helpful, solved my issue in no time.</p>
                            <div className="action mt-12">
                              <div className="d-flex align-items-center gap-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span className="font-rubik">Useful</span>
                              </div>
                              <div className="d-flex align-items-center gap-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span className="font-rubik">Not helpful </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-review-item">
                          <div className="avatar avt-60">
                            <img src="images/avatar/avt-4.jpg" alt="avatar" />
                          </div>
                          <div className="content">
                            <div className="name">Robert Fox</div>
                            <p>It&apos;s really easy to use and it is exactly what I am looking for. A
                              lot of good looking templates &amp; it&apos;s highly customizable. Live
                              support is helpful, solved my issue in no time.</p>
                            <div className="action mt-12">
                              <div className="d-flex align-items-center gap-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span className="font-rubik">Useful</span>
                              </div>
                              <div className="d-flex align-items-center gap-6">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span className="font-rubik">Not helpful </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="wrap-form-comment">
                      <h5 className="text-black-2">Leave A comment</h5>
                      <p className="text-variant-1 mt-8">Your email address will not be published. Required
                        fields are marked *</p>
                      <div id="comments" className="comments">
                        <div className="respond-comment">
                          <form method="post" id="contactform" className="comment-form form-submit"
                            action="./contact/contact-process.php" acceptCharset="utf-8"
                            noValidate>

                            <div className="form-wg group-ip">
                              <fieldset>
                                <label className="sub-ip">Name</label>
                                <input type="text" className="form-control" name="text"
                                  placeholder="Your name" required />
                              </fieldset>
                              <fieldset>
                                <label className="sub-ip">Email</label>
                                <input type="email" className="form-control" name="email"
                                  placeholder="Your email" required />
                              </fieldset>
                            </div>
                            <fieldset className="form-wg">
                              <label className="sub-ip">Review</label>
                              <textarea id="comment-message" name="message" rows="4" tabIndex={4}
                                placeholder="Write comment " aria-required="true"></textarea>
                            </fieldset>
                            <button className="form-wg tf-btn primary w-100" name="submit"
                              type="submit">
                              <span>Post Comment</span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="sidebar-blog fixed-sidebar">
                    <div className="widget-search">
                      <h5 className="text-black-2 text-capitalize">Search Blog</h5>
                      <div className="search-box">
                        <input className="search-field" type="text" placeholder="Search..." />
                        <a href="#" className="icon icon-search"></a>
                      </div>
                    </div>
                    <div className="widget-box categories">
                      <h5 className="text-black-2 text-capitalize">Categories</h5>
                      <ul className="mt-20">
                        <li><a href="#" className="categories-item"><span>Market
                                Updates</span><span>(50)</span></a></li>
                        <li><a href="#" className="categories-item"><span>Buying
                                Tips</span><span>(34)</span></a></li>
                        <li><a href="#" className="categories-item current"><span>Interior
                                Inspiration</span><span>(69)</span></a></li>
                        <li><a href="#" className="categories-item"><span>Investment
                                Insights</span><span>(25)</span></a></li>
                        <li><a href="#" className="categories-item"><span>Home
                                Construction</span><span>(12)</span></a></li>
                        <li><a href="#" className="categories-item"><span>Legal
                                Guidance</span><span>(12)</span></a></li>
                        <li><a href="#" className="categories-item"><span>Community
                                Spotlight</span><span>(69)</span></a></li>
                      </ul>
                    </div>
                    <div className="widget-box recent">
                      <h5 className="text-black-2 text-capitalize">Featured listings</h5>
                      <ul>
                        <li>
                          <a href="/blog-detail" className="recent-post-item not-overlay hover-img">
                            <div className="img-style">
                              <img src="images/blog/post-recent-1.jpg" alt="post-recent" />
                            </div>
                            <div className="content">
                              <div className="title">Key Real Estate Trends to Watch in 2024</div>
                              <div className="subtitle">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M4.5 2.5V4M11.5 2.5V4M2 13V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4H12.5C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V13M2 13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13M2 13V8C2 7.60218 2.15804 7.22064 2.43934 6.93934C2.72064 6.65804 3.10218 6.5 3.5 6.5H12.5C12.8978 6.5 13.2794 6.65804 13.5607 6.93934C13.842 7.22064 14 7.60218 14 8V13"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span>February 16, 2024</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/blog-detail" className="recent-post-item not-overlay hover-img">
                            <div className="img-style">
                              <img src="images/blog/post-recent-2.jpg" alt="post-recent" />
                            </div>
                            <div className="content">
                              <div className="title">Expert Tips for Profitable Real Estate
                                Investments.</div>
                              <div className="subtitle">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M4.5 2.5V4M11.5 2.5V4M2 13V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4H12.5C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V13M2 13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13M2 13V8C2 7.60218 2.15804 7.22064 2.43934 6.93934C2.72064 6.65804 3.10218 6.5 3.5 6.5H12.5C12.8978 6.5 13.2794 6.65804 13.5607 6.93934C13.842 7.22064 14 7.60218 14 8V13"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span>February 16, 2024</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/blog-detail" className="recent-post-item not-overlay hover-img">
                            <div className="img-style">
                              <img src="images/blog/post-recent-3.jpg" alt="post-recent" />
                            </div>
                            <div className="content">
                              <div className="title">10 Steps to Prepare for a Successful Real
                                Estate...</div>
                              <div className="subtitle">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M4.5 2.5V4M11.5 2.5V4M2 13V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4H12.5C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V13M2 13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13M2 13V8C2 7.60218 2.15804 7.22064 2.43934 6.93934C2.72064 6.65804 3.10218 6.5 3.5 6.5H12.5C12.8978 6.5 13.2794 6.65804 13.5607 6.93934C13.842 7.22064 14 7.60218 14 8V13"
                                    stroke="#7C818B" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                <span>February 16, 2024</span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget-box newsletter">
                      <h5 className="text-black-2 text-capitalize">Join our newsletter</h5>
                      <p className="caption-2 text-variant-1 mt-20">Signup to be the first to hear about
                        exclusive deals, special offers and upcoming collections</p>
                      <div className="search-box mt-20">
                        <input className="search-field" type="text" placeholder="Enter your email" />
                        <a href="#" className="icon">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4.00035 7.99998L2.17969 2.08398C6.53489 3.35043 10.6419 5.35118 14.3237 7.99998C10.6422 10.6492 6.53541 12.6504 2.18035 13.9173L4.00035 7.99998ZM4.00035 7.99998H9.00035"
                              stroke="#1563DF" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="widget-box tag">
                      <h5 className="text-black-2 text-capitalize">Popular Tag</h5>
                      <ul className="mt-20">
                        <li><a href="#" className="tag-item">Property</a></li>
                        <li><a href="#" className="tag-item">Office</a></li>
                        <li><a href="#" className="tag-item">Finance</a></li>
                        <li><a href="#" className="tag-item">Legal</a></li>
                        <li><a href="#" className="tag-item">Market</a></li>
                        <li><a href="#" className="tag-item">Invest</a></li>
                        <li><a href="#" className="tag-item">Renovate</a></li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* End Section Blog Detail */}

      {/* go top */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{transition:'stroke-dashoffset 10ms linear 0s', strokeDasharray:'307.919, 307.919', strokeDashoffset:'286.138'}}>
          </path>
        </svg>
      </div>

      {/* popup login */}
      <div className="modal modal-account fade" id="modalLogin">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="flat-account">
              <div className="banner-account">
                <img src="images/banner/banner-account1.jpg" alt="banner" />
              </div>
              <form className="form-account">
                <div className="title-box">
                  <h4>Login</h4>
                  <span className="close-modal icon-close2" data-bs-dismiss="modal"></span>
                </div>
                <div className="box">
                  <fieldset className="box-fieldset">
                    <label>Account</label>
                    <div className="ip-field">
                      <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.4869 14.0435C12.9628 13.3497 12.2848 12.787 11.5063 12.3998C10.7277 12.0126 9.86989 11.8115 9.00038 11.8123C8.13086 11.8115 7.27304 12.0126 6.49449 12.3998C5.71594 12.787 5.03793 13.3497 4.51388 14.0435M13.4869 14.0435C14.5095 13.1339 15.2307 11.9349 15.5563 10.6056C15.8818 9.27625 15.7956 7.87934 15.309 6.60014C14.8224 5.32093 13.9584 4.21986 12.8317 3.44295C11.7049 2.66604 10.3686 2.25 9 2.25C7.63137 2.25 6.29508 2.66604 5.16833 3.44295C4.04158 4.21986 3.17762 5.32093 2.69103 6.60014C2.20443 7.87934 2.11819 9.27625 2.44374 10.6056C2.76929 11.9349 3.49125 13.1339 4.51388 14.0435M13.4869 14.0435C12.2524 15.1447 10.6546 15.7521 9.00038 15.7498C7.3459 15.7523 5.74855 15.1448 4.51388 14.0435M11.2504 7.31228C11.2504 7.90902 11.0133 8.48131 10.5914 8.90327C10.1694 9.32523 9.59711 9.56228 9.00038 9.56228C8.40364 9.56228 7.83134 9.32523 7.40939 8.90327C6.98743 8.48131 6.75038 7.90902 6.75038 7.31228C6.75038 6.71554 6.98743 6.14325 7.40939 5.72129C7.83134 5.29933 8.40364 5.06228 9.00038 5.06228C9.59711 5.06228 10.1694 5.29933 10.5914 5.72129C11.0133 6.14325 11.2504 6.71554 11.2504 7.31228Z"
                          stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input type="text" className="form-control" placeholder="Your name" />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset">
                    <label>Password</label>
                    <div className="ip-field">
                      <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z"
                          stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input type="text" className="form-control" placeholder="Your password" />
                    </div>
                    <div className="text-forgot text-end"><a href="#">Forgot password</a></div>
                  </fieldset>
                </div>
                <div className="box box-btn">
                  <a href="#" className="tf-btn primary w-100">Login</a>
                  <div className="text text-center">Don&apos;t you have an account? <a href="#modalRegister"
                      data-bs-toggle="modal" className="text-primary">Register</a></div>
                </div>
                <p className="box text-center caption-2">or login with</p>
                <div className="group-btn">
                  <a href="#" className="btn-social">
                    <img src="images/logo/google.jpg" alt="img" />
                    Google
                  </a>
                  <a href="#" className="btn-social">
                    <img src="images/logo/fb.jpg" alt="img" />
                    Facebook
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* popup register */}
      <div className="modal modal-account fade" id="modalRegister">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="flat-account">
              <div className="banner-account">
                <img src="images/banner/banner-account2.jpg" alt="banner" />
              </div>
              <form className="form-account">
                <div className="title-box">
                  <h4>Register</h4>
                  <span className="close-modal icon-close2" data-bs-dismiss="modal"></span>
                </div>
                <div className="box">
                  <fieldset className="box-fieldset">
                    <label>User name</label>
                    <div className="ip-field">
                      <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.4869 14.0435C12.9628 13.3497 12.2848 12.787 11.5063 12.3998C10.7277 12.0126 9.86989 11.8115 9.00038 11.8123C8.13086 11.8115 7.27304 12.0126 6.49449 12.3998C5.71594 12.787 5.03793 13.3497 4.51388 14.0435M13.4869 14.0435C14.5095 13.1339 15.2307 11.9349 15.5563 10.6056C15.8818 9.27625 15.7956 7.87934 15.309 6.60014C14.8224 5.32093 13.9584 4.21986 12.8317 3.44295C11.7049 2.66604 10.3686 2.25 9 2.25C7.63137 2.25 6.29508 2.66604 5.16833 3.44295C4.04158 4.21986 3.17762 5.32093 2.69103 6.60014C2.20443 7.87934 2.11819 9.27625 2.44374 10.6056C2.76929 11.9349 3.49125 13.1339 4.51388 14.0435M13.4869 14.0435C12.2524 15.1447 10.6546 15.7521 9.00038 15.7498C7.3459 15.7523 5.74855 15.1448 4.51388 14.0435M11.2504 7.31228C11.2504 7.90902 11.0133 8.48131 10.5914 8.90327C10.1694 9.32523 9.59711 9.56228 9.00038 9.56228C8.40364 9.56228 7.83134 9.32523 7.40939 8.90327C6.98743 8.48131 6.75038 7.90902 6.75038 7.31228C6.75038 6.71554 6.98743 6.14325 7.40939 5.72129C7.83134 5.29933 8.40364 5.06228 9.00038 5.06228C9.59711 5.06228 10.1694 5.29933 10.5914 5.72129C11.0133 6.14325 11.2504 6.71554 11.2504 7.31228Z"
                          stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input type="text" className="form-control" placeholder="User name" />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset">
                    <label>Email address</label>
                    <div className="ip-field">
                      <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.3125 5.0625V12.9375C16.3125 13.3851 16.1347 13.8143 15.8182 14.1307C15.5018 14.4472 15.0726 14.625 14.625 14.625H3.375C2.92745 14.625 2.49822 14.4472 2.18176 14.1307C1.86529 13.8143 1.6875 13.3851 1.6875 12.9375V5.0625M16.3125 5.0625C16.3125 4.61495 16.1347 4.18573 15.8182 3.86926C15.5018 3.55279 15.0726 3.375 14.625 3.375H3.375C2.92745 3.375 2.49822 3.55279 2.18176 3.86926C1.86529 4.18573 1.6875 4.61495 1.6875 5.0625M16.3125 5.0625V5.24475C16.3125 5.53286 16.2388 5.81618 16.0983 6.06772C15.9578 6.31926 15.7553 6.53065 15.51 6.68175L9.885 10.143C9.61891 10.3069 9.31252 10.3937 9 10.3937C8.68748 10.3937 8.38109 10.3069 8.115 10.143L2.49 6.6825C2.24469 6.5314 2.04215 6.32001 1.90168 6.06847C1.7612 5.81693 1.68747 5.53361 1.6875 5.2455V5.0625"
                          stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input type="text" className="form-control" placeholder="Email address" />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset">
                    <label>Password</label>
                    <div className="ip-field">
                      <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z"
                          stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input type="password" className="form-control" placeholder="Your password" />
                    </div>
                  </fieldset>
                  <fieldset className="box-fieldset">
                    <label>Confirm password</label>
                    <div className="ip-field">
                      <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z"
                          stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input type="password" className="form-control" placeholder="Confirm password" />
                    </div>
                  </fieldset>
                </div>
                <div className="box box-btn">
                  <a href="#" className="tf-btn primary w-100">Sign Up</a>
                  <div className="text text-center">Don&apos;t you have an account? <a href="#modalLogin"
                      data-bs-toggle="modal" className="text-primary">Sign In</a></div>
                </div>
                <p className="box text-center caption-2">or login with</p>
                <div className="group-btn">
                  <a href="#" className="btn-social">
                    <img src="images/logo/google.jpg" alt="img" />
                    Google
                  </a>
                  <a href="#" className="btn-social">
                    <img src="images/logo/fb.jpg" alt="img" />
                    Facebook
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Script src="/js/jquery-validate.js" strategy="afterInteractive" />
    </>
  )
}
