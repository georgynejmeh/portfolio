import { Link } from "react-router-dom";
import RevealUp from "./RevealUp";
import TextAnimate from "./TextAnimate";
import TextFine from "./TextFine";

interface Props {
  id: number;
  title: string;
  desc: string;
  details?: string;
  img01?: string;
  img02?: string;
  reverse?: boolean;
}

const ProjectSection = ({
  id,
  title,
  desc,
  details,
  img01,
  img02,
  reverse = false,
}: Props) => {
  return (
    <section
      className={
        reverse
          ? "flex flex-row-reverse gap-8 ps-8 py-8 mt-12 max-lg:flex-col"
          : "flex flex-row gap-8 ps-8 py-8 mt-12 max-lg:flex-col"
      }
    >
      <div className="w-full flex flex-col items-start">
        <TextAnimate reverse={reverse}>
          <h2 className="text-accent font-bold">{title}</h2>
        </TextAnimate>
        <TextAnimate reverse={reverse} delay={1}>
          <h3 className="italic">{desc}</h3>
        </TextAnimate>
        <TextAnimate reverse={reverse} delay={1.2}>
          <TextFine>{details}</TextFine>
        </TextAnimate>
        <RevealUp delay={1.4}>
          <Link to={`/projects/${id}`}>
            <button
              className={`flex items-center justify-center mt-8 btn btn-primary max-lg:max-w-32 ${
                reverse ? "lg:flex-row-reverse" : "flex-row"
              }`}
            >
              Project
              <svg
                className={reverse ? "lg:-scale-x-100" : ""}
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
      </div>
      <div className="w-full flex max-lg:flex-col gap-2 max-lg:mt-8">
        <RevealUp delay={1.6}>
          <img className="w-full aspect-square object-cover" src={img01} />
        </RevealUp>
        <RevealUp delay={1.8}>
          <img className="w-full aspect-square object-cover" src={img02} />
        </RevealUp>
      </div>
    </section>
  );
};

export default ProjectSection;
