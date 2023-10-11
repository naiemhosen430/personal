import BlogSection from "./Components/BlogSection";
import ClientReviewSection from "./Components/ClientReviewSection";
import ContractSection from "./Components/ContractSection";
import Herro from "./Components/Herro";
import Introduce from "./Components/Introduce";
import PricingSection from "./Components/PricingSection";
import ProjectSection from "./Components/ProjectSection";
import RewardSection from "./Components/RewardSection";
import SkillSection from "./Components/SkillSection";

export default function Home() {
  return (
    <>
      <Herro />
      <Introduce />
      <SkillSection />
      <ClientReviewSection />
      <ProjectSection />
      <PricingSection />
      <RewardSection />
      <BlogSection />
      <ContractSection />
    </>
  );
}
