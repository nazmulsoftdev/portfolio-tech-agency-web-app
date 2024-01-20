import React, { useEffect } from "react";
import NotfoundImg from "../assets/banner/notfoundBanner.png";
import { Helmet } from "react-helmet";
function NotfoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>NotFound</title>
        <meta name="author" content="Shekh Parbes" />
        <meta
          name="description"
          content="Oops! The page you're looking for is not in our codebase. Explore our other avenues for innovative software solutions at Goditect. We specialize in custom software development and cutting-edge technology services. Redirecting you to our home page, where digital excellence begins. Stay tuned for what's next in the world of Goditect ."
        />
        <meta
          name="keywords"
          content="404 error, page not found, software company, IT solutions, technology services, error handling, website maintenance, software development, Goditect, error page"
        />
      </Helmet>
      <div className="h-screen flex justify-center items-center">
        <img src={NotfoundImg} alt="notfound.png" className="w-[300px]" />
      </div>
    </div>
  );
}

export default NotfoundPage;
