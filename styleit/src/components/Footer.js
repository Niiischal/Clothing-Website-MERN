import React from 'react'

const Footer = () => {
  return (
<>
<footer className="bg-white dark:bg-gray-900">
<div className="offcanvas-footer d-flex justify-content-evenly sticky-bottom bg-light">
  <a href="/" class="footer-icon">
    <i class="fab fa-facebook fa-lg" style={{ color: 'gray' }}></i>
    <span class="sr-only">Facebook page</span>
  </a>
  <a href="/" class="footer-icon">
    <i class="fab fa-twitter fa-lg" style={{ color: 'gray' }}></i>
    <span class="sr-only">Twitter page</span>
  </a>
  <a href="/" class="footer-icon">
    <i class="fab fa-instagram fa-lg" style={{ color: 'gray' }}></i>
    <span class="sr-only">Instagram page</span>
  </a>
  <a href="/" class="footer-icon">
    <i class="fab fa-discord"style={{ color: 'gray' }} ></i>
    <span class="sr-only">Discord server</span>
  </a>
</div>
</footer>
</>
  )
}





export default Footer
