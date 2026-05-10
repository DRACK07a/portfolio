import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Phone, Mail, Linkedin, X, Rocket, Copy, Check, ChevronDown } from 'lucide-react';

// --- Components ---

const DetailModal = ({ isOpen, onClose, title }: { isOpen: boolean; onClose: () => void; title: string }) => {
  const modalContent: Record<string, React.ReactNode> = {
    "pierwsze doświadczenia zawodowe": (
      <div className="space-y-6 text-black text-lg leading-relaxed">
        <p>
          Swoje doświadczenia zawodowe zbieram od piętnastego roku życia - pracowałem w ośmiu kompletnie innych miejscach, wykonywałem różne zadania. Pracowałem w wykończeniówce, w retailu, w gastronomii, w zaopatrzeniu i logistyce, sprzedązy B2C i B2B - każde z tych miejsc nauczyło mnie czegoś innego, ale wszystkie coś łączyło ze sobą - otwarta komunikacja i dbanie o efekty są tym, co odróżnia osobę skuteczną od nieskutecznej. Od tamtego czasu wartości te przyświecają mi w moich aktywnościach i projektach.
        </p>
        <p>
          Setki rozmów i konwersacji z różnymi klientami (sprzedaż bezpośrednia w gastronomii, branży modowej, ubezpieczeniach i cold outreach do klientów międzynarodowych w startupie roku) sprawiają, że potrafię komunikować się i dbać o relacje z wieloma typami osobowości.
        </p>
        <p>
          Te doświadczenia pokazał mi też, gdzie moja skuteczność spada - izolacja, praca jedynie z danymi działają na mnie, jak kryptonit.
        </p>
      </div>
    ),
    "projekty": (
      <div className="space-y-6 text-black text-lg leading-relaxed">
        <p>
          Nie samą pracą człowiek żyje - realizuje też projekty - w każdy wkładam serce i całą uwagę. Wiem, co to znaczy "porażka", "wycieńczenie", "dyscyplina".
        </p>
        <p>
          Między sierpniem, a grudniem 2025 tworzyłem jako współzałożyciel ShowOn Project - inicjatywę, której celem było zdemokratyzowaniem reklamy DOOH dla polskiego biznesu. 
          <br /><br />
          Przeprowadziliśmy kilkanaście sukcesywnych kampanii, min. z MiniMajkiem, Morele.net, Comebuytea i innymi podmiotami.
          <br /><br />
          Jedną z naszych kampanii zobaczyło 800 tys. osób, przy naprawdę groszowym nakładzie. W trakcie trwania projektu odezwałem się do ponad tysiąca klientów. Oprócz tego, pracowałem nad analizą rynku, stworzeniu oferty oraz strategii marketingowej wraz z jej implementacją. Projekt ten był też okazją, by współpracować w dynamicznym, zgranym zespole, koordynując zadania.
          <br /><br />
          Projekt został wyciszony ze względu na trudny rynek i moje skupienie na drugiej inicjatywie, którą żyłem.
        </p>
        <p>
          W kwietniu 2025 założyłem klub studencki - SGH Legal Club i prowadziłem go do maja 2026. 
          <br /><br />
          W trakcie roku prowadziłem finanse koła, pozyskałem partnera zewnętrznego oraz finansowanie w uproszczonym trybie środków publicznych - łącznie kilka tysięcy złotych. 
          <br /><br />
          Działalność w kole była okazją do organizacji, we współpracy z profesjonalistami, warsztatów o prawie spółek, w których uczestniczyło 40 osób. Oprócz tego zarządzałem 60cio osobową organizacją, koordynując i nadzorując prace i przebieg nad siedmioma wydarzeniami - od spotkań z praktykami, przez wizyty studyjne w sądach i instytucjach, po program job shadowingowy kończąc.
          <br /><br />
          Do tego dochodzi praca koncepcyjna, administracyjna, przygotowywanie strategii marketingowych i ich wykonanie.
          <br /><br />
          Projekt przekazałem dalej grupie najbardziej zaangażowanych członków - będzie to dla mnie okazja zostania dla nich wsparciem, "aniołem" - cieszę się tą perspektywą.
        </p>
        <p>
          W międzyczasie, na przełomie 2025 i 2026 brałem udział w pisaniu grantu Horizon ze środków unijnych na sześciocyfrowe kwoty - nic chyba nie zastąpi wglądu w unijne procedury, chociaż na wyniki jeszcze czekamy.
        </p>
        <div className="h-48 bg-brand-charcoal/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-brand-charcoal/10 mt-6">
          <span className="text-sm uppercase font-bold tracking-widest opacity-30 text-brand-charcoal">Miejsce na zdjęcie projektu</span>
        </div>
      </div>
    ),
    "inne osiągnięcia": (
      <div className="space-y-6 text-black text-lg leading-relaxed">
        <p>
          Kiedyś usłyszałem, że w życiu robisz dwa typy rzeczy: te, które inni widzą i doceniają oraz te, których nikt nie dostrzega - ich jest więcej i zazwyczaj są kluczowe. Trudno opisać smutek i frustrację, którą czuję, gdy widzę, że ktoś absolutnie nie widzi, ile trudu wymagała dana rzecz - radzę sobie z tym, oddając się pasjom i zainteresowaniom;)
        </p>
        <p>
          Podobno sport to zdrowie, ale dla mnie sport jest zdecydowanie czymś więcej - ruch i próba przebicia własnych wyników to idealny sposób na spędzanie czasu. Zresztą, jakiś czas temu przebiegłem okrągłe sto kilometrów - dawno się tak dobrze nie bawiłem.
        </p>
        <p>
          Gdy opada kurz, lubię poświęcić czas na refleksję nad tym, co się stało. Piszę, próbując uchwycić prawdziwy kształt rzeczywistości i własnego doświadczenia. Czytam książki chyba częściej, niż przeglądam internet - najbardziej fascynuje mnie to, jak nieugięci potrafimy być jako ludzie i jak wiele potrafimy stworzyć, zbudować. Chyba w tym odnajduję swoją inspirację - w nieposkromionym ludzkim duchu.
        </p>
        <div className="h-48 bg-brand-charcoal/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-brand-charcoal/10 mt-6">
          <span className="text-sm uppercase font-bold tracking-widest opacity-30 text-brand-charcoal">Miejsce na zdjęcie pasji</span>
        </div>
      </div>
    )
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brand-charcoal/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-brand-base p-10 rounded-[2rem] max-w-2xl w-full max-h-[90vh] shadow-2xl relative border border-brand-charcoal/10 flex flex-col"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-brand-charcoal hover:rotate-90 transition-transform z-10">
              <X size={28} />
            </button>
            <h3 className="text-4xl font-black mb-6 text-brand-charcoal uppercase tracking-tight pr-12">{title}</h3>
            <div className="overflow-y-auto pr-4 custom-scrollbar">
              {modalContent[title] || (
                <div className="space-y-4 text-brand-charcoal/80 text-lg">
                  <p>Tutaj znajdzie się treść dotycząca sekcji "{title}".</p>
                  <p>Możesz tutaj dodać szczegółowy opis, zdjęcia, linki i inne materiały, które chcesz zaprezentować.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] md:w-auto transform-gpu will-change-transform">
      <div className="bg-brand-charcoal/90 backdrop-blur-md px-8 py-3 rounded-full flex gap-8 justify-center items-center shadow-2xl border border-brand-base/10">
        <a href="#hero" className="text-brand-base/80 hover:text-brand-base transition-colors text-sm md:text-base">Start</a>
        <a href="#main" className="text-brand-base/80 hover:text-brand-base transition-colors text-sm md:text-base">Projekty</a>
        <a href="#skills" className="text-brand-base/80 hover:text-brand-base transition-colors text-sm md:text-base">Umiejętności</a>
        <a href="#cta" className="text-brand-base/80 hover:text-brand-base transition-colors text-sm md:text-base">Kontakt</a>
      </div>
    </nav>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  
  const email = "kontakt@stachu.pl";
  const phone = "+48 123 456 789";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email!", err);
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy phone!", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-charcoal/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-brand-base p-8 rounded-3xl max-w-md w-full shadow-2xl relative border border-brand-charcoal/10"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-brand-charcoal hover:rotate-90 transition-transform">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-6 text-brand-charcoal">Kontakt</h3>
            <div className="space-y-6">
              <div 
                className="flex items-center gap-4 group cursor-pointer"
                onClick={copyPhone}
              >
                <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-brand-base relative">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-charcoal font-medium group-hover:text-brand-blue transition-colors">{phone}</span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {phoneCopied ? (
                      <>
                        <Check size={12} className="text-green-600" />
                        <span className="text-[10px] uppercase font-bold text-green-600">Skopiowano!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} className="text-brand-charcoal/40" />
                        <span className="text-[10px] uppercase font-bold text-brand-charcoal/40">Kliknij, aby skopiować</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div 
                className="flex items-center gap-4 group cursor-pointer"
                onClick={copyEmail}
              >
                <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-brand-base relative">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-charcoal font-medium group-hover:text-brand-blue transition-colors">{email}</span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {emailCopied ? (
                      <>
                        <Check size={12} className="text-green-600" />
                        <span className="text-[10px] uppercase font-bold text-green-600">Skopiowano!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} className="text-brand-charcoal/40" />
                        <span className="text-[10px] uppercase font-bold text-brand-charcoal/40">Kliknij, aby skopiować</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#0077b5]/10 p-3 rounded-xl text-[#0077b5]">
                  <Linkedin size={20} />
                </div>
                <a 
                  href="https://linkedin.com/in/stasiek-sobocinski" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-brand-charcoal font-medium underline decoration-brand-blue/30 hover:decoration-brand-blue transition-all"
                >
                  Kliknij tutaj
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

const RocketAnimation = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-1 pointer-events-none z-[1] overflow-hidden">
      <motion.div
        key={key}
        initial={{ x: '-120%', y: '40%', scale: 1, opacity: 0, rotate: 0 }}
        animate={{ 
          x: '120%', 
          y: '20%',
          scale: 0.1,
          opacity: [0, 0.4, 0.4, 0.4, 0.4,0.4,0.4, 0.4, 0.4,0.4,0.4, 0.4, 0.4, 0.4,0.4,0.4, 0.4, 0.4,0.4,0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.2,0.2,0.2, 0],
          rotate: 0
        }}
        transition={{ 
          duration:10, 
          ease: "linear"
        }}
        className="absolute w-64 h-64"
      >
         <img src="/iss.svg"  className="w-full h-full object-contain filter invert brightness-200" />
      </motion.div>
    </div>
  );
};

const SpaceBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax offsets for different layers - differentiated for depth
  // Moon moves slightly
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  // Stars are very far away (slowest)
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  // Twinkling is middle (medium)
  const twinklingY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  // Clouds are closest (fastest)
  const cloudsY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="background-container">
      <motion.div style={{ y: starsY }} className="stars" />
      <motion.div style={{ y: twinklingY }} className="absolute inset-0">
        <div className="twinkling" />
      </motion.div>
      <motion.img 
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" 
        alt="Moon" 
        style={{ y: moonY }}
        className="fixed right-5 top-[15%] h-[40vh] w-[40vh] md:h-[70vh] md:w-[70vh] z-[1] pointer-events-none object-contain"
      />
      <motion.div style={{ y: cloudsY }} className="absolute inset-0">
        <div className="clouds" />
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDetail, setActiveDetail] = useState<{ isOpen: boolean; title: string }>({ isOpen: false, title: '' });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  
  const mainItems = [
    { label: "pierwsze doświadczenia zawodowe", id: 1 },
    { label: "projekty", id: 2 },
    { label: "inne osiągnięcia", id: 3 }
  ];

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play failed", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="relative min-h-screen text-brand-base">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue origin-[0%] z-[2000]"
        style={{ scaleX: scrollYProgress }}
      />
      <RocketAnimation />
      <SpaceBackground />
      <Navbar />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <DetailModal 
        isOpen={activeDetail.isOpen} 
        onClose={() => setActiveDetail({ ...activeDetail, isOpen: false })} 
        title={activeDetail.title} 
      />

      {/* --- HERO PAGE --- */}
      <section id="hero" className="relative h-screen flex flex-col overflow-hidden">
        <div className="relative z-10 flex-1 flex flex-col justify-end p-8 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="flex-1 w-full max-w-4xl -translate-x-[5%] md:translate-x-0">
              <div className="inline-block bg-brand-charcoal/40 backdrop-blur-md px-6 py-2 rounded-[2rem] mb-4 border border-brand-base/10 shadow-lg">
                <div className="text-lg md:text-2xl font-normal text-brand-base/90">
                  Hej! "Stachu" to projekt w ciągłym rozwoju. Zobacz, czym jest teraz;)
                </div>
              </div>
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-6xl sm:text-8xl md:text-[10vw] font-black leading-none text-brand-base tracking-normal"
              >
                <div className="inline-block bg-brand-charcoal/40 backdrop-blur-md px-8 py-4 rounded-[3rem] border border-brand-base/10 shadow-xl w-[336px] text-left text-[53px]">
                  Stasiek Sobociński
                </div>
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-48 md:w-72 aspect-[9/16] bg-brand-base/10 rounded-[40px] border-4 border-brand-blue/40 overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl mb-12 md:mb-0 md:translate-x-[15%] lg:-translate-x-[45%] lg:-translate-y-[10%] z-10 backdrop-blur-sm cursor-pointer"
            >
              <video
                ref={videoRef}
                src="/hero_video.mp4"
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onMouseEnter={() => document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' })}
          onClick={() => document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer lg:bottom-12"
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-brand-base flex flex-col items-center"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] mb-2 opacity-50 font-intertight">Przesuń</span>
            <ChevronDown size={32} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </section>

      {/* --- MAIN PAGE --- */}
      <section 
        id="main" 
        className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-caveat text-brand-base text-center max-w-2xl px-4 z-20 pointer-events-none drop-shadow-lg"
        >
          <div className="bg-brand-charcoal/40 backdrop-blur-md px-8 py-4 rounded-[2.5rem] border border-brand-base/10">
            Niektórzy zbierają kamienie. Ja zbieram doświadczenia - nigdy nie mówię "nie", co najwyżej "nigdy więcej"
          </div>
        </motion.div>

        <div className="w-full max-w-6xl mt-[60rem] md:mt-[20rem] relative text-brand-base z-30">
          <div className="flex flex-col gap-12 items-start pl-4 md:pl-0 -translate-x-[10%] md:translate-x-0">
            {mainItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 20 }}
                onClick={() => setActiveDetail({ isOpen: true, title: item.label })}
                className="flex items-center gap-8 cursor-pointer group"
              >
                <div className="relative w-20 h-20 flex-shrink-0">
                  {/* Rocket Image from attachment - if not found, use icon */}
                  <div className="w-full h-full bg-brand-base/10 rounded-2xl flex items-center justify-center overflow-hidden border border-brand-base/20 group-hover:border-brand-blue/50 transition-colors shadow-lg">
                    <img 
                      src="/rocket.png" 
                      alt="Rocket" 
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement?.classList.add('p-4');
                      }}
                    />

                  </div>
                </div>
                <div className={`bg-brand-charcoal/40 backdrop-blur-md px-6 py-2 rounded-[2rem] border border-brand-base/10 hover:bg-brand-charcoal/60 transition-all -translate-x-[5%] ${item.id === 1 || item.id === 3 ? 'w-[200px]' : ''}`}>
                  <span className="font-mono text-brand-base leading-tight group-hover:text-brand-blue text-[20px]">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS PAGE --- */}
      <section id="skills" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start p-8 lg:pl-[10%] lg:gap-[40px] overflow-hidden">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-none w-full lg:w-auto max-w-lg text-left mb-8 md:mb-16 lg:mb-0 lg:order-2 -translate-x-[10%] md:translate-x-0"
        >
          <div role="heading" aria-level={2} className="text-[52px] lg:text-9xl font-black text-brand-base leading-none drop-shadow-xl">
            <div className="inline-block bg-brand-charcoal/40 backdrop-blur-md px-8 py-4 rounded-[3rem] border border-brand-base/10 shadow-xl w-[350px] leading-[52px] text-[48px] text-left">
              Moje umiejętności
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-none w-full lg:w-auto flex justify-center lg:justify-end lg:order-1"
        >
          <div className="notebook-paper w-full max-w-lg min-h-[500px] p-12 relative rotate-[-2deg] border border-black/5 shadow-2xl">
             <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-red-200" />
             <ul className="space-y-6 pt-4 list-none">
                {[
                  { 
                    title: "Komunikacja i relacje", 
                    hint: "aktywne słuchanie, nawiązywanie i utrzymywanie relacji, praca zespołowa, podstawy sprzedaż i negocjacji" 
                  },
                  { 
                    title: "Języki", 
                    hint: "angielski C1, certyfikat CAE, niemiecki B1/B2" 
                  },
                  { 
                    title: "Analiza i planowanie", 
                    hint: "analiza rynku, przygotowywanie planów operacyjnych i strategicznych, ich implementacja i bieżące dostosowywanie" 
                  },
                  { 
                    title: "Przywództwo", 
                    hint: "branie odpowiedzialności za działania, wyznaczanie zadań, wykonanie i ewaluacja" 
                  },
                  { 
                    title: "Techniczne", 
                    hint: "wykorzystanie w pracy możliwości AI, budowanie aplikacji i stron internetowych potrzebnych ad hoc" 
                  }
                ].map((skill, idx) => (
                  <motion.li 
                    key={idx}
                    className="relative group cursor-help ml-4"
                  >
                    <span className="font-caveat text-2xl lg:text-3xl text-black block">
                      — {skill.title}
                    </span>
                    <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-[60] bg-brand-charcoal text-brand-base p-4 rounded-xl shadow-xl w-64 lg:w-80 text-sm lg:text-base font-sans border border-brand-base/10">
                      {skill.hint}
                    </div>
                  </motion.li>
                ))}
             </ul>
          </div>
        </motion.div>
      </section>

      {/* --- CTA SECTION --- */}
      <section id="cta" className="relative min-h-[60vh] flex flex-col items-center justify-center p-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10 -translate-y-[150%] md:-translate-y-[200%]"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-12 py-5 bg-brand-base text-brand-charcoal rounded-2xl text-2xl font-bold overflow-hidden transition-all hover:pr-16 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-base">Kontakt</span>
            <div className="absolute inset-0 bg-[#36454f] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 h-10 bg-[#36454f] flex items-center justify-center p-8 z-20">
           <div className="font-intertight text-3 md:text-5 text-brand-base text-center">
               Created by ST4CHU, 2026
           </div>
        </footer>
      </section>
    </div>
  );
}
