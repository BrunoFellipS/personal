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
                <div style={{ width: '80%', backgroundColor: '#f7f9fc', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '30px' }}>
                    <Card 
                        title="Bem-vindo ao Meu Portfólio" 
                        style={{ 
                            textAlign: 'center', 
                            backgroundColor: '#ffffff', 
                            borderRadius: '10px', 
                            padding: '20px', 
                            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' 
                        }}
                        header={<div style={{ fontSize: '28px', fontWeight: 'bold', color: '#343a40' }}>Bem-vindo ao Meu Portfólio</div>}
                    >
                        <p style={{ fontSize: '18px', color: '#6c757d' }}>
                            Olá, sou um desenvolvedor full-stack com paixão por criar soluções elegantes e eficientes. Navegue pelo meu portfólio para conhecer meu trabalho.
                        </p>
                        <div style={{ marginTop: '20px' }}>
                            <Button 
                                label="Contato" 
                                icon="pi pi-envelope" 
                                style={{ 
                                    marginRight: '10px', 
                                    backgroundColor: '#007bff', 
                                    color: '#ffffff', 
                                    borderColor: '#007bff' 
                                }} 
                                className="p-button-rounded" 
                            />
                            <Button 
                                label="LinkedIn" 
                                icon="pi pi-linkedin" 
                                style={{ 
                                    backgroundColor: '#0077b5', 
                                    color: '#ffffff', 
                                    borderColor: '#0077b5' 
                                }} 
                                className="p-button-rounded" 
                            />
                        </div>
                    </Card>

                    <Divider style={{ margin: '40px 0', backgroundColor: '#dee2e6' }} />

                    <TabView>
                        <TabPanel header="Sobre Mim">
                            <p style={{ fontSize: '16px', color: '#495057' }}>
                                Sou especializado em tecnologias como React, Node.js, e mais. Tenho experiência em desenvolver aplicações escaláveis e de alto desempenho.
                            </p>
                        </TabPanel>
                        <TabPanel header="Projetos">
                            <p style={{ fontSize: '16px', color: '#495057' }}>
                                Aqui estão alguns dos projetos em que trabalhei.
                            </p>
                        </TabPanel>
                        <TabPanel header="Skills">
                            <p style={{ fontSize: '16px', color: '#495057' }}>Possuo habilidades em:</p>
                            <ul style={{ paddingLeft: '20px', color: '#495057' }}>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>SQL/NoSQL</li>
                            </ul>
                        </TabPanel>
                    </TabView>

                    <Divider style={{ margin: '40px 0', backgroundColor: '#dee2e6' }} />

                    <Galleria
                        value={images}
                        showThumbnails={false}
                        showItemNavigators
                        circular
                        autoPlay
                        transitionInterval={3000}
                        style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '10px', overflow: 'hidden' }}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default HomePage;
