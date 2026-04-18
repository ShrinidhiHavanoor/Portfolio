import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronUp, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Cpu,
  Database,
  Layers,
  Server
} from 'lucide-react';
import profilePhoto from './assets/Me.jpg';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          SH
        </motion.div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Certifications'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [roleText, setRoleText] = useState("");
  const fullText = "Trainee Consultant @ Rakuten India";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setRoleText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background Gradient Flow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[25%] h-[25%] bg-blue-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-mono mb-4 tracking-widest uppercase text-sm"
          >
            Welcome to my world
          </motion.p>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 font-montserrat tracking-tighter text-white leading-none">
            Shrinidhi <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Havanoor
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 mb-8 font-light h-8 font-mono">
            {roleText}<span className="animate-pulse">|</span>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="mailto:shrinidhihavanoor@gmail.com" className="px-8 py-4 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl shadow-blue-500/20">
              <Mail size={18} /> Say Hello
            </a>
            <div className="flex gap-4 items-center">
              <a href="https://github.com/ShrinidhiHavanoor/" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:text-blue-400 hover:border-blue-400/50 transition-all"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/shrinidhi-havanoor-811a61243/" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:text-blue-400 hover:border-blue-400/50 transition-all"><Linkedin size={22} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex-1 relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-[2rem] rotate-6 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] rotate-3" />
            <img 
              src={profilePhoto} 
              alt="Shrinidhi Havanoor" 
              className="relative z-10 w-full h-full object-cover rounded-[2rem] border border-white/20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            I am a passionate <span className="text-blue-400 font-medium">Backend Developer</span> with a strong foundation in Java and Microservices. 
            Currently at <span className="text-purple-400 font-medium">Rakuten India</span>, I specialize in building reactive, high-performance systems.
          </p>
          <p className="text-gray-400 leading-relaxed">
            With a 9.04 CGPA from Sharnbasva University, I combine academic excellence with practical expertise in Quarkus, Spring Boot, and PostgreSQL. I thrive on solving complex architectural challenges and optimizing database performance.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
          {[
            { label: 'GPA', value: '9.04' },
            { label: 'Role', value: 'Consultant' },
            { label: 'Loc', value: 'Bengaluru' },
            { label: 'Java', value: 'Expert' }
          ].map(stat => (
            <div key={stat.label} className="bg-white/5 p-4 rounded-2xl text-center">
              <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <Briefcase className="text-blue-400" /> Work Experience
        </h2>
        
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="max-w-4xl mx-auto glass-card p-8 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl p-4 flex items-center justify-center border border-white/10">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rakuten.svg" 
                  alt="Rakuten" 
                  className="w-full h-auto brightness-0 invert" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Trainee Consultant</h3>
                <p className="text-blue-400 font-medium">Rakuten India</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Dec 2025 - Present</p>
              <p className="text-sm text-gray-500">Bengaluru, India</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-400 ml-4 list-disc">
            <li>Specializing in Microservices architecture using Quarkus and Reactive Programming (Mutiny/Panache).</li>
            <li>Implementing efficient SQL integrations and optimizing backend performance.</li>
            <li>Collaborating with cross-functional teams to deliver scalable enterprise solutions.</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Quarkus', 'Microservices', 'Reactive Programming', 'Java', 'SQL'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillGroups = [
    { name: 'Backend', icon: <Server size={20} />, skills: ['Java', 'Spring Boot', 'Quarkus', 'Microservices', 'RESTful APIs'] },
    { name: 'Data', icon: <Database size={20} />, skills: ['SQL', 'PostgreSQL', 'MySQL', 'JPA', 'Hibernate', 'JPA Specifications'] },
    { name: 'Architecture', icon: <Layers size={20} />, skills: ['Layered Architecture', 'Reactive Programming', 'Mutiny', 'Pagination'] },
    { name: 'Tools', icon: <Cpu size={20} />, skills: ['Git', 'Postman', 'Swagger', 'IntelliJ IDEA'] },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Core Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="text-blue-400 mb-4">{group.icon}</div>
              <h3 className="text-lg font-bold mb-4 text-white">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-white/5 text-xs rounded-md text-gray-300 hover:text-blue-400 hover:bg-white/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Divastra (Divine Clothing)",
      desc: "An elegant e-commerce backend built with Spring Boot and PostgreSQL. Focused on scalability and high performance.",
      tech: ["Spring Boot", "PostgreSQL", "Pagination", "REST API"],
      link: "https://github.com/ShrinidhiHavanoor/DiVastra.git"
    },
    {
      title: "SaaS Contact Form",
      desc: "Robust contract management system featuring layered architecture and MySQL integration for seamless data handling.",
      tech: ["Spring Data JPA", "MySQL", "Architecture", "Form Handling"],
      link: "https://github.com/ShrinidhiHavanoor/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p, idx) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group rounded-3xl"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 flex items-center justify-center">
                <Code2 size={64} className="text-blue-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white">{p.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 font-bold group-hover:gap-3 transition-all">
                  VIEW PROJECT <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const steps = [
    { year: "2021-2025", title: "B.E. Computer Science", inst: "Sharnbasva University", detail: "9.04 CGPA" },
    { year: "2019-2021", title: "12th Standard", inst: "Shree Guru PU College", detail: "85.16%" },
    { year: "2018-2019", title: "10th Standard", inst: "New Noble Boys High School", detail: "88.16%" },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center flex items-center justify-center gap-3">
          <GraduationCap className="text-purple-400" /> Education
        </h2>
        <div className="max-w-2xl mx-auto">
          {steps.map((s, idx) => (
            <div key={idx} className="flex gap-6 pb-12 relative last:pb-0">
              {idx !== steps.length - 1 && (
                <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
              )}
              <div className="w-6 h-6 rounded-full bg-blue-600 z-10 flex-shrink-0" />
              <div>
                <p className="text-blue-400 text-sm font-bold mb-1">{s.year}</p>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="text-gray-300">{s.inst}</p>
                <p className="text-gray-500 text-sm italic">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { title: "Java Programming Masterclass", issuer: "Udemy", color: "from-orange-500/20 to-red-500/20" },
    { title: "Spring Boot & Spring Framework", issuer: "Udemy", color: "from-green-500/20 to-emerald-500/20" },
    { title: "Spring Data JPA & Hibernate", issuer: "Udemy", color: "from-blue-500/20 to-cyan-500/20" },
  ];

  return (
    <section id="certifications" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center flex items-center justify-center gap-3">
          <Award className="text-yellow-400" /> Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certs.map((cert, idx) => (
            <motion.div 
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${cert.color} backdrop-blur-sm hover:border-white/20 transition-all group`}
            >
              <Award className="mb-4 text-white/50 group-hover:text-yellow-400 transition-colors" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-black/40">
    <div className="container mx-auto px-6 text-center">
      <p className="text-gray-500 text-sm mb-4">
        &copy; {new Date().getFullYear()} Shrinidhi Havanoor. Crafted with React & Tailwind.
      </p>
      <div className="flex justify-center gap-6 text-gray-400">
        <a href="https://github.com/ShrinidhiHavanoor/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/shrinidhi-havanoor-811a61243/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
        <a href="mailto:shrinidhihavanoor@gmail.com" className="hover:text-white transition-colors"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-gray-200 font-inter selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Footer />

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 bg-white text-black rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all z-50"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
