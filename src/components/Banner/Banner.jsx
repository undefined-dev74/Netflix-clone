import React from 'react';
import './Banner.css';

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/20-02-2020/netflix/Netflix-Banner_1080x419.jpg?impolicy=pqmedium")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque blanditiis perspiciatis vero sapiente fuga eum, sequi tempore iste illum officiis magnam accusamus dolor a et nemo suscipit alias placeat est maxime eveniet adipisci cumque? Alias odio eius minima id laboriosam `,
            110
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
