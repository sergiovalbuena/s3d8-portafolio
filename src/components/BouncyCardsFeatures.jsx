"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto  px-4 py-12 ">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          I&apos;ve worked on
          <span className="text-indigo-500"> these projects</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 grid grid-cols-12 gap-4 ">
          <BounceCard
            className="col-span-12 md:col-span-4"
            href="/projects/la-taqueria"
          >
            <CardTitle>La Taqueria</CardTitle>
            <div className=" absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl  p-3  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="relative w-full h-0 pb-[120%]">
                <Image src="/projects/HeaderTaqueria.png" fill alt="" />
              </div>
            </div>
          </BounceCard>

          <BounceCard
            className="col-span-12 md:col-span-8"
            href="/projects/kitchen-flow"
          >
            <CardTitle>Kitchen Flow</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="relative w-full h-0 pb-[50%]">
                <Image
                  src="/projects/KitchenFlow_Header.png"
                  // Make the image display full width
                  fill
                  alt=""
                />
              </div>
            </div>
          </BounceCard>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard
            className="col-span-12 md:col-span-8"
            href="/projects/kitchen-flow"
          >
            <CardTitle>User Dashboard</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl   [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]  p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="relative w-full h-0 pb-[50%]">
                <Image
                  src="/projects/KF-Dashboard.png"
                  // Make the image display full width
                  fill
                  alt=""
                />
              </div>
            </div>
          </BounceCard>
          <BounceCard
            className="col-span-12 md:col-span-4"
            href="/projects/zombie-game"
          >
            <CardTitle>Game Dev</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] p-4  group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="relative w-full h-0 pb-[50%]">
                <Image
                  src="/projects/ZombieGame.png"
                  // Make the image display full width
                  fill
                  alt=""
                />
              </div>
            </div>
          </BounceCard>
        </div>
        {/* <motion.div
          className="grid grid-cols-1 gap-4 mb-10"
          whileHover={{ scale: 0.95, rotate: "-1deg" }}
        >
          <div className=" bottom-0 left-4 right-4 top-32 translate-y-8 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              SOME MORE PROJECTS
            </span>
          </div>
        </motion.div> */}

        {/* <div className="">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
          >
            Learn more
          </motion.button>
        </div> */}
      </div>
    </section>
  );
};

const BounceCard = ({ className, children, href }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-600 dark:text-slate-200 dark:hover:text-white p-8 ${className}`}
    >
      <Link href={href}>{children}</Link>
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <div className="flex justify-between">
      <h3 className=" text-3xl font-semibold">{children}</h3>
      <DrawOutlineButton>See more </DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-slate-500 dark:text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default BouncyCardsFeatures;
