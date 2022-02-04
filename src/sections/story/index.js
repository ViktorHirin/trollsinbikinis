import React from "react";
import Welcome from "../../assets/img/welcome-img.gif";
const Index = () => {
  return (
    <section id="story" className="welcome-part py-6 jumptarget">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-lg-0 mb-3 welcome" data-aos="fade-up">
            <img src={Welcome} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-8" data-aos="fade-up">
            <span className="text-warning welcome-text">Welcome To </span>
            <h2 className="main-title white">The Cheetah Gang</h2>
            <p className="welcome-para">
              The cheetah is one of the most fascinating animals on Earth and
              the world's fastest land animal.
            </p>
            <p className="welcome-para">
              Forward to New Year 2030, and these fierce felines that were once
              agile have become lazy, slow and clumsy on the planet. And yes,
              these elegant animals are racing towards extinction on our planet.
              Very few cheetahs are left on the planet due to hunting by humans,
              climate change and habitat destruction. Due to these reasons, the
              population of cheetahs is decreasing day by day.
            </p>
            <p className="welcome-para">
              Therefore, these big cats have decided to reside in the Ethereum
              Blockchain for eternity.
            </p>
            <p className="welcome-para">
              This is your once in a lifetime chance to own these unique and
              gorgeous looking cheetahs through our NFT artwork. We have a
              collection of 10000 distinctive and exquisite NFT artworks of
              Cheetahs, and each of these artworks is worth possessing. Not only
              will you acquire an excellent piece of art, but you will also do a
              good deed and be a part of animal welfare. When you buy our
              Cheetah NFT artwork, a certain amount will go towards animal
              welfare.
            </p>
            <p className="welcome-para mb-0">
              Each and every cheetah is unique and is created in an established
              way, having more than 150 traits. These NFTs are digital
              hand-drawn avatars with the help of AI and will exist forever on
              the Ethereum blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
