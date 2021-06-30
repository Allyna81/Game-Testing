
import React from 'react';
import './styles/style.css';

const AboutUs = () => {
    return (
        <div class="row">
            <div class="col-1-of-4">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--1">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--1">Product Owner</span>
                        </h4>
                        <div class="card__details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam eros dictum odio hendrerit, sed imperdiet elit ornare. </p>
                        </div>
                    </div>
                    <div class="card__side card__side--back card__side--back-1">
                        <div class="card__cta">
                            <div class="card__like-box">
                                <p class="card__like-only">Like his work ?</p>
                            </div>
                            <a href="#popup" class="aboutus-btn btn--white">Join him!</a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-1-of-4">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--2">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--2">Scrum Master</span>
                        </h4>
                        <div class="card__details">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam eros dictum odio hendrerit, sed imperdiet elit ornare. </p>
                        </div>

                    </div>
                    <div class="card__side card__side--back card__side--back-2">
                        <div class="card__cta">
                            <div class="card__like-box">
                                <p class="card__like-only">Like his work ?</p>
                            </div>
                            <a href="#popup" class="btn btn--white">Join him!</a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-1-of-4">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--3">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--3">Lead Dev Front</span>
                        </h4>
                        <div class="card__details">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam eros dictum odio hendrerit, sed imperdiet elit ornare. </p>
                        </div>

                    </div>
                    <div class="card__side card__side--back card__side--back-3">
                        <div class="card__cta">
                            <div class="card__like-box">
                                <p class="card__like-only">Like her work ?</p>
                            </div>
                            <a href="#popup" class="btn btn--white">Join her!</a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-1-of-4">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--3">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--3">Lead Dev Back </span>
                        </h4>
                        <div class="card__details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam eros dictum odio hendrerit, sed imperdiet elit ornare.</p>
                        </div>

                    </div>
                    <div class="card__side card__side--back card__side--back-3">
                        <div class="card__cta">
                            <div class="card__like-box">
                                <p class="card__like-only">Like his work ?</p>
                            </div>
                            <a href="#popup" class="btn btn--white">Join him!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;