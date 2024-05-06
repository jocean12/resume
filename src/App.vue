<template>
  <div id="app">
    <div id="nav" class="navigation">
      <button id="nav-button" onclick="toggleMenu()" type="button" class="hamburger hamburger--spin">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <ul id="nav-ul" class="nav-list">
        <li><router-link onclick="toggleMenu()" to="/">Home</router-link></li>
        <li><router-link onclick="toggleMenu()" to="/resume">Résumé</router-link></li>
        <li><router-link onclick="toggleMenu()" to="/portfolio">Portfolio</router-link></li>
        <li><router-link onclick="toggleMenu()" to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <router-view />
    <div class=social-icons>
      <a href="http://itunes.apple.com/album/id/1570963076" target="_blank"><i class="fab fa-apple"></i></a>
      <a href="https://open.spotify.com/album/6u6hDlFlgoXvmxldPVkKeO" target="_blank"><i class="fab fa-spotify"></i></a>
      <a href="https://www.linkedin.com/in/joe-sheehanweb/"  target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/jocean12" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/jocean12/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</template>

<style>
@charset "UTF-8";
/* CSS Document */
body,
html,
#app {
  height: 100%;
  z-index: 0;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}
input[type="text"] {
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 100;
}
button:focus {
  outline: 0;
}
.logo h3 {
  font-size: 44px;
  padding-top: 34px;
  margin-top: 0;
  margin-bottom: 0;
}
.logo h3 .smaller {
  font-size: 34px;
}
.logo h3 a {
  text-decoration: none;
  color: #191919;
}
.Portfolio,
.contact {
  height: 100%;
}
.contact a {
  color: black;
}
.navigation {
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  width: 70px;
  background-color: rgba(0, 0, 0, 1);
  z-index: 5;
  transition-property: transform;
  transition: 1s;
  -webkit-transition: 1s;
  transition-timing-function: ease;
}
#nav.is-active {
  width: 100%;
}
#nav ul li {
  color: #fff;
  list-style: none;
  display: inline-block;
  padding-right: 30px;
  font-family: "Cormorant Garamond", serif;
}
#nav ul li a {
  color: #b7b7b7;
  text-decoration: none;
  z-index: 0;
  text-transform: lowercase;
}
#nav ul {
  padding-left: 20px;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  margin: -70px 0;
  transition-property: opacity;
  transition: 0.1s ease;
  -webkit-transition: 0.1s ease;
  transition-delay: 0.1s;
  -webkit-transition-delay: 0.1s;
  opacity: 0;
  font-size: 50px;
}
#nav ul.nav-list.is-active {
  display: inherit;
  opacity: 1;
  transition-property: opacity;
  transition: 1s ease;
  -webkit-transition: 1s ease;
  transition-delay: 1s;
  -webkit-transition-delay: 1s;
  z-index: 6;
}
.container {
  padding: 0 40px;
}
.container-offset-right {
  padding-right: 120px;
}
.height-100 {
  height: 100%;
}
.margin-minus-logo {
  margin-top: -88px;
}
/*Hamburger starts */
.hamburger {
  z-index: 10;
  float: right;
  padding: 60px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 3px;
  background-color: #b7b7b7;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

/*
   * Spin
   */
.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}
.hamburger--spin.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
/*Hamburger ends */

