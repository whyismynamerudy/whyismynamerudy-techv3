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
    title: "Urban Data Centre, University of Toronto",
    position: "Machine Learning Engineer",
    time: "Aug 2023 - Present",
    location: "Toronto, ON",
    description: `Engineered a novel knowledge source for a Natural Language Understanding (NLU) system by fine-tuning the RoBERTa large language model to > 93% accuracy using transfer learning for NER. \n
    Independently conducted a comparative study to determine the impact of specific entities on overall accuracy, providing insights into the significance of distinct entities within the model.`,
    tech: [
      "Python",
      "PyTorch",
      "HuggingFace",
      "Docker"
    ]
  },
  {
    title: "1Kit",
    position: "Co-Founder, CTO, Lead Programmer",
    time: "May 2023 - Present",
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
