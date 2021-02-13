import React from 'react';
import "./Home.css" ;
import Product from './Product';

function Home() {
    return (
        <div className = "home">

            <div className = "home_container">
                <img className= "home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>

                <div className = "home_row">
                    <Product  
                    id="12321341"
                    title = "The Lean Startup: How Today's Entrepreneurs Use Continous Innovation to Create a Radically Successful Bussiness "
                    price = {19.99} 
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
                    rating = {3} 
                    />
                    <Product
                    id="45345678"
                    title = 'New Apple iPhone 12(64GB, Blue)[Locked] + Carrier Subscription' 
                    price = {799.99} 
                    image = "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg" 
                    rating = {4}   />
                    

                </div>


                <div className = "home_row">
                    <Product 
                    id="65475845"
                    title = 'DualSense Wireless Controller' 
                    price = {69.98} 
                    image = "https://m.media-amazon.com/images/I/61o7ai+YDoL._AC_UY218_.jpg" 
                    rating = {5} />
                    <Product 
                    id="36574657"
                    title = 'AstroAI Ski Mask Windproof Balaclava Breathable Face Mask' 
                    price = {11.04} 
                    image = "data:image/webp;base64,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" 
                    rating = {3}  />
                    <Product
                    id="63546356"  
                    title = 'Hamilton Beach 2-Way Brewer Coffee Maker, Single-Serve and 12-Cup Pot' 
                    price = {79.99} 
                    image = "https://m.media-amazon.com/images/I/71IrYVpNDbL._AC_UL320_.jpg" 
                    rating = {4} />
                </div>


                <div className = "home_row">
                    <Product
                    id="64545432"  
                    title = 'SAMSUNG LC24F396FHNXZA 23.5" FHD Curved LED-Lit FreeSync Monitor' 
                    price = {149.99} 
                    image = "https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UY218_.jpg" 
                    rating = {4} />
                </div>

            </div>

        </div>
    );
}

export default Home
