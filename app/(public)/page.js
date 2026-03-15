'use client'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import EditableText from '../components/EditableText'
import EditableImage from '../components/EditableImage'

const playScript = `(function () {
            var iframe = document.getElementById("nfrgIntroIframe");
            var videoBlock = document.getElementById("nfrgIntroVideoBlock");
            var playOverlay = document.getElementById("nfrgPlayOverlay");
            if (!iframe || !videoBlock || !playOverlay) return;

            var hasPlayed = false;

            function startPlayWithSound() {
                if (hasPlayed) return;
                hasPlayed = true;
                playOverlay.classList.add("is-playing");
                iframe.src = iframe.src.replace(/[&?]?muted=true/g, "");
            }

            playOverlay.addEventListener("click", startPlayWithSound);
        })();`

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

const STATIC_LISTINGS = [
  {
    _id: 's1', title: '1406 Fairview Ave', address: '1406 Fairview Ave, Houston, TX 77006',
    price: '$1,195,000', beds: '3', baths: '4.5', sqft: '3,186', status: 'Active',
    image: '/images/properties/property1.jpg',
    harUrl: 'https://www.har.com/homedetail/1406-fairview-ave-houston-tx-77006/14945608?cid=jescott',
  },
  {
    _id: 's2', title: '9922 Pennymill Drive', address: '9922 Pennymill Drive, Humble, TX 77396',
    price: '$370K – $420K', beds: '4', baths: '3.5', sqft: '3,553', status: 'Sold',
    image: '/images/properties/property2.jpeg',
    harUrl: 'https://www.har.com/idx/mls/listing/details?sitetype=aws&cid=567537&mlsnum=76985961&type=sold',
  },
  {
    _id: 's3', title: '5015 Ossineke Ct', address: '5015 Ossineke Ct, Spring, TX 77386',
    price: '$2.5M – $2.9M', beds: '4', baths: '5.5', sqft: '7,321', status: 'Sold',
    image: '/images/properties/property3.jpg',
    harUrl: 'https://www.har.com/idx/mls/listing/details?sitetype=aws&cid=567537&mlsnum=82577251&type=sold',
  },
  {
    _id: 's4', title: '6103 Yorkglen Manor Ln', address: '6103 Yorkglen Manor Ln, Houston, TX 77084',
    price: '$201,099', beds: '3', baths: '2.5', sqft: '1,659', status: 'Active',
    image: '/images/properties/property4.jpeg',
    harUrl: 'https://www.har.com/idx/mls/listing/details?sitetype=aws&cid=567537&mlsnum=40959529&type=active&allmls=n',
  },
];

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [listings, setListings] = useState(STATIC_LISTINGS);

  useEffect(() => {
    // Analytics tracking
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: '/' }),
    }).catch(() => {});

    // Fetch latest blog posts (fallback to static if empty)
    fetch('/api/blogs?limit=3')
      .then(r => r.json())
      .then(posts => { if (Array.isArray(posts) && posts.length > 0) setBlogPosts(posts); })
      .catch(() => {});

    // Fetch active listings (fallback to static 4 if empty)
    fetch('/api/listings')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setListings(data);
          // Re-init Swiper after listings load
          setTimeout(() => {
            if (typeof window !== 'undefined' && window.initSwipers) window.initSwipers();
          }, 100);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
            <section id="home" className="flat-slider home-5" style={{marginBottom: "5px"}}>
                <div className="wrap-slider-swiper">
                    <div dir="ltr"
                        className="swiper-container thumbs-swiper-column swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
                        <div className="swiper-wrapper" id="swiper-wrapper-e25b8df66276663f" aria-live="off"
                            style={{transitionDuration: "0ms"}}>
                            <div className="swiper-slide swiper-slide-visible swiper-slide-active"
                                style={{width: "390px", opacity: 1, transform: "translate3d(0px, 0px, 0px)", transitionDuration: "0ms"}}
                                role="group" aria-label="1 / 4">
                                <div className="box-img">
                                    <img src="images/slider/slider-5-2.webp" alt="Navy Fellas Realty Group office" />
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next"
                                style={{width: "390px", opacity: 0, transform: "translate3d(-390px, 0px, 0px)", transitionDuration: "0ms"}}
                                role="group" aria-label="2 / 4">
                                <div className="box-img">
                                    <img src="images/slider/slider-5.jpg" alt="Agents in coaching session" />
                                </div>
                            </div>
                            <div className="swiper-slide"
                                style={{width: "390px", opacity: 0, transform: "translate3d(-780px, 0px, 0px)", transitionDuration: "0ms"}}
                                role="group" aria-label="3 / 4">
                                <div className="box-img">
                                    <img src="images/slider/slider-5-1.jpg" alt="Badass property listing" />
                                </div>
                            </div>

                     
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                    <div className="box-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <div className="heading">
                                            <div className="text-subtitle text-white wow fadeInUp" data-wow-delay=".1s">
                                                Required Disclosure
                                            </div>
                                            <h1 className="title-large title text-white wow fadeIn animationtext clip"
                                                data-wow-delay=".2s" data-wow-duration="2000ms">
                                                Texas Information About
                                                <br />
                                                Brokerage Services
                                            </h1>
                                            <p className="subtitle text-white body-2 wow fadeInUp" data-wow-delay=".2s">
                                                Texas law requires this disclosure for all brokerages. Review how brokerage
                                                relationships and services are defined before engaging in real estate services.
                                            </p>

                                            <div className="tf-btn wow fadeInUp" style={{marginTop: "10px"}} data-wow-delay=".3s">
                                                <a href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&amp;cid=567537"
                                                    className="tf-button style-1" target="_blank" rel="noopener noreferrer">
                                                    Learn more
                                                </a>
                                             
                                            </div>
                                        </div>

                                        <div className="wrap-search-link">
                                            <div className="categories-list style-2">
                                                <a href="##coaching"><i className="icon icon-house-fill"></i> Coaching
                                                    Classes</a>
                                                <a href="##bootcamp"><i className="icon icon-office-fill"></i> Webinars</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div
                                        className="swiper-container thumbs-swiper-column1 swiper-pagination5 swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs">
                                        <div className="swiper-wrapper" id="swiper-wrapper-319c584e1f3e2b410"
                                            aria-live="polite"
                                            style={{transform: "translate3d(0px, 0px, 0px)", transitionDuration: "0ms"}}>
                                            <div className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                                                style={{height: "90px"}} role="group" aria-label="1 / 4">
                                                <div className="image-detail">
                                                    <img src="images/slider/slider-pagi2.webp" alt="In-office training" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide swiper-slide-visible swiper-slide-next"
                                                style={{height: "90px"}} role="group" aria-label="2 / 4">
                                                <div className="image-detail">
                                                    <img src="images/slider/slider-pagi.jpg"
                                                        alt="Agent education session" />
                                                </div>
                                            </div>
                                            <div className="swiper-slide swiper-slide-visible" style={{height: "90px"}}
                                                role="group" aria-label="3 / 4">
                                                <div className="image-detail">
                                                    <img src="images/slider/slider-pagi3.jpg"
                                                        alt="Badass listing walkthrough" />
                                                </div>
                                            </div>
                                         

                                        </div>
                                        <span className="swiper-notification" aria-live="assertive"
                                            aria-atomic="true"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>


            <section className="nfrg-disclosure-strip">
                <div className="container">
                    <div className="nfrg-disclosure-card">
                        <div className="nfrg-disclosure-copy">
                            <div className="nfrg-disclosure-kicker">Required Notice</div>
                            <div className="nfrg-disclosure-title">Texas Consumer Protection Notice</div>
                            <p className="nfrg-disclosure-desc">State-mandated consumer protection notice from the Texas
                                Real Estate Commission.</p>
                        </div>
                        <div className="nfrg-disclosure-action">
                            <a className="tf-btn btn-line" href="https://content.harstatic.com/pdf/TREC_CPN.pdf"
                                target="_blank" rel="noopener noreferrer">View Notice</a>
                        </div>
                    </div>
                    <div className="nfrg-iabs-card">
                        <div className="nfrg-iabs-left">
                            <div className="nfrg-iabs-badge">
                                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1.5L11.163 6.315L16.5 7.095L12.75 10.755L13.6875 16.125L9 13.5L4.3125 16.125L5.25 10.755L1.5 7.095L6.837 6.315L9 1.5Z" stroke="#b4861f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Texas Required Disclosure
                            </div>
                            <h4 className="nfrg-iabs-title">Information About Brokerage Services</h4>
                            <p className="nfrg-iabs-desc">Texas law requires all real estate license holders to provide this notice to prospective buyers, tenants, sellers, and landlords.</p>
                            <ul className="nfrg-iabs-points">
                                <li>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7L5.5 10L11.5 4" stroke="#b4861f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    A <strong>Broker</strong> is responsible for all brokerage activities, including acts performed by sponsored sales agents.
                                </li>
                                <li>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7L5.5 10L11.5 4" stroke="#b4861f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    A <strong>Sales Agent</strong> must be sponsored by a broker and works with clients on the broker's behalf.
                                </li>
                                <li>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7L5.5 10L11.5 4" stroke="#b4861f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    Brokers must put the client's interests above all others, including the broker's own interests.
                                </li>
                                <li>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 7L5.5 10L11.5 4" stroke="#b4861f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    <strong>Written agreements</strong> are required before showing residential property to a prospective buyer.
                                </li>
                            </ul>
                            <p className="nfrg-iabs-broker">
                                Brokered by <strong>LPT Realty, LLC</strong> &nbsp;|&nbsp; License No. 9012763-BB &nbsp;|&nbsp;
                                <a href="mailto:Support@lptrealty.com">Support@lptrealty.com</a> &nbsp;|&nbsp;
                                <a href="tel:8773662213">(877) 366-2213</a>
                            </p>
                        </div>
                        <div className="nfrg-iabs-right">
                            <div>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="12" fill="#fff8e8"/>
                                    <path d="M14 12H30L34 16V36H14V12Z" stroke="#b4861f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M30 12V16H34" stroke="#b4861f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19 22H29M19 26H29M19 30H25" stroke="#b4861f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <p className="nfrg-iabs-cta-label">Download the full official TREC disclosure form (PDF)</p>
                            <a href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=567537"
                               target="_blank" rel="noopener noreferrer"
                               className="nfrg-iabs-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V10M8 10L5 7M8 10L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                Download TREC Disclosure (PDF)
                            </a>
                            <p className="nfrg-iabs-fine">This notice is provided for information purposes only and does not create an obligation to use our services.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{display: "none"}}>
                <div className="tab-content">
                    <div className="tab-pane" id="viewAll" role="tabpanel">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-1.jpg"
                                                    src="images/home/house-1.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png1.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-2.jpg"
                                                    src="images/home/house-2.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png2.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-3.jpg"
                                                    src="images/home/house-3.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png3.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-4.jpg"
                                                    src="images/home/house-4.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png4.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-5.jpg"
                                                    src="images/home/house-5.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png5.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-6.jpg"
                                                    src="images/home/house-6.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png6.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/listing" className="tf-btn btn-view primary size-1 hover-btn-view">View All
                                Properties <span className="icon icon-arrow-right2"></span></a>
                        </div>
                    </div>
                    <div className="tab-pane active show" id="apartment" role="tabpanel">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-1.jpg"
                                                    src="images/home/house-1.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png1.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-2.jpg"
                                                    src="images/home/house-2.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png2.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-3.jpg"
                                                    src="images/home/house-3.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png3.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-4.jpg"
                                                    src="images/home/house-4.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png4.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-5.jpg"
                                                    src="images/home/house-5.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png5.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-6.jpg"
                                                    src="images/home/house-6.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png6.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/listing" className="tf-btn btn-view primary size-1 hover-btn-view">View All
                                Properties <span className="icon icon-arrow-right2"></span></a>
                        </div>
                    </div>
                    <div className="tab-pane" id="villa" role="tabpanel">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-1.jpg"
                                                    src="images/home/house-1.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png1.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-2.jpg"
                                                    src="images/home/house-2.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png2.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-3.jpg"
                                                    src="images/home/house-3.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png3.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-4.jpg"
                                                    src="images/home/house-4.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png4.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-5.jpg"
                                                    src="images/home/house-5.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png5.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-6.jpg"
                                                    src="images/home/house-6.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png6.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/listing" className="tf-btn btn-view primary size-1 hover-btn-view">View All
                                Properties <span className="icon icon-arrow-right2"></span></a>
                        </div>
                    </div>
                    <div className="tab-pane" id="studio" role="tabpanel">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-1.jpg"
                                                    src="images/home/house-1.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png1.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-2.jpg"
                                                    src="images/home/house-2.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png2.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-3.jpg"
                                                    src="images/home/house-3.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png3.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-4.jpg"
                                                    src="images/home/house-4.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png4.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-5.jpg"
                                                    src="images/home/house-5.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png5.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-6.jpg"
                                                    src="images/home/house-6.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png6.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/listing" className="tf-btn btn-view primary size-1 hover-btn-view">View All
                                Properties <span className="icon icon-arrow-right2"></span></a>
                        </div>
                    </div>
                    <div className="tab-pane" id="house" role="tabpanel">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-1.jpg"
                                                    src="images/home/house-1.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png1.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-2.jpg"
                                                    src="images/home/house-2.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png2.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-3.jpg"
                                                    src="images/home/house-3.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png3.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-4.jpg"
                                                    src="images/home/house-4.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png4.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-5.jpg"
                                                    src="images/home/house-5.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png5.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-6.jpg"
                                                    src="images/home/house-6.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png6.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/listing" className="tf-btn btn-view primary size-1 hover-btn-view">View All
                                Properties <span className="icon icon-arrow-right2"></span></a>
                        </div>
                    </div>
                    <div className="tab-pane" id="office" role="tabpanel">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-1.jpg"
                                                    src="images/home/house-1.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png1.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-2.jpg"
                                                    src="images/home/house-2.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png2.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-3.jpg"
                                                    src="images/home/house-3.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png3.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-4.jpg"
                                                    src="images/home/house-4.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png4.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-5.jpg"
                                                    src="images/home/house-5.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png5.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="homelengo-box">
                                    <div className="archive-top">
                                        <a href="/listing-detailed" className="images-group">
                                            <div className="images-style">
                                                <img className="lazyload" data-src="images/home/house-6.jpg"
                                                    src="images/home/house-6.jpg" alt="img" />
                                            </div>
                                            <div className="top">
                                                <ul className="d-flex gap-6">
                                                    <li className="flag-tag primary">Featured</li>
                                                    <li className="flag-tag style-1">For Sale</li>
                                                </ul>

                                            </div>
                                            <div className="bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                145 Brooklyn Ave, Califonia, New York
                                            </div>
                                        </a>

                                    </div>
                                    <div className="archive-bottom">
                                        <div className="content-top">
                                            <h6 className="text-capitalize"><a href="/listing-detailed" className="link">
                                                    Casa Lomas de Machalí Machas</a></h6>
                                            <ul className="meta-list">
                                                <li className="item">
                                                    <i className="icon icon-bed"></i>
                                                    <span className="text-variant-1">Beds:</span>
                                                    <span className="fw-6">3</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-bath"></i>
                                                    <span className="text-variant-1">Baths:</span>
                                                    <span className="fw-6">2</span>
                                                </li>
                                                <li className="item">
                                                    <i className="icon icon-sqft"></i>
                                                    <span className="text-variant-1">Sqft:</span>
                                                    <span className="fw-6">1150</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="content-bottom">
                                            <div className="d-flex gap-8 align-items-center">
                                                <div className="avatar avt-40 round">
                                                    <img src="images/avatar/avt-png6.png" alt="avt" />
                                                </div>
                                                <span>Arlene McCoy</span>
                                            </div>
                                            <h6 className="price">$7250,00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="/listing" className="tf-btn btn-view primary size-1 hover-btn-view">View All
                                Properties <span className="icon icon-arrow-right2"></span></a>
                        </div>
                    </div>
                </div>
            </div>

    {/* Why Agents Choose NFRG */}
    <section id="why-nfrg" className="flat-section bg-primary-new">
    <div className="container3">
        <div className="flat-img-with-text-v2">
            <div className="content-left tf-image-box">
                <div className="grid-img-group">
                    <div className="tf-image-wrap item-1">
                        <div className="img-style hover-img-wrap">
                            <img className=" ls-is-cached lazyloaded" data-src="images/banner/img-w-text-sm1.webp" src="images/banner/img-w-text-sm1.webp" alt="" />
                        </div>
                        <div className="tag-item ani5">
                            <i className="icon icon-check-circle"></i>
                            <span>Live Weekly Coaching</span>
                        </div>
                    </div>
                    <div className="tf-image-wrap item-2">
                        <div className="img-style hover-img-wrap">
                            <img className=" ls-is-cached lazyloaded" data-src="images/banner/img-w-text2.jpg" src="images/banner/about02enhanced.webp" alt="" />
                        </div>
                   
                        <div className="tag-item tag-item-2 ani5">
                            <i className="icon icon-check-circle"></i>
                            <span>Military-Grade Discipline</span>
                        </div>
                    </div>
                    <div className="tf-image-wrap item-3">
                        <div className="img-style hover-img-wrap">
                            <img className=" ls-is-cached lazyloaded" data-src="images/banner/img-w-text-sm2.jpg" src="images/banner/img-w-text-sm2.jpg" alt="" />
                        </div>
                        <div className="tag-item ani4">
                            <i className="icon icon-check-circle"></i>
                            <span>Bootcamps &amp; Meet-Ups</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <div className="box-title wow fadeInUp" style={{visibility: "visible"}}>
                    <div className="text-subtitle text-primary">
                      <EditableText contentKey="why-nfrg.subtitle" defaultValue="Why Agents Choose NFRG" />
                    </div>
                    <h3 className="title mt-4">
                      <EditableText contentKey="why-nfrg.title" defaultValue="More than a brokerage. A training & growth platform." />
                    </h3>
                    <p className="desc text-variant-1">
                      <EditableText contentKey="why-nfrg.desc" defaultValue="Navy Fellas Realty Group blends real-world coaching, structure, and hands-on deal support so full-time agents can grow faster—while still serving serious buyers, sellers, and investors who want smooth, confident closings." />
                    </p>
                </div>
                <div className="flat-service wow fadeInUp" data-wow-delay=".2s" style={{visibility: "visible", animationDelay: "0.2s"}}>
                    <a href="##agent-apply" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon">
                                {/* icon unchanged */}
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_13434_4230)">
                                        <path d="M49.1313 20.4375V20.3961L49.102 20.3668L34.477 5.74179L34.406 5.67085L34.3353 5.74202L19.8041 20.367L19.775 20.3963V20.4375V26.7188C19.775 27.1389 19.4384 27.5562 18.9375 27.5562C18.679 27.5562 18.4713 27.4705 18.3285 27.3277C18.1857 27.1849 18.1 26.9773 18.1 26.7188V20.0625C18.1 19.9335 18.1214 19.8306 18.1617 19.7398C18.2022 19.6487 18.2641 19.5648 18.352 19.477L18.3522 19.4767L33.352 4.38321C33.9692 3.76601 34.8433 3.76601 35.4605 4.38321L50.5543 19.477C50.6421 19.5648 50.704 19.6487 50.7446 19.7398C50.7849 19.8306 50.8063 19.9335 50.8063 20.0625V32.0625C50.8063 32.2644 50.7043 32.4746 50.5426 32.6363C50.3808 32.7981 50.1706 32.9 49.9688 32.9C49.5486 32.9 49.1313 32.5634 49.1313 32.0625V20.4375ZM49.0312 10.6812C48.6111 10.6812 48.1938 10.3446 48.1938 9.84375V4.3125C48.1938 3.68839 47.6736 3.275 47.1562 3.275H45.8438C45.2196 3.275 44.8063 3.79513 44.8063 4.3125V4.6875C44.8063 5.10763 44.4696 5.525 43.9688 5.525C43.7102 5.525 43.5026 5.43926 43.3598 5.29648C43.217 5.15369 43.1313 4.94603 43.1313 4.6875V4.3125C43.1313 2.86555 44.3074 1.6 45.8438 1.6H47.1562C48.6032 1.6 49.8687 2.77613 49.8687 4.3125V9.84375C49.8687 10.0456 49.7668 10.2558 49.6051 10.4176C49.4433 10.5793 49.2331 10.6812 49.0312 10.6812Z" fill="#1563DF" stroke="white" strokeWidth="0.2"></path>
                                        <path d="M49.6705 20.8422L49.6709 20.8419L49.6642 20.8353L34.4767 5.74157L34.406 5.6713L34.3355 5.74179L19.2417 20.8355C18.2516 21.8256 16.4391 21.8303 15.3504 20.834C14.266 19.748 14.2665 18.0311 15.3519 16.9457L30.7267 1.66468L30.7269 1.66446C31.7391 0.652268 33.1198 0.1 34.5 0.1C35.8811 0.1 37.2594 0.652766 38.176 1.66102L38.1759 1.66109L38.1792 1.66446L53.4605 16.9457C54.5464 18.0317 54.5464 19.7496 53.4605 20.8355C52.9155 21.3805 52.2842 21.65 51.5625 21.65C50.8351 21.65 50.1162 21.377 49.6705 20.8422ZM16.5232 18.1166L16.523 18.1168C16.1089 18.5308 16.1089 19.2504 16.523 19.6645C16.937 20.0785 17.6566 20.0785 18.0707 19.6645L33.3519 4.38321C33.6142 4.12093 34.0574 3.94375 34.4062 3.94375C34.755 3.94375 35.1982 4.12093 35.4605 4.38321L50.7417 19.6645C51.1558 20.0785 51.8754 20.0785 52.2894 19.6645C52.7035 19.2504 52.7035 18.5308 52.2894 18.1168L37.0094 2.83673C35.6575 1.38987 33.2488 1.38984 31.8969 2.83663L16.5232 18.1166ZM13.233 36.2205L13.2325 36.2212C13.1113 36.3827 12.9037 36.4897 12.6772 36.5221C12.4508 36.5544 12.2214 36.5099 12.06 36.3887C11.8985 36.2676 11.7915 36.06 11.7591 35.8335C11.7268 35.6074 11.7712 35.3783 11.892 35.2169C13.1952 33.5416 15.0597 31.9558 17.3952 30.5545L17.3952 30.5546L17.3982 30.5526C21.1084 28.141 25.9333 28.6032 29.2761 31.6675L29.2768 31.6681C30.2316 32.5274 31.2863 32.9125 32.3437 32.9125H37.7812C40.0697 32.9125 41.9937 34.8365 41.9937 37.125V37.2188C41.9937 38.2253 41.6277 39.1421 41.0762 39.8775L41.0761 39.8774L41.073 39.882C40.9091 40.1278 40.6644 40.2125 40.4062 40.2125C40.2492 40.2125 40.0865 40.1345 39.8968 40.0397C39.7392 39.918 39.636 39.714 39.6151 39.4944C39.594 39.2728 39.6577 39.0461 39.8207 38.8832C40.2199 38.484 40.4125 37.8926 40.4125 37.2188V37.125C40.4125 35.661 39.2402 34.5875 37.875 34.5875H32.4375C30.871 34.5875 29.4886 34.036 28.193 32.833C25.4423 30.272 21.3613 29.8903 18.3215 31.8842C16.159 33.2007 14.4613 34.6143 13.233 36.2205ZM40.2187 31.4C39.7986 31.4 39.3812 31.0634 39.3812 30.5625V25.6875C39.3812 24.7846 38.5824 24.0875 37.7812 24.0875H30.9375C30.0345 24.0875 29.3375 24.8863 29.3375 25.6875V27.75C29.3375 28.1701 29.0008 28.5875 28.5 28.5875C28.2414 28.5875 28.0338 28.5018 27.891 28.359C27.7482 28.2162 27.6625 28.0085 27.6625 27.75V25.6875C27.6625 23.9597 29.1195 22.4125 30.9375 22.4125H37.7812C39.509 22.4125 41.0562 23.8695 41.0562 25.6875V30.5625C41.0562 30.7644 40.9543 30.9746 40.7925 31.1363C40.6308 31.2981 40.4206 31.4 40.2187 31.4Z" fill="#1563DF" stroke="white" strokeWidth="0.2"></path>
                                        <path d="M22.0345 49.4757L22.0354 49.4755L22.0303 49.4629C21.8635 49.0457 22.1188 48.5532 22.5196 48.4731C22.9777 48.3814 23.3439 48.3813 23.7188 48.3813L23.7216 48.3812L36.8466 48.0062L36.8469 48.0062C39.8622 47.912 42.6884 47.158 45.4185 45.8401L45.4197 45.8394C49.9243 43.5871 53.9608 40.9591 57.4351 38.0488C57.7482 37.8377 57.85 37.5216 57.85 37.2188C57.85 37.0665 57.8245 36.9351 57.7711 36.8149C57.7178 36.6951 57.6391 36.5914 57.5395 36.4918L57.5396 36.4916L57.5342 36.4869C56.095 35.2396 54.0804 35.0493 52.3577 36.0063L52.3576 36.0062L52.3527 36.0093C49.553 37.7824 45.9085 39.1853 41.04 40.3088L41.0093 40.3159L40.9882 40.3394C40.1642 41.2548 39.0667 41.7125 37.875 41.7125H31.3125C30.8924 41.7125 30.475 41.3759 30.475 40.875C30.475 40.6165 30.5607 40.4088 30.7035 40.266C30.8463 40.1232 31.054 40.0375 31.3125 40.0375H37.875C38.7447 40.0375 39.4342 39.7454 39.9251 39.0581L39.9297 39.0517L39.9332 39.0447C40.0081 38.8949 40.1577 38.8144 40.3466 38.7198C45.2215 37.5939 48.7912 36.1855 51.5196 34.4924C53.8274 33.2011 56.6869 33.4794 58.6224 35.1384L58.6222 35.1387L58.6294 35.1439C59.2518 35.5884 59.525 36.303 59.525 37.125C59.525 37.9391 59.1634 38.7525 58.44 39.295L58.4399 39.2949L58.4368 39.2975C54.8804 42.1988 50.6677 44.9138 46.0796 47.2547L46.0791 47.2549C43.1873 48.7474 40.0147 49.4942 36.8408 49.5875L23.7188 49.9625H23.7174H23.0625H23.0211L22.9918 49.9918C22.9291 50.0545 22.8735 50.0563 22.7812 50.0563C22.4509 50.0563 22.1168 49.8051 22.0345 49.4757ZM13.7707 59.5695L13.7708 59.5694L13.7674 59.5649L0.736198 42.2212L0.737 42.2206L0.726961 42.2105C0.573335 42.0569 0.56875 41.8206 0.56875 41.625C0.56875 41.3947 0.721343 41.2355 0.888471 41.1519L0.896383 41.148L0.903477 41.1427L5.30973 37.8615L5.31 37.8613C6.04095 37.313 6.95685 37.0375 7.875 37.0375C9.24745 37.0375 10.4383 37.6771 11.265 38.6867L20.1699 50.5912L20.1699 50.5912L20.1711 50.5926C20.8132 51.4183 21.1773 52.5157 20.9951 53.6086C20.811 54.7131 20.2595 55.8135 19.3457 56.5454L14.948 59.7267C14.7578 59.8217 14.5948 59.9 14.4375 59.9C14.1793 59.9 13.9346 59.8153 13.7707 59.5695ZM2.66005 41.8253L2.57769 41.885L2.63881 41.9663L14.5451 57.8101L14.6048 57.8896L14.6847 57.8302L18.3389 55.113C18.9264 54.7203 19.3143 54.0382 19.4115 53.3579C19.5097 52.6707 19.3114 52.0837 18.927 51.507L18.9271 51.507L18.9238 51.5026L10.0184 39.5974C10.0182 39.5973 10.0181 39.5971 10.018 39.5969C9.62477 39.0566 8.98973 38.7168 8.32299 38.6198C7.6566 38.5229 6.9484 38.6671 6.40771 39.1082L2.66005 41.8253Z" fill="#1563DF" stroke="white" strokeWidth="0.2"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13434_4230">
                                            <rect width="60" height="60" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                        <div className="content">
                            <h5 className="title">Join the NFRG Team</h5>
                            <p className="description">
                                Full-time, growth-minded agents get structure, accountability, and a squad that has
                                their back on every deal.
                            </p>
                            <span className="btn-view style-1">
                                <span className="text">Apply as an Agent</span>
                                <span className="icon icon-arrow-right2"></span>
                            </span>
                        </div>
                    </a>
                    <a href="##coaching" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon">
                                {/* icon unchanged */}
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_13434_4244)">
                                        <path d="M36.5625 5.53125C34.0312 5.25 31.4062 5.71875 28.9687 7.03125C24.375 9.65625 22.125 14.7187 22.875 19.5937L3.09374 30.8437C2.90624 30.9375 2.71874 31.2187 2.62499 31.4062C2.15624 33.1875 1.78124 34.4062 1.31249 36.0937C1.12499 36.5625 1.49999 37.125 1.96874 37.2187C3.65624 37.6875 4.87499 38.0625 6.65624 38.5312C6.93749 38.625 7.21874 38.5312 7.40624 38.4375L8.62499 37.6875C8.90624 37.5937 8.99999 37.3125 9.09374 37.0312L9.56249 34.2187C9.65624 33.6562 10.3125 33.2812 10.7812 33.4687L12.8437 34.2187C13.4062 34.4062 13.9687 34.125 14.0625 33.4687L14.4375 31.3125C14.5312 30.75 15.1875 30.375 15.6562 30.5625L17.7187 31.3125C18.2812 31.5 18.8437 31.2187 18.9375 30.5625L19.3125 28.4062C19.4062 27.8437 20.0625 27.4687 20.5312 27.6562L23.25 28.6875C23.5312 28.7812 23.8125 28.7812 24 28.5937L26.25 27.375" stroke="#1563DF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M53.1563 23.4375C52.125 28.5937 48 32.3438 43.125 33.1875L42.4688 36.6562C42.375 36.9375 42.2813 37.125 42 37.3125L39.375 38.7187C38.9063 39 38.7188 39.6562 39.0938 40.125L40.5 41.8125C40.875 42.2812 40.6875 42.9375 40.2188 43.2187L38.3438 44.25C37.7813 44.5312 37.6875 45.1875 38.0625 45.6562L39.4688 47.3437C39.8438 47.8125 39.75 48.4687 39.1875 48.75L37.3125 49.7812C36.8438 50.0625 36.6563 50.7187 37.0313 51.1875L38.9063 53.4375C39.0938 53.625 39.1875 53.9062 39.0938 54.1875L38.8125 55.5937C38.7188 55.875 38.625 56.0625 38.4375 56.25C36.8438 57.2812 35.8125 58.0313 34.4063 58.9688C33.9375 59.25 33.375 59.1562 33.0938 58.6875C32.0625 57.1875 31.4063 56.1562 30.375 54.6562C30 54.375 30 54.0938 30 53.8125L34.4063 31.5C30.1875 28.875 27.8438 23.8125 28.875 18.6562C30.1875 12 36.6563 7.59375 43.4063 8.90625C50.1563 10.2187 54.4688 16.7812 53.1563 23.4375Z" stroke="#1563DF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M41.8125 20.4375C43.8318 20.4375 45.4687 18.8005 45.4687 16.7812C45.4687 14.762 43.8318 13.125 41.8125 13.125C39.7932 13.125 38.1562 14.762 38.1562 16.7812C38.1562 18.8005 39.7932 20.4375 41.8125 20.4375Z" stroke="#1563DF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M53.25 19.3125C55.875 18 57.9375 15.5625 58.5 12.4687C59.5312 7.21875 56.1562 2.15625 50.9062 1.125C45.6562 0.0937479 40.5937 3.46875 39.5625 8.71875V8.8125C39 11.7187 39.8437 14.625 41.5312 16.7812" stroke="#1563DF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13434_4244">
                                            <rect width="60" height="60" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                        <div className="content">
                            <h5 className="title">Coaching &amp; Education</h5>
                            <p className="description">
                                Weekly live calls, playbooks, and role-plays so you can turn more conversations
                                into closings with confidence.
                            </p>
                            <span className="btn-view style-1">
                                <span className="text">View Coaching</span>
                                <span className="icon icon-arrow-right2"></span>
                            </span>
                        </div>
                    </a>
                    <a href="##buyers-sellers" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon">
                                {/* icon unchanged */}
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_13434_4259)">
                                        <path d="M47.3438 45.375V59.0625H5.625V39.1875M26.625 14.3438C26.3437 14.25 26.0625 14.3437 25.7812 14.5312L5.34375 35.0625C4.3125 36.0938 2.71875 36.0938 1.6875 35.0625C1.21875 34.5938 0.9375 33.9375 0.9375 33.2813C0.9375 32.625 1.21875 31.9687 1.6875 31.5L22.2188 10.9687C23.7188 9.46875 25.7812 8.90625 27.6562 9.375M0.9375 59.0625H52.0312" stroke="#1563DF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M33.6563 51.75V44.0625C33.6563 42.0938 32.8125 40.3125 31.5 39C30.1875 37.6875 28.4062 36.8437 26.4375 36.8437C22.5 36.8437 19.2187 40.0312 19.2187 44.0625V51.75M36.8437 58.0313V59.0625H16.125V58.0313C16.125 56.625 17.25 55.5 18.6562 55.5H34.3125C35.7187 55.5 36.8437 56.625 36.8437 58.0313ZM59.0625 15.2812C59.0625 20.8125 51.9375 33.375 47.8125 40.4062C46.4062 42.6562 43.125 42.6562 41.7187 40.4062C37.5 33.4687 30.4687 20.9062 30.4687 15.2812C30.375 7.3125 36.8438 0.9375 44.7188 0.9375C52.5937 0.9375 59.0625 7.3125 59.0625 15.2812Z" stroke="#1563DF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M44.7187 24.4688C49.7929 24.4688 53.9062 20.3554 53.9062 15.2812C53.9062 10.2071 49.7929 6.09375 44.7187 6.09375C39.6446 6.09375 35.5312 10.2071 35.5312 15.2812C35.5312 20.3554 39.6446 24.4688 44.7187 24.4688Z" stroke="#1563DF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M22.6875 46.2188V48.0938V46.2188Z" fill="black"></path>
                                        <path d="M22.6875 46.2188V48.0938" stroke="#1563DF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13434_4259">
                                            <rect width="60" height="60" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                        <div className="content">
                            <h5 className="title">Support for Buyers &amp; Sellers</h5>
                            <p className="description">
                                Serious homebuyers, sellers, and investors get a responsive, battle-tested team
                                guiding every step of the transaction.
                            </p>
                            <span className="btn-view style-1">
                                <span className="text">Work With Us</span>
                                <span className="icon icon-arrow-right2"></span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


    <section className="nfrg-lpt-section">
        <div className="container">
            <div className="nfrg-lpt-card">
                <div className="nfrg-lpt-copy">
                    <div className="nfrg-lpt-kicker">Brokered By</div>
                    <h3 className="nfrg-lpt-title">LPT Realty LLC</h3>
                    <p className="nfrg-lpt-desc">A national brokerage partner powering elite service, strong compliance,
                        and next-level support.</p>
                    <a href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=567537" target="_blank" rel="noopener noreferrer" style={{fontSize: "13px", color: "#1563df", textDecoration: "underline", marginTop: "4px", display: "inline-block"}}>Texas Information About Brokerage Services</a>
                </div>
                <div className="nfrg-lpt-square">
                    <img src="images/lpt/lpt_square.jpg" alt="LPT Realty logo" />
                </div>
            </div>
        </div>
    </section>


    {/* NFRG Intro Video */}
    <section id="inside-nfrg" className="flat-section nfrg-intro-video-section">
        <div className="container">
            <div className="nfrg-intro-video-shell wow fadeInUp" data-wow-delay=".1s">
                <div className="nfrg-intro-copy">
                    <div className="text-subtitle"><EditableText contentKey="video.subtitle" defaultValue="Inside NFRG" /></div>
                    <h3 className="title"><EditableText contentKey="video.title" defaultValue="See the NFRG Advantage in 60 Seconds" /></h3>
                    <p><EditableText contentKey="video.desc" defaultValue="This intro gives agents a quick look at our coaching culture, execution standard, and daily momentum." /></p>
                </div>
                <div className="nfrg-video-card" id="nfrgIntroVideoBlock">
                    <div className="nfrg-video-wrap">
                        <iframe id="nfrgIntroIframe"
                            src="https://customer-e8yhvleuw3zmc4jr.cloudflarestream.com/a1986edf520ebd2336fd05b358b34e37/iframe?poster=https%3A%2F%2Fcustomer-e8yhvleuw3zmc4jr.cloudflarestream.com%2Fa1986edf520ebd2336fd05b358b34e37%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&muted=true&loop=true"
                            loading="lazy"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen={true}></iframe>
                        <div className="nfrg-play-overlay" id="nfrgPlayOverlay">
                            <button type="button" className="nfrg-play-btn" id="nfrgPlayBtn" aria-label="Play video with sound">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="36" height="36" aria-hidden="true">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* Available Listings Showcase */}
    <section id="listings" className="flat-section">
        <div className="container">
            <div className="box-title">
                <div className="text-center wow fadeInUp">
                    <div className="text-subtitle text-primary">Our Portfolio</div>
                    <h3 className="title mt-4">Featured Listings</h3>
                </div>
            </div>
            <div className="swiper tf-sw-listings wow fadeInUp" data-wow-delay=".2s" data-preview="3" data-tablet="2"
                data-mobile="1" data-space-lg="30" data-space-md="15" data-space="15">
                <div className="swiper-wrapper">
                    {listings.map(l => (
                      <div key={l._id} className="swiper-slide">
                        <div className="homelengo-box">
                          <div className="archive-top">
                            <a href={l.harUrl || '#'} target="_blank" rel="noopener noreferrer" className="images-group">
                              <div className="images-style">
                                <img className="lazyload" src={l.image || '/images/properties/property1.jpg'} alt={l.title} />
                              </div>
                              <div className="top">
                                <ul className="d-flex gap-6">
                                  <li className={`flag-tag ${l.status === 'Active' ? 'active' : l.status === 'Sold' ? 'sold' : 'pending'}`}>{l.status}</li>
                                </ul>
                              </div>
                              <div className="bottom">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {l.address || l.title}
                              </div>
                            </a>
                          </div>
                          <div className="archive-bottom">
                            <div className="content-top">
                              <h6 className="text-capitalize">
                                <a href={l.harUrl || '#'} target="_blank" rel="noopener noreferrer" className="link">{l.title}</a>
                              </h6>
                              <ul className="meta-list">
                                {l.beds && <li className="item"><i className="icon icon-bed"></i><span className="text-variant-1">Beds:</span><span className="fw-6">{l.beds}</span></li>}
                                {l.baths && <li className="item"><i className="icon icon-bath"></i><span className="text-variant-1">Baths:</span><span className="fw-6">{l.baths}</span></li>}
                                {l.sqft && <li className="item"><i className="icon icon-sqft"></i><span className="text-variant-1">Sqft:</span><span className="fw-6">{l.sqft}</span></li>}
                              </ul>
                            </div>
                            <div className="content-bottom">
                              <h6 className="price">{l.price}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="sw-pagination sw-pagination-listings text-center"></div>
            </div>
            <div className="text-center mt-32 wow fadeInUp" data-wow-delay=".3s">
                <a href="/har-listings" className="tf-btn primary">
                    Browse Active Listings
                </a>
                <a href="/har-listings#panel-sold" className="tf-btn btn-line ms-3">
                    View More Sold Homes
                </a>
            </div>
        </div>
    </section>
    {/* End Recently Sold Showcase */}

    <section id="leadership" className="mx-5 bg-primary-new radius-30">
        <div className="flat-img-with-text">
            <div className="content-left img-animation wow">
                <EditableImage contentKey="james.photo" defaultSrc="images/6N4A1003.jpg" alt="James Scott" className="lazyload" style={{width:'100%'}} />
            </div>
          <div className="content-right">
    <div className="box-title wow fadeInUp">
        <div className="text-subtitle text-primary"><EditableText contentKey="james.subtitle" defaultValue="About James" /></div>
        <h3 className="title mt-4"><EditableText contentKey="james.title" defaultValue="Houston Native. Navy Chief. Relocation Specialist." /></h3>

        <p className="desc" style={{fontSize: "16px", marginBottom: "2px"}}>
            <EditableText contentKey="james.bio1" defaultValue="JAMES is a Houston-area native and licensed real estate professional since 2007. A 23-year U.S. Navy veteran, he brings the discipline, precision, and leadership of military service into every transaction. He also holds a BBA from UMUC." />
        </p>

        <p className="desc mt-3" style={{fontSize: "16px", marginBottom: "2px"}}>
            <EditableText contentKey="james.bio2" defaultValue="As a prior active-duty service member, relocation is his specialty. James understands firsthand the pressure of finding a home in an unfamiliar area—because he has lived it. The questions you have are often the same questions he had to ask and overcome throughout his career." />
        </p>

        <p className="desc mt-3" style={{fontSize: "16px", marginBottom: "2px"}}>
            <EditableText contentKey="james.bio3" defaultValue="Having experienced multiple relocations as a Navy Chief, James offers a unique perspective for both existing home purchases and new construction—guiding you with clarity, confidence, and a mission-first approach." />
        </p>

        <p className="caption-1 mt-3" style={{fontSize: "16px", marginBottom: "2px"}}>
            <EditableText contentKey="james.caption" defaultValue="Proudly aligned with LPT Realty LLC to serve clients and fellow agents with professionalism and integrity." />
        </p>
    </div>

    <div className="flat-service wow fadeInUp" data-wow-delay=".2s">
        <a href="##" className="box-benefit hover-btn-view">
            <div className="icon-box">
                <span className="icon icon-proven"></span>
            </div>
            <div className="content">
                <h5 className="title">Licensed Since 2007</h5>
                <p className="description">
                    Years of experience helping buyers and sellers navigate the Houston market with steady guidance and
                    strong execution.
                </p>
            </div>
        </a>

        <a href="##" className="box-benefit hover-btn-view">
            <div className="icon-box">
                <span className="icon icon-customize"></span>
            </div>
            <div className="content">
                <h5 className="title">Relocation Specialist</h5>
                <p className="description">
                    From first-time moves to major transitions, James helps you make confident decisions in a new area—
                    with a process built from real-world relocation experience.
                </p>
            </div>
        </a>

        <a href="##" className="box-benefit hover-btn-view">
            <div className="icon-box">
                <span className="icon icon-partnership"></span>
            </div>
            <div className="content">
                <h5 className="title">Military Precision &amp; Perspective</h5>
                <p className="description">
                    A 23-year U.S. Navy veteran and BBA graduate, James brings disciplined planning, clear communication,
                    and a unique viewpoint for both existing homes and new construction.
                </p>
            </div>
        </a>
    </div>
</div>

        </div>
    </section>
    {/* End Benefit */}

    {/* Community */}
    <section id="mentorship-community" className="flat-section nfrg-community-section">
        <div className="container">
            <div className="nfrg-community-shell">
                <div className="box-title nfrg-community-title text-center wow fadeInUp">
                    <div className="text-subtitle"><EditableText contentKey="community.subtitle" defaultValue="NFRG Social Community & Broker Tools" /></div>
                    <h3 className="title mt-4"><EditableText contentKey="community.title" defaultValue='Plug Into the Gold Standard Mentorship & Courses Community' /></h3>
                    <p className="desc text-variant-1">
                        <EditableText contentKey="community.desc" defaultValue="Built for serious agents who want direct mentorship, on-demand courses, webinars, tactical conversations, and broker tools in one place. Learn faster, post smarter, and grow together inside NFRG." />
                    </p>
                </div>
                <div className="row g-4 align-items-stretch mt-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".15s">
                        <div className="nfrg-community-visual">
                            <EditableImage contentKey="community.image" defaultSrc="images/nfrg-community.jpg" alt="NFRG community platform" style={{width:'100%'}} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".25s">
                        <div className="nfrg-community-panel">
                            <h5>Mentorship, Courses, and Community Feed Built for Brokers</h5>
                            <p className="text-variant-1 mb-2">
                                LinkedIn + Reddit style collaboration for real estate with mentor access and course-driven
                                growth: post updates, share wins, ask questions, launch polls, drop short videos, tag members,
                                and save key posts.
                            </p>
                            <div className="nfrg-community-points">
                                <div className="nfrg-community-point"><i className="icon icon-check-circle"></i>Direct mentorship support</div>
                                <div className="nfrg-community-point"><i className="icon icon-check-circle"></i>Structured courses + webinars</div>
                                <div className="nfrg-community-point"><i className="icon icon-check-circle"></i>Nested comment threads</div>
                                <div className="nfrg-community-point"><i className="icon icon-check-circle"></i>Multi-emoji reactions</div>
                                <div className="nfrg-community-point"><i className="icon icon-check-circle"></i>Bookmarks and saved posts</div>
                                <div className="nfrg-community-point"><i className="icon icon-check-circle"></i>Tag courses and resources</div>
                            </div>
                            <h6 className="mt-3 mb-2">Post Categories</h6>
                            <div className="nfrg-community-list">
                                <div className="nfrg-community-chip">🏠 Listings</div>
                                <div className="nfrg-community-chip">💡 Tips &amp; Strategies</div>
                                <div className="nfrg-community-chip">❓ Ask the Community</div>
                                <div className="nfrg-community-chip">🎉 Wins &amp; Milestones</div>
                                <div className="nfrg-community-chip">📊 Market Insights</div>
                                <div className="nfrg-community-chip">🤝 Referrals</div>
                                <div className="nfrg-community-chip">📚 Resources</div>
                            </div>
                            <a href="https://nfrg-web-app.vercel.app/" className="tf-btn primary mt-3" target="_blank" rel="noopener noreferrer">Join Mentorship + Courses at NFRG</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End Community */}


    <section className="mx-5 bg-primary-new radius-30 mt-5">
        <div className="flat-img-with-text">
            <div className="content-right">
                <div className="box-title wow fadeInUp">
                    <div className="text-subtitle text-primary"><EditableText contentKey="ashley.subtitle" defaultValue="About Ashley" /></div>
                    <h3 className="title mt-4"><EditableText contentKey="ashley.title" defaultValue="Belize Born. Navy Veteran. Client-First Advisor." /></h3>

                    <p className="desc" style={{fontSize: "16px", marginBottom: "2px"}}>
                        <EditableText contentKey="ashley.bio1" defaultValue="ASHLEY, originally born in Belize, Central America, currently resides in Cypress, TX with his wife, two kids, and a rescue dog named Labelle. After honorably serving nearly a decade in the United States Navy, he settled in the Houston area, completed his Bachelor of Business Administration degree, and has called Houston home for the past 20 years." />
                    </p>

                    <p className="desc mt-3" style={{fontSize: "16px", marginBottom: "2px"}}>
                        <EditableText contentKey="ashley.bio2" defaultValue="He stays connected to the community by keeping up with new developments, and he and his wife enjoy exploring both new and established dining and social spots across the area." />
                    </p>

                    <p className="desc mt-3" style={{fontSize: "16px", marginBottom: "2px"}}>
                        <EditableText contentKey="ashley.bio3" defaultValue="Combined with experience from the military and oil and gas industry, Ashley is passionate about helping others. He listens to client needs, provides trusted resources and information, and guides negotiations through each step of the buying and selling process." />
                    </p>

                    <p className="caption-1 mt-3" style={{fontSize: "16px", marginBottom: "2px"}}>
                        <EditableText contentKey="ashley.caption" defaultValue="Whether you are selling or purchasing the home that fits this stage of your life, Ashley is ready to deliver trustworthy, ethical, and committed service." />
                    </p>
                </div>

                <div className="flat-service wow fadeInUp" data-wow-delay=".2s">
                    <a href="##" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon icon-proven"></span>
                        </div>
                        <div className="content">
                            <h5 className="title">Navy-Tested Leadership</h5>
                            <p className="description">
                                Nearly a decade of military service shaped a disciplined, mission-first approach to
                                client communication and execution.
                            </p>
                        </div>
                    </a>

                    <a href="##" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon icon-customize"></span>
                        </div>
                        <div className="content">
                            <h5 className="title">Houston Area Knowledge</h5>
                            <p className="description">
                                Twenty years in the Houston area with active local involvement and ongoing insight into
                                neighborhood growth and market opportunities.
                            </p>
                        </div>
                    </a>

                    <a href="##" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon icon-partnership"></span>
                        </div>
                        <div className="content">
                            <h5 className="title">Client-First Guidance</h5>
                            <p className="description">
                                Built on real buying and selling experience, Ashley helps clients navigate emotional and
                                complex decisions with clear, ethical support.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="content-left img-animation wow">
                <EditableImage contentKey="ashley.photo" defaultSrc="images/ACHPic1.jpg" alt="Ashley profile" className="lazyload" style={{width:'100%'}} />
            </div>
        </div>
    </section>
    {/* End About Ashley */}


    <section id="insights" className="flat-section bg-primary-new">
        <div className="container">
            <div className="box-title text-center wow fadeInUp">
                <div className="text-subtitle text-primary"><EditableText contentKey="blog.subtitle" defaultValue="Latest Insights" /></div>
                <h3 className="title mt-4"><EditableText contentKey="blog.title" defaultValue="From Our Blog" /></h3>
            </div>
            {blogPosts.length > 0 ? (
              <div className="row wow fadeInUp" data-wow-delay=".2s">
                {blogPosts.map(post => (
                  <div key={post._id} className="col-lg-4 col-md-6 mb-30">
                    <a href={`/blogs/${post.slug || post._id}`} className="flat-blog-item hover-img">
                      <div className="img-style">
                        <img className="lazyload"
                          src={post.image || 'images/blog/blog-10.jpg'}
                          alt={post.title}
                          style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                        <span className="date-post">{formatDate(post.date)}</span>
                      </div>
                      <div className="content-box">
                        <div className="post-author">
                          <span className="fw-6">{post.author}</span>
                          <span>{post.category}</span>
                        </div>
                        <h5 className="title link">{post.title}</h5>
                        {post.excerpt && <p className="description">{post.excerpt}</p>}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="swiper tf-sw-latest wow fadeInUp" data-wow-delay=".2s" data-preview="3" data-tablet="2"
                  data-mobile-sm="2" data-mobile="1" data-space-lg="30" data-space-md="15" data-space="15">
                  <div className="swiper-wrapper">
                      <div className="swiper-slide">
                          <a href="/blog-detail" className="flat-blog-item hover-img">
                              <div className="img-style">
                                  <img className="lazyload" data-src="images/blog/blog-10.jpg" src="images/blog/blog-10.jpg"
                                      alt="Why Daily Accountability Separates Top Agents" />
                                  <span className="date-post">February 14, 2025</span>
                              </div>
                              <div className="content-box">
                                  <div className="post-author">
                                      <span className="fw-6">James Scott</span>
                                      <span>Agent Growth</span>
                                  </div>
                                  <h5 className="title link">Why Daily Accountability Separates Top Agents from the Rest</h5>
                                  <p className="description">At NFRG, consistent small actions — tracked, reviewed, and celebrated — compound into extraordinary results for agents at every level of their career.</p>
                              </div>
                          </a>
                      </div>
                      <div className="swiper-slide">
                          <a href="/blog-detail" className="flat-blog-item hover-img">
                              <div className="img-style">
                                  <img className="lazyload" data-src="images/blog/blog-11.jpg" src="images/blog/blog-11.jpg"
                                      alt="Houston&apos;s Northwest Suburbs Are Booming" />
                                  <span className="date-post">March 3, 2025</span>
                              </div>
                              <div className="content-box">
                                  <div className="post-author">
                                      <span className="fw-6">Maria Delgado</span>
                                      <span>Market Insights</span>
                                  </div>
                                  <h5 className="title link">Houston&apos;s Northwest Suburbs Are Booming: What Buyers Need to Know in 2025</h5>
                                  <p className="description">From Cypress to Katy, demand is outpacing supply across Houston&apos;s fastest-growing corridors. Here&apos;s how savvy buyers can stay ahead of the curve.</p>
                              </div>
                          </a>
                      </div>
                      <div className="swiper-slide">
                          <a href="/blog-detail" className="flat-blog-item hover-img">
                              <div className="img-style">
                                  <img className="lazyload" data-src="images/blog/blog-12.jpg" src="images/blog/blog-12.jpg"
                                      alt="VA Loan Myths Busted" />
                                  <span className="date-post">March 20, 2025</span>
                              </div>
                              <div className="content-box">
                                  <div className="post-author">
                                      <span className="fw-6">David Kim</span>
                                      <span>VA Homebuying</span>
                                  </div>
                                  <h5 className="title link">VA Loan Myths Busted: A Guide for Veterans Buying Their First Home</h5>
                                  <p className="description">Many veterans leave VA benefits on the table due to misconceptions. NFRG&apos;s military-focused agents walk you through what the VA loan can truly do for you.</p>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div className="sw-pagination sw-pagination-latest text-center"></div>
              </div>
            )}
            <div className="text-center mt-30">
                <a href="/blogs" className="tf-btn primary">More Blogs</a>
            </div>
        </div>
    </section>
    {/* End Latest New */}

    <section id="contact" className="flat-section flat-contact-info">
        <div className="container">
            <div className="bg-primary-new radius-30 p-4 p-lg-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-4">
                        <div className="box-title">
                            <div className="text-subtitle text-primary"><EditableText contentKey="contact.subtitle" defaultValue="Contact &amp; Support" /></div>
                            <h3 className="title mt-3 text-black"><EditableText contentKey="contact.title" defaultValue="Mission-Ready Service" /></h3>
                            <p className="desc text-black"><EditableText contentKey="contact.desc" defaultValue="Connect with Navy Fellas Realty Group, proudly brokered by LPT Realty LLC, for client care, recruiting, or agent support." /></p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="box-benefit hover-btn-view contact-card bg-white h-100">
                                    <div className="icon-box">
                                        <span className="icon icon-mapPinLine"></span>
                                    </div>
                                    <div className="content">
                                        <h5 className="title"><EditableText contentKey="contact.address.title" defaultValue="Visit Us" /></h5>
                                        <p className="description mb-0"><EditableText contentKey="contact.address.text" defaultValue="14150 Huffmeister Rd Suite 125, Cypress, TX 77429" /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box-benefit hover-btn-view contact-card bg-white h-100">
                                    <div className="icon-box">
                                        <span className="icon icon-phone2"></span>
                                    </div>
                                    <div className="content">
                                        <h5 className="title"><EditableText contentKey="contact.phone.title" defaultValue="Call" /></h5>
                                        <p className="description mb-0"><EditableText contentKey="contact.phone.cell" defaultValue="Cell: 832-969-2391" /></p>
                                        <p className="description mb-0"><EditableText contentKey="contact.phone.office" defaultValue="Main LPT Office: 877-366-2313" /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box-benefit hover-btn-view contact-card bg-white h-100">
                                    <div className="icon-box">
                                        <span className="icon icon-mail"></span>
                                    </div>
                                    <div className="content">
                                        <h5 className="title"><EditableText contentKey="contact.email.title" defaultValue="Email" /></h5>
                                        <p className="description mb-0"><EditableText contentKey="contact.email.general" defaultValue="General: james.scott@navyfellasrealtygroup.com" /></p>
                                        <p className="description mb-0"><EditableText contentKey="contact.email.support" defaultValue="Support &amp; Billing: ashley.henkis@navyfellasrealtygroup.com" /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box-benefit hover-btn-view contact-card bg-white h-100">
                                    <div className="icon-box">
                                        <span className="icon icon-instargram"></span>
                                    </div>
                                    <div className="content">
                                        <h5 className="title"><EditableText contentKey="contact.social.title" defaultValue="Instagram" /></h5>
                                        <p className="description mb-0"><EditableText contentKey="contact.social.desc" defaultValue="Stay linked to training drops, community wins, and live events." /></p>
                                        <a href="https://linktr.ee/navyfellas?utm_source=linktree_profile_share&amp;ltsid=17209520-1b14-4aa6-bf9e-367c66a20ea1" className="tf-btn btn-line mt-3" target="_blank" rel="noopener">Visit @navyfellas</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="nfrg-lpt-banner-strip">
        <div className="container">
            <div className="nfrg-lpt-banner-frame">
                <img src="images/lpt/lptreality_long_banner.jpeg" alt="LPT Realty banner" />
            </div>
        </div>
    </section>

      <Script
        id="nfrg-play-overlay-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: playScript }}
      />
    </>
  )
}
