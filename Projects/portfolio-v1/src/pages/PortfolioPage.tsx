import { useState } from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import projectsData from "../assets/portfolio/projects.json";

import silvagymimage from "../assets/portfolio/silvagym.png";
import webwizardsimage from "../assets/portfolio/webwizards.png";
import sitecraftersimage from "../assets/portfolio/sitecrafters.png";
import exquisitekonnorimage from "../assets/portfolio/exquisitekonnor.png";
import carrentalimage from "../assets/portfolio/carrental.png";
import ecobazarimage from "../assets/portfolio/ecobazar.png";
import brohoodtraveltoursimage from "../assets/portfolio/brohoodtraveltours.png";
import gymimage from "../assets/portfolio/gym.png";
import hvacimage from "../assets/portfolio/hvac.png";
import multigymimage from "../assets/portfolio/multigym.png";
import personaltrainerimage from "../assets/portfolio/personaltrainer.png";
import pharmaimage from "../assets/portfolio/pharma.png";
import ptchatsystemimage from "../assets/portfolio/ptchatsystem.png";
import salonimage from "../assets/portfolio/salon.png";
import sportsacademyimage from "../assets/portfolio/sportsacademy.png";

// Map JSON filenames to imported images
const imageMap: Record<string, string> = {
  "silvagym.png": silvagymimage,
  "webwizards.png": webwizardsimage,
  "sitecrafters.png": sitecraftersimage,
  "exquisitekonnor.png": exquisitekonnorimage,
  "carrental.png": carrentalimage,
  "ecobazar.png": ecobazarimage,
  "brohoodtraveltours.png": brohoodtraveltoursimage,
  "gym.png": gymimage,
  "hvac.png": hvacimage,
  "multigym.png": multigymimage,
  "personaltrainer.png": personaltrainerimage,
  "pharma.png": pharmaimage,
  "ptchatsystem.png": ptchatsystemimage,
  "salon.png": salonimage,
  "sportsacademy.png": sportsacademyimage,
};

// Map images to projects
const projects = projectsData.map((p) => ({
  ...p,
  image: imageMap[p.image],
}));

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Landing Pages", "Websites", "Templates"];

  // Filter mapped projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-black via-purple-950 to-black min-h-screen">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore all of our projects — from landing pages to full-scale
            websites, showcasing creativity, performance, and clean design.
          </p>
        </div>

        {/* Controls: Back Button + Categories */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-10 gap-4">
          {/* Back Button */}
          <div className="order-2 md:order-1 self-center md:self-start">
            <Button
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-600 duration-500 hover:from-purple-700 hover:to-purple-400 hover:text-black text-white rounded-[10px] px-3 py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>

          {/* Category Buttons */}
          <div className="order-1 md:order-2 flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-600 to-purple-500 text-white"
                    : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900/60 border-slate-700 overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-cyan-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-600 to-purple-500 duration-500 hover:text-black hover:from-purple-500 hover:to-cyan-600 text-white border-0"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
