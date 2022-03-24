import React, { useState } from "react";
import Card from "./Shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How Would you rate your service with us ?</h2>
        {/* @todo: rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;