import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Intact Insurance",
    position: "Software Engineering Intern",
    time: "May 2024 - Present",
    location: "Toronto, ON",
    description: `Engineered a dependency visualization system in Clojure and Angular, mapping 5.1k+ microservice dependencies, resulting in 9% faster developer onboarding and improved architectural decision-making.\n
    Automated OpenShift cluster management through Python/Jenkins scripts, reducing system downtime by 12% and reclaiming 1TB+ of storage through pod monitoring and image cleanup.\n
    Accelerated monthly release cycle by engineering an automated GitHub release tagging system, reducing process time by 97% using Python, Jenkins, and GitHub CD.`,
    tech: ["Clojure", "Angular", "Python", "Jenkins", "OpenShift", "GitHub"]
  },
  {
    title: "Computational Social Sciences Lab, University of Toronto",
    position: "Machine Learning Researcher",
    time: "May 2024 - Nov 2024",
    location: "Toronto, ON",
    description: `Developed a novel joint textual and structural logical query answering framework over knowledge graphs that achieved state-of-the-art performance, outperforming existing methods by up to 8% by incorporating textual context through large language models (LLMs).`,
    tech: ["Python", "PyTorch", "HuggingFace", "LLMs"]
  },
  {
    title: "Urban Data Center, University of Toronto",
    position: "Machine Learning Engineer",
    time: "Sep 2023 - Apr 2024",
    location: "Toronto, ON",
    description: `Engineered an ontology-guided system for extracting Knowledge Graph (KG) entities from unstructured text, leveraging Large Language Models (LLMs) to ensure adherence to specific domain ontologies.\n
    Developed approaches for processing multi-tagged phrases containing information for multiple KG entities, implementing label-specific models and span classifiers to optimize accuracy.\n
    Implemented data transformation pipelines converting character-level annotations to sentence-level BIO-encoded tokens, enabling fine-tuning of BERT-based models for entity recognition using PyTorch.`,
    tech: ["Python", "PyTorch", "HuggingFace", "BERT"]
  },
  {
    title: "UNICEF Canada",
    position: "Full Stack Software Engineer",
    time: "Sep 2023 - Dec 2023",
    location: "Toronto, ON",
    description: `Developed an open-source tool to clone Apache Superset dashboards and a novel cloud-based version control system to facilitate duplication of Superset dashboards across staging and production environments using Python, Firebase, and JavaScript.\n
    Eliminated dashboard cloning redundancy, reducing time taken to clone and rebuild dashboards across Superset instances by 93.6% (from 15 minutes to 57 seconds) across 100+ UNICEF offices worldwide.`,
    tech: ["Python", "Firebase", "JavaScript", "Apache Superset"]
  },
  {
    title: "1Kit",
    position: "Co-Founder, CTO, Lead Programmer",
    time: "May 2023 - Aug 2023",
    location: "Toronto, ON",
    description: `Established an innovative ed-tech startup focused on addressing challenges students and researchers face while accessing and managing information on the web.\n
    Conceptualized, developed, and deployed a dynamic and responsive MVP with novel features extracted from interviews with potential users. \n
    Spearheaded the design of a scalable infrastructure on AWS with optimized data storage, laying foundation for future data analytics capabilities and minimizing AWS costs by 29.17%.\n
    Iterated pitch decks, business plans, and cash flow projections, with final versions assessed by over 300 judges worldwide, resulting in our selection as finalists in a startup incubator.`,
    tech: [
      "TypeScript",
      "Amazon Web Services (AWS)",
      "Chrome Manifest V3",
      "Webpack",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "React",
      "SCSS",
      "Git"
    ],
  },
  {
    title: "Hack the 6ix",
    position: "Full-Stack Developer",
    time: "Summer 2023",
    location: "Toronto, ON",
    description: `Developed reusable, stylized components in React and TypeScript for the hackathon’s landing page, driving 3000+ unique views and 1200+ hacker applications.\n
    Utilized the Notion API to fetch and display hacker information, schedule, and resources to 250+ hackers.`,
    tech: ["TypeScipt", "SCSS", "MongoDB", "React", "Storyboard", "Git"],
  },
  {
    title: "EnrichAI",
    position: "Software Engineering Intern",
    time: "July 2022 - Aug 2022",
    location: "Gurgaon, India",
    description: `Developed an automated testing suite consisting of unit, integration, end-to-end, and usability tests for an IoT waste collection solution.\n
    Automated >97% of tests using WebdriverIO and Selenium, reducing testing time by 99.1% (from 10 minutes to 32 seconds).\n
    Facilitated identification of failed tests and increased ease of test analysis by automatically generating color-coded reports with screenshots and timestamps.`,
    tech: ["JavaScript", "WebDriverIO", "Python", "Selenium"],
  },
];
