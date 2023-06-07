import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <div className="d-flex flex-column flex-sm-row justify-content-around py-4 my-4 border-top footer">
      <p>© 2023 Kayode, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="https://www.facebook.com/kayode.olaiya.12" target='_blank' rel="noreferrer"><span className='fa fa-facebook'></span></a></li>
        <li className="ms-3"><a className="link-dark" href="https://www.twitter.com/realbig_zee" target='_blank' rel="noreferrer"><span className='fa fa-twitter'></span></a></li>
        <li className="ms-3"><a className="link-dark" href="https://www.instagram.com/i.m_zee/" target='_blank' rel="noreferrer"><span className='fa fa-instagram'></span></a></li>
      </ul>
    </div>
    </div>
  )
}

export default Footer