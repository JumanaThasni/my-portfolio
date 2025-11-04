import React from "react";
import { Github, Mail, Code2 } from "lucide-react";

export default function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio built using React and Tailwind CSS.",
      img: "/project1.jpg",
      link:"https://github.com/JumanaThasni/my-portfolio/blob/main/project3.png",
    },
    {
      title: "Todo App",
      desc: "Simple CRUD app using React hooks and local storage.",
      img: "/project2.jpg",
      link: "https://github.com/JumanaThasni/my-portfolio/blob/main/project2.png",
    },
    {
      title: "Smoothie Menu",
      desc: "Beautiful Smoothie Menu page built using modern CSS styling.",
      img: "/project3.jpg",
      link: "https://github.com/JumanaThasni/my-portfolio/blob/main/project1.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-cyan-900 text-white font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <img
          src="/profile.jpg"
          alt="Jumana"
          className="w-36 h-36 rounded-full border-4 border-cyan-900 shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">
          Jumana – <span className="text-cyan-400">Full Stack Developer</span>
        </h1>
        <p className="text-gray-300 max-w-md">
          I build modern, responsive web applications that combine design,
          performance, and functionality.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="mailto:yourmail@gmail.com"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-2xl font-semibold transition shadow-lg"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-2xl hover:bg-cyan-500 hover:text-white transition shadow-lg"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Me</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          I’m a self-taught developer passionate about building full-stack web
          apps and crafting clean, user-friendly designs.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="bg-cyan-500/20 border border-cyan-500 text-cyan-300 px-4 py-1 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6 bg-gradient-to-t from-slate-900 via-gray-900 to-cyan-950 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition duration-300"
            >
              <img
                 src={p.img}
                 alt={p.title}
                 className="w-full h-40 object-cover rounded-xl mb-4"/>
              <Code2 className="mx-auto text-cyan-400 mb-3" size={28} />
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1
                rounded-full transition">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-8">
          I'm open to freelance projects, collaborations, and new opportunities.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:jumanathasni222@gmail.com"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-2xl shadow-lg transition"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://github.com/JumanaThasni"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-2xl hover:bg-cyan-500 hover:text-white transition"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-cyan-800 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Jumana. All rights reserved.
      </footer>
    </div>
  );
}
