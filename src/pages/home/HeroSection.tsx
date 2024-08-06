import React from "react";
import myPicture from "../../assets/images/cropped_image.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <main
      className={`ygrid ygrid-cols-1 ygap-5 md:ygrid-cols-2 yfont-avenirLight ytext-brandCodGray yp-8 md:yp-20`}
    >
      <aside className={`yflex yflex-col ygap-2`}>
        {/* <img
          src={myPicture}
          alt="Ediomo Joshua"
          className={`yw-10 mx-auto yrounded-full`}
        /> */}
        <Avatar>
          <AvatarImage src={myPicture} />
          <AvatarFallback className={`yfont-TrapBlack`}>ED</AvatarFallback>
        </Avatar>
        <h1 className={`ytext-4xl md:ytext-5xl yfont-TrapBlack`}>
          Hello! I'm Ediomo Joshua
        </h1>
      </aside>
      <aside className={`yflex yflex-col ygap-2`}>
        <h2 className={`ytext-3xl md:ytext-4xl  yfont-TrapBlack`}>
          A Software Developer
        </h2>
        <p className={`yfont-spaceGroteskRegular`}>
          I'm a software developer with a passion for building web applications.
        </p>
        <div className={`yflex ygap-5`}>
          <Button asChild className={`yfont-spaceGroteskRegular`}>
            <Link to={`/login`}>Talk with me</Link>
          </Button>
          <Button
            variant="outline"
            className={`yborder-2 yfont-spaceGroteskRegular`}
          >
            <Link to={`/my-works`}>See my work</Link>
          </Button>
        </div>
      </aside>
    </main>
  );
};

export default HeroSection;
