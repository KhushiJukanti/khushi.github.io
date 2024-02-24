import React from 'react'
import { Link } from 'react-router-dom'
import OurStory from './OurStory'
import WhyChoose from './WhyChoose'





function Home() {
    return (
        
        <div className='container p-5' style={{ background: 'linear-gradient(270deg, rgba(230, 143, 80, 0.1) 0%, rgba(10, 86, 241, 0.1) 90%)' }}>
            <div className='container' style={{ marginLeft: "100px" }} >
                
                <div className="card mb-2" style={{ maxWidth: '1000px', height: 'auto', border: 'none', background: 'linear-gradient(94.15deg, rgba(10, 86, 241, 0.1) 3.38%, rgba(230, 143, 80, 0.1) 96.62%)' }}>

                    <div class="row g-0">

                        <div class="col-md-8">
                            <div class="card-body" style={{ textAlign: "start" }}>
                                <h5 class="card-title" style={{ color: 'blue' }}>Diversifying the Designs of Digital World</h5>
                                <p class="card-text">Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients.</p>
                                <p class="card-text">EISPL is convinced that one should diversify the offering, given the changing needs of the clients. That is why we engage in multiple projects and activities. We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing.</p>
                                <Link className="col-md-3" style={{
                                    fontWeight: 700,
                                    fontSize: "20px",
                                    color: "#fff",
                                    backgroundColor: 'orange',
                                    borderRadius: "10%",
                                    textDecorationLine: 'none'
                                }}>
                                    <i className="fab fa-call"></i>
                                    Book a call</Link>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="https://s3-alpha-sig.figma.com/img/fecc/360d/e2e8def02ca2d0bdbf4b7e086d025a5d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H9y1D65ybdz0PtL42BstCk-LCrNOSCtTpcZAlMXs9lbjs5k07rH5~MrvLfeHdI8i3Istg6x0yTM1WcMZhh3dETEbo7qLE0f51qADWv7CD0Vp6Igm4PIgUPCzKRlYz~QBCqkFpkpnBjVk1HDZQbysJy0Jhqmkcnjco~Gi7TaJNDP8QnLehVCSYUImmSXq4rXPxvUCbFKs9HiZaYYtybb6tE-HEyEqkHTSr-4w-WKWjaHU6KJf4Zj8~bcEIDWNMU01XxxpTuKvkwwD2WvqzqaKVpj1Jsu65K2Zubn-QbH~Ir~MPkAEPq2sXchuErzXCw8M7Uwsk4ukeTUVSKNNFwwkcA__" class="img-fluid rounded-start" style={{ width: 'auto', height: 'auto' }} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <p class="card-text">In the realm of digital solutions, we offer expertise in</p>

                <div className="navbar-collapse container">
                    <ul className="nav nav-tabs justify-content-around">
                        <li className="nav-item">
                            <Link className="nav-link pt-0 pb-0" to="/about" style={{ borderRadius: '60px', borderColor: 'blue', borderWidth: '2px', borderStyle: 'solid', }}>Website Devlopment</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pt-0 pb-0" to="/about" style={{ borderRadius: '60px', borderColor: 'blue', borderWidth: '2px', borderStyle: 'solid', }}>App development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pt-0 pb-0" to="/about" style={{ borderRadius: '60px', borderColor: 'blue', borderWidth: '2px', borderStyle: 'solid', }}>UI/UX design</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pt-0 pb-0" to="/about" style={{ borderRadius: '60px', borderColor: 'blue', borderWidth: '2px', borderStyle: 'solid', }}>Digital Marketing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pt-0 pb-0" to="/about" style={{ borderRadius: '60px', borderColor: 'blue', borderWidth: '2px', borderStyle: 'solid', }}>SEO Optimization</Link>
                        </li>

                    </ul>
                </div>
                <p class="card-text">showcasing our proficiency across various facets of the digital platform </p>
                
            </div>
            <OurStory/>
            <WhyChoose/>
        </div>
    )
}

export default Home





