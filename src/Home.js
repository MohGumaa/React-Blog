const Home = () => {
  const handleClick = (name, e) => {
    console.log(e);
    console.log("hello " + name);
  };

  return (
    <div className="home">
      <h2>Home</h2>
      <button onClick={(e) => handleClick("Mohamed", e)}>Say My Name</button>
    </div>
  );
};

export default Home;
