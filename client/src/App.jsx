import { Navbar, Welcome, Footer, Services, Location, Features, GiftDiv } from "./components";

function App() {
  return (
    <>
    <div className="w-full relative">
      <Navbar />
      <Welcome />
    </div>
      <Services />
      <Location />
      <Features />
      <GiftDiv />
      <Footer />
    </>
  );
}

export default App;
