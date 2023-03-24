import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";

const projects = [
  {
    id: 1,
    title: "Real-time Chat Forum App",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["NextJS", "Typescript", "PocketBase", "Tailwind"],
  },
  {
    id: 2,
    title: "Alba Tech Company Profile",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["ReactJS", "Typescript", "Ant Design", "Tailwind", "Zustand"],
  },
  {
    // to access it can bypass OTP by input 111111
    id: 3,
    title: "Scissor Hand Barbershop App",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "NodeJS",
      "Express",
      "Twilio",
      "ReactJS",
      "MaterialUI",
      "Styled Component",
      "Redux",
      "pino-colada (logger)",
    ],
  },
  {
    id: 4,
    title: "Spring Boot CRUD App",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "Spring Boot 3",
      "Maven",
      "Java",
      "Lombok",
      "Spring Data JPA",
      "PostgreSQL",
    ],
  },
  {
    id: 5,
    title: "Machine Data Management & Visualization App",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "NodeJS",
      "Express",
      "Vanilla HTML + CSS",
      "Javascript",
      "ChartJS",
      "ejs (NodeJS SSR)",
      "PostgreSQL",
      "JWT",
      "Webpack",
    ],
  },
  {
    id: 6,
    title: "Project Management & Report App",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "NodeJS",
      "Express",
      "Vanilla HTML + CSS",
      "Javascript",
      "ChartJS",
      "ejs (NodeJS SSR)",
      "PostgreSQL",
      "JWT",
      "Webpack",
      "JSpdf",
      "Sequelize",
    ],
  },
  {
    id: 7,
    title: "(Thesis Project) Hiker Summit Server",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "NodeJS",
      "Express",
      "AWS S3",
      "Javascript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
    ],
  },
  {
    id: 8,
    title: "(Thesis Project) Hiker Summit Dashboard Admin",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["ReactJS", "Typescript", "MaterialUI", "Redux", "SCSS"],
  },
  {
    id: 9,
    title: "Spring Boot CRUD App with Redis",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["Spring Boot 3", "Java", "Redis"],
  },
  {
    id: 10,
    title: "NodeJS CRUD App with Redis Cache Strategy",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "NodeJS",
      "Express",
      "Javascript",
      "MongoDB",
      "Mongoose",
      "Redis",
      "JWT",
    ],
  },
  {
    id: 11,
    title: "NodeJS CRUD App with Redis Cache Strategy",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "NodeJS",
      "Express",
      "Javascript",
      "MongoDB",
      "Mongoose",
      "Redis",
      "JWT",
    ],
  },
  {
    id: 12,
    title: "Backend Service Chat App Message Carbon System",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "NodeJS",
      "NestJS",
      "Express",
      "Typescript",
      "MongoDB",
      "Mongoose",
      "MariaDB",
      "TypeORM",
      "RabbitMQ",
      "MQTT",
    ],
  },
  {
    id: 13,
    title: "Spring Boot App CRUD (Clean Architecture)",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: [
      "Spring Boot 3",
      "Maven",
      "Java",
      "Spring Security",
      "Lombok",
      "Spring Data JPA",
      "PostgreSQL",
      "JWT",
    ],
  },
  {
    id: 14,
    title: "Simple Backend PDF Generator",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["Deno", "Oak", "Typescript", "Pupeteer"],
  },
  {
    id: 15,
    title: "Forkify Food App",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["HTML", "CSS", "Javascript", "Parcel"],
  },
  {
    id: 16,
    title: "Bankist App",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 17,
    title: "Basic CRUD NestJS Prisma",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["NodeJS", "NestJS", "Express", "Typescript", "Prisma"],
  },
  {
    id: 18,
    title: "Basic Legacy Personal Profile",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 19,
    title: "Personal Leetcode Repo",
    header_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni voluptatem debitis velit consequatur, quod sapiente nobis ut fugiat impedit repudiandae natus earum nostrum aliquid cupiditate aspernatur libero? Amet, dolor!",
    main_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore ratione id maiores, deleniti nemo, voluptatum et laborum iste libero obcaecati tenetur voluptatem ex repudiandae quae iure quam perferendis temporibus! Optio dignissimos a non placeat provident tempore velit, eos asperiores reprehenderit aspernatur sed magni quo deserunt voluptas excepturi laborum eius quibusdam repellendus dolore earum dolor similique totam mollitia. Recusandae, facere.",
    tech_stack: ["Python"],
  },
];

interface projectDataType {
  id: number;
  title: string;
  header_desc: string;
  main_desc: string;
  tech_stack: string[];
}

const ProjectCard = (props: projectDataType) => {
  return (
    <Link href={`/project/${props.id}`}>
      <div className="w-full bg-[#f9fafb] dark:bg-[#191c1d] p-5 rounded-md flex flex-col gap-7 hover:bg-[#f3f4f6] dark:hover:bg-[#202425] hover:cursor-pointer">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-2xl">{props.title}</h2>
          <div>
            <p className="text-[#687076] tracking-normal">
              {props.header_desc}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          {props.tech_stack.map((e, i) => (
            <div
              key={i}
              className="p-[1px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            >
              <div className="rounded-md bg-white dark:bg-[#111313] font-normal text-sm p-2">
                <p className="font-medium font tracking-wide">{e}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default function Project() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-3xl">Projects</h1>
        {!router.pathname.includes("projects") && (
          <Link
            href="/projects"
            className="inline-block font-bold underline transition ease-in-out delay-100 hover:text-yellow-400 duration-150"
          >
            View All
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {router.pathname.includes("projects")
          ? projects.map((e, i) => <ProjectCard {...e} key={i} />)
          : projects.slice(0, 4).map((e, i) => <ProjectCard {...e} key={i} />)}
      </div>
    </>
  );
}
