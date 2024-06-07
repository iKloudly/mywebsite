import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([
        { title: 'About Kloud', content: 'I am on Cloud9.' },
        { title: 'What I Ride', content: 'I\'m riding a cloud!' }
    ]);

    return (
        <div className="App">
            <Header />
            <main>
                <BlogList posts={posts} />
            </main>
            <Footer />
        </div>
    );
};

export default App;

