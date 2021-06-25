import SearchBar from '../SearchBar';

import MainPage from '../MainPage';
import React from "react";
import Footer from '../Footer';
import { SliderData } from '../SliderData';
import ImageSlider from '../ImageSlider';

export default function Home () {
    return <div>
        <SearchBar />
        <ImageSlider slides={SliderData} />
        <MainPage />
        <Footer /> 
    </div>;
};


