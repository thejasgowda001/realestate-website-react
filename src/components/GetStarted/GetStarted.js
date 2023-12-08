import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">
            Get Started With Nest Developed By
            <span className="orangeText"> Thejas M S</span>
          </span>
          <span className="secondaryText">
            Subscribe To Nest And Get Best Deals For Your Desired Properties
          </span>
          <button className="button">
            <a href="https://github.com/thejasgowda001">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
