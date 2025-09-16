import React from "react";

export default function Home() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>OpenStream</h1>
      <p>A free video sharing platform like YouTube.</p>

      <div>
        <h2>Featured Videos</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <img src="/video1-thumbnail.jpg" alt="Video 1" width={200} />
            <p>Video Title 1</p>
          </div>
          <div>
            <img src="/video2-thumbnail.jpg" alt="Video 2" width={200} />
            <p>Video Title 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
