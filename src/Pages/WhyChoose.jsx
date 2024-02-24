import React from 'react'
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';


function WhyChoose() {

    const buttonStyles = {
        background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.075) 0%, rgba(10, 86, 241, 0.075) 100%)',
        border: '2px solid #FFFFFF',
        boxShadow: '0px 4px 10px rgba(10, 86, 241, 0.25)',
        borderRadius: '25px',
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '25px',
        lineHeight: '32px',
        textAlign: 'center',
        letterSpacing: '0.03em',
        color: '#0A56F1'
    };

    return (
        <div className='container mt-5'>
            <p style={{
                fontFamily: 'Outfit',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '40px',
                lineHeight: '50px',
                textAlign: 'center',
                color: '#E68F50'
            }}>Why Choose Us</p>
            <p>We excel with reliability, innovation and customer-centric approach for our quality products.<br />
                Our dedicated team ensures that the solutions provided are dependable and long-term</p>

            <div className='container mt-5'>
                <Row className="mb-3">
                    <Col xs={4}>
                        <Button variant="outline-primary" className="mb-2 mr-1" style={buttonStyles}>
                            <i className="fas fa-user-circle"></i> User-Centric Approach
                        </Button>
                    </Col>
                    <Col xs={4}>
                        <Button variant="outline-primary" className="mb-2 mr-1" style={buttonStyles}>
                            <i className="fas fa-users"></i> Customer Satisfaction
                        </Button>
                    </Col>
                    <Col xs={4}>
                        <Button variant="outline-primary" className="mb-2" style={buttonStyles}>
                            <i className="fas fa-sync-alt"></i> Integrating Feedback
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Button variant="outline-primary" className="mb-2 mr-1" style={buttonStyles}>
                            <i className="fas fa-thumbs-up"></i> High Quality Products
                        </Button>
                    </Col>
                    <Col xs={6}>
                        <Button variant="outline-primary" className="mb-2" style={buttonStyles}>
                            <i className="fas fa-truck"></i> On-Time Product Delivery
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className='container mt-5'>
                <p style={{
                    fontFamily: 'Outfit',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '40px',
                    lineHeight: '50px',
                    textAlign: 'center',
                    color: '#E68F50'
                }}>Stackkaroo’s Digital Services</p>
                <p>We excel with reliability, innovation and customer-centric approach for our quality products. <br />
                    Our dedicated team ensures that the solutions provided are dependable and long-term</p>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-4' style={{ marginLeft: '70px' }}>

                <div className='col'>
                    <div className="card mb-3 ml-5" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/4307/2b73/e65e12f2c01ae4ad4d3ab7adb539bc32?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfY37DbnI5R-Cc~lriwisU1rmQtLMABWcDNkU244C5tGlWvnrfuZSFM8CBL88dabpoqb7QAtPz5KjU1p141ZOiZ4VhfSWPa-H86Md3AKbpy~VpDLZmi61O6FgUgDVmUwwEbUyJTBwHfcJu2JE35ktTUyvbvllV6Ky5HQpyv0Kw2YbKpgXqU~9ekVRK0iY5IW5BtkzualteuHa~mrwRPPLLRYN-KbRk2HdHUHlfsdPlOJQRTMsyCY~srSxYwtJ1PL7WreHPiy8ilq~fsqdUoc7T4gf-r8jxYqIaWrztFIuQd0YPKQ~3RaWeq9sGiyrn5p7hKB90UK12QOOsrlwbYEYQ__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                                <h5 className="card-title" style={{ color: 'blue', marginLeft: '20px' }}>Website development</h5>
                            </div>
                            <p className="card-text mt-3">We specialize in responsive website development, ensuring optimal optimal performance across various devices.</p>
                            <a href="#" style={{ width: '50px', height: '30px', borderRadius: '50%', padding: 'none', backgroundColor: 'orange', marginRight: '200px' }} className="btn btn-primary mt-5 ">Go </a>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/7d7d/dc77/04de8ec2499fafe075b5b4d80778c66e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-t6YKtXIlZbOBb2ldzQ9Yue4SXhC94il2q8BmQQZPnGN-rRjD49d-co8qyqtYH~g4htEqlQfA8QqIdW4PwndQGMytai3DSCdz4UlTyNPL5K7d7DUSlC7MO~2wU8gLIgn~M8Lu54ZWiyqos8Tq0HQ9cqW-OrmvBr~kcnS7qFEufqERQYLwYTPHNtyI3Hl1-HHcFDrkAQ7wktJEJoCAinuq7Hm1A3vVgjIraoXiTFi-PrOnsApmZ2ZSlaVZhJnhmdhSl1YanF0Nl~f9mk8sjAfHYZXFqRrYYGBYHyBnM~xn1P46~qoWsyKhbniWeRKrc4DoTV-yOC-kGDi8mxLHihxw__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                                <h5 className="card-title" style={{ color: 'blue', marginLeft: '20px' }}>App Development</h5>
                            </div>
                            <p className="card-text mt-3">We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.</p>
                            <a href="#" style={{ width: '50px', height: '30px', borderRadius: '50%', padding: 'none', backgroundColor: 'orange', marginRight: '200px' }} className="btn btn-primary mt-5 ">Go</a>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/d090/01dd/c8788c685a164057d5c7d303bf32a5b2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hsk2wtol5G2zBicM6LraxUtVFRBVIk0sdGZfhWaaw0tI7NlDYrYhR62grZKRr1RNfRQTUXr0BdM7wHTKn76CpaaQK-Sc5tYrR6i85DYcHmHCefr-fU2pyECjg6IXbONXWibbYdfCznBz6HL3FE1QBfcTtiz8Z8nUWB5n3E8ifgJa-JNfdhBhxEyDpAKvBbga6HGPiGtOudcXR9ju3h-yJB6XAbgW8Epa9BhYJMcXOmGZOajTmoAYupHZNyEo2kwtDRAsb~LY9xWW6KGy2j-nO0InavwxU6sOfo3uNghhqKuWsR7OQex6JbHmuFDMijoQziGfhsw~9SJzGrqRFSerfA__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                                <h5 className="card-title" style={{ color: 'blue', marginLeft: '20px' }}>Software development</h5>
                            </div>
                            <p className="card-text mt-3"> We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.</p>
                            <a href="#" style={{ width: '50px', height: '30px', borderRadius: '50%', padding: 'none', backgroundColor: 'orange', marginRight: '200px' }} className="btn btn-primary mt-5 ">Go</a>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/675a/39f8/add827cf1aa2e9febab0d19de42cd6cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=alwpmYRVDiZ0~nfK6I847TzLWEDL4psIQ70DJ7Me0CixGUJWE4V1nna9PTVcwucdOcf43tFD0NeVII3EPrBUMq0CtPGSAskxg1U6PegMPLqVTtHcAxStK1ngIGuJD7SsA7gpgbekU~qLqVMQsh6xEl3Cpg~Wax4eBdPmaxk9SAa-p0zQsOsr3XSOBpV17CXt6sPq069IndoMrqvC3UAAPb7YGFwu8BvCFNpBd2~CcDy5JpLK7QW7yVctqit1tmtYF8JDoInixZMIisyCVZjUzFfBl0PsAXEPuuw2CYsnur-yHyeeAIMFM~QS-HXgjl-Z1lqpl2ygz4Ru9vGDe84NBw__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                                <h5 className="card-title" style={{ color: 'blue', marginLeft: '20px' }}>UI/UX design</h5>
                            </div>
                            <p className="card-text mt-3"> We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.</p>
                            <a href="#" style={{ width: '50px', height: '30px', borderRadius: '50%', padding: 'none', backgroundColor: 'orange', marginRight: '200px' }} className="btn btn-primary mt-5 ">Go</a>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/675a/39f8/add827cf1aa2e9febab0d19de42cd6cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=alwpmYRVDiZ0~nfK6I847TzLWEDL4psIQ70DJ7Me0CixGUJWE4V1nna9PTVcwucdOcf43tFD0NeVII3EPrBUMq0CtPGSAskxg1U6PegMPLqVTtHcAxStK1ngIGuJD7SsA7gpgbekU~qLqVMQsh6xEl3Cpg~Wax4eBdPmaxk9SAa-p0zQsOsr3XSOBpV17CXt6sPq069IndoMrqvC3UAAPb7YGFwu8BvCFNpBd2~CcDy5JpLK7QW7yVctqit1tmtYF8JDoInixZMIisyCVZjUzFfBl0PsAXEPuuw2CYsnur-yHyeeAIMFM~QS-HXgjl-Z1lqpl2ygz4Ru9vGDe84NBw__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                                <h5 className="card-title" style={{ color: 'blue', marginLeft: '20px' }}>Digital Marketing</h5>
                            </div>
                            <p className="card-text mt-3">We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.</p>
                            <a href="#" style={{ width: '50px', height: '30px', borderRadius: '50%', padding: 'none', backgroundColor: 'orange', marginRight: '200px' }} className="btn btn-primary mt-5 ">Go</a>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center">
                                <img src="https://s3-alpha-sig.figma.com/img/d4c2/db13/cbc6a703a0bc946dc2405392e09daa77?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGy1cQsiYkLNr8ZzaoKjdHa9EQKoSPpVvvyMzfXNyBIHTdSplNMhtT3tyoHWr-kH30n1EDEq9fVHRdpptor0xRx6wppjXZ6s1SQ8WySDadzXrRsj8Zxny~wdZET~RvVmSkww9wkqm1yHHmZOlTm5WnJArclLlKs33DXB-FmQH8jieqiqdddLqH59J2SwVD7kfcS0u-lJ7HAgpU9xvpL-qYFbmc6r7FnNB~x7tL8EG561nloU9MfxtjPRR0l6agfojenu1-I79PeJti-s8AaXx6m-VZ6hQuQ0RZ8GPDi-3QaC926x-NNexjoLoY2MaO1re-2nF399kkBpQ-JWuHXoqw__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                                <h5 className="card-title" style={{ color: 'blue', marginLeft: '20px' }}>SEO Optimization</h5>
                            </div>
                            <p className="card-text mt-3">We ensure optimal website traffic by addressing factors such as user experience, accessibility, and monitoring target audience.</p>
                            <a href="#" style={{ width: '50px', height: '30px', borderRadius: '50%', padding: 'none', backgroundColor: 'orange', marginRight: '200px' }} className="btn btn-primary mt-5 ">Go</a>
                        </div>
                    </div>
                </div>



            </div>


            <div className='container mt-5'>
                <p style={{
                    fontFamily: 'Outfit',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '40px',
                    lineHeight: '50px',
                    textAlign: 'center',
                    color: '#E68F50'
                }}>SEO Services</p>
                <div className='container' style={{ marginLeft: "100px" }} >
                    <div className="card mb-2" style={{ maxWidth: '1000px', height: 'auto', border: 'none', background: 'linear-gradient(94.15deg, rgba(10, 86, 241, 0.1) 3.38%, rgba(230, 143, 80, 0.1) 96.62%)' }}>



                        <div className="row">
                            <div className="col-md-6">
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        <h3 style={{ color: 'blue', marginLeft: '20px' }}> Customized SEO Services</h3>
                                        <p>We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as a strategy, to be critical for business.</p>
                                    </li>
                                    <li>
                                        <h3 style={{ color: 'blue', marginLeft: '20px' }}>On-Page SEO Services</h3>
                                        <p>We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.</p>
                                    </li>
                                    <li>
                                        <h3 style={{ color: 'blue', marginLeft: '20px' }}>Off-Page SEO Services</h3>
                                        <p>We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        <h3 style={{ color: 'blue', marginLeft: '20px' }}>Mobile SEO Services</h3>
                                        <p>We stress upon mobile optimizations since mobile phone use by search is highly prevalent. They are more able to score best SEO rankings can easily be viewed on mobile devices.</p>
                                    </li>
                                    <li>
                                        <h3 style={{ color: 'blue', marginLeft: '20px' }}>Free Website Audit And Strategies</h3>
                                        <p>We go beyond essential SEO website development to give out free website audits analysis and SEO strategies.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>




                    </div>
                </div>
            </div>



            <div className='container mt-5'>
                <p style={{
                    fontFamily: 'Outfit',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '40px',
                    lineHeight: '50px',
                    textAlign: 'center',
                    color: '#E68F50'
                }}>Stackkaroo’s Talent Hiring & Job Placement Services</p>
                <p>We are a talent searching platform that redesigns how companies hire talents. It is a cost-effective solution for industries.<br /> We also provide global job opportunities with good salaries, support, and professional development.</p>
            </div>

            <div className='row row-cols-1 row-cols-md-3 g-4 mt-4' style={{ marginLeft: '70px' }}>

                <div className='col'>
                    <div className="card mb-3 ml-5" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">

                            <img src="https://s3-alpha-sig.figma.com/img/83c3/308c/30e6685be9f4a84aa66cd57dcad239f8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dyienr69DtejSbzu0UOpINnCX5LxU38xnxBY1w8OAmPVTPATM9zLfXG1ixsNOxSItQ8u3FpSuZZneF0R3eIQ3Gq8Clsxq5hGFiqS6zlp-gbINwvAySs4KzlI7nGDz4Jxszta3pGIWPItXL59SySGt-fg~npXHVjtfZ1s1VJ~Mo~V8lHOdBhqsGc8ougbzmhOjyBRkd~q8KN79hZfJu~UNrJmzSM1qZsWQb8pwjS2Ncqp~1aVab9UQgqGeOG3~422YRBzaXbw9hGtp133e68T-oGOn9vBeV2xc58PhEwMqL022rtOAiHvfV3KLWvHBGVzxP6r49nTW8XnCnrTGPPSGw__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                            <h5 className="card-title mt-2" style={{ color: 'blue', marginLeft: '20px', fontSize: '1rem' }}>Unleashing Top Talent Globally</h5>

                            <p className="card-text mt-3 mb-5">We offer 5% top talents and supports companies hiring from various time zones.</p>

                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3 ml-5" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">

                            <img src="https://s3-alpha-sig.figma.com/img/bf2f/1213/8500dc17499853240c3949869381a773?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i5SmVPwkAaI3FKJ4s8TafdmDJu1N5o7ryaIeojeUBDj299~l6G~FFNXJZlfCmq9D1GTh7Pp0d~lYYW~MJ5p5s1fegCWDRTkVy97knVKG7RtQZg1S84CPGeAN6Kym47iGNVW73G20ojLyj0QqpwdOHaUvZ-MePXnJkt5MyGmjyriTG8vUa6254oJ-jENDx2bc-tEMQ7d-~akIGXF7HYBa8HbetiCKUHwZlMIhHng3hDVUTI3VC3TLBDtQrDaJ16znUyOrW2B90BFr-aYtvd~iwmCXzXeiX9GtCfGu~RzQ-d11KVBSwdIEnka9BEjQNpYMVVc98pG3jTbLZIxXQXEU9w__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                            <h5 className="card-title mt-2" style={{ color: 'blue', marginLeft: '20px', fontSize: '1rem' }}>Securing Success</h5>

                            <p className="card-text mt-3 mb-5">The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.</p>

                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3 ml-5" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">

                            <img src="https://s3-alpha-sig.figma.com/img/ff77/65bd/6900f9190dab4412cfcefc1db04df239?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0sOuh8Rh0vOI4DMwfbglkUqouQcqwScybE8BNpRK1GX9N51-gu3-yMdaH1uJF7ZZ9l-dg94vvGW~UbaeAmc-MJsV8dCEOBEIBjC2llaG5aNs7QTK9teHjNVLvSYX8Kz9CTQ6BHYYln9uIINAt~~gDklzQCJiqixGmOMEM5Ee~r0HloxvPSG1cagut5hE6r562OFBC1XADXAX~osQaA7vg5q-ob8XsC77lrGSSrJlYpCmcvKwmKNb-vuoHIVJP0iQPSaNt8dgt~Ugj9iCyX5CPz-ocrb8Tb~9tlLLHn5PIOCOjlo3ar5sFJWbEPGSfvS29KdkZ-2pF1KoCMpyAa9BQ__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                            <h5 className="card-title mt-2" style={{ color: 'blue', marginLeft: '20px', fontSize: '1rem' }}>Beyond Borders</h5>

                            <p className="card-text mt-3 mb-5">We provide both, flexible full-time and part-time jobs</p>

                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3 ml-5" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">

                            <img src="https://s3-alpha-sig.figma.com/img/b20d/d4f4/e04f81b7f7a5b0fb25de28f9a1209235?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAUFKKZi0iQJn32bF9Gl1ju1MfhysFxm85lu79gFFm5T1fZ6zmvRZ7u-BSf2v4ZcNyhuuzEuqMRdu1wcScMpqYNs2jp-zDoJGAh1YE1UAEvCEEzAec8rjkG1QDFmVWTeu1AVKPBgnxxHjh5UWteB0JV0QHZXBjdxXmnJN-MbHtnNNFcckTmAYmid~ImCj95q3IzcrWp3R2DtpUkWS-osmKVr~cTK~1s17Z9Ez9Cbin3nBqOyF9ZJ1ISCHQ3Gj1kBxNVXZfkuqS9NdStfgpD9EQ9uIF5w0FTCTru~p6esNy8gX97LnOmTcNMEbO6Ue53bLTVps9ToiRRzeh-Owh5H6g__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                            <h5 className="card-title mt-2" style={{ color: 'blue', marginLeft: '20px', fontSize: '1rem' }}>End-to-End Excellence</h5>

                            <p className="card-text mt-3 mb-5">In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.</p>

                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3 ml-5" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">

                            <img src="https://s3-alpha-sig.figma.com/img/3134/6970/5e313644ad49988ca51a40a26a0c27a6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGQmn2EVpylDKwcNzfj3FVjG~iQHpbvUiLykjW3uTZDRDWJ8fzYDWpGR4fCgfp9p-PmjO7H3NvkDruiDf6t7bQ8bRO2EtGfYNonq7ZBiohi9uqZvKQ7Ns4nuXLiQ41cEU37LqsBTnBoWHrQP6MPLqst~MX3cALffBi0QISoOXBIS6xGVX05TXNkFqBX2IE5zXquQmnUSe2kpYgtwzBW0GuLb~zCjqN-MYbmxbGACJFGg22RJC5KMhkcyOlUqwl3-OuIQp~eFSz~15f60WDPizppwAKiECHOPofrjwOrMXQqgKDcKKTgoRF3rck6R9xIr--Mu1Dzk5m5N10Bk8jwbpA__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                            <h5 className="card-title mt-2" style={{ color: 'blue', marginLeft: '20px', fontSize: '1rem' }}>Efficiency Redefined</h5>

                            <p className="card-text mt-3 mb-5">The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.</p>

                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className="card mb-3 ml-5" style={{ width: "18rem", borderRadius: '25px', background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderColor: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)', borderWidth: '2px', borderStyle: 'solid' }}>
                        <div className="card-body p-3">

                            <img src="https://s3-alpha-sig.figma.com/img/fefe/1db0/d52d472ad6de85e07c2a4a695838404c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffb3Q1cPKI1vbTDmesNG72BaS47BkCtkfNxU7hjlMC7MK-WuFIUODAr9chEobGSBagB-gKHU3Xh6p0JGGw45iCgvX0gM-5LkDmCIZOA1qyoryOunvGhcH1sSjtsL-XRnkYCN29pUDCYH8EU0cTNh7MyOFsQip3Ltxc0ZCXVQrvGWkitAn3kycv7LF5Zq~e4Vjw6lKDVWKiuJleHAyu2hA~pq8qJRMTlDfUge1YEU~txQoKJyhFYdq0KEFY~J5A9k7dBCKxaXQ9j5qmrZ8buIOnhGXrrlH2n3L6bekJZLhHHFlHHM7Ttcl9jB2wpvzvNpoaNt6tfA8qO3cTWHd5BOzw__" className="mr-3 ml-3" alt="Card image" style={{ width: "50px" }} />
                            <h5 className="card-title mt-2" style={{ color: 'blue', marginLeft: '20px', fontSize: '1rem' }}>Simplified Contracts Satisfied Partnerships</h5>

                            <p className="card-text mt-3 mb-5">The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.</p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WhyChoose













