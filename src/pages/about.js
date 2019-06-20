import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About Page</h1>
                <p>Bio here</p>
                <Link to="/contact">Learn More</Link>
            </Layout>
        </div>
    );
}

export default AboutPage;