import React from "react";

const Index = () => {
  return (
    <section id="milestones" className="milestones-part py-6 jumptarget">
      <div className="container">
        <h2 className="main-title center">Milestones</h2>
        <p className="rarity-para">
          We’ve established multiple milestones for The Cheetah Gang. When we
          reach a particular milestone, we will move towards the next milestone.
        </p>
        <div className="timeline time-body">
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="time-container left"
          >
            <div className="time-content">
              <h2 className="milestones-title">Milestone 1</h2>
              <p style={{ textDecoration: "line-through" }}>
                Website will be launched and we’ll also run a giveaway contest.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="time-container right two"
          >
            <div className="time-content">
              <h2 className="milestones-title">Milestone 2</h2>
              <p>Pre-sale launch of the full NFT collection.</p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="time-container left two"
          >
            <div className="time-content">
              <h2 className="milestones-title">Milestone 3</h2>
              <p>
                Utilizing funds for marketing campaign for maximum exposure
                including influencer marketing.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="400"
            className="time-container right three"
          >
            <div className="time-content">
              <h2 className="milestones-title">Milestone 4</h2>
              <p>Exclusive free NFT Bonus will be given to all holders.</p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            className="time-container left three"
          >
            <div className="time-content">
              <h2 className="milestones-title">Milestone 5</h2>
              <p>
                Collaboration with other NFT projects in order to increase
                exposure of The Cheetah Gang.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="600"
            className="time-container right four"
          >
            <div className="time-content">
              <h2 className="milestones-title">Milestone 6</h2>
              <p>
                5% will be donated to animal welfare & 5% to TCG holding
                Community.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="700"
            className="time-container left four"
          >
            <div className="time-content">
              <h2 className="milestones-title">Milestone 7</h2>
              <p>
                Over 1000 NFT giveaways to holders on upcoming collaborating
                projects.
                <br />
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="800"
            className="time-container right five"
          >
            <div className="time-content">
              <h2 className="milestones-title">Milestone 8</h2>
              <p>Formation of DAO for the Community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
