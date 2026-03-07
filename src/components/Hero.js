function Hero() {

  return (
    <section id="home" className="bg-dark text-white text-center p-5">
      <div className="container">
        <h1 className="display-4">Experience Comfort & Luxury</h1>
        <p className="lead">Book your stay with us today</p>

        {/* Remove this button */}
        {/* 
        <button
          className="btn btn-warning btn-lg"
          onClick={() => alert("You have booked successfully!")}
        >
          Book Now
        </button> 
        */}
      </div>
    </section>
  );
}

export default Hero;