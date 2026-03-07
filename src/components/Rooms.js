import React from "react";

import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";

const rooms = [
  {
    id: 1,
    name: "Presidential Suite",
    description: "Luxury room with king-size bed, sea view, and private balcony.",
    image: room1,
  },
  {
    id: 2,
    name: "Deluxe Room",
    description: "Comfortable room with modern amenities and city view.",
    image: room2,
  },
  {
    id: 3,
    name: "Standard Room",
    description: "Cozy room for a budget-friendly stay with all essentials.",
    image: room3,
  },
];

function Rooms() {
  return (
    <section id="rooms" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Rooms</h2>

        <div className="row">
          {rooms.map((room) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={room.id}>
              <div className="card h-100">
                <img
                  src={room.image}
                  className="card-img-top"
                  alt={room.name}
                />

                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Rooms;