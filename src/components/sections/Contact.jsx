export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white border rounded-[2.5rem] px-10 py-16 md:px-20">

          <div className="flex justify-center mb-6">
            <span className="border px-4 py-1 rounded-full text-xs tracking-wide">
              CONTACT
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center leading-snug">
            Got a project in mind?
            <br />
            <span className="text-gray-700">
              Let’s get in touch.
            </span>
          </h2>

          <form className="mt-16 space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  className="w-full border-b py-2 focus:outline-none"
                  placeholder="Your name *"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  className="w-full border-b py-2 focus:outline-none"
                  placeholder="Email address *"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full border-b py-2 resize-none focus:outline-none"
                placeholder="Tell me about your project *"
              />
            </div>

            <div className="flex justify-center">
              <button className="border px-10 py-3 rounded-xl text-sm hover:bg-black hover:text-white transition">
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
