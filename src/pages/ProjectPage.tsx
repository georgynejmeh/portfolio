import { Link, useParams } from "react-router-dom";
import TextAnimate from "../components/TextAnimate";
import TextFine from "../components/TextFine";
import { projects } from "../assets/projects";
import RevealUp from "../components/RevealUp";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[parseInt(id!)];
  return (
    <main className="p-page min-h-screen">
      <section
        className={"flex flex-row gap-8 ps-8 py-8 mt-12 max-lg:flex-col"}
      >
        <div className="w-full flex flex-col items-start">
          <TextAnimate>
            <h2 className="text-accent font-bold">{project.title}</h2>
          </TextAnimate>
          <TextAnimate delay={1}>
            <h3 className="italic">{project.desc}</h3>
          </TextAnimate>
          <TextAnimate delay={1.2}>
            <TextFine>{project.details}</TextFine>
          </TextAnimate>
          {project.url && (
            <RevealUp delay={1.4}>
              <Link to={project.url} target="_blank">
                <button
                  className={`flex items-center justify-center mt-8 btn btn-primary max-lg:max-w-32`}
                >
                  Try it
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
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </Link>
            </RevealUp>
          )}
        </div>
        <div className="w-full flex max-lg:flex-col gap-2 max-lg:mt-8">
          <RevealUp delay={1.6}>
            <img
              className="w-full aspect-square object-cover"
              src={project.img01}
            />
          </RevealUp>
          <RevealUp delay={1.8}>
            <img
              className="w-full aspect-square object-cover"
              src={project.img02}
            />
          </RevealUp>
        </div>
      </section>
      {project.images && (
        <section className="flex flex-col gap-8">
          {project.images.map((image) => (
            <img className="w-full" src={image} />
          ))}
        </section>
      )}
    </main>
  );
};

export default ProjectPage;
