import React from 'react';
import GitHubSearch from './GitHubSearch';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Send-me Email Web",
      description: "Creating a personal custom web providing a simple text box to send email to intended user",
      tags: ["HTML", "CSS", "javaScript"],
      link: "#"
    },
    {
      title: "Personal Portofolio Web",
      description: "Creating a persomal portofolio web providing a glimpse of my personal info and a contact me section to send a message to my email",
      tags: ["React", "Tailwind CSS"],
      link: "#"
    }
  ];

  const skills = ["React", "JavaScript", "HTML/CSS"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-gray-900">Aridho Sectio Caesar</h1>
          <p className="mt-4 text-xl text-gray-600">Computer Engineering Student</p>
          <p className="mt-4 text-gray-600 max-w-2xl">
            I'm a passionate Computer Engineering Student at Universitas Indonesia, focused on creating beautiful and functional web applications. 
            With expertise in modern frontend technologies, I hope to bring ideas to life through code.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="https://github.com/arido13" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/aridho-caesar-969423245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:aridho.sectio@ui.ac.id" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                View Project <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <GitHubSearch />

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="bg-white rounded-lg shadow p-6">
        <a 
         href="mailto:aridho.sectio@ui.ac.id?subject=Hello&body=I%20would%20like%20to%20get%20in%20touch."
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >   
          Send Me an Email
        </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;