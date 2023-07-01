"use client";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import hexForkLogo from "@/public/image/Hexfork_logo.png";

// import Link from "next/link";
import React from "react";
// import { BsLinkedin, BsTwitter } from "react-icons/bs";
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-[#252423]">
        <style jsx>
          {`
            @media (max-width: 768px) {
              .footer__navigation {
                text-align: center;
                margin-bottom: 20px;
              }

              .footer__navigation a {
                display: block;
                margin-bottom: 10px;
              }

              .lower-footer {
                flex-direction: column;
                align-items: center;
              }

              .move_top {
                margin: 10px auto;
              }
            }
            .footer__navigation a {
              display: inline-block;
              padding: 10px;
              font-size: 11px;
              font-weight: 800;
              color: #8a8887;
              letter-spacing: 0.08em;
            }

            .footer__navigation {
              display: block;
              text-transform: uppercase;
              justify-content: space-between;
              padding-top: 30px;
              padding-bottom: 30px;
            }
            .list--unstyled {
              margin-bottom: 0;
            }

            .list--unstyled > li {
              list-style: none;
              margin-left: 0;
            }
            .list--inline > li {
              display: inline-block;
              margin-left: 0;
            }
            .footer__navigation a:hover,
            .footer__navigation a:visited {
              color: #ffffff;
              text-decoration: underline;
            }
            .separator {
              height: 2px;
              width: 100%;
              max-width: 1440px;
              margin: 0 auto;
              background-image: url(/distressed-stroke.svg);
              background-repeat: repeat-x;
              background-position: 50% 50%;
              background-size: 420px 2px;
            }

            .lower-footer {
              background-color: #252423;
              color: #8a8887;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              font-size: 12px;
              margin: 0 40px;
              text-decoration: none;
              padding-top: 30px;
              padding-bottom: 30px;
            }

            .footer__cookie {
              display: block;
            }
            .footer__cookie:hover {
              color: #ffffff;
              text-decoration: underline;
            }
            .footer__small {
              display: block;
            }
            .move_top {
              margin-left: auto;
              font-weight: 500;
            }
            .move_top:hover {
              color: #ffff;
            }
            .monospace {
              letter-spacing: 0.025em;
              font-size: 0.75rem;
              line-height: 1.667;
              font-family: "Eco Coding W02 WGL4", monospace;
            }
          `}
        </style>
        <div className="container pl-6 pr-9 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-full flex-shrink-0 justify-around md:mx-0 mx-auto text-center md:text-left flex items-center">
            <Image src={hexForkLogo} alt="logo" width={80} height={10} />
            <div className="footer__navigation ml-4">
              <nav>
                <ul className="list--unstyled list--inline">
                  <li>
                    <a href="/en/press" className="">
                      PRESS
                    </a>
                  </li>
                  <li>
                    <a href="/en/security" className="">
                      SECURITY
                    </a>
                  </li>
                  <li>
                    <a href="/en/legal" className="">
                      LEGAL
                    </a>
                  </li>
                  <li>
                    <a href="/en/leadership" className="">
                      TEAM
                    </a>
                  </li>
                  <li>
                    <a href="/en/leadership" className="">
                      TERMS OF SERVICE
                    </a>
                  </li>
                  <li>
                    <a href="/en/candidate-privacy" className="">
                      PRIVACY NOTICE
                    </a>
                  </li>
                  <li>
                    <a href="/en/terms-of-service" className="">
                      USER SUPPORT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <span className="flex flex-col gap-4 sm:ml-auto sm:mr-3 sm:justify-start sm:flex-row sm:gap-2 ">
                {/* Youtube React icon */}
                <Link href="" className="ml-3 text-gray-500">
                  <FaYoutube
                    size={20}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#d1363a")
                    }
                    onMouseOut={({ target }) => (target.style.color = "gray")}
                  />
                </Link>

                {/* Twitter React icon */}
                <Link
                  href="https://twitter.com/hexfork"
                  className="ml-3 text-gray-500"
                  target="_blank"
                >
                  <FaTwitter
                    size={20}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#d1363a")
                    }
                    onMouseOut={({ target }) => (target.style.color = "gray")}
                  />
                </Link>

                {/* Facebook React icon */}
                <Link href="" className="ml-3 text-gray-500">
                  <FaFacebookF
                    size={20}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#d1363a")
                    }
                    onMouseOut={({ target }) => (target.style.color = "gray")}
                  />
                </Link>

                {/* LinkedIn React icon */}
                <Link
                  href="https://uk.linkedin.com/company/hexfork"
                  className="ml-3 text-gray-500"
                  target="_blank"
                >
                  <FaLinkedinIn
                    size={20}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#d1363a")
                    }
                    onMouseOut={({ target }) => (target.style.color = "gray")}
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="lower-footer">
          <a href="" className="footer__cookie">
            Cookies Preference
          </a>
          <p>&nbsp;&nbsp;|</p>
          <p className="footer__small">
            &nbsp;&nbsp;© 2023 HexFork. All Right Reserved
          </p>
          <div className="move_top monospace">
            <Link legacyBehavior href="/" scroll={true}>
              <a href="">TO THE TOP</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
