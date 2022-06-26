import React from 'react';
import Banner from './Banner';
import Child from './Child';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Child></Child>
        </div>
    );
};

export default Home;