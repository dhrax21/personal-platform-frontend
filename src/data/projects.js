import engibriefImg from "../assets/projects/engibrief.png";
import bookmyshowImg from "../assets/projects/cineprime2.jpg";
import rideeasyImg from "../assets/projects/rideeasy1.jpg";

export default [
  {
    title: "EngiBrief — E-Book & PDF Selling Platform",
    tag: "Freelance · Production",
    desc: "Production platform for selling engineering eBooks and PDFs with authentication and payments.",
    tech: ["JavaScript", "Supabase", "Payments", "Google Cloud"],
    image: engibriefImg,
    link: "https://engibrief.com",
  },
  {
    title: "BookMyShow API",
    tag: "Backend Project",
    desc: "Movie booking backend with authentication and booking workflows.",
    tech: ["Spring Boot", "MySQL", "JWT"],
    image: bookmyshowImg,
    link: "https://github.com/dhrax21/Book-my-Shows",
  },
  {
    title: "RideEasy",
    tag: "Full-Stack Project",
    desc: "Cab booking platform with user and driver flows.",
    tech: ["Spring Boot", "MySQL", "React"],
    image: rideeasyImg,
    link: "https://github.com/dhrax21/ride_easy_cab",
  },
];
