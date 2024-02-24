import React from 'react'
import { Link } from 'react-router-dom'

function OurStory() {
    return (
        <div className='container mt-5'>

            <h6 style={{
                fontFamily: 'Outfit',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '40px',
                lineHeight: '50px',
                textAlign: 'center',
                color: '#E68F50'
            }}>Stay Ahead! <p>Launch Your Next Project with Stackkaroo</p></h6>
            <div className='container' style={{ marginLeft: "100px" }} >
                <div className="card mb-2" style={{ maxWidth: '1000px', height: 'auto', border: 'none', background: 'linear-gradient(94.15deg, rgba(10, 86, 241, 0.1) 3.38%, rgba(230, 143, 80, 0.1) 96.62%)' }}>

                    <div class="row g-0">

                        <div class="col-md-8">
                            <div class="card-body" style={{ textAlign: "start" }}>
                                <h5 class="card-title" style={{ color: 'blue' }}>Our Story</h5>
                                <p class="card-text">Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations.</p>
                                <p class="card-text">Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride.</p>
                                <Link className="col-md-3" style={{
                                    fontWeight: 700,
                                    fontSize: "20px",
                                    color: "#fff",
                                    backgroundColor: 'orange',
                                    borderRadius: "10%",
                                    textDecorationLine: 'none'
                                }}>
                                    <i className="fab fa-call"></i>
                                    Get Estimated Project cost</Link>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="https://s3-alpha-sig.figma.com/img/f362/98b2/a3f702915452c4fb960614f774a6b16f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNoiGBUVjCF0Da5-zPeJJzMV5KDZ-dhdaUirgMLS~oCO429OLb1-3EWkriJE4Euu7R8i82yLuLpR5DKPZeNtu8KcbNhPRF-8cW24X~Beu7pxf0BLSjzXBTWkekNs6QXTNrsC-Huw3MGE0QI6abMI5iK~0jdxGxTRmjC3Vp1os8JwX1u1myqqooeeJVWGJDccRgJoRl88kujSAGGs5r3rk~f~mg237mlpClYCzYIo~4BTCzMVfcD00vOfVQQrRI6UR5XepqrEjNS0qOuYLLAjw5pWGkg7AvRppWCH0jrt77M-TLJ4ko~AU8avWZOG6G-dFcU0ykBiY8UsRTBiKJhu2A__" class="img-fluid rounded-start" style={{ width: 'auto', height: 'auto' }} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory
