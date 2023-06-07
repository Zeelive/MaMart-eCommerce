import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat odit hic blanditiis optio provident! Velit fuga aliquam corporis amet officia provident modi quaerat, accusantium, molestias optio alias ipsa? Quidem, asperiores maxime fugiat aut recusandae vel delectus quibusdam a obcaecati reprehenderit harum quam velit, doloribus deleniti iste corrupti quaerat ducimus aspernatur? Est id libero fugiat at delectus. Magni harum officiis, dignissimos vitae totam explicabo ea commodi ullam nihil, tenetur dolore non? Nostrum cum laborum officiis commodi dolores esse soluta pariatur culpa dolorum, reiciendis facilis rerum ad sapiente recusandae placeat beatae tempore. Qui odit corrupti fuga vitae error in cumque, maxime sequi!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="assets/images/aboutus.jpg" alt="About Us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About