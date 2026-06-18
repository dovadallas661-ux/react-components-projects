import AboutSection from "./components/About/About";
import ProjectsSection from "./components/Projects/Projects";
import SkillsSection from "./components/Skills/Skills";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl md:text-8xl font-bold mb-6">
          OBIKODI, UCHENNA EMMANUEL
        </h1>

        <h2 className="text-2xl text-sky-400 font-semibold mb-6">
          Frontend Developer
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300 text-lg mb-10">
          I build responsive, user-friendly and modern web
          applications with clean code and great attention to detail.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-sky-500 px-6 py-3 rounded-lg font-medium">
            View Projects
          </button>

          <button className="border bg-teal-600 border-olive-500 px-6 py-3 rounded-lg">
            Contact Me
          </button>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

export default App;