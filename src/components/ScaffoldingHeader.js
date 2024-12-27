import React from "react";
import "../styles/ScaffoldingHeader.css";
import BenefitsSection from "./BenefitsSection";

const ScaffoldingHeader = () => {
  return (
    <div className="scaffolding-header">
      <div className="projects-tag">
        <span className="tag-line"></span>
        <span className="projects-label">PROJECTS</span>
      </div>
      <h1 className="header-title">WHY WOSOL FOR YOUR SCAFFOLDING NEEDS?</h1>
      <BenefitsSection />
    </div>
  );
};

export default ScaffoldingHeader;
