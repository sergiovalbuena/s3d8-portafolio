"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";

const CollapseCard = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-neutral-200 dark:bg-gray-700 px-4 py-12">
      <div className="mx-auto max-w-8xl lg:px-10 ">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl">
            Code projects{" "}
            <span className="text-neutral-400">usefull examples</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  position,
  index,
  title,
  description,
  Icon,
  projectLink,
  repoLink,
}) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 rounded-md transform hover:-translate-y-1 transition-transform ${
        index % 2
          ? "bg-black text-white dark:bg-gray-700 dark:border   dark:text-slate-200"
          : " bg-white dark:bg-gray-900 dark:text-white"
      }`}
    >
      {/* <Icon className="absolute right-2 top-2 text-7xl opacity-20" /> */}
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>

      <div className="flex gap-3 justify-end">
        <button
          href={projectLink}
          type="button"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View Project
        </button>
        <button
          href={repoLink}
          type="button"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          GitHub Repo
        </button>
      </div>
    </motion.div>
  );
};

export default CollapseCard;

const features = [
  {
    title: "Tic Tac Toe",
    Icon: FiUpload,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt ipsum rerum natus fugit ex minima voluptas ratione quaerat. Ea!",
  },
  {
    title: "JavaScript Quiz",
    Icon: FiArrowUp,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae sed? Maxime!",
  },
  {
    title: "Pokedux API",
    Icon: FiTarget,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab perspiciatis earum quibusdam laudantium non nihil nesciunt?",
  },
  {
    title: "Mouse Follower",
    Icon: FiLink,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem explicabo nobis officia, nostrum eligendi accusamus unde ad cumque, magnam deleniti adipisci fugiat facere. Veniam?",
  },
  {
    title: "Modern tooling",
    Icon: FiTool,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, saepe quo!",
  },
  {
    title: "Tic Tac Toe",
    Icon: FiUpload,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt ipsum rerum natus fugit ex minima voluptas ratione quaerat. Ea!",
  },
  {
    title: "JavaScript Quiz",
    Icon: FiArrowUp,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae sed? Maxime!",
  },
  {
    title: "Pokedux API",
    Icon: FiTarget,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab perspiciatis earum quibusdam laudantium non nihil nesciunt?",
  },
  {
    title: "500+ integrations",
    Icon: FiLink,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem explicabo nobis officia, nostrum eligendi accusamus unde ad cumque, magnam deleniti adipisci fugiat facere. Veniam?",
  },
  {
    title: "Modern tooling",
    Icon: FiTool,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, saepe quo!",
  },
];
