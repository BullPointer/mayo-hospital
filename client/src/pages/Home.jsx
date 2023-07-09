import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Location,
  Features,
  GiftDiv,
} from "../components";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full relative">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Location />
      <Features />
      <GiftDiv />
      <Footer />
    </div>
  );
};

export default Home;
