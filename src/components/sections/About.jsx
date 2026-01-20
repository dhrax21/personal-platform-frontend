export default function About() {
  return (
    <section id="about" className="bg-primary py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">More About Me</h2>
          <p className="text-gray-600 mb-4">
            I am a backend-focused software engineer with strong experience
            in Java, Spring Boot, and database-driven applications.
          </p>
          <p className="text-gray-600">
            I enjoy designing scalable systems and continuously improving
            my engineering skills.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <p className="font-semibold">Location</p>
          <p className="text-sm text-gray-500 mb-4">Varanasi, India</p>

          <p className="font-semibold">Focus</p>
          <p className="text-sm text-gray-500">
            Backend & Full-Stack Engineering
          </p>
        </div>
      </div>
    </section>
  );
}
