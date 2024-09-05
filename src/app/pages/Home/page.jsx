'use client'
import Header from '@/app/components/Header';
import React, { Fragment } from 'react';
import 'primeicons/primeicons.css';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

const HomePage = () => {

    const images = [
        { itemImageSrc: '@/public/image.png', alt: 'Description 1', title: 'Title 1' },
        { itemImageSrc: '@/public/image.png', alt: 'Description 2', title: 'Title 2' },
        { itemImageSrc: '@/public/image.png', alt: 'Description 3', title: 'Title 3' },
    ];

    return (
        <Fragment>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' , }}>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                    <Image src="@/public/image.png"/>        
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </Fragment>
    );
}

export default HomePage;
