import Script from 'next/script'

export default function ListingPage() {
  return (
    <>
      {/* page content - no header, no footer */}

      {/* Map */}
      <section className="flat-map">
        <div id="map" className="top-map" data-map-zoom="16" data-map-scroll="true"></div>
        <div className="container">
          <div className="wrap-filter-search">
            <div className="form-sl">
              <form method="post">
                <div className="wd-find-select shadow-3">
                  <div className="inner-group">
                    <div className="form-group-1 search-form form-style">
                      <label>Type</label>
                      <div className="group-select">
                        <div className="nice-select" tabIndex="0"><span className="current">All</span>
                          <ul className="list">
                            <li data-value="" className="option selected">All</li>
                            <li data-value="villa" className="option">Villa</li>
                            <li data-value="studio" className="option">Studio</li>
                            <li data-value="office" className="option">Office</li>
                            <li data-value="house" className="option">House</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-2 form-style">
                      <label>Location</label>
                      <div className="group-ip">
                        <input type="text" className="form-control" placeholder="Search Location"
                          defaultValue="" name="s" title="Search for" required />
                        <a href="#" className="icon icon-location">
                        </a>
                      </div>
                    </div>
                    <div className="form-group-3 form-style">
                      <label>Keyword</label>
                      <input type="text" className="form-control" placeholder="Search Keyword."
                        defaultValue="" name="s" title="Search for" required />
                    </div>
                  </div>
                  <div className="box-btn-advanced">
                    <div className="form-group-4 box-filter">
                      <a className="tf-btn btn-line filter-advanced pull-right">
                        <span className="text-1">Search advanced</span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.5 12.375V3.4375M5.5 12.375C5.86467 12.375 6.21441 12.5199 6.47227 12.7777C6.73013 13.0356 6.875 13.3853 6.875 13.75C6.875 14.1147 6.73013 14.4644 6.47227 14.7223C6.21441 14.9801 5.86467 15.125 5.5 15.125M5.5 12.375C5.13533 12.375 4.78559 12.5199 4.52773 12.7777C4.26987 13.0356 4.125 13.3853 4.125 13.75C4.125 14.1147 4.26987 14.4644 4.52773 14.7223C4.78559 14.9801 5.13533 15.125 5.5 15.125M5.5 15.125V18.5625M16.5 12.375V3.4375M16.5 12.375C16.8647 12.375 17.2144 12.5199 17.4723 12.7777C17.7301 13.0356 17.875 13.3853 17.875 13.75C17.875 14.1147 17.7301 14.4644 17.4723 14.7223C17.2144 14.9801 16.8647 15.125 16.5 15.125M16.5 12.375C16.1353 12.375 15.7856 12.5199 15.5277 12.7777C15.2699 13.0356 15.125 13.3853 15.125 13.75C15.125 14.1147 15.2699 14.4644 15.5277 14.7223C15.7856 14.9801 16.1353 15.125 16.5 15.125M16.5 15.125V18.5625M11 6.875V3.4375M11 6.875C11.3647 6.875 11.7144 7.01987 11.9723 7.27773C12.2301 7.53559 12.375 7.88533 12.375 8.25C12.375 8.61467 12.2301 8.96441 11.9723 9.22227C11.7144 9.48013 11.3647 9.625 11 9.625M11 6.875C10.6353 6.875 10.2856 7.01987 10.0277 7.27773C9.76987 7.53559 9.625 7.88533 9.625 8.25C9.625 8.61467 9.76987 8.96441 10.0277 9.22227C10.2856 9.48013 10.6353 9.625 11 9.625M11 9.625V18.5625"
                            stroke="#161E2D" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                    <button type="submit" className="tf-btn btn-search primary">Search <i
                      className="icon icon-search"></i> </button>
                  </div>
                </div>
                <div className="wd-search-form">
                  <div className="grid-2 group-box group-price">
                    <div className="widget-price">
                      <div className="box-title-price">
                        <span className="title-price fw-6">Price:</span>
                        <div className="caption-price">
                          <span id="slider-range-value1" className="fw-6"></span>
                          <span>-</span>
                          <span id="slider-range-value2" className="fw-6"></span>
                        </div>
                      </div>
                      <div id="slider-range"></div>
                      <div className="slider-labels">
                        <div>
                          <input type="hidden" name="min-value" defaultValue="" />
                          <input type="hidden" name="max-value" defaultValue="" />
                        </div>
                      </div>
                    </div>
                    <div className="widget-price">
                      <div className="box-title-price">
                        <span className="title-price fw-6">Size:</span>
                        <div className="caption-price">
                          <span id="slider-range-value01" className="fw-7"></span>
                          <span>-</span>
                          <span id="slider-range-value02" className="fw-7"></span>
                        </div>
                      </div>
                      <div id="slider-range2"></div>
                      <div className="slider-labels">
                        <div>
                          <input type="hidden" name="min-value2" defaultValue="" />
                          <input type="hidden" name="max-value2" defaultValue="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-2 group-box">
                    <div className="group-select grid-2">
                      <div className="box-select">
                        <label className="title-select fw-6">Rooms</label>
                        <div className="nice-select" tabIndex="0"><span className="current">2</span>
                          <ul className="list">
                            <li data-value="1" className="option">1</li>
                            <li data-value="2" className="option selected">2</li>
                            <li data-value="3" className="option">3</li>
                            <li data-value="4" className="option">4</li>
                            <li data-value="5" className="option">5</li>
                            <li data-value="6" className="option">6</li>
                            <li data-value="7" className="option">7</li>
                            <li data-value="8" className="option">8</li>
                            <li data-value="9" className="option">9</li>
                            <li data-value="10" className="option">10</li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-select">
                        <label className="title-select fw-6">Bathrooms</label>
                        <div className="nice-select" tabIndex="0"><span className="current">2</span>
                          <ul className="list">
                            <li data-value="1" className="option">1</li>
                            <li data-value="2" className="option selected">2</li>
                            <li data-value="3" className="option">3</li>
                            <li data-value="4" className="option">4</li>
                            <li data-value="5" className="option">5</li>
                            <li data-value="6" className="option">6</li>
                            <li data-value="7" className="option">7</li>
                            <li data-value="8" className="option">8</li>
                            <li data-value="9" className="option">9</li>
                            <li data-value="10" className="option">10</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="group-select grid-2">
                      <div className="box-select">
                        <label className="title-select fw-6">Bedrooms</label>
                        <div className="nice-select" tabIndex="0"><span className="current">2</span>
                          <ul className="list">
                            <li data-value="1" className="option">1</li>
                            <li data-value="2" className="option selected">2</li>
                            <li data-value="3" className="option">3</li>
                            <li data-value="4" className="option">4</li>
                            <li data-value="5" className="option">5</li>
                            <li data-value="6" className="option">6</li>
                            <li data-value="7" className="option">7</li>
                            <li data-value="8" className="option">8</li>
                            <li data-value="9" className="option">9</li>
                            <li data-value="10" className="option">10</li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-select">
                        <label className="title-select fw-6">Type</label>
                        <div className="nice-select" tabIndex="0"><span className="current">2</span>
                          <ul className="list">
                            <li data-value="1" className="option">1</li>
                            <li data-value="2" className="option selected">2</li>
                            <li data-value="3" className="option">3</li>
                            <li data-value="4" className="option">4</li>
                            <li data-value="5" className="option">5</li>
                            <li data-value="6" className="option">6</li>
                            <li data-value="7" className="option">7</li>
                            <li data-value="8" className="option">8</li>
                            <li data-value="9" className="option">9</li>
                            <li data-value="10" className="option">10</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-checkbox">
                    <div className="text-1 text-black-2">Amenities:</div>
                    <div className="group-amenities grid-6">
                      <div className="box-amenities">
                        <fieldset className="amenities-item">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb1" defaultChecked />
                          <label htmlFor="cb1" className="text-cb-amenities">Air Condition</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb2" />
                          <label htmlFor="cb2" className="text-cb-amenities">Cable TV</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb3" />
                          <label htmlFor="cb3" className="text-cb-amenities">Ceiling Height</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb4" />
                          <label htmlFor="cb4" className="text-cb-amenities">Fireplace</label>
                        </fieldset>
                      </div>
                      <div className="box-amenities">
                        <fieldset className="amenities-item">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb5" />
                          <label htmlFor="cb5" className="text-cb-amenities">Disabled Access</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb6" defaultChecked />
                          <label htmlFor="cb6" className="text-cb-amenities">Elevator</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb7" />
                          <label htmlFor="cb7" className="text-cb-amenities">Fence</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb8" />
                          <label htmlFor="cb8" className="text-cb-amenities">Garden</label>
                        </fieldset>
                      </div>
                      <div className="box-amenities">
                        <fieldset className="amenities-item">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb9" defaultChecked />
                          <label htmlFor="cb9" className="text-cb-amenities">Floor</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb10" />
                          <label htmlFor="cb10" className="text-cb-amenities">Furnishing</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb11" defaultChecked />
                          <label htmlFor="cb11" className="text-cb-amenities">Garage</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb12" />
                          <label htmlFor="cb12" className="text-cb-amenities">Pet Friendly</label>
                        </fieldset>
                      </div>
                      <div className="box-amenities">
                        <fieldset className="amenities-item">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb13" />
                          <label htmlFor="cb13" className="text-cb-amenities">Heating</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb14" />
                          <label htmlFor="cb14" className="text-cb-amenities">Intercom</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb15" />
                          <label htmlFor="cb15" className="text-cb-amenities">Parking</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb16" />
                          <label htmlFor="cb16" className="text-cb-amenities">WiFi</label>
                        </fieldset>
                      </div>
                      <div className="box-amenities">
                        <fieldset className="amenities-item">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb17" />
                          <label htmlFor="cb17" className="text-cb-amenities">Renovation</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb18" />
                          <label htmlFor="cb18" className="text-cb-amenities">Security</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb19" />
                          <label htmlFor="cb19" className="text-cb-amenities">Swimming Pool</label>
                        </fieldset>
                      </div>
                      <div className="box-amenities">
                        <fieldset className="amenities-item">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb20" />
                          <label htmlFor="cb20" className="text-cb-amenities">Window Type</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb21" />
                          <label htmlFor="cb21" className="text-cb-amenities">Search property</label>
                        </fieldset>
                        <fieldset className="amenities-item mt-16">
                          <input type="checkbox" className="tf-checkbox style-1" id="cb22" />
                          <label htmlFor="cb22" className="text-cb-amenities">Construction Year</label>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Map */}
      <section className="flat-section flat-recommended">
        <div className="container">
          <div className="box-title-listing">
            <div className="box-left">
              <h3 className="fw-8">Property Listing</h3>
              <p className="text">There are currently 164,814 properties.</p>
            </div>
            <div className="box-filter-tab">
              <ul className="nav-tab-filter" role="tablist">
                <li className="nav-tab-item" role="presentation">
                  <a href="#gridLayout" className="nav-link-item active" data-bs-toggle="tab">
                    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.54883 5.90508C4.54883 5.1222 5.17272 4.5 5.91981 4.5C6.66686 4.5 7.2908 5.12221 7.2908 5.90508C7.2908 6.68801 6.66722 7.3101 5.91981 7.3101C5.17241 7.3101 4.54883 6.68801 4.54883 5.90508Z"
                        stroke="#A3ABB0" />
                      <path
                        d="M10.6045 5.90508C10.6045 5.12221 11.2284 4.5 11.9755 4.5C12.7229 4.5 13.3466 5.1222 13.3466 5.90508C13.3466 6.68789 12.7227 7.3101 11.9755 7.3101C11.2284 7.3101 10.6045 6.68794 10.6045 5.90508Z"
                        stroke="#A3ABB0" />
                      <path
                        d="M19.4998 5.90514C19.4998 6.68797 18.8757 7.31016 18.1288 7.31016C17.3818 7.31016 16.7578 6.68794 16.7578 5.90508C16.7578 5.12211 17.3813 4.5 18.1288 4.5C18.8763 4.5 19.4998 5.12215 19.4998 5.90514Z"
                        stroke="#A3ABB0" />
                      <path
                        d="M7.24249 12.0098C7.24249 12.7927 6.61849 13.4148 5.87133 13.4148C5.12411 13.4148 4.5 12.7926 4.5 12.0098C4.5 11.2268 5.12419 10.6045 5.87133 10.6045C6.61842 10.6045 7.24249 11.2267 7.24249 12.0098Z"
                        stroke="#A3ABB0" />
                      <path
                        d="M13.2976 12.0098C13.2976 12.7927 12.6736 13.4148 11.9266 13.4148C11.1795 13.4148 10.5557 12.7928 10.5557 12.0098C10.5557 11.2266 11.1793 10.6045 11.9266 10.6045C12.6741 10.6045 13.2976 11.2265 13.2976 12.0098Z"
                        stroke="#A3ABB0" />
                      <path
                        d="M19.4516 12.0098C19.4516 12.7928 18.828 13.4148 18.0807 13.4148C17.3329 13.4148 16.709 12.7926 16.709 12.0098C16.709 11.2268 17.3332 10.6045 18.0807 10.6045C18.8279 10.6045 19.4516 11.2266 19.4516 12.0098Z"
                        stroke="#A3ABB0" />
                      <path
                        d="M4.54297 18.0945C4.54297 17.3116 5.16709 16.6895 5.9143 16.6895C6.66137 16.6895 7.28523 17.3114 7.28523 18.0945C7.28523 18.8776 6.66139 19.4996 5.9143 19.4996C5.16714 19.4996 4.54297 18.8771 4.54297 18.0945Z"
                        stroke="#A3ABB0" />
                      <path
                        d="M10.5986 18.0945C10.5986 17.3116 11.2227 16.6895 11.97 16.6895C12.7169 16.6895 13.3409 17.3115 13.3409 18.0945C13.3409 18.8776 12.7169 19.4996 11.97 19.4996C11.2225 19.4996 10.5986 18.8772 10.5986 18.0945Z"
                        stroke="#A3ABB0" />
                      <path
                        d="M16.752 18.0945C16.752 17.3115 17.376 16.6895 18.1229 16.6895C18.8699 16.6895 19.4939 17.3115 19.4939 18.0945C19.4939 18.8776 18.8702 19.4996 18.1229 19.4996C17.376 19.4996 16.752 18.8772 16.752 18.0945Z"
                        stroke="#A3ABB0" />
                    </svg>
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a href="#listLayout" className="nav-link-item" data-bs-toggle="tab">
                    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.2016 17.8316H8.50246C8.0615 17.8316 7.7041 17.4742 7.7041 17.0332C7.7041 16.5923 8.0615 16.2349 8.50246 16.2349H19.2013C19.6423 16.2349 19.9997 16.5923 19.9997 17.0332C19.9997 17.4742 19.6426 17.8316 19.2016 17.8316Z"
                        fill="#A3ABB0" />
                      <path
                        d="M19.2016 12.8199H8.50246C8.0615 12.8199 7.7041 12.4625 7.7041 12.0215C7.7041 11.5805 8.0615 11.2231 8.50246 11.2231H19.2013C19.6423 11.2231 19.9997 11.5805 19.9997 12.0215C20 12.4625 19.6426 12.8199 19.2016 12.8199Z"
                        fill="#A3ABB0" />
                      <path
                        d="M19.2016 7.80913H8.50246C8.0615 7.80913 7.7041 7.45173 7.7041 7.01077C7.7041 6.5698 8.0615 6.2124 8.50246 6.2124H19.2013C19.6423 6.2124 19.9997 6.5698 19.9997 7.01077C19.9997 7.45173 19.6426 7.80913 19.2016 7.80913Z"
                        fill="#A3ABB0" />
                      <path
                        d="M5.0722 8.1444C5.66436 8.1444 6.1444 7.66436 6.1444 7.0722C6.1444 6.48004 5.66436 6 5.0722 6C4.48004 6 4 6.48004 4 7.0722C4 7.66436 4.48004 8.1444 5.0722 8.1444Z"
                        fill="#A3ABB0" />
                      <path
                        d="M5.0722 13.0941C5.66436 13.0941 6.1444 12.6141 6.1444 12.0219C6.1444 11.4297 5.66436 10.9497 5.0722 10.9497C4.48004 10.9497 4 11.4297 4 12.0219C4 12.6141 4.48004 13.0941 5.0722 13.0941Z"
                        fill="#A3ABB0" />
                      <path
                        d="M5.0722 18.0433C5.66436 18.0433 6.1444 17.5633 6.1444 16.9711C6.1444 16.379 5.66436 15.8989 5.0722 15.8989C4.48004 15.8989 4 16.379 4 16.9711C4 17.5633 4.48004 18.0433 5.0722 18.0433Z"
                        fill="#A3ABB0" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="nice-select select-filter list-page" tabIndex="0"><span className="current">Show: 50</span>
                <ul className="list">
                  <li data-value="1" className="option">Show: 50</li>
                  <li data-value="2" className="option">Show: 30</li>
                  <li data-value="3" className="option selected">Show: 10</li>
                </ul>
              </div>
              <div className="nice-select select-filter list-sort" tabIndex="0"><span className="current">Sort by (Default)</span>
                <ul className="list">
                  <li data-value="default" className="option selected">Sort by (Default)</li>
                  <li data-value="new" className="option">Newest</li>
                  <li data-value="old" className="option">Oldest</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flat-animate-tab">
            <div className="tab-content">
              <div className="tab-pane active show" id="gridLayout" role="tabpanel">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="homelengo-box">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-7.jpg"
                              src="images/home/house-7.jpg" alt="img" />
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                            <img className="lazyload" data-src="images/home/house-8.jpg"
                              src="images/home/house-8.jpg" alt="img" />
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                            <img className="lazyload" data-src="images/home/house-11.jpg"
                              src="images/home/house-11.jpg" alt="img" />
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                            <img className="lazyload" data-src="images/home/house-9.jpg"
                              src="images/home/house-9.jpg" alt="img" />
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                            <img className="lazyload" data-src="images/home/house-30.jpg"
                              src="images/home/house-30.jpg" alt="img" />
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="homelengo-box">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-31.jpg"
                              src="images/home/house-31.jpg" alt="img" />
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
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                <ul className="justify-content-center wd-navigation mt-20">
                  <li><a href="#" className="nav-item"><i className="icon icon-arr-l"></i></a></li>
                  <li><a href="#" className="nav-item">1</a></li>
                  <li><a href="#" className="nav-item">2</a></li>
                  <li><a href="#" className="nav-item active">3</a></li>
                  <li><a href="#" className="nav-item">4</a></li>
                  <li><a href="#" className="nav-item">...</a></li>
                  <li><a href="#" className="nav-item"><i className="icon icon-arr-r"></i></a></li>
                </ul>
              </div>
              <div className="tab-pane" id="listLayout" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-11.jpg"
                              src="images/home/house-sm-11.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-12.jpg"
                              src="images/home/house-sm-12.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-13.jpg"
                              src="images/home/house-sm-13.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-14.jpg"
                              src="images/home/house-sm-14.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-15.jpg"
                              src="images/home/house-sm-15.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-16.jpg"
                              src="images/home/house-sm-16.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-17.jpg"
                              src="images/home/house-sm-17.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-18.jpg"
                              src="images/home/house-sm-18.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-19.jpg"
                              src="images/home/house-sm-19.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                  <div className="col-lg-6">
                    <div className="homelengo-box list-style-1 line">
                      <div className="archive-top">
                        <a href="/listing-detailed" className="images-group">
                          <div className="images-style">
                            <img className="lazyload" data-src="images/home/house-sm-11.jpg"
                              src="images/home/house-sm-11.jpg" alt="img-property" />
                          </div>
                          <div className="top">
                            <ul className="d-flex gap-6 flex-wrap">
                              <li className="flag-tag primary">Featured</li>
                              <li className="flag-tag style-1">For Sale</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="archive-bottom">
                        <div className="content-top">
                          <h6 className="text-capitalize"><a href="/listing-detailed"
                            className="link text-line-clamp-1"> Casa Lomas de Machal&#237; Machas</a></h6>
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
                          <div className="location">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                              <path
                                d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                stroke="#A3ABB0" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-line-clamp-1"> 145 Brooklyn Ave, Califonia, New York </span>
                          </div>
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
                </div>
                <ul className="justify-content-center wd-navigation mt-20">
                  <li><a href="#" className="nav-item"><i className="icon icon-arr-l"></i></a></li>
                  <li><a href="#" className="nav-item">1</a></li>
                  <li><a href="#" className="nav-item">2</a></li>
                  <li><a href="#" className="nav-item active">3</a></li>
                  <li><a href="#" className="nav-item">4</a></li>
                  <li><a href="#" className="nav-item">...</a></li>
                  <li><a href="#" className="nav-item"><i className="icon icon-arr-r"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuSiPhoDaOJ7aqtJVtQhYhLzwwJ7rQlmA" strategy="afterInteractive" />
      <Script src="/js/infobox.min.js" strategy="afterInteractive" />
      <Script src="/js/marker.js" strategy="afterInteractive" />
      <Script src="/js/map.js" strategy="afterInteractive" />
    </>
  )
}
