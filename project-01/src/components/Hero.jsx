const Hero = () => {
  return (
  <main className="hero">
    <div className="hero-content">
      <h1 className="heading">YOUR FEET DESERVE THE BEST</h1>
      <p className="para">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="hero-btn">
            <button className="btn-1">Shop Now</button>
            <button className="btn-2">Category</button>
        </div>

        <div className="shop-on">
            <p className="shop-p">Also available on</p>
                <div className="icons">
                    <img src="/images/flipkart.png" alt="flipkart" />
                    <img src="/images/amazon.png" alt="amazon" />
                </div>
        </div>

    </div>
    <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe image" />
    </div>
  </main>
  );
};

export default Hero;
