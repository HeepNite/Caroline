import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Home';
import WhatCanIDo from './WhatCanIDo';
import Project from './Project';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';
import Clients from './Clients';

const Index = () => (

    <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} 
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>

                    <div className="section index-section-dark">
                        <Home />
                    </div>
                    <div className="section index-section-clare">
                        <WhatCanIDo />
                    </div>

                    <div className="section index-section-dark">
                        <Project />
                    </div>

                    <div className="section index-section-clare">
                        <Clients />
                    </div>

                    <div className="section index-section-dark">
                        <Testimonials />
                    </div>

                    <div className="section index-section-clare">
                        <Blog />
                    </div>

                    <div className="section index-section-dark">
                        <Contact />
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />


)

export default Index;