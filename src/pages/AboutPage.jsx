import React from "react";

import Card from "../components/Shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1> About This Project</h1>
        <p>This is a React App to leave feedback for a Product or Service.</p>
        <p>Version: Beta 0.1</p>
        <p>
          <a href="/">Back To Home Page</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
