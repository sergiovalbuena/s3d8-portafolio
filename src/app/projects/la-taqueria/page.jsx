import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];

const supportLinks = [
  {
    name: "UI/UX Design",
    href: "#",
    description:
      "Delve into the art of creating engaging user interfaces. Explore our process of crafting user-centric designs, balancing aesthetics with functionality.",
    icon: NewspaperIcon, // Replace with an appropriate design-related icon
  },
  {
    name: "Iterations & Feedback",
    href: "#",
    description:
      "An insight into our iterative design process. Learn how we incorporate feedback and make continuous improvements to achieve the ideal user experience.",
    icon: PhoneIcon, // Replace with an icon that represents iteration or feedback loops
  },
  {
    name: "Final Product",
    href: "#",
    description:
      "Experience the culmination of our design journey. View our final product that showcases a seamless blend of modern UI principles and user-friendly features.",
    icon: LifebuoyIcon, // Replace with an icon that represents completion or success
  },
];

export default function laTaqueria() {
  return (
    <div className="relative isolate overflow-hidden bg-white  lg:overflow-visible lg:px-0">
      {/* HEADER */}

      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <div className="relative  h-full w-full ">
            <Image
              className=""
              src="/projects/HeaderTaqueria.png"
              fill={true}
              alt=""
            />
          </div>
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            UX / UI Design
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Exploring the intersection of aesthetics and functionality, I
            specialize in crafting intuitive and visually compelling user
            experiences. My approach blends innovative design with user-centric
            principles, ensuring each project is not only visually appealing but
            also seamlessly navigable and accessible. Dive into a portfolio
            where creativity meets practicality, and every design is a step
            towards enhancing user interaction and satisfaction.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8 ">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl [background:radial-gradient(125%_125%_at_50%_10%,#016_40%,#63e_100%)]  p-5 shadow-lg ">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              {/* <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </section>
      {/* END HEADER */}

      <div className="relative overflow-hidden pt-3 lg:pt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="/projects/HeaderTaqueria.png"
            alt=""
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>

      <div className="px-6 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg> */}

          <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Crafting Experiences
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Innovative UI Design
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Discover the journey of creating a unique and intuitive user
                  interface for
                  <span className="italic font-cursive">La Taqueria</span> app,
                  where modern aesthetics meet functional design.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/projects/Taqueria_img.jpg"
              width={400}
              height={400}
              alt="La Taqueria UI Screenshot"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Learn about our approach to designing a user-centered
                  interface, focusing on usability, aesthetics, and the overall
                  user experience.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Vibrant Color Scheme.
                      </strong>{" "}
                      The use of vibrant colors to create an engaging and lively
                      user interface, reflecting the dynamic nature of the
                      brand.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Intuitive Navigation.
                      </strong>{" "}
                      Easy-to-navigate layouts ensure a seamless user journey,
                      enhancing overall engagement.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Responsive Design.
                      </strong>{" "}
                      Ensuring a consistent experience across various devices
                      and screen sizes.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Our design philosophy centers on creating an immersive
                  experience that resonates with the brand&apos;s identity and
                  values.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Beyond Aesthetics
                </h2>
                <p className="mt-6">
                  We go beyond aesthetics to ensure that every element of the UI
                  design serves a purpose and enhances usability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