.intro {
  width: 100%;
  height: 100%;
  background: url(./img/background.jpg) fixed bottom left;
  background-size: cover;
}
.home {
  height:100%
}
.profile img {
  width: 200px;
  height: auto;
  border-radius: 100%;
}
.ghost-table {
  height: 100%;
  display: table;
  width: 100%;
}
.ghost-center {
  display: table-cell;
  margin: 0;
  vertical-align: middle;
}
.center img,
.center p,
.center h1 {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.fifty {
  width: 50%;
  margin-right: -4px;
}
/* lightbox starts */
.row > .column {
  padding: 0 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Create four equal columns that floats next to eachother */
.column {
  float: left;
  width: 25%;
}

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

/* Hide the slides by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

img.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* lightbox ends */
/* footer starts */
.social-icons {
  position: fixed;
  z-index: 6;
  bottom: 0;
  right: 0;
  font-size: 24px;
  width: 70px;
  text-align: center;
  padding-bottom: 20px;
}
.social-icons a {
  color: #b7b7b7;
  display: block;
}
.gray-background {
  background-color: #a0b7b5;
}
.max-800 {
  max-width: 800px;
  padding: 0 15px;
}
/* portfolio page */
.js-gallery {
  height: 100%;
  margin-top: 40px;
  padding-right: 62px;
}
.outer-outer-overlay {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 33.333333%;
  margin-right: -4px;
  height: 30%;
  margin-top: -4px;
}
.outer-bg {
  width: 100%;
  height: 100%;
  position: relative;
}
.inner-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.4s ease-in;
  -moz-transition: opacity 0.4s ease-in;
  -o-transition: opacity 0.4s ease-in;
  -ms-transition: opacity 0.4s ease-in;
  transition: opacity 0.4s ease-in;
  background-color: rgba(0, 0, 0, 0.8);
}
.inner-text a {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 5000;
}
.inner-text:hover {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  opacity: 1;
}
.inner-text h2,
.inner-text h3 {
  padding: 0px 10px 0 10px !important;
  direction: inherit !important;
  color: #ffffff !important;
  z-index: 4000;
  text-align: center;
  margin: 0;
}
.inner-text h2 {
  margin-top: 15px;
}

.page-border p {
  margin: 0;
  display: none;
}
.inner-text p {
  display: inherit !important;
  padding: 0px 10px 0 10px !important;
  direction: inherit !important;
  color: #ffffff !important;
  font-size: 12px !important;
  z-index: 4000;
}
.inner-text p a {
  display: none;
}
#baguetteBox-overlay .full-image figcaption a {
  color: white;
}
#baguetteBox-overlay .full-image figcaption {
  font-family: "Roboto", sans-serif;
  line-height: inherit;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.9);
}
/* contact page */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 10px 12px;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  line-height: 2em;
  font-size: 18px;
  border: 1px #bdbdbd solid;
  border-radius: 4px;
  font-family: "Cormorant Garamond", serif;
  font-weight: bold;
}
.contact-form h3 {
  margin-bottom: 4px;
  margin-top: 0;
}
.contact-form button {
  background-color: rgba(0, 0, 0, 0.9);
  color: #b7b7b7;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  padding: 6px 12px;
  font-family: "Cormorant Garamond", serif;
  cursor: pointer;
}
.response {
  margin-top: 20px;
  text-align: center;
}
.response a {
  color: #b7b7b7;
}
/* /contact page end */

@media only screen and (max-width: 1140px) {
  .outer-outer-overlay {
    height: 50%;
  }
}
@media only screen and (max-width: 729px) {
  .outer-outer-overlay {
    width: 50%;
  }
}
/* /portfoil page end */
.resume h2 {
  margin-bottom: 0;
}
.resume p {
  margin-top: 3px;
}
.resume section {
  margin: 0 20px;
}
.resume a,
.resume a:visited {
  color: rgba(0, 0, 0, 0.9);
}
.resume a:hover {
  color: black;
}
.resume {
  padding-right: 80px;
}

