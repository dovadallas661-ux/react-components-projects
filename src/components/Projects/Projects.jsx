// const ProjectsSection = () => {
//     return (
//         <section className="project-section">
//         <h2>Projects I've worked on</h2>
//         <li>TicTacToe Game</li>
//         <li>Gigsta recreate</li>
//         <li>Doggo Fetch</li>
//         <li>Javascript Quiz</li>
//       </section>
//     )
// }

// export default ProjectsSection

const ProjectsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-10">
        Projects I've Worked On
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-sky-400 text-2xl font-semibold mb-4">
            TicTacToe Game
          </h3>

         
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-sky-400 text-2xl font-semibold mb-4">
            Gigsta Recreate
          </h3>

          
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-sky-400 text-2xl font-semibold mb-4">
            Doggo Fetch
          </h3>

          
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-sky-400 text-2xl font-semibold mb-4">
            Javascript Quiz
          </h3>

          
        </div>

      </div>

    </section>
  );
};

export default ProjectsSection;