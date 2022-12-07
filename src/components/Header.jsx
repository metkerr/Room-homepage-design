import closeIcon from "../images/icon-close.svg";
import hamburgerButton from "../images/icon-hamburger.svg";
import roomLogo from "../images/logo.svg";
import { useState } from "react";
import heroHeader_1 from "../images/mobile-image-hero-1.jpg";
import heroHeader_2 from "../images/mobile-image-hero-2.jpg";
import heroHeader_3 from "../images/mobile-image-hero-3.jpg";
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";
import arrowIcon from "../images/icon-arrow.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentSelector, setContentSelector] = useState(0);

  const handleContentSelector = (pointer) => {
    // add 1 if pointer true, decrease 1 if pointer false
    // pointer is a boolean: right = true / left = false

    if (pointer) {
      setContentSelector(contentSelector < 2 ? contentSelector + 1 : 0);
    } else {
      setContentSelector(contentSelector > 0 ? contentSelector - 1 : 2);
    }
  };

  const heroContent = [
    {
      mobileBgImage: heroHeader_1,
      content: {
        title: "Discover innovative ways to decorate",
        caption:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      },
    },
    {
      mobileBgImage: heroHeader_2,
      content: {
        title: "We are available all across the globe",
        caption:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      },
    },
    {
      mobileBgImage: heroHeader_3,
      content: {
        title: "Manufactured with the best materials",
        caption:
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      },
    },
  ];

  return (
    <header>
      <div
        id="hero"
        className="h-96 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${heroContent[contentSelector].mobileBgImage})`,
        }}
      >
        <div
          id="top-header"
          className={`flex ${menuOpen && "hidden"}`}
          style={{ height: "4.5rem" }}
        >
          <div
            id="hamburger-button"
            className="basis-1/6 my-auto"
            onClick={() => setMenuOpen(true)}
          >
            <img
              src={hamburgerButton}
              className="pl-5 w-10"
              alt="hamburger-button"
            />
          </div>
          <div id="room-logo" className="grow my-auto">
            <img src={roomLogo} alt="room-logo" className="mx-auto w-16" />
          </div>
          <div className="basis-1/6"></div>
        </div>

        <div
          id="hero-slider-button"
          className="flex absolute bottom-0 right-0 z-0"
        >
          <div
            className="angle-left w-12 h-12 flex bg-black active:bg-very-dark-gray"
            onClick={() => handleContentSelector(false)}
          >
            <div className="m-auto">
              <img
                src={angleLeft}
                alt="hero content slide left"
                className="w-3"
              />
            </div>
          </div>
          <div
            className="angle-right w-12 h-12 flex bg-black active:bg-very-dark-gray"
            onClick={() => handleContentSelector(true)}
          >
            <div className="m-auto">
              <img
                src={angleRight}
                alt="hero content slide right"
                className="w-3"
              />
            </div>
          </div>
        </div>

        {/* open menu toggle */}
        <div
          className={`nav-container h-screen text-sm ${!menuOpen && "hidden"}`}
        >
          <nav className="flex font-bold bg-white h-24">
            <span className="pl-5 basis-1/5 my-auto">
              <img
                src={closeIcon}
                alt="close-button"
                onClick={() => setMenuOpen(false)}
              />
            </span>
            <div className="menu flex-grow my-auto ml-3 flex justify-around text-center pt-0.5 text-base">
              <button className="py-8">home</button>
              <button className="py-8">shop</button>
              <button className="py-8">about</button>
              <button className="py-8">contact</button>
            </div>
          </nav>
          <div
            id="nav-curtain"
            className="w-full relative z-10"
            style={{
              background: "rgba(0,0,0,0.5)",
              height: "calc(100% - 6rem)",
            }}
            onClick={() => setMenuOpen(false)}
          ></div>
        </div>
      </div>

      <div id="cta-container" className="my-14 mx-8">
        <h1 className="text-4xl mb-2 font-bold">
          {heroContent[contentSelector].content.title}
        </h1>
        <p className="text-dark-gray">
          {heroContent[contentSelector].content.caption}
        </p>
        <button href="#" className="font-semibold mt-8 flex">
          <span style={{ letterSpacing: "0.6rem" }} className="pt-1 text-base">
            SHOP NOW
          </span>
          <span className="m-auto pl-5">
            <img src={arrowIcon} alt="arrow-icon" className="w-10" />
          </span>
        </button>
      </div>
    </header>
  );
}
