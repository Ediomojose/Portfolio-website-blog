import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import htmlStack from "../../assets/logo/Brand=html5, Style=Light.png";
import cssStack from "../../assets/logo/Brand=css, Style=Light.png";
import jsStack from "../../assets/logo/Brand=js, Style=Light.png";
import reactjsStack from "../../assets/logo/Brand=reactjs, Style=Light.png";
import typescriptStack from "../../assets/logo/Brand=typescript, Style=Light.png";
import tailwindStack from "../../assets/logo/Brand=tailwind, Style=Light.png";
import viteStack from "../../assets/logo/Brand=vitejs, Style=Light.png";
import gitStack from "../../assets/logo/Brand=git, Style=Light.png";
import githubStack from "../../assets/logo/Brand=github, Style=Light.png";
import bootstrapStack from "../../assets/logo/Brand=bootstrap5, Style=Light.png";

const techStack = [
  { name: "HTML", icon: htmlStack },
  { name: "CSS", icon: cssStack },
  { name: "JavaScript", icon: jsStack },
  { name: "React", icon: reactjsStack },
  { name: "Tailwind", icon: tailwindStack },
  { name: "Bootstrap", icon: bootstrapStack },
  { name: "TypeScript", icon: typescriptStack },
  { name: "Git", icon: gitStack },
  { name: "GitHub", icon: githubStack },
  { name: "Vite", icon: viteStack },
];

const StackBanner = () => {
  return (
    <section
      className={`ygrid ygrid-cols-1 yjustify-center yitems-center md:ygrid-cols-2 ygap-28 yp-5 ypy-20 md:yp-20 ymy-10`}
    >
      <aside className={`yflex yflex-col ygap-2`}>
        <h3 className={`ytext-2xl md:ytext-3xl  yfont-TrapBlack`}>
          Experience with a variety of projects and industries.
        </h3>
        <p className={`yfont-biotifRegular`}>
          Versatle experice across diverse projects and industries, bringing
          adaptability and valuable skills to any task.
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
      <aside className={``}>
        <section
          className={`ygrid ygrid-cols-3 yjustify-center yitems-center ygap-3 ydivide-x-2 ydivide-y-2`}
        >
          {techStack.map((stack, index) => (
            <img src={stack.icon} alt={`${stack.name} icon`} key={index} />
          ))}
        </section>
      </aside>
    </section>
  );
};

export default StackBanner;
