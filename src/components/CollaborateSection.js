import React from "react";
import "../styles/CollaborateSection.css";

const CollaborateSection = () => {
  return (
    <div>
      {/* Collaborate Section */}
      <div
        className="collaborate-section"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/548d/38eb/e9a9773b05ea67e0ea440f2061cfd347?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A7FazrsFfUQr0WTPXsjEFksc7EYaI7~52utG2sxY4~2cN6FsKTzzWk7foFiWeZ-ntwUVM6bhZpd~wxUmDiLNyM8HgxQ0WhxZL99JiNYh6epgh9832SHXJRMMkdECUvrtM7aE4gnb97Hk8q8hPm0uOYB~FBeSc3HzlVPyHwunL1oKBKrPb~Ovx1ajh7aSjAOd4vUK84ub2rXOftKx-K0LoYsGrI72~UNq9xNE9uve4q4a5q8YaGSCskdiqZUqDP7k36aS1WNpW5MaEmI0c-sM-EoYYMgbeRQFDPZkFmKbYKxn0NsckYr5LoqCYJ9JKoAi~4JpFSdDsT4OILzkT1sanA__')`,
        }}
      >
        <div className="overlay">
          <p className="section-subtitle">WOSOL</p>
          <h2 className="section-title">
            "COLLABORATE WITH WOSOL: TAKING YOUR PROJECTS TO GREATER HEIGHTS"
          </h2>
          <button className="cta-button">GET IN TOUCH</button>
        </div>
      </div>

      {/* Clients Section */}
      <div className="clients-section">
        <div className="clients-header">
          <div className="tag-line"></div>
          <p className="clients-subtitle">OUR CLIENTS</p>
          <h2 className="clients-title">TRUSTED BY INDUSTRY LEADERS</h2>
        </div>
        <div className="clients-list">
          <span className="client">Plant Tech</span>
          <span className="client">Sichem</span>
          <span className="client">Hadeed</span>
          <span className="client">Sabic</span>
          <span className="highlighted-client">Petrokemya</span>
          <span className="client">Sharq</span>
          <span className="client">Safco</span>
          <span className="client">Tasnee</span>
        </div>
      </div>
    </div>
  );
};

export default CollaborateSection;
