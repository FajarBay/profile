import React from 'react';


const Rara = () => {
    return (
        <section className="banner-bottom" id="about">
		<div className="container">
            <div className="inner-sec">
                <div className="row middle-grids">
                    <div className="col-lg-4 advantage-grid-info1">
                        <div className="advantage_left1 text-center">
                            <img src="images/rara.png" className="img-fluid" alt=""></img>
                        </div>
                    </div> 
					 <div className="col-lg-8 advantage-grid-info">
                        <div className="advantage_left">
                             <h1 className="heading text-capitalize mb-sm-5 mb-4">Hi. I'm <span>Azzahra.</span></h1>
							<p className="mt-4">Integer porttitor <span>mollisar </span>lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum, consectetur.</p>
							<a href="#services" className="banner-button btn mt-5 scroll">Learn about what i do</a>
						</div>
                    </div>
                </div>
            </div>
		</div>
    </section>
    );
}

export default Rara;