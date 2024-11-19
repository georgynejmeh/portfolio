import TextAnimate from "../components/TextAnimate";

const DetailsSection = () => {
  return (
    <div>
      <h3>
        <TextAnimate delay={1}>Hi, my name is</TextAnimate>
        <TextAnimate delay={1.2}>
          <h3 className="text-accent font-bold">GEORGY NEJMEH</h3>
        </TextAnimate>
        <TextAnimate delay={1.4}>
          I am a fourth year student at the Faculty of Information Technology
          Engineering at Damascus University
        </TextAnimate>
        <TextAnimate delay={1.6}>
          <h3 className="text-accent font-bold">Full Stack Developer</h3>
        </TextAnimate>
        <TextAnimate delay={1.8}>ready to take on new challenges</TextAnimate>
        <br />
        <br />
      </h3>
      <h4>
        <TextAnimate delay={1}>
          <h3>Experience</h3>
        </TextAnimate>
        <TextAnimate delay={1.2}>
          I have successfully completed several independent projects.
        </TextAnimate>
        <br />
        <TextAnimate delay={1.4}>
          My passion for programming has been with me since a young age, and I
          am eager to demonstrate my skills and contribute effectively to any
          team I join.
        </TextAnimate>
        <br />
        <ul className="list-disc p-8">
          <TextAnimate delay={1.6}>
            <li className="list-item">
              Designing and developing mobile and web applications using a
              variety of frameworks.
            </li>
          </TextAnimate>
          <TextAnimate delay={1.8}>
            <li>
              General-purpose programming, tackling complex problems with
              elegant solutions.
            </li>
          </TextAnimate>
          <TextAnimate delay={2}>
            <li>
              Web scraping, extracting valuable data from diverse sources.
            </li>
          </TextAnimate>
          <TextAnimate delay={2.2}>
            <li>
              Creating intelligent Telegram bots to enhance user experiences.
            </li>
          </TextAnimate>
        </ul>
      </h4>
      <h4>
        <TextAnimate delay={1}>
          <i>
            <u>Programming languages:</u>
          </i>
        </TextAnimate>
        <br />
        <TextAnimate delay={1.2}>
          ReactJS • Laravel • Flutter • NextJS
        </TextAnimate>
        <TextAnimate delay={1.4}>
          Python • Java • Kotlin • HTML • CSS • JavaScript • C# • C++
        </TextAnimate>
        <br />
        <TextAnimate delay={1}>
          <i>
            <u>Implementation:</u>
          </i>
        </TextAnimate>
        <br />
        <TextAnimate delay={1.2}>
          RESTful APIs • Web Development • UI/UX • Android Development • oAuth2
          • JWT
        </TextAnimate>
        <TextAnimate delay={1.4}>
          Text Manupilation & Organization • Web Scraping • Security • SEO
        </TextAnimate>
        <TextAnimate delay={1.6}>Linux • CMD • PowerShell</TextAnimate>
        <TextAnimate delay={1.8}>
          Figma • Adobe Photoshop • Adobe Illustrator • Android Studio • Adobe
          Premiere Pro
        </TextAnimate>
      </h4>
      <br />
    </div>
  );
};

export default DetailsSection;
