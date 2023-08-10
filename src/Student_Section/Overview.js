import './overview.css'


function Overview() {
    return (
        <>
            <div className="parent-box">
                <div className="container">

                    <div className="container-child-1 text-center md:text-start">
                        <div className='flex justify-center md:justify-start'>
                            <p className="sub-child-1 w-40 text-center">Why Join Us?</p>
                        </div>
                        <p className="sub-child-2">Great students deserve the best jobs</p>
                        <p className="sub-child-3">Writo Education Makes it Happen...</p>
                    </div>

                    <div className="container-child-2 flex justify-center">
                        <div className="hexagon-box-1">
                            <div className="poster-box-1">
                                <div className="box-img">
                                    <p className="box-img-num">150+</p>
                                    <p className="box-img-text">
                                        Students working in FAANG
                                    </p>
                                </div>
                                <div className="box-img">
                                    <p className="box-img-num">10</p>
                                    <p className="box-img-text">
                                        Students started their own companies
                                    </p>
                                </div>
                            </div>
                            <div className="poster-box-1 box-relative">
                                <div className="box-img">
                                    <p className="box-img-num">50+</p>
                                    <p className="box-img-text">
                                        Students having 5 Stars on CodeChef
                                    </p>
                                </div>
                                <div className="box-img">
                                    <p className="box-img-num">100+</p>
                                    <p className="box-img-text">Students received International Job Offers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Overview;