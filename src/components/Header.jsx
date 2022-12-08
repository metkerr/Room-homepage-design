import closeIcon from "../images/icon-close.svg";
import hamburgerButton from "../images/icon-hamburger.svg";
import roomLogo from "../images/logo.svg";
import { useState } from "react";
import heroHeader_1 from "../images/mobile-image-hero-1.jpg";
import heroHeader_2 from "../images/mobile-image-hero-2.jpg";
import heroHeader_3 from "../images/mobile-image-hero-3.jpg";
import heroHeader_1_desktop from "../images/desktop-image-hero-1.jpg";
import heroHeader_2_desktop from "../images/desktop-image-hero-2.jpg";
import heroHeader_3_desktop from "../images/desktop-image-hero-3.jpg";
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";
import arrowIcon from "../images/icon-arrow.svg";
import useGetViewport from "../utils/useGetViewport";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentSelector, setContentSelector] = useState(0);
  const { width } = useGetViewport();

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
      desktopBgImage: heroHeader_1_desktop,
      content: {
        title: "Discover innovative ways to decorate",
        caption:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      },
    },
    {
      mobileBgImage: heroHeader_2,
      desktopBgImage: heroHeader_2_desktop,
      content: {
        title: "We are available all across the globe",
        caption:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      },
    },
    {
      mobileBgImage: heroHeader_3,
      desktopBgImage: heroHeader_3_desktop,
      content: {
        title: "Manufactured with the best materials",
        caption:
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      },
    },
  ];

  return (
    <header className="sm:flex sm:h-55v 2xl:h-70v">
      <div
        id="hero"
        className="h-96 bg-cover bg-center bg-no-repeat relative sm:h-auto sm:w-3/5 sm:min-w-min"
        style={{
          backgroundImage: `url(${
            width < 640
              ? heroContent[contentSelector].mobileBgImage
              : heroContent[contentSelector].desktopBgImage
          })`,
        }}
      >
        {/* mobile header <=640px */}
        <div
          id="top-header"
          className={`flex h-18 sm:h-fit sm:mx-16 sm:pt-8 ${
            menuOpen && "hidden"
          }`}
        >
          <div
            id="hamburger-button"
            className="basis-1/6 my-auto cursor-pointer sm:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <img
              src={hamburgerButton}
              className="pl-5 w-10"
              alt="hamburger-button"
            />
          </div>
          <div
            id="room-logo"
            className="grow my-auto sm:w-28 sm:grow-0 sm:shrink-0"
          >
            <img
              src={roomLogo}
              alt="room-logo"
              className="mx-auto sm:ml-0 w-16"
            />
          </div>
          <div className="hidden sm:block">
            <div
              id="desktop-menu"
              className="grow flex my-auto justify-end text-center pt-0.5 text-base text-white"
            >
              <button className="py-8 px-5 flex flex-col relative">
                <span>home</span>
                <span className="menu-underline hidden absolute mt-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 bg-white h-0.5" />
              </button>
              <button className="py-8 px-5 flex flex-col relative">
                <span>shop</span>
                <span className="menu-underline hidden absolute mt-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 bg-white h-0.5" />
              </button>
              <button className="py-8 px-5 flex flex-col relative">
                <span>about</span>
                <span className="menu-underline hidden absolute mt-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 bg-white h-0.5" />
              </button>
              <button className="py-8 px-5 flex flex-col relative">
                <span>contact</span>
                <span className="menu-underline hidden absolute mt-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 bg-white h-0.5" />
              </button>
            </div>
          </div>
          <div className="basis-1/6 sm:grow"></div>
        </div>

        <div
          id="hero-slider-button"
          className="flex absolute bottom-0 right-0 z-0 sm:-mr-40 select-none"
        >
          <div
            className="angle-left w-12 h-12 flex bg-black active:bg-very-dark-gray hover:cursor-pointer hover:bg-very-dark-gray sm:w-20 sm:h-20"
            onClick={() => handleContentSelector(false)}
          >
            <div className="m-auto">
              <img
                src={angleLeft}
                alt="hero content slide left"
                className="w-3 sm:w-4"
              />
            </div>
          </div>
          <div
            className="angle-right w-12 h-12 flex bg-black active:bg-very-dark-gray hover:cursor-pointer hover:bg-very-dark-gray sm:w-20 sm:h-20"
            onClick={() => handleContentSelector(true)}
          >
            <div className="m-auto">
              <img
                src={angleRight}
                alt="hero content slide right"
                className="w-3 sm:w-4"
              />
            </div>
          </div>
        </div>

        {/* open menu toggle */}
        <div
          className={`nav-container sm-hidden select-none h-screen text-sm ${
            !menuOpen && "hidden"
          }`}
        >
          <nav className="flex font-bold bg-white h-24">
            <span className="pl-5 basis-1/5 my-auto">
              <img
                src={closeIcon}
                alt="close-button"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
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

      <div
        id="cta-container"
        className="my-14 mx-8 sm:w-1/4 sm:grow sm:mx-24 sm:my-18 xl:mx-32 xl:my-28 sm:min-w-64 2xl:my-auto"
      >
        <h1 className="text-4xl mb-2 font-bold sm:mb-5">
          {heroContent[contentSelector].content.title}
        </h1>
        <p className="text-dark-gray">
          {heroContent[contentSelector].content.caption}
        </p>
        <button
          href="#"
          className="font-semibold mt-8 flex whitespace-nowrap hover:opacity-40 sm:mt-5"
          id="shop-now-cta"
        >
          <span style={{ letterSpacing: "0.6rem" }} className="pt-1 text-base">
            SHOP NOW
          </span>
          <span className="m-auto pl-5">
            <img src={arrowIcon} alt="arrow-icon" />
          </span>
        </button>
      </div>
    </header>
  );
}
