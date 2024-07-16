import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  ctt,
  estc,
  ais,
  api,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  greenroof,
  platform,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Computer Vision Beginner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern: Computer Technician",
    company_name: "ChangTech Technologies",
    icon: ctt,
    iconBg: "#FFFFFF",
    date: "July 2023 - Aug 2023",
    points: [
      "Installing and configuring operating systems, software applications, and drivers.",
      "Investigating and troubleshooting network connectivity problems.",
      "Installing and configuring computer hardware components such as CPUs, RAM, hard drives, and peripherals.",
      "Providing technical support and assistance to users concerning computer hardware and software issues.",
    ],
  },
  {
    title: "Intern: AI/Software Programmer",
    company_name: "Estc",
    icon: estc,
    iconBg: "#E6DEDD",
    date: "July 2024 - Aug 2024",
    points: [
      "Developing a real-time face detection stystem for attendance.",
      "Develop the user-facing components of websites or web applications using HTML, CSS, and JavaScript.",
      "Implement responsive designs and ensure cross-browser compatibility.",
      "Integrate AI models and algorithms into existing software systems.",
    ],
  },
];

const education = [
  {
    title: "High School",
    company_name: "Achievers International School",
    icon: ais,
    iconBg: "#FFFFFF",
    date: "Oct 2020 - July 2024",
    points: [],
  },
  {
    title: "High School",
    company_name: "Australia Pacific International School",
    icon: api,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - July 2024",
    points: [],
  },
];

const certification = [
  {
    title: "Intern: Computer Technician",
    company_name: "ChangTech Technologies",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "July 2023 - Aug 2023",
    points: [
      "Installing and configuring operating systems, software applications, and drivers.",
      "Investigating and troubleshooting network connectivity problems.",
      "Installing and configuring computer hardware components such as CPUs, RAM, hard drives, and peripherals.",
      "Providing technical support and assistance to users concerning computer hardware and software issues.",
    ],
  },
  {
    title: "Intern: AI/Software Programmer",
    company_name: "Estc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Aug 2024",
    points: [
      "Developing a real-time face detection stystem for attendance.",
      "Develop the user-facing components of websites or web applications using HTML, CSS, and JavaScript.",
      "Implement responsive designs and ensure cross-browser compatibility.",
      "Integrate AI models and algorithms into existing software systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cost-effective green roof",
    description:
      "Project that increases the availiablity of green roof by reducing the cost and required materials to manufacture them.",
    tags: [
      {
        name: "reducing waste",
        color: "blue-text-gradient",
      },
      {
        name: "environmentally friendly",
        color: "green-text-gradient",
      },
    ],
    image: greenroof,
    source_code_link: "https://github.com/",
  },
  {
    name: "Organic platform gardening",
    description:
      "Project that allows for gardening on permanent and semi-permanent flooded areas.",
    tags: [
      {
        name: "reducing waste",
        color: "blue-text-gradient",
      },
      {
        name: "environmentally friendly",
        color: "green-text-gradient",
      },
      {
        name: "community project",
        color: "pink-text-gradient",
      },
    ],
    image: platform,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Tic Tac Toe",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects, education, certification };