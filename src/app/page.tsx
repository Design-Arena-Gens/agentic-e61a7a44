import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ChatDemo } from "@/components/ChatDemo";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { TrainingSection } from "@/components/TrainingSection";
import { DeveloperMode } from "@/components/DeveloperMode";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <FeatureHighlights />
        <ChatDemo />
        <TrainingSection />
        <DeveloperMode />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
