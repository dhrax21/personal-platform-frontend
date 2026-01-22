import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex absolute left-[-56px] top-1/2 -translate-y-1/2 flex-col gap-3">
        <SocialIcon
          href="https://github.com/dhrax21"
          label="GitHub"
          icon={<FaGithub size={16} />}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/dheeraj-singh-bc21048"
          label="LinkedIn"
          icon={<FaLinkedinIn size={16} />}
        />
        <SocialIcon
          href="https://twitter.com/dhrax21bc"
          label="Twitter"
          icon={<FaXTwitter size={16} />}
        />
        <SocialIcon
          href="mailto:dhrax21bc@gmail.com"
          label="Email"
          icon={<FaEnvelope size={16} />}
        />
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-4 bg-white border border-black/20 px-4 py-3 rounded-2xl shadow-lg">
          <SocialIcon
            href="https://github.com/dhrax21"
            label="GitHub"
            icon={<FaGithub size={18} />}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/dheeraj-singh-bc21048"
            label="LinkedIn"
            icon={<FaLinkedinIn size={18} />}
          />
          <SocialIcon
            href="https://twitter.com/dhrax21bc"
            label="Twitter"
            icon={<FaXTwitter size={18} />}
          />
          <SocialIcon
            href="mailto:dhrax21bc@gmail.com"
            label="Email"
            icon={<FaEnvelope size={18} />}
          />
        </div>
      </div>
    </>
  );
}


function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-10 w-10 flex items-center justify-center rounded-lg border border-black/30 bg-white hover:bg-black hover:text-white transition"
    >
      {icon}
    </a>
  );
}