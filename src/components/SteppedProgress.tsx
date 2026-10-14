"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type InputValues = {
  [key: string]: string;
};

const SteppedProgress = () => {
  const [stepsComplete, setStepsComplete] = useState(0);
  const [inputValues, setInputValues] = useState<InputValues>({
    step1Field1: "",
    step1Field2: "",
    step1Field3: "",
    step2Field1: "",
    step2Field2: "",
    step2Field3: "",
    step3Field1: "",
    step3Field2: "",
    step3Field3: "",
    step4Field1: "",
    step4Field2: "",
    step4Field3: "",
  });
  const router = useRouter();
  const steps = [
    { title: "Step 1", description: "Description for step 1" },
    { title: "Step 2", description: "Description for step 2" },
    { title: "Step 3", description: "Description for step 3" },
    { title: "Step 4", description: "Description for step 4" },
  ];

  const handleSetStep = (num: -1 | 1) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === steps.length - 1 && num === 1)
    ) {
      return;
    }

    setStepsComplete((pv) => pv + num);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(inputValues);
    router.push("/");
  };

  return (
    <div className="px-4 py-14 bg-white">
      <div className="p-8 bg-white shadow-lg rounded-md w-full max-w-2xl mx-auto">
        <Steps steps={steps} stepsComplete={stepsComplete} />
        <StepContent
          title={steps[stepsComplete]?.title}
          description={steps[stepsComplete]?.description}
          stepNum={stepsComplete}
          inputValues={inputValues}
          handleInputChange={handleInputChange}
        />
        <div className="flex items-center justify-end gap-2">
          <button
            className="px-4 py-1 rounded hover:bg-gray-100 text-black"
            onClick={() => handleSetStep(-1)}
          >
            Prev
          </button>
          {stepsComplete === steps.length - 1 ? (
            <button
              className="px-4 py-1 rounded bg-black text-white"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          ) : (
            <button
              className="px-4 py-1 rounded bg-black text-white"
              onClick={() => handleSetStep(1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Steps = ({
  steps,
  stepsComplete,
}: {
  steps: { title: string; description: string }[];
  stepsComplete: number;
}) => {
  return (
    <div className="flex items-center justify-between gap-3">
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== steps.length && (
              <div className="w-full h-1 rounded-full bg-gray-200 relative">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-indigo-600 rounded-full"
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Step = ({ num, isActive }: { num: number; isActive: boolean }) => {
  return (
    <div className="relative">
      <div
        className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration:300 ${
          isActive
            ? "border-indigo-600 bg-indigo-600 text-white"
            : "border-gray-300 text-gray-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg
              key="icon-marker-check"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span
              key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute z-0 -inset-1.5 bg-indigo-100 rounded-full animate-pulse" />
      )}
    </div>
  );
};

const StepContent = ({
  title,
  description,
  stepNum,
  inputValues,
  handleInputChange,
}: {
  title: string;
  description: string;
  stepNum: number;
  inputValues: InputValues;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="p-2 my-6 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Field 1
          </label>
          <input
            type="text"
            name={`step${stepNum + 1}Field1`}
            value={inputValues[`step${stepNum + 1}Field1`]}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Field 2
          </label>
          <input
            type="text"
            name={`step${stepNum + 1}Field2`}
            value={inputValues[`step${stepNum + 1}Field2`]}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Field 3
          </label>
          <input
            type="text"
            name={`step${stepNum + 1}Field3`}
            value={inputValues[`step${stepNum + 1}Field3`]}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default SteppedProgress;
