import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import WorkExp from "@/data/WorkExpData";
import RecentBlogData from "@/data/RecentBlogData";
import { Link } from 'react-router-dom';

const GridContainer = () => {
  return (
    <section
      className={`ybg-brandConcrete yp-5 ypy-20 md:yp-20 ymy-10 ygrid ygrid-cols-1 md:ygrid-cols-2 ygap-10 `}
    >
      <aside className={``}>
        <h2 className={`ytext-3xl md:ytext-4xl  yfont-TrapBlack`}>About Me</h2>
        <ScrollArea className="yh-[450px] yw-full yrounded-md yp-4 yfont-biotifRegular ytext-base ytext-justify">
          <p className={`ypb-10`}>
            {` Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.`}
          </p>

          <p className={`ypb-10`}>
            {` Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.`}
          </p>

          <p className={`ypb-10`}>
            {` Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.`}
          </p>

          <p className={`ypb-10`}>
            {` Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.`}
          </p>
        </ScrollArea>
      </aside>
      <aside className={`ygrid ygrid-cols-1 ygap-3`}>
        <article className={``}>
          <h2 className={`ytext-xl md:ytext-2xl  yfont-TrapBlack`}>
            Work Experience
          </h2>
          <article className="yp-4 yflex yflex-col yjustify-center ygap-5 ydivide-y">
            {WorkExp.map((data) => (
              <section
                className={`yflex yflex-row yitems-center ygap-3 ypt-3 `}
              >
                <div className={`ybg-white yp-2 yrounded`}>
                  <img src={data.icon} alt="company-svg-icon" />
                </div>
                <div className="">
                  <h3 className={`yfont-biotifRegular ytext-sm md:ytext-base yinline-flex ygap-2`}>
                    {data.role}{" "}
                    <span className={`yfont-biotifBold`}>
                      {data.companyName}
                    </span>
                  </h3>
                  <p className={`ytext-xs md:ytext-sm yfont-biotifRegular`}>
                    {data.startDate} - {data.endDate}
                  </p>
                </div>
              </section>
            ))}
          </article>
        </article>

        <article className={``}>
          <h2 className={`ytext-xl md:ytext-2xl  yfont-TrapBlack`}>Recent Blog Articles</h2>
          <article className="yp-4 yflex yflex-col yjustify-center ygap-5 ydivide-y">
            {RecentBlogData.map((data) => (
              <section
                className={`yflex yflex-row yitems-center ygap-3 ypt-3 `}
              >
                <div className={`ybg-white yp-2 yrounded`}>
                  <img src={data.icon} alt="company-svg-icon" />
                </div>
                <div className="">
                  <h3 className={`yfont-biotifRegular ytext-base`}>
                    {data.blogTopic}{" "}
                  </h3>
                  <p className={`ytext-sm yfont-biotifRegular`}>
                    {data.publishDate}
                  </p>
                </div>
                <Link to={`/login`}><img src={data.linkIcon} className={`ypl-10`} alt="company-svg-icon" /></Link>
              </section>
            ))}
          </article>
        </article>
      </aside>
    </section>
  );
};

export default GridContainer;
