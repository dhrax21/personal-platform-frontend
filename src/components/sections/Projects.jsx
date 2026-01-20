import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden hover:shadow-soft transition"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block text-xs border px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline hover:text-accent"
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
