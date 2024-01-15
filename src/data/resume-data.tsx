import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Wongani Tembo",
  initials: "WT",
  location: "Area 18B, Lilongwe, Malawi",
  locationLink: "https://maps.app.goo.gl/pQxdDG6ezrbRENbF6",
  about:
    "Full Stack Software + Electronics and Telecommunications Engineer focused on building products with extra attention to detail and ingenuity",
  summary:
    "As an Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with Django, Python, TypeScript, React, Node.js, and GraphQL. ",
  avatarUrl: "",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "wonganitembo02@gmail.com",
    tel: "+265886041193",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/wongani02",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/wongani-tembo-4886ab219",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/WonganiTembo",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Malawi University of Business and Applied Sciences",
      degree: "Bachelors Degree in Electronics and Telecommunications Engineering (Pending)",
      start: "2019",
      end: "2024",
    },
    {
      school: "Marist Secondary School",
      degree: "Malawi School Certificate of Education (MSCE) - 11 points",
      start: "2016",
      end: "2018",
    },
    {
      school: "St John's Catholic Secondary School",
      degree: "Junior Certificate of Education (JCE)",
      start: "2014",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Electricity Supply Cooperation of Malawi (ESCOM)",
      link: "https://www.escom.mw/",
      badges: ["Internship"],
      title: "Engineer → Control Engineer",
      logo: ParabolLogo,
      start: "July 2023",
      end: "October 2023",
      description:
        "Responsible for controlling the southern region distribution grid, writing system reports, coordinating with field engineers carrying out operations on the distribution grid and performing reports.",
      achivements: "Developed a report generating system to easy the process of writing system reports. Technologies used: Django, Django Restframework, Next.js",
    },
    {
      company: "JPI Systems and Tech",
      link: "https://jpisystems.com",
      badges: ["Remote"],
      title: "Software Engineer → Full Stack Engineer",
      logo: ClevertechLogo,
      start: "October 2021",
      end: "Present",
      description:
        "Created mobile apps, websites and webapps, Company systems and microcontroller programming. Technologies: Flutter, Django, HTML, CSS, Javascript, React, TypeScript, C++",
      achivements: "Won an award at the Malawi Innovators Design Competiton 2022, for an innovative project called Change E-save (more info at request).",
    },
    {
      company: "Imperial Technologies",
      link: "",
      badges: ["Internship"],
      title: "Engineer → Telecommunications Intern",
      logo: JojoMobileLogo,
      start: "December 2020",
      end: "January 2021",
      description:
        "Installed and configured IP Telephones, and Private Automatic Branch Exchange (PABX) systems.",
      achivements: "",
    },
    {
      company: "Malawi e-books",
      link: "https://www.malawiebooks.com",
      badges: ["Startup", "Non-profit"],
      title: "Full stack Developer",
      logo: NSNLogo,
      start: "January 2022",
      end: "Present",
      description: "Platform maintenance and future updates, Content management, Marketing the platform",
      achivements: "",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "Node.js",
    "Python",
    "Django",
    "Django Restframework",
    "Fast API",
    "C++",
    "Cisco Packet Tracer",
    "Matlab",
    "Circuit Design with Multism",
    "Auto CAD",
    "Linux server configurations",
    "AWS",
    "Docker",
  ],
  projects: [
    {
      title: "Afrihuts",
      techStack: [
        "Startup Project",
        "Django",
        "Django Restframwork",
        "HTMX",
        "HTML",
        "CSS",
        "Javascript",
      ],
      description: "A real estate platfoem for home owners and agents to market their properties",
      logo: ConsultlyLogo,
      link: {
        label: "afrihuts.com",
        href: "https://afrihuts.com/",
      },
    },
    {
      title: "Kwenda",
      techStack: ["Client Project", "Django", "Django Restframework", "JPI Systems and Tech"],
      description:
        "Travel website with serveral services available for booking, such as hotels, lodges, buses, trains, events, restaurant reservations and many more",
      logo: MonitoLogo,
      link: {
        label: "kwenda.co",
        href: "https://kwenda.co/",
      },
    },
    {
      title: "Gafira Loans Website",
      techStack: ["Client Project", "Django", "AJAX", "Javascript", "HTML", "CSS"],
      description:
        "Online loan application and management platform for Gafira Loans Group",
      logo: JarockiMeLogo,
      link: {
        label: "gafiraloans.com",
        href: "https://gafiraloans.com/",
      },
    },
    {
      title: "PBM Construction Website",
      techStack: ["Client Project", "Django", "HTMX", "HTML", "CSS", "Javascript"],
      description:
        "Company website for PBM Construction Limited",
      logo: Minimal,
      link: {
        label: "pbmconstructionmw.com",
        href: "https://pbmconstructionmw.com/",
      },
    },
    {
      title: "Nailed by Nana",
      techStack: ["Client Project", "Django", "HTMX", "HTML", "CSS", "Javascript"],
      description:
        "Nail appointment booking and management website for Nailed by nana",
      logo: BarepapersLogo,
      link: {
        label: "nailedbynana.com",
        href: "https://nailedbynana.com/",
      },
    },
    


  ],
} as const;
