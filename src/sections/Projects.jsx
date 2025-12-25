import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Netflix UI Clone",
    description:
      "Developed a high-fidelity Netflix UI clone featuring dynamic content rendering through TMDB API integration to fetch movie names and high-quality imagery. Utilizing React alongside HTML, CSS, and JavaScript, I built a responsive, mobile-first interface that mimics the original platform's professional design and interactive components. This project showcases my ability to manage real-time data and deliver a seamless, user-centric digital experience",
    image: "/projects/netflixclone.png",
    tags: ["React", "Html", "CSS","JavaScript"],
    link: "https://netflixclone-eight-beige.vercel.app/",
    github: "https://github.com/m-faizan21/Netflix-UI-Clone",
    
  },
  {
    title: "Kanban TO-DO",
    description:
      "Developed a modern, productivity-focused To-Do List application inspired by the Kanban methodology, featuring a highly interactive drag-and-drop interface. Built with HTML, CSS, and JavaScript, the application allows users to manage tasks across To-Do, Doing, and Done columns with smooth, real-time transitions. This project highlights my proficiency in implementing complex user interactions and efficient workflow visualizations while maintaining a clean, professional UI design.",
    image: "/projects/To-Do.png",
    tags: ["Html", "CSS","JavaScript"],
    link: "https://m-faizan21.github.io/ToDo-List/",
    github: "https://github.com/m-faizan21/ToDo-List",
    
  },
  {
    title: "Expense Tracker",
    description:
      "A web application that helps users track their expenses and manage their budget effectively.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "https://github.com/m-faizan21",
    
  },

  // {
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
  //   image: "/projects/project2.png",
  //   tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "AI Writing Assistant",
  //   description:
  //     "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
  //   image: "/projects/project3.png",
  //   tags: ["React", "OpenAI", "Python", "FastAPI"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Project Management Tool",
  //   description:
  //     "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
  //   image: "/projects/project4.png",
  //   tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
  //   link: "#",
  //   github: "#",
  // },
 
]




export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10"></div>

      {/* Section title */}
      <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider">Featured Work</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
          <span className="font-serif italic font-normal text-white">
            {""}
            make an impact.</span>
        </h2>
        <p className=" text-muted-foreground">
          Here are some of the projects I've worked on recently. Each project showcases my skills in web development and my ability to deliver high-quality solutions.
        </p>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay:`${(index + 1 * 100)}ms`}}>
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5"/>
                  </a>
                  <a href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="w-5 h-5"/>
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2 ">{project.tags.map((tag, tagIndex) =>(
                  <span key={tagIndex} className="px-4 py-1.5 rounded-full  bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                ))}

                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton >
            View All Projects
            <ArrowUpRight className="w-5 h-5"/>
          </AnimatedBorderButton>
        </div>
      </div>

      </section>
  );
};
    