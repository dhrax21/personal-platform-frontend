export default function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        <div>
          <h3 className="font-semibold text-lg mb-2">dhrax.dev</h3>
          <p className="text-sm text-gray-600">
            © 2026 Dheeraj Singh. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm">
          <a className="hover:text-accent cursor-pointer">About</a>
          <a className="hover:text-accent cursor-pointer">Portfolio</a>
          <a className="hover:text-accent cursor-pointer">Contact</a>
        </div>
      </div>
    </footer>
  );
}
