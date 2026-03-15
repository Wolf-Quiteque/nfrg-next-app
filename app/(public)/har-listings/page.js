import Script from 'next/script'

export default function HarListingsPage() {
  return (
    <>
          {/* Page Hero */}
          <section className="listings-hero">
            <div className="container">
              <h1>Houston Property Listings</h1>
              <p>Active listings, recently sold homes, and a full property search — all in one place.</p>
            </div>
          </section>
          {/* End Page Hero */}

          {/* Texas Consumer Protection Notice */}
          <div className="trec-notice-bar">
            <div className="container">
              <div className="trec-notice-card">
                <div className="trec-notice-left">
                  <div className="trec-notice-badge">Texas Required Disclosure</div>
                  <div className="trec-notice-title">Information About Brokerage Services</div>
                  <p className="trec-notice-desc">Texas law requires license holders to disclose how they represent buyers, sellers, and tenants. Brokered by <strong>LPT Realty, LLC</strong> &middot; License No. 9012763-BB.</p>
                </div>
                <div className="trec-notice-right">
                  <a href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=567537"
                     target="_blank" rel="noopener noreferrer"
                     className="trec-notice-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V10M8 10L5 7M8 10L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Download TREC Disclosure (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Texas Consumer Protection Notice */}

          {/* Tab Bar */}
          <div className="listings-tabs-wrap">
            <div className="listings-tabs" role="tablist">
              <button className="listings-tab-btn active"
                      role="tab"
                      aria-selected="true"
                      aria-controls="panel-active"
                      data-panel="panel-active"
                      data-src="https://www.har.com/idx/mls/listing?sitetype=aws&cid=567537&mlsorgid=1&allmls=n">
                <span className="tab-dot"></span>
                Active Listings
              </button>
              <button className="listings-tab-btn"
                      role="tab"
                      aria-selected="false"
                      aria-controls="panel-sold"
                      data-panel="panel-sold"
                      data-src="https://www.har.com/idx/mls/sold/listing?sitetype=aws&cid=567537&allmls=n&mlsorgid=1">
                <span className="tab-dot"></span>
                Sold Listings
              </button>
              <button className="listings-tab-btn"
                      role="tab"
                      aria-selected="false"
                      aria-controls="panel-search"
                      data-panel="panel-search"
                      data-src="https://www.har.com/idx/mls/search?sitetype=aws&cid=567537&mlsorgid=1&allmls=n&for_sale=1">
                <span className="tab-dot"></span>
                Search Listings
              </button>
            </div>
          </div>
          {/* End Tab Bar */}

          {/* iFrame Section */}
          <section className="listings-iframe-section">
            <div className="container-fluid px-3 px-md-4">

              {/* Panel: Active Listings */}
              <div id="panel-active" className="listings-iframe-panel active" role="tabpanel">
                <div className="listings-iframe-shell">
                  <iframe
                    id="iframe-active"
                    src="https://www.har.com/idx/mls/listing?sitetype=aws&cid=567537&mlsorgid=1&allmls=n"
                    title="Active Property Listings – Navy Fellas Realty Group"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>

              {/* Panel: Sold Listings */}
              <div id="panel-sold" className="listings-iframe-panel" role="tabpanel">
                <div className="listings-iframe-shell">
                  <iframe
                    id="iframe-sold"
                    title="Sold Property Listings – Navy Fellas Realty Group"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    data-src="https://www.har.com/idx/mls/sold/listing?sitetype=aws&cid=567537&allmls=n&mlsorgid=1">
                  </iframe>
                </div>
              </div>

              {/* Panel: Search */}
              <div id="panel-search" className="listings-iframe-panel" role="tabpanel">
                <div className="listings-iframe-shell">
                  <iframe
                    id="iframe-search"
                    title="Property Search – Navy Fellas Realty Group"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    data-src="https://www.har.com/idx/mls/search?sitetype=aws&cid=567537&mlsorgid=1&allmls=n&for_sale=1">
                  </iframe>
                </div>
              </div>

            </div>
          </section>
          {/* End iFrame Section */}

          {/* HAR Disclosure */}
          <div className="har-disclosure">
            <div className="container">
              <p>Listing data is provided by the Houston Association of Realtors&reg; (HAR). Information deemed reliable but not guaranteed.
              &nbsp;|&nbsp;
              <a href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=567537" target="_blank" rel="noopener noreferrer">TREC Information About Brokerage Services</a>
              &nbsp;|&nbsp; Brokered by LPT Realty LLC.</p>
            </div>
          </div>
          {/* End HAR Disclosure */}

      {/* go top */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{transition:'stroke-dashoffset 10ms linear 0s', strokeDasharray:'307.919, 307.919', strokeDashoffset:'286.138'}}>
          </path>
        </svg>
      </div>

      <Script id="har-tabs" strategy="afterInteractive">{`
        (function () {
            var tabs = document.querySelectorAll('.listings-tab-btn');
            var panels = document.querySelectorAll('.listings-iframe-panel');

            function activateTab(targetId) {
                tabs.forEach(function (t) {
                    var match = t.getAttribute('data-panel') === targetId;
                    t.classList.toggle('active', match);
                    t.setAttribute('aria-selected', String(match));
                });
                panels.forEach(function (p) { p.classList.remove('active'); });
                var targetPanel = document.getElementById(targetId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    var panelIframe = targetPanel.querySelector('iframe[data-src]');
                    if (panelIframe) {
                        panelIframe.src = panelIframe.getAttribute('data-src');
                        panelIframe.removeAttribute('data-src');
                    }
                }
            }

            tabs.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    activateTab(btn.getAttribute('data-panel'));
                });
            });

            // Support deep-link via URL hash e.g. /har-listings#panel-sold
            var hash = window.location.hash.replace('#', '');
            if (hash && document.getElementById(hash)) {
                activateTab(hash);
            }
        })();
      `}</Script>
    </>
  )
}
