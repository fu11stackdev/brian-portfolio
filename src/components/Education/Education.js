import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdSchool, IoMdBriefcase } from "react-icons/io";
import rapportEnac from "../../Assets/RapportENAC.pdf";

function Education() {

  const experiences = [
    {
      date: "2023 - 2025",
      company: "Talkiatry",
      url: "https://www.talkiatry.com",
      title: "Software Engineer",
      description: "Led development of Talkiatry’s core patient onboarding flow, including a 10-minute clinical assessment tool, real-time provider matching system, and fast, flexible scheduling interfaces. This flow helped streamline access to mental health care by enabling personalized doctor matching and visit booking within days. Worked cross-functionally with product, clinical, and design teams to ensure a seamless, scalable user experience in a high-compliance healthcare environment.",
    },
    {
      date: "2019 - 2023",
      company: "Black Spectacles",
      url: "https://www.blackspectacles.com",
      title: "Software Engineer",
      description: "Built and maintained e-learning tools to support ARE exam prep, including interactive study modules and customizable practice exams. Collaborated in virtual workshops with end users to gather feedback, measure product impact, and iterate on design, contributing to increased engagement and improved pass rates. Focused on delivering scalable, data-informed features that enhanced user learning outcomes and platform usability.",
    },
    {
      date: "2016 - 2019",
      company: "Podimetrics",
      url: "https://podimetrics.com",
      title: "Software Engineer",
      description: "Developed real-time data pipelines to ingest and process IoT telemetry from the SmartMat™, enabling early detection of diabetic foot complications. Ensured HIPAA-compliant handling of sensitive medical data and built scalable backend systems for clinical data analysis in alignment with GCDMP standards. Collaborated with analytics and clinical teams to optimize the detection pipeline and support timely medical interventions.",
    },
    {
      date: "2015 - 2016",
      company: "Shirley Ryan AbilityLab",
      url: "https://www.sralab.org",
      title: "Software Engineer",
      description: "Designed and implemented cron jobs to aggregate health data across multiple hospitals and external partners. Built and deployed real-time dashboards on AWS to visualize clinical insights, enabling more informed, data-driven decision-making across departments. Focused on backend automation, cloud scalability, and reliability in a healthcare environment.",
    }    
  ];

  return (
    <VerticalTimeline>
      {experiences.map((it, key) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(17, 75, 122)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(17, 75, 122)' }}
          key={key}
          date={it.date}
          iconStyle={{ background: 'rgb(17, 75, 122)', color: '#fff' }}
          icon={<IoMdBriefcase />}
          // ghLink={it.url}
          demoLink={it.url}
        >
          <h3 className="vertical-timeline-element-title">{it.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{it.company}</h4>
          <p>{it.description}</p>
        </VerticalTimelineElement>
      ))}

      {/* High School Diploma */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">B.Sc. CS | Virginia Tech</h3>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
}

export default Education;
