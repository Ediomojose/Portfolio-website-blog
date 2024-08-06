import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";
import htmlStack from "../../assets/logo/Brand=html5, Style=Light.png";
import cssStack from "../../assets/logo/Brand=css, Style=Light.png";
import jsStack from "../../assets/logo/Brand=js, Style=Light.png";
import reactjsStack from "../../assets/logo/Brand=reactjs, Style=Light.png";
import typescriptStack from "../../assets/logo/Brand=typescript, Style=Light.png";
import tailwindStack from "../../assets/logo/Brand=tailwind, Style=Light.png";
import viteStack from "../../assets/logo/Brand=vitejs, Style=Light.png";

const projectDetails = [
  {
    projectName: "Climax Green Agriculture",
    industryType: "AgricTech",
    projectDescription:
      "Agricultural project that aims to promote sustainable farming practices and reduce the environmental",
    projectImg: "",
    liveLink: "https://www.climaxgreen.com",
    githubLink: "https://github.com",
    techStackIcon: {
      html: htmlStack,
      css: cssStack,
      js: jsStack,
      reactjs: reactjsStack,
      typescript: typescriptStack,
      tailwind: tailwindStack,
      vite: viteStack,
    },
  },
];

const PortfolioContainer = () => {
  return (
    <main className={``}>
      <h3 className={`ytext-2xl md:ytext-3xl  yfont-TrapBlack`}>
        Selected Works.
      </h3>
      <section className={``}>
        {...projectDetails.map((data) => (
          <>
            <img src="" alt={data.projectName + " " + data.industryType} />
            <div className={``}>
              <h1 className={``}>{data.projectName}</h1>
              <p className="">{data.industryType}</p>
              <p className={`ytext-sm md:ytext-base`}>
                {data.projectDescription}
              </p>
              <aside
                className={`ygrid ygrid-cols-2 yitems-center yjustify-center`}
              >
                <div className={`yflex ygap-2`}>
                  <Button
                    asChild
                    className={`yfont-spaceGroteskRegular yrounded-full yh-8 yw-8`}
                  >
                    <Link to={data.liveLink}></Link>
                  </Button>
                  <Button
                    asChild
                    className={`yfont-spaceGroteskRegular yrounded-full yh-8 yw-8`}
                  >
                    <Link to={data.githubLink}></Link>
                  </Button>
                </div>
                <ul className={`yflex ygap-4 `}>
                    {Object.keys(data.techStackIcon).map((stack)=>(
                    <li className="">
                        <img
                            src={data.techStackIcon}
                            alt={ ` logo`}
                            className={`yrounded yh-10 yw-10 yring-1`}
                          />
                    </li>
                    ))}
                </ul>
              </aside>
            </div>
          </>
        ))}
      </section>
    </main>
  );
};

export default PortfolioContainer;
