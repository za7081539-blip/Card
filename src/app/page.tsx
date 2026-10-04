"use client";

import Image from "next/image";
import { Heart, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] flex items-center justify-center p-5">
      <div className="w-full max-w-[294px] rounded-[22px] border border-[#d0d0d0] bg-white p-[14px] shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images (5).jpg"
              alt="Joseph Anderson"
              width={43}
              height={43}
              className="h-[43px] w-[43px] rounded-full object-cover"
            />

            <div>
              <h2 className="text-[14px] font-semibold text-[#222]">
                Joseph Anderson
              </h2>
              <p className="text-[11px] text-[#999]">
                Posted 2h ago
              </p>
            </div>
          </div>

          {/* Like button */}
          <button
            className="flex h-[32px] w-[32px] items-center justify-center rounded-[9px]
                       border border-[#d5d5d5] bg-white"
          >
            <Heart
              size={16}
              strokeWidth={2}
              className="fill-[#222] text-[#222]"
            />
          </button>
        </div>

        {/* Job title */}
        <div className="mt-5">
          <h1 className="text-[16px] font-medium leading-[1.35] text-[#161616]">
            Looking for SM manager to create
            posts across various platforms
          </h1>

          <p className="mt-1 truncate text-[12px] text-[#999]">
            We're seeking a skilled Social Media Manager to...
          </p>
        </div>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["SMM", "Growth Strategy", "Startup", "Brand"].map((tag) => (
            <span
              key={tag}
              className="rounded-[4px] bg-[#e9eef5] px-2 py-1
                         text-[11px] font-medium text-[#34495e]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-[#d5d5d5]" />

        {/* Salary */}
        <div>
          <p className="text-[27px] font-medium tracking-[-1px] text-[#111]">
            $150 - $200/h
          </p>

          <p className="mt-0.5 text-[11px] text-[#999]">
            Hourly rate · 100% Remote
          </p>
        </div>

        {/* Apply button */}
        <button
          className="mt-5 flex h-[55px] w-full items-center justify-center
                     gap-2 rounded-[15px] bg-[#3288e9] text-[16px] font-medium
                     text-white transition hover:bg-[#247bdc] active:scale-[0.98]"
        >
          <Zap size={20} fill="white" strokeWidth={2.5} />
          Apply
        </button>
      </div>
    </main>
  );
}
