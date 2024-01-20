import React, { useEffect } from "react";
import AssetsImage from "../../assets/AssetsImage";
import FooterMap from "./FooterMap/FooterMap";
import { Link } from "react-router-dom";

function FooterSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <footer className="bg-[#182C61] shadow-2xl mt-10">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Logo and content */}
            <div>
              <div className="text-teal-600">
                <Link to="/" className="flex items-center mb-4 sm:mb-0">
                  <img
                    src={AssetsImage.footerLogo}
                    alt="logo"
                    className="w-[120px] mb-1"
                  />
                </Link>
              </div>
              <p className="mt-4 text-[16px] text-[#f1f2f6] leading-relaxed text-left">
                Goditect is a leading force in innovative software solutions. We
                specialize in custom software development, IT consulting, and
                cutting-edge technology services. With a commitment to
                excellence, we transform ideas into powerful digital solutions,
                driving businesses to new heights. Partner with us for a future
                where technology meets unparalleled expertise. Goditect
                Empowering Digital Transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              {/* Our Solutions */}
              <div>
                <p className="font-bold text-[#ffffff] ">Our Solutions</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="text-[#f7f1e3] transition hover:opacity-75">
                    Digital marketing
                  </li>

                  <li className="text-[#f7f1e3] transition hover:opacity-75">
                    Wordpress solution
                  </li>

                  <li className="text-[#f7f1e3] transition hover:opacity-75">
                    Graphics design
                  </li>

                  <li className="text-[#f7f1e3] transition hover:opacity-75">
                    UI/UX design
                  </li>

                  <li className="text-[#f7f1e3] transition hover:opacity-75">
                    Web design
                  </li>
                  <li className="text-[#f7f1e3] transition hover:opacity-75">
                    Web development
                  </li>
                  <li className="text-[#f7f1e3] transition hover:opacity-75">
                    App development
                  </li>
                </ul>
              </div>
              {/* Helpful Links */}
              <div>
                <p className="font-bold text-[#ffffff] ">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-[#f7f1e3] transition hover:opacity-75"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/about"
                      className="text-[#f7f1e3] transition hover:opacity-75"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/service"
                      className="text-[#f7f1e3] transition hover:opacity-75"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/price"
                      className="text-[#f7f1e3] transition hover:opacity-75"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-[#f7f1e3] transition hover:opacity-75"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-[#f7f1e3] transition hover:opacity-75"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Address links */}
              <div>
                <p className="font-bold text-[#ffffff] ">Address Location</p>
                <FooterMap />
              </div>
            </div>
          </div>
          <hr />
          <p className="text-sm text-[#f7f1e3] text-center font-medium">
            Copyright © 2021-2024 Goditect. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
