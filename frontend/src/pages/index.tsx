import Navbar from "~/features/components/navbar/Navbar";
import MobileNavLink from "~/features/components/navbar/MobileNavLinks";

import { Home, About, MyPortfolio, Skills, MyContact } from "~/features";

export function IndexPage() {
  return (
    <>
      <Navbar />
      <MobileNavLink />
      <Home />
      <About />
      <MyPortfolio />
      <Skills />
      <MyContact />
    </>
  );
}
