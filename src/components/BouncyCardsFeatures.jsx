"use client";

import { motion } from "framer-motion";

const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto  px-4 py-12 ">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          I&apos;ve worked on
          <span className="text-slate-400"> these projects</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 grid grid-cols-12 gap-4 ">
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>La Taqueria</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-indigo-50">
                FEATURE DEMO HERE
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Kitchen Flow</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-orange-50">
                FEATURE DEMO HERE
              </span>
            </div>
          </BounceCard>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Des n Dev</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-emerald-50">
                FEATURE DEMO HERE
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>And finally this</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-red-50">
                FEATURE DEMO HERE
              </span>
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

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-600 dark:text-slate-200 dark:hover:text-white p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <div className="flex justify-between">
      <h3 className=" text-3xl font-semibold">{children}</h3>
      <div> Logos </div>
    </div>
  );
};

export default BouncyCardsFeatures;
