"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.10]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#07090f]">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/[0.07] via-transparent to-orange-900/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={-15}
          gradient="from-red-500/[0.08]"
          className="-top-[5%] left-[-5%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={15}
          gradient="from-orange-500/[0.07]"
          className="top-[10%] right-[-5%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-rose-500/[0.06]"
          className="bottom-[20%] left-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.06]"
          className="bottom-[30%] right-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-red-400/[0.05]"
          className="top-[45%] left-[25%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/25 bg-red-500/10 text-red-400 text-xs font-semibold tracking-[2px] uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-blink" />
          {badge}
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="font-heading text-[clamp(56px,9vw,120px)] leading-none tracking-wide text-white mb-6"
        >
          {title1}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">
            {title2}
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-[clamp(15px,1.5vw,18px)] text-white/50 max-w-2xl mx-auto leading-relaxed font-light mb-10"
        >
          From AI engineers and cloud architects to TS/SCI-cleared defense
          professionals — we deliver qualified IT talent to federal agencies,
          financial institutions, and healthcare systems nationwide.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 bg-[#E8280B] text-white font-semibold text-sm tracking-wide hover:bg-[#ff4422] transition-colors"
            style={{ clipPath: "polygon(0 0,96% 0,100% 25%,100% 100%,4% 100%,0 75%)" }}
          >
            Request Talent →
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 border border-white/15 text-white/80 font-medium text-sm tracking-wide hover:border-white/30 hover:bg-white/5 transition-all"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-[#07090f]/60 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
