import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1> About This Project</h1>
        <p>This is a React App to leave feedback for a Product or Service.</p>
        <p>Version: Beta 0.1</p>
        <p>
          <Link to="/">Back To Home Page</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
