import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden"
            >
              <div className="h-48 bg-gray-200" />

              <div className="p-6">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  className="inline-block mt-4 text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
