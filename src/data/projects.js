import medicalImg from "../assets/projects-images/medical.png";
import secondOpinionImg from "../assets/projects-images/second-opinion.png";
import editorImg from "../assets/projects-images/editor.png";
import emailCampaignImg from "../assets/projects-images/email-campaign.png";
import portfolioImg from "../assets/projects-images/portfolio.png";
import ecommerceImg from "../assets/projects-images/ecommerce.png";

const projects = [
  {
    title: "Medical Imaging Platform",
    type: "Company",
    description:
      "A web application designed to manage DICOM images, schedule appointments, and provide an advanced image viewer with voice dictation support. Used in diagnostic centers and hospitals for streamlined workflows.",
    techStack: ["React", "Tailwind CSS", "Cornerstone", "AWS Amplify"],
    image: medicalImg,
    github: "https://github.com/vikeshkumar/medical-imaging-platform",
    live: "https://medimaging.vikeshkumar.dev",
  },
  {
    title: "Second Opinion Website",
    type: "Company",
    description:
      "An intelligent healthcare platform where patients can request expert medical opinions. Features include a role-based authentication system using AWS Amplify, dynamic patient and doctor dashboards, DICOM image viewer integration, AI-driven auto-suggestions for medicine and diagnosis, and interactive charting for health trends and reports. Designed to streamline communication between patients and specialists.",
    techStack: ["React", "MUI", "AWS Amplify", "Chart.js", "AI", "DICOM"],
    image: secondOpinionImg,
    github: "https://github.com/vikeshkumar/second-opinion",
    live: "https://secondopinion.vikeshkumar.dev",
  },
  {
    title: "Email Editor & Page Builder",
    type: "Company",
    description:
      "A responsive drag-and-drop editor inspired by Unlayer. Enables users to create reusable email and landing page templates, which can be embedded in any app.",
    techStack: ["Vue", "JavaScript", "Bootstrap", "Unlayer", "Node.js"],
    image: editorImg,
    github: "https://github.com/vikeshkumar/email-editor",
    live: "https://editor.vikeshkumar.dev",
  },
  {
    title: "Email Campaign Tool",
    type: "Company",
    description:
      "Developed from scratch, this bulk email marketing tool supports real-time analytics, email segmentation, bounce handling, and more using Nodemailer.",
    techStack: ["Vue", "Bootstrap", "Stripe", "VueGoodTable", "CKEditor", "AWS Amplify", "drawflow"],
    image: emailCampaignImg,
    github: "https://github.com/vikeshkumar/email-campaign-tool",
    live: "https://emailtool.vikeshkumar.dev",
  },
  {
    title: "Portfolio Website",
    type: "Personal",
    description:
      "A sleek, animated, and responsive developer portfolio powered by React and Framer Motion. Features smooth scroll, dynamic sections, and modern design.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    image: portfolioImg,
    github: "https://github.com/vikeshkumar/portfolio",
    live: "https://vikeshkumar.dev",
  },
  {
    title: "E-commerce Dashboard",
    type: "Company",
    description:
      "An admin dashboard built to manage e-commerce operations including orders, inventory, and users with data visualization and full CRUD operations.",
    techStack: ["React", "Redux", "Chart.js", "Tailwind CSS"],
    image: ecommerceImg,
    github: "https://github.com/vikeshkumar/ecommerce-dashboard",
    live: "https://ecommerce.vikeshkumar.dev",
  },
];

export default projects;
