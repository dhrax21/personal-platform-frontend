import experience from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16">
          Experience
        </h2>

        <div className="relative border-l border-black/20 pl-10 space-y-20">
          {experience.map((item, index) => (
            <div key={index} className="relative">

              {/* Timeline dot */}
              <span className="absolute -left-[13px] top-1 h-3 w-3 rounded-full bg-black" />

              {/* Role + Company */}
              <h3 className="text-lg font-semibold leading-snug">
                {item.role} ·{" "}
                <span className="text-gray-700 font-normal">
                  {item.company}
                </span>
              </h3>

              {/* Period */}
              <p className="text-sm text-gray-500 mt-1 mb-3">
                {item.period}
              </p>

              {/* Live link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm underline mb-5 hover:text-accent"
                >
                  Visit live website →
                </a>
              )}

              {/* Description */}
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 mb-6 max-w-3xl">
                {item.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs border border-black/20 px-3 py-1 rounded-full bg-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
