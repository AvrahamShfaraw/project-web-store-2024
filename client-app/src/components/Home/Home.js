import React from 'react';
import imageSrc from '../../assets/images/image-hero.jpeg';
import './Home.css';

import { Link } from "react-router-dom";


const defaultProps = {
    title: (
        <>
            ADI GADALO'S SHOWCASE
        </>
    ),
    subtitle: 'התמכרו לאופנה נצחית עם שמלות מעצבים בלעדיות.',
    label: 'הקולקציות של עדי',
};
const Home = () => {
    const { title, subtitle, label } = defaultProps;

    return (
        <section className='home'>
            <img src={imageSrc} alt="Travel" className="home__image" />
            <div className="mask"></div>
            <div className='container'>
                <div className='content-left'>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <Link
                    className='button-link'
                    to={"/collection"}
                    >{label}</Link>
                </div>
            </div>
        </section>
        
    );
};

export default Home;