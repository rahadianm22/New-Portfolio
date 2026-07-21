'use client';

import { useEffect, useState } from 'react';

export function Footer() {
  const year = new Date().getFullYear();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Jakarta',
        })
      );
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="py-6 px-6 md:px-12"
      style={{
        backgroundColor: "#12151C",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Kiri: Hak Cipta */}
        <span
          className="text-xs"
          style={{
            fontFamily: "'Urbanist', sans-serif",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          © {year} Rahadian Maulana — All rights reserved.
        </span>

        {/* Tengah: Lokasi & Waktu Lokal Dinamis */}
        {time && (
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span
              className="text-xs"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.05em",
              }}
            >
              Tangerang, ID — {time} WIB
            </span>
          </div>
        )}

        {/* Kanan: Tech Stack Info */}
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "rgba(43,78,255,0.6)" }}
          />
          <span
            className="text-xs"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            Built with Next.js — Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}