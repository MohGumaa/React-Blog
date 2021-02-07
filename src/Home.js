import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");

  const handleClick = (name, e) => {
    setName("Ali");
  };

  return (
    <div className="home">
      <h2>{name}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
