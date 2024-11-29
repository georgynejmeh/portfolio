import gif from "/gif/avento.gif";

import TextReveal from "../components/TextReveal";
import Button from "../components/Button";
import ProjectSection from "../components/ProjectSection";
import RevealUp from "../components/RevealUp";
import TextAnimate from "../components/TextAnimate";

import ContactSection from "../sections/ContactSection";
import DetailsSection from "../sections/DetailsSection";
import { projects } from "../assets/projects";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [gidLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image: { url: string }) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = (err) => reject(err);
      });
    };

    const imagesToLoad = [{ url: gif }];

    Promise.all(imagesToLoad.map((image) => loadImage(image)))
      .then(() => setGifLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  if (!gidLoaded) {
    return null;
  }
  return (
    <main>
      {/* -- SECTION -- */}

      <section className="flex items-center max-lg:flex-col">
        <img className="fade w-1/2 max-lg:w-full" src={gif} />

        <div className="w-full flex flex-col justify-center items-center max-lg:text-center">
          <TextReveal>
            <h1 className="font-bold">GEORGY NEJMEH</h1>
          </TextReveal>
          <TextReveal delay={1000}>
            <h2>FULL STACK</h2>
          </TextReveal>
          <TextReveal delay={1200}>
            <h2>SOFTWARE DEVELOPER</h2>
          </TextReveal>
        </div>
      </section>

      {/* -- SECTION -- */}

      <section className="mt-8 p-page">
        <div className="flex justify-around max-lg:flex-col max-lg:items-center max-lg:gap-4">
          <a className="fade" href="#projects">
            <Button>Projects</Button>
          </a>
          <a className="fade" href="#details">
            <Button>Details</Button>
          </a>
          <a className="fade" href="#contact">
            <Button>Contact</Button>
          </a>
        </div>

        {/* -- PROJECTS SECTION -- */}

        <section id="projects">
          {projects.map((project, index) => (
            <ProjectSection
              reverse={index % 2 !== 0}
              key={index}
              id={index}
              title={project.title}
              desc={project.desc}
              details={project.details}
              img01={project.img01}
              img02={project.img02}
            />
          ))}
        </section>
      </section>

      {/* DETAILS SECTION */}

      <section id="details" className="p-page">
        <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-8">
          <TextAnimate delay={1}>
            <h1>Details</h1>
          </TextAnimate>
          <a target="_blank" href="/resume/GEORGY NEJMEH.pdf">
            <RevealUp delay={1}>
              <Button>
                <span className="flex gap-2">
                  Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                  </svg>
                </span>
              </Button>
            </RevealUp>
          </a>
        </div>
      </section>

      {/* DETAILS SECTION */}

      <section className="p-page">
        <DetailsSection />
        <div className="mt-12">
          <ContactSection />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
