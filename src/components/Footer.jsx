import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-xl-3">
                    <h6 className="fw-bold mb-3">Hobbycue</h6>
                    <ul className="list-unstyled" style={{fontSize: "14px"}}>
                        <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Our Services</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Work with Us</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">FAQ</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-xl-3">
                    <h6 className="fw-bold mb-3">How Do I</h6>
                    <ul className="list-unstyled" style={{fontSize: "14px"}}>
                        <li><a href="#" className="text-dark text-decoration-none">Sign Up</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Add a Listing</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Claim Listing</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Post a Query</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Add a Blog Post</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Other Queries</a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-xl-3">
                    <h6 className="fw-bold mb-3">Quick Links</h6>
                    <ul className="list-unstyled" style={{fontSize: "14px"}}>
                        <li><a href="#" className="text-dark text-decoration-none">Listings</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Blog Posts</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Shop / Store</a></li>
                        <li><a href="#" className="text-dark text-decoration-none">Community</a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-xl-3">
                    <h6 className="fw-bold mb-3">Social Media</h6>
                    <div className="mb-5 d-flex justify-content-evenly">
                        <a href="#" className="text-dark me-2"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-dark me-2"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-dark me-2"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-dark me-2"><i className="bi bi-pinterest"></i></a>
                        <a href="#" className="text-dark me-2"><i className="bi bi-google"></i></a>
                        <a href="#" className="text-dark me-2"><i className="bi bi-youtube"></i></a>
                        <a href="#" className="text-dark me-2"><i className="bi bi-telegram"></i></a>
                        <a href="#" className="text-dark"><i className="bi bi-envelope"></i></a>
                    </div>
                    <h6 className="fw-bold">Invite Friends</h6>
                    <form className="d-flex w-100">
                        <input type="email" className="inviteInput border-1 rounded-start p-2" placeholder="Email ID" />
                        <button className="inviteBtn text-white p-2 px-3 border-0 rounded-0 rounded-end" type="submit">Invite</button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="mb-0">&copy; Purple Cues Private Limited</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