/* -----------phone media query----------- */
@media only screen and (max-width: 512px) {
  .navigation {
    height: 54px;
    position: absolute;
    width: 100%;
  }
  #nav ul {
    margin-top: -400px;
    padding-left: 0;
  }
  #nav ul li {
    display: block;
    padding-right: 0;
  }
  #nav ul.nav-list.is-active {
    margin-top: 100px;
    top: 0;
  }
  #nav.is-active {
    height: 100%;
  }

  body {
    padding-top: 54px;
  }
  .container {
    padding: 0;
  }
  .hamburger {
    padding-top: 15px;
    height: 54px;
  }
  .logo h3 {
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    font-size: 30px;
    color: #b7b7b7;
    z-index: 7;
    line-height: 54px;
  }
  .logo h3 .smaller {
    font-size: 20px;
  }
  .logo h3 a {
    color: #b7b7b7;
  }
  .social-icons {
    width: 100%;
    position:inherit;
    z-index: 4;
    background-color: rgba(0, 0, 0, 1);
    padding-top: 4px;
  }
  .navigation {
    position: fixed;
  }
  .logo h3 {
    position: fixed;
  }
  .social-icons a {
    display: inline;
    margin-right: 4px;
  }
  .outer-outer-overlay {
    width: 100%;
  }
  .js-gallery {
    margin: 0;
    padding: 0;
  }
  .margin-minus-logo {
    margin-top: 0;
  }
  .intro {
    min-height: 568px;
  }
  .resume {
    padding-right: 0px;
  }
  #app > .Resume {
    margin-bottom: 62px;
  }
}
/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.9.1
 * @url https://github.com/feimosi/baguetteBox.js
 *#baguetteBox-overlay{display:none;opacity:0;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:1000000;background-color:#222;background-color:rgba(0,0,0,.8);-webkit-transition:opacity .5s ease;transition:opacity .5s ease}#baguetteBox-overlay.visible{opacity:1}#baguetteBox-overlay .full-image{display:inline-block;position:relative;width:100%;height:100%;text-align:center}#baguetteBox-overlay .full-image figure{display:inline;margin:0;height:100%}#baguetteBox-overlay .full-image img{display:inline-block;width:auto;height:auto;max-height:100%;max-width:100%;vertical-align:middle;-webkit-box-shadow:0 0 8px rgba(0,0,0,.6);-moz-box-shadow:0 0 8px rgba(0,0,0,.6);box-shadow:0 0 8px rgba(0,0,0,.6)}#baguetteBox-overlay .full-image figcaption{display:block;position:absolute;bottom:0;width:100%;text-align:center;line-height:1.8;white-space:normal;color:#ccc;background-color:#000;background-color:rgba(0,0,0,.6);font-family:sans-serif}#baguetteBox-overlay .full-image:before{content:"";display:inline-block;height:50%;width:1px;margin-right:-1px}#baguetteBox-slider{position:absolute;left:0;top:0;height:100%;width:100%;white-space:nowrap;-webkit-transition:left .4s ease,-webkit-transform .4s ease;transition:left .4s ease,-webkit-transform .4s ease;transition:left .4s ease,transform .4s ease;transition:left .4s ease,transform .4s ease,-webkit-transform .4s ease,-moz-transform .4s ease}#baguetteBox-slider.bounce-from-right{-webkit-animation:bounceFromRight .4s ease-out;animation:bounceFromRight .4s ease-out}#baguetteBox-slider.bounce-from-left{-webkit-animation:bounceFromLeft .4s ease-out;animation:bounceFromLeft .4s ease-out}@-webkit-keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}@keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}@-webkit-keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}@keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}.baguetteBox-button#next-button,.baguetteBox-button#previous-button{top:50%;top:calc(50% - 30px);width:44px;height:60px}.baguetteBox-button{position:absolute;cursor:pointer;outline:0;padding:0;margin:0;border:0;-moz-border-radius:15%;border-radius:15%;background-color:#323232;background-color:rgba(50,50,50,.5);color:#ddd;font:1.6em sans-serif;-webkit-transition:background-color .4s ease;transition:background-color .4s ease}.baguetteBox-button:focus,.baguetteBox-button:hover{background-color:rgba(50,50,50,.9)}.baguetteBox-button#next-button{right:2%}.baguetteBox-button#previous-button{left:2%}.baguetteBox-button#close-button{top:20px;right:2%;right:calc(2% + 6px);width:30px;height:30px}.baguetteBox-button svg{position:absolute;left:0;top:0}.baguetteBox-spinner{width:40px;height:40px;display:inline-block;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-20px}.baguetteBox-double-bounce1,.baguetteBox-double-bounce2{width:100%;height:100%;-moz-border-radius:50%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}.baguetteBox-double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce{0%,100%{-webkit-transform:scale(0);-moz-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}*/
</style>
