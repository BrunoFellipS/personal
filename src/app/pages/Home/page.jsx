'use client'
import Header from '@/app/components/Header';
import React, { Fragment } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Divider } from 'primereact/divider';
import { Galleria } from 'primereact/galleria';
import 'primeicons/primeicons.css';

const HomePage = () => {
    const images = [
        { itemImageSrc: '@/public/image.png', alt: 'Description 1', title: 'Title 1' },
        { itemImageSrc: '@/public/image.png', alt: 'Description 2', title: 'Title 2' },
        { itemImageSrc: 'public/image.png', alt: 'Description 3', title: 'Title 3' },
    ];

    return (
        <Fragment>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>

            </div>
        </Fragment>
    );
}

export default HomePage;
