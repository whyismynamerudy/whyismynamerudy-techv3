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
    title: "1Kit",
    position: "Co-Founder, CTO, Lead Programmer",
    time: "May 2023 - Present",
    location: "Toronto, ON",
    description: `Established a ed-tech startup focused on addressing challenged students and researchers face while accessing and managing information on the web.\n
    Conceptualized, developed, and deployed a dynamic and responsive MVP with novel features extracted from interviews with potential users. \n
    Designed a multifaceted business model to help stabilize revenue during the summer, maximise user retention, and drive continuous user growth.\n
    Spearheaded the design of a secure and scalable infrastructure on AWS with optimized data storage that lays the foundation for future data analytics capabilities while reducing AWS costs.`,
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
    position: "Web Development Executive",
    time: "Summer 2023",
    location: "Toronto, ON",
    description: `Developed various aspects of the hackathon's digital presence.\n
    Created new reusable stylized components that were utilized while building multiple sections of the event's landing page and hacker dashboard, with designs following strict Figma guidelines.\n
    Significantly improved post application flow for users applying to the hackathon.\n
    Fetched and rendered Notion pages in a React app to convey vital information to hackers.`,
    tech: ["TypeScipt", "SCSS", "MongoDB", "React", "Storyboard", "Git"],
  },
  {
    title: "EnrichAI",
    position: "Software Engineering Intern",
    time: "July 2022 - Aug 2022",
    location: "Gurgaon, India",
    description: `Developed an automated testing suite consisting of unit, integration, end-to-end, and usability tests for an IOT waste collection solution deployed in Doha, Qatar.\n
    Significantly boosted test automation by achieving >97% automation of tests. This automation increased testing efficiency and reduced manual effort.\n
    Increased ease of test analysis and identification of failed tests by automatically generating color-coded HTML reports with screenshots and timestamps, facilitating prompt issue resolution.`,
    tech: ["JavaScript", "WebDriverIO", "Python", "Selenium"],
  },
];
