"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/20 text-slate-800 md:h-screen md:overflow-hidden select-none">
      
      {/* Background Decorations */}
      {/* Yellow blur circle top-left */}
      <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-yellow-200/35 blur-[100px] md:blur-[120px] pointer-events-none z-0" />
      
      {/* Blue blur circle bottom-right */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-blue-200/35 blur-[100px] md:blur-[120px] pointer-events-none z-0" />
      
      {/* Dotted Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-40 pointer-events-none z-0" />

      {/* Decorative Sparkles & Lightning icons (SVGs) */}
      <div className="absolute top-[20%] left-[5%] animate-pulse opacity-50 hidden md:block z-0">
        <svg className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M19 9h-6a1 1 0 0 1-1-1V3a1 1 0 0 0-1.7-.7l-9 10A1 1 0 0 0 2 15h6a1 1 0 0 1 1 1v5a1 1 0 0 0 1.7.7l9-10A1 1 0 0 0 19 9Z" />
        </svg>
      </div>
      <div className="absolute bottom-[25%] left-[45%] animate-bounce opacity-40 hidden md:block z-0" style={{ animationDuration: '4s' }}>
        <svg className="w-6 h-6 text-blue-400 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" />
        </svg>
      </div>
      <div className="absolute top-[15%] right-[35%] opacity-40 animate-pulse hidden md:block z-0" style={{ animationDuration: '3s' }}>
        <svg className="w-10 h-10 text-yellow-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div className="absolute bottom-[15%] right-[5%] opacity-50 animate-bounce hidden md:block z-0" style={{ animationDuration: '6s' }}>
        <svg className="w-8 h-8 text-blue-300 fill-current" viewBox="0 0 24 24">
          <path d="M19 9h-6a1 1 0 0 1-1-1V3a1 1 0 0 0-1.7-.7l-9 10A1 1 0 0 0 2 15h6a1 1 0 0 1 1 1v5a1 1 0 0 0 1.7.7l9-10A1 1 0 0 0 19 9Z" />
        </svg>
      </div>

      {/* Header Navigation */}
      <header className="relative w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-yellow-400 p-[2px] shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
              {/* Pokeball inner pattern */}
              <div className="w-full h-1/2 bg-red-500 border-b border-slate-800" />
              <div className="absolute w-3 h-3 bg-white border border-slate-800 rounded-full z-10" />
            </div>
          </div>
          <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-yellow-500 bg-clip-text text-transparent">
            포켓몬 탐험대
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md p-1.5 rounded-full border border-slate-200/50 shadow-sm">
          <a
            href="#"
            className="px-5 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300"
          >
            포켓몬 소개
          </a>
          <a
            href="/dogam"
            className="px-5 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300"
          >
            포켓몬 도감
          </a>
          <a
            href="#"
            className="px-6 py-2 text-sm font-bold rounded-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 border border-yellow-300"
          >
            모험 시작
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm text-slate-700 hover:text-blue-600 active:scale-95 transition-all"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-[75px] left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-lg border border-slate-200/80 shadow-xl flex flex-col gap-3 md:hidden z-50 animate-[fade-in_0.3s_ease-out_forwards]">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-bold rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
            >
              포켓몬 소개
            </a>
            <a
              href="/dogam"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-bold rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
            >
              포켓몬 도감
            </a>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3 text-center text-base font-black rounded-xl bg-yellow-400 text-blue-950 shadow-md border border-yellow-300"
            >
              모험 시작
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-6 py-6 md:py-0 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 lg:gap-20 z-10">
        
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 text-center md:text-left items-center md:items-start z-10">
          
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 shadow-sm animate-[fade-in_1s_ease-out_forwards] opacity-0">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
              Pokemon Adventure
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.2] text-slate-900 tracking-tight animate-[fade-in_1s_ease-out_0.3s_forwards] opacity-0">
            오늘,{" "}
            <span className="relative inline-block px-4 py-2 my-1 mx-1 text-blue-600 bg-yellow-100/90 rounded-2xl border-[3px] border-yellow-300 rotate-[-1.5deg] shadow-sm">
              어떤 포켓몬
            </span>
            을 <br className="hidden sm:inline" />
            만나 볼래?
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-medium animate-[fade-in_1s_ease-out_0.6s_forwards] opacity-0">
            서로 다른 모습과 특별한 능력을 가진 포켓몬을 만나 보세요.{" "}
            <br className="hidden lg:inline" />
            새로운 포켓몬과 함께 신나는 모험을 시작해요!
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center animate-[fade-in_1s_ease-out_0.6s_forwards] opacity-0 mt-2">
            <button className="w-full sm:w-auto px-8 py-4 text-base font-black rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.05] active:scale-[0.98] active:shadow-md transition-all duration-300 flex items-center justify-center gap-2 border-b-4 border-blue-800 cursor-pointer">
              <span>포켓몬 만나기</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 text-base font-black rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-blue-950 shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/20 hover:scale-[1.05] active:scale-[0.98] active:shadow-md transition-all duration-300 flex items-center justify-center gap-2 border-b-4 border-yellow-600 border-x border-t border-yellow-300 cursor-pointer">
              <span>포켓몬 알아보기</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Image Card */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-10 animate-[fade-in_1s_ease-out_0.3s_forwards] opacity-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] aspect-square rounded-[36px] p-6 bg-white/85 backdrop-blur-md shadow-2xl border-4 border-yellow-300 flex items-center justify-center animate-float group hover:border-blue-400 transition-colors duration-500">
            
            {/* Background circle behind Pikachu in card */}
            <div className="absolute inset-4 rounded-[28px] bg-gradient-to-tr from-yellow-50 via-amber-50 to-blue-50 -z-10 group-hover:from-blue-50 group-hover:to-yellow-50 transition-all duration-500" />
            
            {/* Soft decorative shadow wrapper */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
              <Image
                src="/pokemon-hero.jpg"
                alt="포켓몬 이미지"
                fill
                priority
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 340px, (max-width: 1024px) 400px, 440px"
              />
            </div>
            
            {/* Badge overlay on image */}
            <div className="absolute -bottom-4 -right-4 bg-white border-4 border-yellow-300 group-hover:border-blue-400 transition-colors duration-500 px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-1.5 rotate-[3deg] z-20">
              <span className="text-sm font-extrabold text-blue-900">Pikachu!</span>
              <span className="text-yellow-500 font-bold">⚡</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer / Copyright bar */}
      <footer className="relative w-full max-w-7xl mx-auto px-6 py-4 text-center text-xs font-semibold text-slate-400 z-10">
        &copy; {new Date().getFullYear()} 포켓몬 탐험대. All Rights Reserved.
      </footer>
    </div>
  );
}
