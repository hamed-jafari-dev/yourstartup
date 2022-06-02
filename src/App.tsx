import React, {useEffect, useRef, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TopSection from "./components/TopSection";
import BottomBanner from "./components/BottomBanner";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
import WhatOurClientsSay from "./components/WhatOurClientsSay";
import SomeOfOur from "./components/SomeOfOur";
import BlueSection from "./components/BlueSection";


const App = () => {

    const [BlueSectionVis , setBlueSectionVis] = useState(false);
    const [SomeOfOurVis , setSomeOfOurVis] = useState(false);
    const [WhatOurClientsSayVis , setWhatOurClientsSayVis] = useState(false);
    const [WhyWorkWithUsVis , setWhyWorkWithUsVis] = useState(false);
    const [BottomBannerVis , setBottomBannerVis] = useState(false);


    const BlueSectionRef = useRef<HTMLDivElement>(null);
    const SomeOfOurRef = useRef<HTMLDivElement>(null);
    const WhatOurClientsSayRef = useRef<HTMLDivElement>(null);
    const WhyWorkWithUsRef = useRef<HTMLDivElement>(null);
    const BottomBannerRef = useRef<HTMLDivElement>(null);


    const handleScroll = () => {
        const position = window.pageYOffset;
        // @ts-ignore
        if(position + 500 >BlueSectionRef.current.offsetTop){
            setBlueSectionVis(true);
        }
        // @ts-ignore
        if(position + 900>SomeOfOurRef.current.offsetTop){
            setSomeOfOurVis(true);
        }
        // @ts-ignore
        if(position + 900>WhatOurClientsSayRef.current.offsetTop){
            setWhatOurClientsSayVis(true);
        }
        // @ts-ignore
        if(position + 900>WhyWorkWithUsRef.current.offsetTop){
            setWhyWorkWithUsVis(true);
        }
        // @ts-ignore
        if(position + 900>BottomBannerRef.current.offsetTop){
            setBottomBannerVis(true);
        }

    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <div className="App">
            <div className="topBackground">
                <Header />
                <TopSection />
            </div>
          <div ref={BlueSectionRef}>
              <BlueSection visible={BlueSectionVis} />
          </div>
          <div ref={SomeOfOurRef}>
              <SomeOfOur visible={SomeOfOurVis} />
          </div>
          <div ref={WhatOurClientsSayRef}>
              <WhatOurClientsSay visible={WhatOurClientsSayVis} />
          </div>
          <div ref={WhyWorkWithUsRef}>
              <WhyWorkWithUs visible={WhyWorkWithUsVis} />
          </div>
            <div ref={BottomBannerRef}>
                <BottomBanner visible={BottomBannerVis} />
            </div>
          <Footer />
    </div>
  );
}

export default App;
