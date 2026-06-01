import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight, FolderGit2, CheckCircle2 } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  link: string;
  tech: string[];
}

export default function RecentWork() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projectsData: Project[] = [
    {
      id: 1,
      name: "Allurebeauty",
      category: "Cosmetics & Luxury Shopify Setup",
      image: "/src/assets/images/regenerated_image_1780318526517.jpg",
      link: "#",
      tech: ["Shopify Plus", "Liquid", "Tailwind CSS", "SEO Schema"]
    },
    {
      id: 2,
      name: "Saeed Ghani",
      category: "Herbal Cosmetics Store Migration",
      image: "/src/assets/images/regenerated_image_1780318526517.jpg",
      link: "#",
      tech: ["Shopify Setup", "Custom Apps", "Speed Indexing"]
    },
    {
      id: 3,
      name: "Rollie Nation",
      category: "Extreme Conversion Shoe Retailer",
      image: "/src/assets/images/regenerated_image_1780318526517.jpg",
      link: "#",
      tech: ["Headless Commerce", "React", "Store speed Optimization"]
    },
    {
      id: 4,
      name: "Wood Action",
      category: "Sleek Custom Woodcraft Portal",
      image: "/src/assets/images/regenerated_image_1780318526517.jpg",
      link: "#",
      tech: ["Theme Design", "3D Models Integration"]
    },
    {
      id: 5,
      name: "Eshifa",
      category: "Online Pharmacy & API Gateway",
      image: "/src/assets/images/regenerated_image_1780318526517.jpg",
      link: "#",
      tech: ["Custom Checkout", "NodeJS Proxy", "Health App integration"]
    },
    {
      id: 6,
      name: "Fruits Sabzi",
      category: "Local Organic Grocery Delivery Express",
      image: "/src/assets/images/regenerated_image_1780318526517.jpg",
      link: "#",
      tech: ["Logistics Automation", "Shopify POS", "Map Integrations"]
    },
    {
      id: 7,
      name: "Apollo",
      category: "High Tech Wearables & Accessories",
      image: "/src/assets/images/regenerated_image_1780318526517.jpg",
      link: "#",
      tech: ["Shopify Liquid v2", "Custom Section Engine", "Figma To Code"]
    },
    {
      id: 8,
      name: "Home Store",
      category: "Elegant Bed Sheets & Home Decoration",
      image: "/src/assets/images/regenerated_image_1780318526517.jpg",
      link: "#",
      tech: ["Premium Store Theme", "UX Audit", "99 Speed Score"]
    }
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-28 bg-[#000000] overflow-hidden px-6 border-b border-white/5"
    >
      {/* Background spotlights */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-[#00E5FF]/5 filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-[#FF2D92]/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Line Underline Animation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h4 className="font-sans font-black text-xs tracking-widest text-[#FFD600] uppercase mb-4">
              CASE STUDIES & LAUNCHES
            </h4>
            <div className="relative inline-block group">
              <h2 className="font-sans font-extrabold text-[2.5rem] sm:text-[3.2rem] leading-tight text-white">
                OUR RECENT WORK
              </h2>
              {/* Heading underline slide animation */}
              <span className="absolute bottom-0 left-0 w-1/3 h-[4px] bg-gradient-to-r from-[#FFD600] to-[#FF2D92] rounded transition-all duration-700 group-hover:w-full" />
            </div>
          </div>
          <div>
            <p className="text-white/50 text-xs sm:text-sm font-medium tracking-wide max-w-sm">
              Explore our real, production-ready Shopify releases. Fast, fully responsive stores constructed for long term commercial scalability.
            </p>
          </div>
        </div>

        {/* 4-col Desktop / 2-col Tablet / 1-col Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Global metrics footer of portfolio */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass border border-white/10 flex flex-wrap gap-8 items-center justify-around text-center">
          <div className="flex flex-col">
            <span className="font-sans font-black text-3xl text-[#FFD600]">99%</span>
            <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">AVERAGE SPEED SCORE</span>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
          <div className="flex flex-col">
            <span className="font-sans font-black text-3xl text-[#FF2D92]">200M+</span>
            <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">CLIENT COMMERCE DRIVEN</span>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
          <div className="flex flex-col">
            <span className="font-sans font-black text-3xl text-[#00E5FF]">100%</span>
            <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">ON-TIME DELIVERY</span>
          </div>
        </div>

      </div>
    </section>
  );
}

/* Individual Project Card with hover overlay slide, 5deg tilt, and bouncy red arrows */
function ProjectCard({ project, index }: { project: Project; index: number; key?: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-xl overflow-hidden bg-zinc-950 aspect-[4/5] group border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        /* Hover card tilts 5deg as requested */
        transform: isHovered ? 'rotate(4deg) scale(1.02)' : 'rotate(0deg) scale(1)',
        boxShadow: isHovered ? '0 12px 30px rgba(255, 45, 146, 0.25)' : 'none',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s',
      }}
    >
      {/* Background Image zooming 1.1 */}
      <img
        src={project.image}
        alt={project.name}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Static dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

      {/* Bottom Red Label Bar as requested: "Each project card: image placeholder with dark overlay, red label bar at bottom" */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[5px] bg-[#FF2D92] transition-colors duration-300"
        style={{
          boxShadow: isHovered ? '0 0 10px #FF2D92' : 'none'
        }}
      />

      {/* Hover action overlay slides up on hover:
          "Hover: overlay slides up revealing project name and View Case Study button, image zooms, red arrows bounce up and down, card tilts 5deg" */}
      <div
        className={`absolute inset-x-0 bottom-0 bg-black/90 p-5 flex flex-col justify-end transition-all duration-500 ease-out border-t border-white/5 ${
          isHovered ? 'h-full opacity-100' : 'h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col gap-3 justify-end h-full">
          {/* Visual indicators */}
          <div className="flex items-center gap-1.5 text-[#FF2D92] font-mono text-[9px] font-semibold tracking-wider">
            <CheckCircle2 className="w-3 h-3 text-[#FF2D92]" />
            <span>AUTHENTIC ARCHITECTURE</span>
          </div>

          <h3 className="font-sans font-black text-2xl text-white tracking-tight">
            {project.name}
          </h3>
          <p className="font-sans text-xs text-white/70 leading-relaxed">
            {project.category}
          </p>

          {/* Bullet metrics features */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[9px] font-mono bg-zinc-900 border border-white/10 px-2 py-0.5 rounded text-white/50">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4">
            {/* View Case Study Button */}
            <button className="flex items-center gap-1.5 bg-gradient-to-r from-[#FF2D92] to-[#7B2FF7] px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase font-sans tracking-wide text-white hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-black transition-all cursor-pointer">
              View Case Study
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Bouncing red arrows: "red arrows bounce up and down" */}
            <div className="flex flex-col gap-0.5 items-center justify-center animate-bounce mr-1">
              <span className="w-1.5 h-1.5 border-t-2 border-r-2 border-[#FFD600] rotate-45 transform" />
              <span className="w-1.5 h-1.5 border-t-2 border-r-2 border-[#FF2D92] rotate-45 transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
