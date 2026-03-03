"use client";

import * as React from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    return Math.floor(current).toLocaleString();
  });

  React.useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  return (
    <Counter
      value={value}
      suffix={suffix}
      prefix={prefix}
      duration={duration}
      className={className}
    />
  );
}

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  index: number;
}

export function StatCard({ value, label, suffix, prefix, index }: StatCardProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-[#7FA99B] mb-2">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </motion.div>
  );
}

interface StatsSectionProps {
  stats: Array<{ value: number; label: string; suffix?: string; prefix?: string }>;
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          prefix={stat.prefix}
          index={index}
        />
      ))}
    </div>
  );
}
