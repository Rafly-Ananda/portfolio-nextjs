import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Contact from "./components/Contact";
import Project from "./components/project";

const inter = Inter({ subsets: ["latin"] });

const techStackFe: string[] = [
  "HTML",
  "CSS",
  "SCSS",
  "ReactJS",
  "Angular",
  "Typescript",
  "Javascript",
  "MaterialUI",
  "Ant Design",
  "Styled Component",
  "Tailwind",
  "Zustand",
  "Redux",
  "ChartJS",
  "Webpack",
  "Parcel",
  "JSpdf",
];

const techStackBe: string[] = [
  "Javascript",
  "Typescript",
  "Java",
  "Python",
  "NodeJS",
  "Spring Boot",
  "NestJS",
  "NextJS",
  "Express",
  "Pocketbase",
  "MariaDB",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Sequelize",
  "Mongoose",
  "Prisma",
  "TypeORM",
  "Spring Data JPA",
  "RabbitMQ",
  "MQTT",
  "AWS S3",
  "Swagger API",
  "JSON Web Token",
  "Twilio",
  "JWT",
  "Nodemailer",
  "Pupeteer",
  "pino-colada (Logger)",
  "EJS (NodeJS SSR)",
];

const workExperiences = [
  {
    company: "PT. Hello Kreasi Indonesia",
    title: "Junior Fullstack Web Developer",
    type: "Contract",
    period: ["Jun 2022", "Dec 2022"],
    jobdesk: [
      "Developed REST APIs using NodeJS with FeathersJS & NestJS framework",
      "Able using ORM like Sequelize & Typeorm",
      "Able using MQTT & RabbitMQ services",
      "Working with 3 backend services which uses MariaDB and AWS S3",
      "Successfully built 50+ NodeJS APIs/Endpoint that integrate to Frontend",
      "Built features on top of existing dashboard admin to accommodate main productivity social media app functionality, using Angular, Material UI, and Tailwind",
    ],
  },
  {
    company: "PT. Medion Farma Jaya",
    title: "Fullstack Web Developer",
    type: "Internship",
    period: ["Oct 2021", "Feb 2022"],
    jobdesk: [
      "Developed a web based maintenance system for manufacturing machine operator",
      "Data visualization of manufacturing machine performance using ChartJS",
      "Convert manufacturing machine data to a web based system",
      "Developed a web based report template system for different company divisions",
      "Collaborate with 2 interns to brainstorm and developed a coding solution for a web based product and equipment offering",
    ],
  },
  {
    company: "PT. Kenalsapa Indonesia",
    title: "IT Support & Community Development",
    type: "Internship",
    period: ["Feb 2021", "Aug 2022"],
    jobdesk: [
      "Engaging in social activities promoting impactful SMEs projects",
      "Participate in a creation of a video based online business course content",
      "Create a monthly seminar to educate local business SMEs owner ",
      "Collaborate and assist with other interns on creating a company profile website using native Javascript, HTML, CSS/Bootsrap",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full text-black dark:text-white scroll-mt-20" id="top">
        {/* -------------Heading--------------- */}
        <section className="w-[1278px] max-w-full my-0 mx-auto grid grid-cols-3 gap-4 p-6">
          <div className="col-span-3 lg:col-span-2">
            <h1 className="font-semibold text-4xl">
              Holla 👋🏼, I'm Rafly Ananda
            </h1>
            <p className="mt-2 font-normal text-base tracking-wide leading-relaxed">
              I'm a
              <span className="bg-yellow-400 p-1 m-1 text-black rounded-sm">
                Fullstack web developer
              </span>
              . I absolutely love what I do. Whether I'm writing code,designing
              interfaces, or troubleshooting bugs. I'm a pretty laid-back guy,
              so if you ever want to grab a coffee and chat about the latest
              trends in web development, hit me up!
            </p>
          </div>
          <aside className="col-span-1 hidden lg:block"></aside>
        </section>
        {/* -------------Projects--------------- */}
        <section
          className="scroll-mt-24 w-[1278px] max-w-full my-0 mx-auto grid grid-cols-3 gap-4 p-6"
          id="projects"
        >
          <div className="col-span-3 lg:col-span-2">
            <Project />
          </div>
          <aside className="col-span-1 hidden lg:block"></aside>
        </section>
        {/* -------------Experience--------------- */}
        <section
          className="scroll-mt-24 w-[1278px] max-w-full my-0 mx-auto grid grid-cols-3 gap-4 p-6"
          id="experience"
        >
          <div className="col-span-3 lg:col-span-2">
            <h1 className="font-semibold text-3xl">Experience</h1>
            <div className="w-full bg-[#f9fafb] dark:bg-[#191c1d] p-5 rounded-md flex flex-col gap-7 mt-5">
              {/* Tech i've worked with */}
              <div className="w-full h-full">
                <div className="flex items-center justify-start">
                  <h2 className="font-medium text-2xl">
                    <span className="underline">Tech I've worked with</span> 💻
                  </h2>
                </div>
                <div className="flex flex-row gap-4 flex-wrap mt-5">
                  <div className="flex flex-col flex-wrap gap-4">
                    <h3 className="font-medium text-lg">
                      Frontend Technologies
                    </h3>
                    <div className="w-full flex flex-row flex-wrap gap-4">
                      {techStackFe.map((e, i) => (
                        <div
                          key={i}
                          className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                        >
                          <div className="rounded-md bg-white dark:bg-[#111313] font-normal text-sm p-2">
                            <p className="font-medium font tracking-wide">
                              {e}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col flex-wrap gap-4">
                    <h3 className="font-medium text-lg">
                      Backend Technologies
                    </h3>
                    <div className="w-full flex flex-row flex-wrap gap-4">
                      {techStackBe.map((e, i) => (
                        <div
                          key={i}
                          className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                        >
                          <div className="rounded-md bg-white dark:bg-[#111313] font-normal text-sm p-2">
                            <p className="font-medium font tracking-wide">
                              {e}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Where i've worked */}
              <div className="w-full h-full">
                <div className="flex items-center justify-start">
                  <h2 className="font-medium text-2xl underline">
                    <span className="underline">Where I've worked</span> 🧑🏼‍💻
                  </h2>
                </div>
                <div className="flex flex-row gap-4 flex-wrap">
                  <div className="flex flex-col flex-wrap gap-6 mt-5">
                    {workExperiences.map((e, i) => (
                      <div
                        className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                        key={i}
                      >
                        <div className="flex flex-col gap-2 w-full h-full bg-[#f3f4f6] dark:bg-[#111313] rounded-md p-2">
                          <div>
                            <h4 className="font-medium">
                              {e.title}
                              <span className="text-yellow-400">@</span>
                              {e.company}
                            </h4>
                            <h6 className="text-sm">
                              {e.type} - {e.period[0]} - {e.period[1]}
                            </h6>
                          </div>
                          <div>
                            <ul>
                              {e.jobdesk.map((e, i) => (
                                <li
                                  key={i}
                                  className="flex items-center justify-start gap-2"
                                >
                                  <span className="text-sm text-[#687076] tracking-normal">
                                    🌕
                                  </span>
                                  {e}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="w-fit p-1 rounded-md bg-gradient-to-r  hover:from-red-400 hover:to-blue-500">
                      <button className="p-2 px-5 bg-yellow-400 rounded-md text-black underline">
                        Grab my CV here !
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="col-span-1 hidden lg:block"></aside>
        </section>
        {/* -------------Contact Me--------------- */}
        <Contact />
      </main>
    </>
  );
}
