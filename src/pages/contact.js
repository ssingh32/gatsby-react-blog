import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact"/>
                <h1>Contact Page</h1>
                <p>My Twitter <a href="https://twitter.com/sukhdipsnijjar">@sukhdipsnijjar</a></p>
            </Layout>
        </div>
    );
}

export default ContactPage;