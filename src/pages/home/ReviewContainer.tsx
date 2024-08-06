import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialData = [
  {
    id: 1,
    name: "Alice Johnson",
    testimony:
      "This service has completely exceeded my expectations. The team is incredibly professional and the results are outstanding.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "Project Manager",
  },
  {
    id: 2,
    name: "Michael Smith",
    testimony:
      "I am thoroughly impressed with the quality and dedication shown by the team. They delivered on time and went above and beyond.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "Software Engineer",
  },
  {
    id: 3,
    name: "Emily Davis",
    testimony:
      "An exceptional experience from start to finish. The attention to detail and customer service is top-notch.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "Product Designer",
  },
  {
    id: 4,
    name: "James Brown",
    testimony:
      "I highly recommend this service to anyone looking for quality and professionalism. The team is fantastic to work with.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    role: "Marketing Specialist",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    testimony:
      "Outstanding service! The team really understands the client's needs and delivers exceptional results.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    role: "Business Analyst",
  },
];

const ReviewContainer = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className={`yflex yflex-col yitems-center yjustify-center ybg-brandConcrete  ypy-20 md:yp-10 lg:yp-48 ymy-10`}>
      <Carousel
        className="yw-full lg:yw-1/2 ymax-w-md lg:ymax-w-lg yflex yflex-col "
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className={``}>
          {TestimonialData.map((data, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className={`ypy-10 ybg-brandStack`}>
                  <CardContent className="yflex yflex-col  yjustify-center ygap-5 yp-6  ">
                    <p className={``}>{data.testimony}</p>
                    <div className={`yflex`}>
                      <img src={data.image} alt={data.name} className={`yw-10 yrounded-xl`}/>
                      <div className={`yflex yflex-col`}>
                        <p className="">{data.name}</p>
                        <p className="">{data.role}</p>
                      </div>
                    </div>
                    {/* <span className="text-4xl font-semibold">{data.id}</span>
                  <span className="text-4xl font-semibold">{data.name}</span>
                  <span className="text-4xl font-semibold"></span> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`yhidden lg:yflex`} />
        <CarouselNext className={`yhidden lg:yflex`} />
      </Carousel>
    </section>
  );
};

export default ReviewContainer;
