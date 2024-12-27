import React from "react";
import "../styles/BenefitsSection.css";
import GroupIcon from "../assets/Group.png"; // Import the main icon
import QualityIcon from "../assets/quality.png"; // Import the new icon
import SolutionIcon from "../assets/solution.png"; // Import the new icon
import SafetyIcon from "../assets/safety.png"; // Import the new icon
import GroupingIcon from "../assets/Grouping.png"; // Import the new icon
import SettingIcon from "../assets/setting-gear.png"; // Import the new icon
import SafetymeasureIcon from "../assets/Safetymeasure.png"; // Import the new icon
import CustomerIcon from "../assets/customer.png"; // Import the new icon

const BenefitsSection = () => {
  const benefits = [
    {
      icon: GroupIcon, // Use the imported image
      title: "Benefits of Choosing Wosol",
      text: `At Wosol, we take pride in offering reliable scaffolding solutions
      that meet the highest standards of quality, safety, and efficiency.
      Partnering with Wosol for your scaffolding needs ensures that your
      project runs smoothly from start to finish. Here’s why Wosol is the
      right choice for scaffolding rental and services.`,
    },
    {
      icon: QualityIcon, // Use the new image for this card
      title: "Certified and High-Quality Materials",
      text: `Wosol guarantees the use of certified scaffolding materials for
      construction, adhering to strict industry safety standards. Our
      durable scaffolding solutions are designed to meet the needs of both
      small-scale and large construction projects, ensuring the safety
      and reliability of your site.`,
    },
    {
      icon: SolutionIcon, // Add more icons as needed
      title: "Skilled and Experienced Workforce",
      text: `Our team comprises trained professionals experienced in scaffolding
      erection, dismantling, and design. With Wosol, your projects are handled
      by experts in the field who prioritize safety and efficiency, helping
      you meet construction deadlines without compromising quality.`,
    },
    {
      icon: SafetyIcon, // Add more icons as needed
      title: "Scaffolding Solutions",
      text: `From scaffolding rental to contracting, design, and manpower supply,
      Wosol provides a complete range of services. We tailor our solutions to
      meet the unique requirements of your project, ensuring a hassle-free
      experience.`,
    },
    {
      icon: GroupingIcon, // Add more icons as needed
      title: "Flexible Scaffolding Rental Packages",
      text: `Wosol offers affordable scaffolding rental solutions with flexible
      packages designed to accommodate both short-term and long-term project
      needs. Our flexible terms allow you to scale your scaffolding requirements
      as your project progresses.`,
    },
    {
      icon: SettingIcon, // Add more icons as needed
      title: "Quick and Efficient Setup",
      text: `We understand the importance of time in construction. Our team is
      committed to providing quick scaffolding setup and dismantling services,
      ensuring that your project stays on schedule while maintaining strict
      safety standards.`,
    },
    {
      icon: SafetymeasureIcon, // Add more icons as needed
      title: "Safety-First Approach",
      text: `Safety is at the core of Wosol's operations. Our scaffolding safety
      protocols for construction sites are rigorously followed to minimize risks
      and ensure the well-being of both workers and the site.`,
    },
    {
      icon: CustomerIcon, // Add more icons as needed
      title: "Customer-Centric Service",
      text: `At Wosol, customer satisfaction is our top priority. From the initial
      consultation to project completion, we provide excellent customer support,
      ensuring you receive the best scaffolding solutions for your construction
      needs.`,
    },
  ];

  return (
    <div className="benefits-section">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-card">
          <div className="icon-wrapper">
            <img
              src={benefit.icon}
              alt={`${benefit.title} Icon`}
              className="card-icon"
            />
          </div>
          <div className="text-wrapper">
            <h2 className="benefit-title">{benefit.title}</h2>
            <p className="benefit-text">{benefit.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
