import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import item1 from "./assets/item1.png";
const Example = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        {/* <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span> */}
      </div>
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <>
    {/* <h1>
      Our Top Products 
    </h1> */}
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] overflow-hidden bg-neutral-200"
    >
      <div
      
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      >

      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {/* {card.title} */}
        </p>
      </div>
    </div>
    </>
  );
};

export default Example;

const cards = [
  {
    url: item1,
    title: "Title 1",
    id: 1,
  },
  {
    url: item1,
    title: "Title 2",
    id: 2,
  },
  {
    url: item1,
    title: "Title 3",
    id: 3,
  },
  {
    url: item1,
    title: "Title 4",
    id: 4,
  },
  {
    url: item1,
    title: "Title 5",
    id: 5,
  },
  {
    url: item1,
    title: "Title 6",
    id: 6,
  },
  {
    url: item1,
    title: "Title 7",
    id: 7,
  },
];