import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <h1>About Page</h1>
                <p>Bio here</p>
                <Link to="/contact">Learn More</Link>
            </Layout>
        </div>
    );
}

export default AboutPage;