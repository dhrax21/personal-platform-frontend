import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="absolute left-[-56px] top-1/2 -translate-y-1/2 flex flex-col gap-3 hidden md:flex absolute left-[-56px] ...">
      
      <a
        href="https://github.com/dhrax21"
        target="_blank"
        rel="noreferrer"
        className="h-10 w-10 flex items-center justify-center rounded-lg border border-black/30 bg-white hover:bg-black hover:text-white transition"
        aria-label="GitHub"
      >
        <FaGithub size={16} />
      </a>

      <a
        href="https://www.linkedin.com/in/dheeraj-singh-bc21048"
        target="_blank"
        rel="noreferrer"
        className="h-10 w-10 flex items-center justify-center rounded-lg border border-black/30 bg-white hover:bg-black hover:text-white transition"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={16} />
      </a>

      <a
        href="https://twitter.com/dhrax21bc"
        target="_blank"
        rel="noreferrer"
        className="h-10 w-10 flex items-center justify-center rounded-lg border border-black/30 bg-white hover:bg-black hover:text-white transition"
        aria-label="Twitter"
      >
        <FaXTwitter size={16} />
      </a>

      <a
        href="mailto:dhrax21bc@gmail.com"
        className="h-10 w-10 flex items-center justify-center rounded-lg border border-black/30 bg-white hover:bg-black hover:text-white transition"
        aria-label="Email"
      >
        <FaEnvelope size={16} />
      </a>

    </div>
  );
}
