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
    <section className="overflow-hidden px-4 py-12">
      <div className="mx-auto max-w-8xl lg:px-10 ">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl text-slate-800 dark:text-white">
            Code projects{" "}
            <span className="text-indigo-500">,usefull examples</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-slate-900 p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-slate-900 p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4 py-12">
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
          ? "bg-slate-900 text-white dark:bg-gray-700   dark:text-slate-100"
          : " bg-white dark:bg-slate-900 dark:text-white"
      }`}
    >
      {/* <Icon className="absolute right-2 top-2 text-7xl opacity-20" /> */}
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>

      <div className="flex gap-3 justify-end mt-6">
        <a
          href={projectLink}
          target="_blank"
          type="button"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset  hover:bg-gradient-to-br from-green-600 to-indigo-600 hover:text-white"
        >
          View Project
        </a>
        <a
          href={repoLink}
          target="_blank"
          type="button"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset hover:bg-gradient-to-br from-black to-indigo-600 hover:text-white"
        >
          GitHub Repo
        </a>
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
      "Traditional game of Tic Tac Toe, made with React and TailwindCSS",
    projectLink: "https://tiktaktok-react.vercel.app/",
    repoLink: "https://github.com/sergiovalbuena/tiktaktok-react",
  },
  {
    title: "JavaScript Quiz",
    Icon: FiArrowUp,
    description:
      "A quiz about JavaScript, made with React, TailwindCSS and Zustand",
    projectLink: "https://zustand-js-quiz.vercel.app/",
    repoLink: "https://github.com/sergiovalbuena/zustand_jsQuiz",
  },
  {
    title: "Pokedux API",
    Icon: FiTarget,
    description:
      "Fetch data from the PokeAPI and display it in a React app using Redux",
    projectLink: "https://pokedux-orcin.vercel.app",
    repoLink: "https://github.com/sergiovalbuena/Pokedux",
  },
  {
    title: "Mouse Follower",
    Icon: FiLink,
    description:
      "A simple app that follows the mouse, made with React and TailwindCSS",
    projectLink: "https://mouse-follower-mocha.vercel.app/",
    repoLink: "https://github.com/sergiovalbuena/mouse-follower",
  },
  {
    title: "AI Translator",
    Icon: FiTool,
    description: "A simple app that translates text using the ChatGPT API",
    projectLink: "https://traductor-ai.vercel.app/",
    repoLink: "https://github.com/sergiovalbuena/traductor_AI",
  },
  {
    title: "Acid AI Chat",
    Icon: FiUpload,
    description:
      "A simple chat app that uses the ChatGPT API to generate kind of acid responses",
    projectLink: "https://acid-answer-ai.vercel.app/",
    repoLink: "https://github.com/sergiovalbuena/acid-answer-ai",
  },
];
