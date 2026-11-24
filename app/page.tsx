import Interactions from "@/components/Interactions";

/* The whole page is static markup rendered at build time.
   All motion and interactivity lives in <Interactions/> (one small client script). */
export default function Home() {
  return (
    <>

      {/* ============ INTRO ============ */}
      <div id="intro" aria-hidden="true">
        <span className="skip">Tap to skip</span>
        <div className="sign">
          <svg viewBox="0 0 1300 1300">
            <circle className="ring" cx="650" cy="650" r="630"/>
            <circle className="ring ring2" cx="650" cy="650" r="596"/>
            <g className="w" transform="translate(100 536)">
      <path d="M80.9 99.8C85.3 99.3 98 100.5 107.6 97.3C117.2 94 129.4 86.4 138.4 80C147.3 73.6 155.6 65.7 161.1 58.8C166.6 51.8 170.4 44.7 171.4 38.3C172.3 31.8 170.5 24.6 166.6 20.3C162.7 15.9 158.9 11.5 147.9 12.3C136.9 13 113.7 19.1 100.6 24.8C87.5 30.4 80.1 36.1 69.1 46.3C58.1 56.4 43 73.2 34.4 85.5C25.7 97.8 21.2 108.3 17.1 120.3C13 132.2 9.2 146.6 10 157.3C10.8 167.9 14.5 177.1 21.8 184C29.2 190.8 42.2 196.4 54.1 198.1C66 199.8 81.4 197 93.4 194.2C105.3 191.4 115.5 187 125.9 181.6C136.2 176.2 147.6 168.4 155.6 162C163.6 155.6 170.8 146.2 173.9 143"/>
      <path d="M228.1 106C225.9 104.8 220.2 98.1 214.9 99C209.5 99.9 202.1 106 195.9 111.5C189.7 117 182.2 125.6 177.8 132C173.3 138.4 171.2 143.4 169.1 150C167 156.6 162.9 165 165.2 171.4C167.4 177.7 175.9 186.4 182.5 187.9C189.1 189.3 197.5 184.2 204.6 180C211.7 175.8 219.7 169.7 225.1 162.8C230.5 155.8 234.5 143.9 236.9 138.3C239.2 132.6 238.7 131.9 239.1 128.8C239.5 125.6 239.9 120.8 239.1 119.3C238.3 117.7 235.1 119.3 234.4 119.3"/>
      <path d="M221.1 150.8C221.8 153.1 223.1 161.4 225.1 165C227.1 168.6 229.9 171.1 232.9 172.2C235.9 173.2 239.7 172.9 243.1 171.4C246.5 169.8 249 167.2 253.4 162.8C257.7 158.3 266.5 147.5 269.1 144.5"/>
      <path d="M270.8 146.3C275.7 142.5 288.9 134.5 300 124C311 113.5 326.2 96.8 336.9 83.3C347.5 69.8 357.1 52.8 363.6 43C370.1 33.3 374.1 29.8 375.6 24.8C377.1 19.8 375.8 15.3 372.4 13C368.9 10.7 360.9 9.3 355.1 10.8C349.4 12.2 344.7 14 337.9 21.8C331 29.5 322.5 43.3 314.1 57.3C305.7 71.2 294.7 91.3 287.4 105.3C280 119.2 273.8 130.1 270 140.8C266.2 151.4 264.2 161.8 264.5 169C264.8 176.2 267.7 181.2 271.6 184C275.5 186.7 282.2 186.7 288.1 185.5C294 184.3 300.8 181.6 307.1 176.9C313.4 172.1 321.3 162.6 325.9 157.3C330.4 151.9 333.1 146.6 334.6 144.5"/>
      <path d="M336.1 146.3C340.9 142.5 354.2 134.5 365.2 124C376.2 113.5 391.5 96.8 402.1 83.3C412.7 69.8 422.4 52.8 428.9 43C435.3 33.3 439.4 29.8 440.9 24.8C442.3 19.8 441 15.3 437.6 13C434.2 10.7 426.1 9.3 420.4 10.8C414.6 12.2 409.9 14 403.1 21.8C396.3 29.5 387.8 43.3 379.4 57.3C370.9 71.2 360 91.3 352.6 105.3C345.3 119.2 339.1 130.1 335.3 140.8C331.4 151.4 329.5 161.8 329.8 169C330 176.2 332.9 181.2 336.9 184C340.8 186.7 347.5 186.7 353.4 185.5C359.3 184.3 366.1 181.6 372.4 176.9C378.6 172.1 386.5 162.6 391.1 157.3C395.7 151.9 398.4 146.6 399.9 144.5"/>
      <path d="M531.4 144.5C529.8 146.6 525.6 152.9 521.9 157.3C518.1 161.6 514.4 166.4 509.1 170.6C503.9 174.7 496 179.9 490.4 182.4C484.7 184.9 479 186.8 475.4 185.5C471.7 184.2 469 179.6 468.4 174.5C467.7 169.4 469.1 163.5 471.4 154.8C473.6 146 480.7 126 481.6 121.8C482.5 117.5 481.9 124.1 476.9 129.5C471.9 134.9 460.3 146.2 451.6 154C442.9 161.8 433 170.8 424.9 176.1C416.8 181.3 408.4 185.9 402.9 185.5C397.4 185.1 393.4 179.4 391.9 173.7C390.3 168.1 389.4 159.9 393.4 151.8C397.5 143.6 407.7 132.4 416.3 125C424.8 117.6 436.5 111.5 444.6 107.5C452.7 103.5 458.3 102.3 465.1 101.3C471.9 100.2 481.7 100.7 485.6 101.3C489.5 101.8 488.1 104 488.6 104.5"/>
      <path d="M531.2 144.5C534.5 141.6 544.1 133.3 550.9 127.3C557.7 121.2 564.4 114.7 572.1 108.3C579.8 101.8 589.9 94.9 597.4 88.8C604.9 82.6 610.4 78.6 617.1 71.3C623.8 63.9 633.3 52.8 637.6 44.5C641.9 36.3 644 27.5 643.1 21.8C642.2 16 637.6 10.3 632.1 10C626.6 9.8 617.5 13.7 610.1 20.3C602.7 26.8 595.6 35.9 587.9 49.3C580.1 62.6 570.1 85.4 563.5 100.5C557 115.6 551.4 127.8 548.6 139.8C545.7 151.7 546.2 166 546.2 172.2C546.2 178.3 547.6 179.9 548.6 176.9C549.5 173.8 547.8 161.9 551.7 154C555.6 146.1 563.8 136.6 572.1 129.5C580.4 122.4 592.9 115.3 601.4 111.5C609.8 107.7 617.8 106 622.6 106.8C627.4 107.5 628.9 112.8 630.4 116.3C631.8 119.7 632.9 122.5 631.4 127.3C629.8 132 624.5 139 621.1 144.5C617.7 150 616.6 154.3 610.9 160.3C605.1 166.2 592.7 175.8 586.4 180C580 184.2 581.3 183.4 572.9 185.5C564.5 187.6 542.1 191.4 536 192.6"/>
      <path d="M766.9 144.5C765.3 146.6 761.1 152.9 757.4 157.3C753.6 161.6 749.9 166.4 744.6 170.6C739.4 174.7 731.5 179.9 725.9 182.4C720.2 184.9 714.5 186.8 710.9 185.5C707.2 184.2 704.5 179.6 703.9 174.5C703.2 169.4 704.6 163.5 706.9 154.8C709.1 146 716.2 126 717.1 121.8C718 117.5 717.4 124.1 712.4 129.5C707.4 134.9 695.8 146.2 687.1 154C678.4 161.8 668.5 170.8 660.4 176.1C652.3 181.3 643.9 185.9 638.4 185.5C632.9 185.1 628.9 179.4 627.4 173.7C625.8 168.1 624.9 159.9 628.9 151.8C633 143.6 643.2 132.4 651.8 125C660.3 117.6 672 111.5 680.1 107.5C688.2 103.5 693.8 102.3 700.6 101.3C707.4 100.2 717.2 100.7 721.1 101.3C725 101.8 723.6 104 724.1 104.5"/>
      <path d="M856.6 112.3C855.5 110.4 853 103.6 850.1 101.3C847.2 98.9 845.4 97.1 839.1 98C832.8 98.9 821.1 102.4 812.4 106.8C803.6 111.1 794.3 117.4 786.4 124C778.5 130.6 769.7 139.7 765.2 146.3C760.6 152.8 759.6 158.3 758.9 163.5C758.1 168.7 757.3 173.9 760.4 177.7C763.6 181.5 772.1 186.8 777.8 186.3C783.4 185.8 787.5 180 794.3 174.5C801.1 169 810.3 161.1 818.6 153.3C826.9 145.4 835.1 135 843.9 127.3C852.6 119.5 860.7 115.3 871.4 106.8C882 98.2 895.9 86.8 907.6 76C919.3 65.3 934.9 51 941.6 42.3C948.3 33.5 946.9 28.1 947.9 23.3C948.8 18.4 949.4 15.2 947.1 13C944.9 10.8 939.7 9 934.4 10C929 11 920.2 15.6 914.9 19.3C909.5 22.9 907.1 25.3 902.1 32C897.1 38.7 890 50.8 884.9 59.5C879.7 68.2 877.5 71.3 871.4 84C865.2 96.8 853.7 121 847.9 136C842 151 838.6 162.8 836.1 173.7C833.6 184.6 832.4 194.5 832.9 201.3C833.4 208.1 836.2 211.8 839.1 214.7C842 217.5 846.7 218.4 850.1 218.5C853.5 218.6 858 216 859.6 215.5"/>
      <path d="M951.9 112.3C950.8 110.4 948.3 103.6 945.4 101.3C942.4 98.9 940.6 97.1 934.4 98C928.1 98.9 916.4 102.4 907.6 106.8C898.8 111.1 889.5 117.4 881.7 124C873.8 130.6 865 139.7 860.4 146.3C855.8 152.8 854.9 158.3 854.1 163.5C853.3 168.7 852.5 173.9 855.7 177.7C858.8 181.5 867.4 186.8 873 186.3C878.6 185.8 882.7 180 889.6 174.5C896.4 169 905.6 161.1 913.9 153.3C922.1 145.4 930.3 135 939.1 127.3C947.9 119.5 956 115.3 966.6 106.8C977.2 98.2 991.1 86.8 1002.9 76C1014.6 65.3 1030.1 51 1036.9 42.3C1043.6 33.5 1042.2 28.1 1043.1 23.3C1044 18.4 1044.6 15.2 1042.4 13C1040.1 10.8 1035 9 1029.6 10C1024.2 11 1015.5 15.6 1010.1 19.3C1004.7 22.9 1002.4 25.3 997.4 32C992.4 38.7 985.2 50.8 980.1 59.5C975 68.2 972.8 71.3 966.6 84C960.4 96.8 949 121 943.1 136C937.2 151 933.9 162.8 931.4 173.7C928.9 184.6 927.6 194.5 928.1 201.3C928.6 208.1 931.5 211.8 934.4 214.7C937.2 217.5 941.9 218.4 945.4 218.5C948.8 218.6 953.3 216 954.9 215.5"/>
      <path d="M1088.9 144.5C1087.3 146.6 1083.1 152.9 1079.4 157.3C1075.6 161.6 1071.9 166.4 1066.6 170.6C1061.4 174.7 1053.5 179.9 1047.9 182.4C1042.2 184.9 1036.5 186.8 1032.9 185.5C1029.2 184.2 1026.5 179.6 1025.9 174.5C1025.2 169.4 1026.6 163.5 1028.9 154.8C1031.1 146 1038.2 126 1039.1 121.8C1040 117.5 1039.4 124.1 1034.4 129.5C1029.4 134.9 1017.8 146.2 1009.1 154C1000.4 161.8 990.5 170.8 982.4 176.1C974.3 181.3 965.9 185.9 960.4 185.5C954.9 185.1 950.9 179.4 949.4 173.7C947.8 168.1 946.9 159.9 950.9 151.8C955 143.6 965.2 132.4 973.8 125C982.3 117.6 994 111.5 1002.1 107.5C1010.2 103.5 1015.8 102.3 1022.6 101.3C1029.4 100.2 1039.2 100.7 1043.1 101.3C1047 101.8 1045.6 104 1046.1 104.5"/>
              <circle className="pen" r="9" cx="-50" cy="-50"/>
            </g>
          </svg>
        </div>
        <div className="intro-line"><span>We make ads</span><br /><span>people <em>talk</em> about.</span></div>
      </div>

      <header className="nav" id="nav">
        <a href="#top" className="logo" aria-label="CollabAdda home"><svg className="badge" id="navLogo" viewBox="0 0 1300 1300" aria-hidden="true"></svg><span className="wm" aria-hidden="true">Collabadda</span></a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#brands">Brands</a><a href="#work">Work</a><a href="#services">Services</a><a href="#contact">About</a>
        </nav>
        <a className="btn" href="https://forms.gle/ayhKAQZeANxJ7ZBb7" target="_blank" rel="noopener">Let's Collab
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </header>

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="wrap hero-grid">
           <div>
            <p className="rec fade" style={{transitionDelay:".2s",marginBottom:"24px"}} aria-label="Recording a 20 second ad"><i></i>REC <span id="recT">00:00</span><span className="bar" id="recB"></span><small>00:20</small></p>
            <h1 className="disp">
              <span className="l"><span>We make ads</span></span>
              <span className="l"><span>people <span className="talk">talk<svg viewBox="0 0 300 140" preserveAspectRatio="none"><path d="M40 30C110 2 260 6 284 52C306 96 214 132 132 128C46 124 4 92 14 62C22 38 70 20 150 16"/></svg></span></span></span>
              <span className="l"><span>about.</span></span>
            </h1>
            <div className="hero-row fade">
              <p className="hero-sub"><b>20-second ads</b> that feel like content, not commercials. Made to be sent to the group chat.</p>
              <div className="hero-cta">
                <a className="btn" href="https://forms.gle/ayhKAQZeANxJ7ZBb7" target="_blank" rel="noopener">Start a collab
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
                <a className="btn line" href="#brands">See who we've worked with</a>
              </div>
            </div>
           </div>
           <div className="feed" aria-hidden="true">
            <span className="back"></span>
            <div className="ph"><div className="scr" id="feed">
              <div className="bars"></div>
              <span className="who"><svg className="badge" viewBox="0 0 1300 1300"></svg><span>collabadda</span></span>
              <img src="/assets/img/r5.webp" className="on" width="480" height="853" alt="" fetchPriority="high" />
              <img src="/assets/img/hl/jbl.webp" width="338" height="600" alt="" decoding="async" />
              <img src="/assets/img/r6.webp" width="480" height="853" alt="" decoding="async" />
              <img src="/assets/img/hl/mastercard.webp" width="338" height="600" alt="" decoding="async" />
              <img src="/assets/img/r4.webp" width="480" height="853" alt="" decoding="async" />
              <img src="/assets/img/hl/secret.webp" width="338" height="600" alt="" decoding="async" />
            </div></div>
            <span className="chip c3">wait, this is an ad?!</span>
            <span className="chip c2">😂😂😂</span>
            <span className="chip c1">sending this to the gc</span>
           </div>
          </div>
        </section>


        {/* ============ BRANDS as stories ============ */}
        <section className="brands" id="brands">
          <div className="wrap">
            <div className="sec-top">
              <h2 className="disp sec-h rv">Brands that<br />let us <span className="o">cook.</span></h2>
              <p className="sec-note rv">Straight from our Instagram highlights. Tap a brand to watch the story.</p>
            </div>
            <div className="stories" id="stories"></div>
          </div>
        </section>

        {/* ============ ON-AIR BOARD (split-flap, from the portfolio) ============ */}
        <section className="onair" aria-label="CollabAdda in numbers">
          <div className="wrap"><div className="flap rv">
            <div className="flap-top"><span>CA-26 · Live totals</span><b>On air</b></div>
            <div className="flap-row"><span>Brands that let us cook</span><div className="cells" data-v="11" data-w="4"></div></div><div className="flap-row"><span>Instagram family</span><div className="cells" data-v="7665" data-w="4"></div></div>
          </div></div>
        </section>

        {/* ============ WORK ============ */}
        <section className="work" id="work">
          {/* BTS film: grows from a card to full screen as you scroll */}
          <div className="bts" id="bts">
            <div className="bts-stick">
              <div className="bts-frame">
                <video id="btsVid" muted loop playsInline preload="none" poster="/assets/video/bts-poster.webp" aria-label="Behind the scenes on a CollabAdda ad film set"></video>
                <span className="bts-rec"><i></i>BTS · Before “Action!”</span>
                <div className="bts-cap">
                  <h2 className="disp">Welcome behind<br />the camera.</h2>
                  <a href="https://www.instagram.com/reel/Db-rXd6BnuT/" target="_blank" rel="noopener" className="btn">Watch the full film ▶</a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap sec-top">
            <h2 className="disp sec-h rv">The proof is<br />in the <span className="o">reels.</span></h2>
            <p className="sec-note rv">Celeb collabs, ad film sets and our own comedy. Drag to scroll, tap to watch.</p>
          </div>
          <div className="reels" id="reels">
            <a className="reel" href="https://www.instagram.com/reel/DRTw4tbEj8L/" target="_blank" rel="noopener"><div className="ph"><img src="/assets/img/r4.webp" width="480" height="853" alt="CollabAdda x Kailash Kher" loading="lazy" /><span className="pl"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span></div><h3>Kailash Kher</h3><small>RBL Bank × Mastercard</small></a>
            <a className="reel" href="https://www.instagram.com/reel/DRWwHZgkpJO/" target="_blank" rel="noopener"><div className="ph"><img src="/assets/img/r3.webp" width="480" height="853" alt="CollabAdda x Kajal Aggarwal" loading="lazy" /><span className="pl"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span></div><h3>Kajal Aggarwal</h3><small>Celeb collab</small></a>
            <a className="reel" href="https://www.instagram.com/reel/DAVxXvOT6ow/" target="_blank" rel="noopener"><div className="ph"><img src="/assets/img/r7.webp" width="480" height="853" alt="Shivaji Satam for mCaffeine" loading="lazy" /><span className="pl"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span></div><h3>Shivaji Satam</h3><small>mCaffeine</small></a>
            <a className="reel" href="https://www.instagram.com/reel/DAqV6XkBlrt/" target="_blank" rel="noopener"><div className="ph"><img src="/assets/img/r5.webp" width="480" height="853" alt="POV: I'm also a content creator" loading="lazy" /><span className="pl"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span></div><h3>POV: I'm a creator</h3><small>Original comedy</small></a>
            <a className="reel" href="https://www.instagram.com/reel/DAimdn1hrVe/" target="_blank" rel="noopener"><div className="ph"><img src="/assets/img/r6.webp" width="480" height="853" alt="Guess who's the intern" loading="lazy" /><span className="pl"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span></div><h3>Guess the intern</h3><small>Original comedy</small></a>
            <a className="reel" href="https://www.instagram.com/reel/DRY-MAEEilw/" target="_blank" rel="noopener"><div className="ph"><img src="/assets/img/r2.webp" width="480" height="853" alt="CollabAdda x Shivaji Satam" loading="lazy" /><span className="pl"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span></div><h3>A masterclass</h3><small>With Shivaji Satam</small></a>
          </div>
        </section>

        {/* ============ SERVICES: rows open one by one as you scroll ============ */}
        <section className="svc" id="services">
          <div className="svc-stick">
            <div className="wrap" style={{width:"100%"}}>
              <div className="svc-top"><h2 className="disp">What we <span className="o">make.</span></h2><span className="svc-count"><b id="svcN">01</b> / 05</span></div>
              <ol id="svcList">
                <li className="on" data-i="0"><div className="svc-head"><span className="n">01</span><h3>Influencer marketing</h3><span className="pl" aria-hidden="true">+</span></div>
                  <div className="svc-more"><div><div className="svc-body"><div><p>The right creator for your niche, briefed to sound like themselves, not like a brand. We scout, match, negotiate and run the whole thing.</p><ul><li style={{"--k":"0"} as React.CSSProperties}>Creator scouting &amp; matching</li><li style={{"--k":"1"} as React.CSSProperties}>Briefs that keep the creator’s voice</li><li style={{"--k":"2"} as React.CSSProperties}>Execution plus campaign reports</li></ul></div><div className="svc-vis"><img src="/assets/img/svc/influencer.webp" width="800" height="400" alt="Illustration: a brand manager with a magnifying glass matching with a creator on a giant phone" loading="lazy" /></div></div></div></div></li>
                <li data-i="1"><div className="svc-head"><span className="n">02</span><h3>20-second ad films</h3><span className="pl" aria-hidden="true">+</span></div>
                  <div className="svc-more"><div><div className="svc-body"><div><p>Short enough to finish, sharp enough to share. Every film is built around a hook in the first 3 seconds and a punchline worth replaying.</p><ul><li style={{"--k":"0"} as React.CSSProperties}>Scripts written for the scroll</li><li style={{"--k":"1"} as React.CSSProperties}>Shot vertical-first</li><li style={{"--k":"2"} as React.CSSProperties}>Edits paced for replays</li></ul></div><div className="svc-vis"><img src="/assets/img/svc/adfilm.webp" width="800" height="400" alt="Illustration: a director with a megaphone and an audience laughing at a 20-second skit" loading="lazy" /></div></div></div></div></li>
                <li data-i="2"><div className="svc-head"><span className="n">03</span><h3>Shoots &amp; production</h3><span className="pl" aria-hidden="true">+</span></div>
                  <div className="svc-more"><div><div className="svc-body"><div><p>Crew, gear and editors under one roof. From the first idea to the final cut, without the hand-offs that kill a good joke.</p><ul><li style={{"--k":"0"} as React.CSSProperties}>Ideation to final cut</li><li style={{"--k":"1"} as React.CSSProperties}>Studio or on-location</li><li style={{"--k":"2"} as React.CSSProperties}>Photo and video, same day</li></ul></div><div className="svc-vis"><img src="/assets/img/crew.webp" width="1000" height="804" alt="Illustration: the crew shooting a funny reel in a studio" loading="lazy" style={{objectPosition:"50% 30%"}} /></div></div></div></div></li>
                <li data-i="3"><div className="svc-head"><span className="n">04</span><h3>Celeb activations</h3><span className="pl" aria-hidden="true">+</span></div>
                  <div className="svc-more"><div><div className="svc-body"><div><p>Big names, handled end to end: brief, shoot, event and the content that comes out of it.</p><ul><li style={{"--k":"0"} as React.CSSProperties}>Kailash Kher × RBL Bank &amp; Mastercard</li><li style={{"--k":"1"} as React.CSSProperties}>Shivaji Satam × mCaffeine</li><li style={{"--k":"2"} as React.CSSProperties}>Kajal Aggarwal collab</li></ul></div><div className="svc-vis"><img src="/assets/img/svc/celeb.webp" width="800" height="400" alt="Illustration: a celebrity taking a selfie with a fan on a stage full of phones" loading="lazy" /></div></div></div></div></li>
                <li data-i="4"><div className="svc-head"><span className="n">05</span><h3>Organic content</h3><span className="pl" aria-hidden="true">+</span></div>
                  <div className="svc-more"><div><div className="svc-body"><div><p>Trends, memes and recurring formats that keep your page in the conversation, and keep people coming back for the next one.</p><ul><li style={{"--k":"0"} as React.CSSProperties}>POVs, skits and relatable formats</li><li style={{"--k":"1"} as React.CSSProperties}>Built on what’s trending this week</li><li style={{"--k":"2"} as React.CSSProperties}>Community-first captions and replies</li></ul></div><div className="svc-vis"><img src="/assets/img/svc/organic.webp" width="800" height="400" alt="Illustration: a creator laughing at her phone as a phone-rocket launches likes and shares" loading="lazy" /></div></div></div></div></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="cta" id="contact">
          <div className="wrap">
            <div className="cta-grid">
              <h2 className="disp rv">Let's make<br /><span>something</span><br />people talk about.</h2>
              <a className="seal rv" href="https://forms.gle/ayhKAQZeANxJ7ZBb7" target="_blank" rel="noopener" aria-label="Start a collab">
                <svg className="ring-txt" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="sealC" d="M100 100m-86 0a86 86 0 1 1 172 0a86 86 0 1 1-172 0"/></defs>
                  <text textLength="514" lengthAdjust="spacing"><textPath href="#sealC">✺ WE MAKE ADS PEOPLE TALK ABOUT</textPath></text></svg>
                <svg className="badge" viewBox="0 0 1300 1300" aria-hidden="true"></svg>
              </a>
            </div>
            <div className="cta-row rv">
              <p>Tell us your brand and the reaction you want. We'll bring the idea.</p>
              <div className="hero-cta">
                <a className="btn" href="https://forms.gle/ayhKAQZeANxJ7ZBb7" target="_blank" rel="noopener">Start a collab
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
                <a className="btn line" href="https://www.instagram.com/collabadda/" target="_blank" rel="noopener">@collabadda</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <a href="#top" className="logo" aria-label="CollabAdda"><svg className="badge" id="footLogo" viewBox="0 0 1300 1300" aria-hidden="true"></svg><span className="wm" aria-hidden="true">Collabadda</span></a>
          <span>© 2026 CollabAdda</span>
          <a href="https://www.instagram.com/collabadda/" target="_blank" rel="noopener">Instagram ↗</a>
        </div>
      </footer>

      {/* Clapperboard transition */}
      <div id="clapFx" aria-hidden="true">
        <div className="half l"></div><div className="half r"></div>
        <div className="slate">
          <div className="stick"></div>
          <div className="board">
            <div className="row top"><span>PROD.</span><b>COLLABADDA</b></div>
            <div className="row"><span>SCENE<b>ALL BRANDS</b></span><span>TAKE<b>11</b></span><span>ROLL<b>26</b></span></div>
            <div className="row"><span>DIRECTOR<b>THE ADDA</b></span><span>CAMERA<b>PHONE, OBVIOUSLY</b></span></div>
          </div>
        </div>
        <div className="flash"></div>
      </div>

      {/* Call sheet: all brands */}
      <div id="cast" role="dialog" aria-modal="true" aria-labelledby="castT">
        <div className="cs">
          <div className="cs-stripes"></div>
          <header className="cs-head">
            <div><p className="cs-kick">Call sheet · 11 brands · 1 adda</p><h3 id="castT" className="disp">Everyone who let us cook.</h3></div>
            <button id="castX" aria-label="Close">✕</button>
          </header>
          <ol className="cs-list" id="castList"></ol>
          <p className="cs-foot">Your brand could be SC.12 → <a href="https://forms.gle/ayhKAQZeANxJ7ZBb7" target="_blank" rel="noopener">book the shoot</a></p>
        </div>
      </div>

      {/* Story viewer */}
      <div className="sv" id="sv" role="dialog" aria-modal="true" aria-label="Brand stories">
        <button className="sv-x" id="svX" aria-label="Close">×</button>
        <button className="sv-arrow sv-prev" id="svP" aria-label="Previous">←</button>
        <button className="sv-arrow sv-next" id="svN" aria-label="Next">→</button>
        <div className="sv-card">
          <img id="svImg" alt="" />
          <div className="sv-bars" id="svBars"></div>
          <div className="sv-head"><span className="av" id="svAv"></span><div><b id="svName"></b><small>with CollabAdda</small></div></div>
          <div className="sv-nav"><button aria-label="Previous story" data-d="-1"></button><button aria-label="Next story" data-d="1"></button></div>
          <div className="sv-foot"><p id="svCap"></p><a id="svLink" target="_blank" rel="noopener">Watch on Instagram ↗</a></div>
        </div>
      </div>
      <Interactions />
    </>
  );
}
