"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RefreshCcw } from "lucide-react";

// --- LOGIC DATABASE ---
// We map specific answers to specific products
const recommendations = {
  Fresh: "Oceanic Surge",
  Calm: "Azure Depth",
  Romantic: "Velvet Blush",
  Bold: "Ember Wood",
  Energetic: "Solaris",
};

const questions = [
  {
    id: 1,
    text: "How do you want to feel?",
    options: [
      { label: "Revitalized & Awake", value: "Fresh" },
      { label: "Calm & Centered", value: "Calm" },
      { label: "Soft & Loved", value: "Romantic" },
      { label: "Bold & Mysterious", value: "Bold" },
    ],
  },
  {
    id: 2,
    text: "Pick your element.",
    options: [
      { label: "Water", value: "Calm" },
      { label: "Fire", value: "Bold" },
      { label: "Air", value: "Fresh" },
      { label: "Light", value: "Energetic" },
    ],
  },
  {
    id: 3,
    text: "Where are you going?",
    options: [
      { label: "A Date Night", value: "Romantic" },
      { label: "Important Meeting", value: "Bold" },
      { label: "Sunday Brunch", value: "Energetic" },
      { label: "Meditation", value: "Calm" },
    ],
  },
];

export default function QuizPage() {
  const [step, setStep] = useState(0); // 0 = Intro, 1-3 = Questions, 4 = Result
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    // Simple logic: Find the most frequent answer or just use the last one for simplicity
    // For this template, we will prioritize the "Mood" (first answer) to keep it reliable
    const dominantMood = finalAnswers[0];
    const productName = recommendations[dominantMood] || "Oceanic Surge";

    // Find image/price details based on name
    // (In a real app, import this from a shared data file)
    const productData = {
      "Oceanic Surge": {
        img: "/images/product-1.jpg",
        price: "$145",
        desc: "The Crash of the Waves",
      },
      "Azure Depth": {
        img: "/images/product-2.jpg",
        price: "$180",
        desc: "Mystery of the Deep",
      },
      "Velvet Blush": {
        img: "/images/product-3.jpg",
        price: "$120",
        desc: "Softness & Silk",
      },
      "Ember Wood": {
        img: "/images/product-4.jpg",
        price: "$160",
        desc: "Earth & Fire",
      },
      Solaris: {
        img: "/images/product-5.jpg",
        price: "$135",
        desc: "Golden Hour Glow",
      },
    }[productName];

    setResult({ name: productName, ...productData });
    setStep(4); // Show Result
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-midnight pt-20 flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-2xl w-full relative z-10">
        <AnimatePresence mode="wait">
          {/* STEP 0: INTRO */}
          {step === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-4">
                The Ritual
              </h2>
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">
                Find Your Aura
              </h1>
              <p className="text-white/60 text-lg font-light mb-12 max-w-md mx-auto">
                Answer three simple questions to discover the scent that
                perfectly aligns with your energy.
              </p>
              <button
                onClick={() => setStep(1)}
                className="px-8 py-4 bg-white text-midnight font-bold uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                Begin Analysis
              </button>
            </motion.div>
          )}

          {/* STEP 1-3: QUESTIONS */}
          {step > 0 && step <= questions.length && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <span className="text-white/40 text-xs uppercase tracking-widest">
                  Question {step} of 3
                </span>
                <span className="text-accent text-xs uppercase tracking-widest">
                  AURA Quiz
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-white mb-10 text-center">
                {questions[step - 1].text}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[step - 1].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.value)}
                    className="group p-6 glass-panel border border-white/10 hover:border-accent text-left transition-all duration-300 flex justify-between items-center"
                  >
                    <span className="text-white group-hover:text-accent tracking-widest uppercase text-sm">
                      {option.label}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-white/20 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: RESULT */}
          {step === 4 && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center w-full"
            >
              <span className="text-accent text-xs uppercase tracking-[0.3em] mb-6 block">
                Your Match
              </span>

              <div className="relative w-64 h-80 mx-auto mb-8">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
                <Image
                  src={result.img}
                  alt={result.name}
                  fill
                  className="object-contain relative z-10"
                />
              </div>

              <h2 className="font-serif text-5xl text-white mb-2">
                {result.name}
              </h2>
              <p className="text-white/60 uppercase tracking-widest text-xs mb-8">
                {result.desc}
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href={`/product/${result.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`} // Slug matches name in our logic
                  className="px-8 py-4 bg-accent text-midnight font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
                >
                  Shop Now - {result.price}
                </Link>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCcw size={16} /> Retake
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
