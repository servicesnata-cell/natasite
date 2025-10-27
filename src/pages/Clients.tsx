import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const clients = [
  {
    name: 'AutoDesk',
    logo: '/AutoDesk.svg',
    description:
      'Autodesk collaborates with Nata Consultancy Services to enhance digital design platforms, implementing cloud automation and AI-driven 3D modeling workflows.',
  },
  {
    name: 'CISCO',
    logo: '/Cisco.svg',
    description:
      'Partnering with Cisco to deliver robust network automation, cybersecurity, and intelligent infrastructure solutions across industries.',
  },
  {
    name: 'Dell Technologies',
    logo: '/Dell.svg',
    description:
      'Dell leverages Nata Consultancy’s cloud-native expertise for scalable infrastructure solutions, powering seamless business operations worldwide.',
  },
  {
    name: 'Johnson & Johnson',
    logo: '/JNJ.svg',
    description:
      'Collaborating with J&J to integrate digital healthcare technologies and data-driven insights that improve patient care globally.',
  },
  {
    name: 'Tesla',
    logo: '/Tesla.svg',
    description:
      'Supporting Tesla’s AI and IoT initiatives through intelligent analytics, cloud systems, and sustainable technology integration.',
  },
  {
    name: 'Walmart',
    logo: '/Walmart.svg',
    description:
      'Walmart partners with Nata Consultancy to optimize retail technology platforms, enhancing customer experiences through AI and automation.',
  },
];

export default function Clients() {
  useEffect(() => {
    const canvas = document.getElementById('network-bg') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const nodes: { x: number; y: number; dx: number; dy: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(400, window.innerHeight * 0.6);
      nodes.length = 0;
      for (let i = 0; i < 200; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.8,
          dy: (Math.random() - 0.5) * 0.8,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((a, i) => {
        a.x += a.dx;
        a.y += a.dy;
        if (a.x < 0 || a.x > canvas.width) a.dx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.dy *= -1;

        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,255,255,0.7)';
        ctx.arc(a.x, a.y, 3, 0, Math.PI * 2);
        ctx.fill();

        nodes.forEach((b, j) => {
          if (i !== j) {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 150) {
              ctx.strokeStyle = `rgba(0,150,255,${1 - dist / 150})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        });
      });
      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* --- Glowing Network Header --- */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <canvas id="network-bg" className="absolute inset-0"></canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <User size={64} className="text-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Clients</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building trusted partnerships with global leaders across industries
          </p>
        </div>
      </section>

      {/* --- Client List Section --- */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -200 : 200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* --- Logo --- */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl shadow-lg shadow-cyan-500/10">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-48 h-auto mx-auto object-contain transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.padding = '2rem';
                      img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        client.name
                      )}&background=164e63&color=fff&size=200&bold=true&format=svg`;
                    }}
                  />
                </div>
              </div>

              {/* --- Description --- */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {client.name}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA Footer Section --- */}
      <section className="py-24 bg-gray-900 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join Our <span className="text-cyan-400">Network</span> of Clients
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Partner with Nata Consultancy Services and transform your business with technology excellence.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
