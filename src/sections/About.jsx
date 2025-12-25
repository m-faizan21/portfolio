import { Code2, Rocket, Users, Lightbulb } from "lucide-react";


const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
  <section id="about" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center"> 
        {/* Left Column*/} 
        <div className="space-y-8">
          <div className="animate-fade-in">
          <span className=" text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
          Building the future,
          <span className=" font-serif italic font-normal text-white"> one component at a time.</span>
        </h2>
        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-justify">
          <p>
            I am a motivated Software Engineer and MERN Stack Developer based in Uttar Pradesh, India. As a Computer Science and Engineering graduate, I have developed a robust foundation in building full-stack applications and solving complex technical challenges. I am a quick learner and a consistent professional, dedicated to continuous improvement and achieving organizational goals through the delivery of efficient, scalable code.
          </p>
          <p>
            My core expertise lies in the MERN Stack, with proficiency in developing applications using MongoDB, Express, React, and Node.js. Beyond web development, I possess a deep understanding of Data Structures and Algorithms (DSA), which I regularly apply to solve sophisticated problems on platforms such as LeetCode and GeeksforGeeks. My technical toolkit is further supported by a strong command of C++, JavaScript, and SQL, alongside a firm grasp of CS fundamentals including DBMS, Operating Systems, Computer Networks, and OOPS.
          </p>
          <p>
            I thrive in environments that prioritize team collaboration, having successfully contributed to group settings to design, implement, and test web applications. I am highly skilled in time management and leadership, particularly in directing front-end development phases to ensure project goals are met with precision. By combining my problem-solving skills with a dedicated work ethic, I strive to deliver user-centric and visually compelling digital solutions.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "My mission is to create digital experiences that are not just
              functional, but truly delightful — products that users love to
              use and developers love to maintain."
            </p>
          </div>
      </div>
      {/* Right Column - HighLights */}
      <div  className="grid sm:grid-cols-2 gap-6">
      {highlights.map((item, index) => (
        <div key={index} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(index + 1) * 100 }ms`}}>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
            <item.icon  className="w-6 h-6 text-primary"/>
          </div>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>

      ))}
      </div>
      </div>
    </div>
  </section>);
};
    