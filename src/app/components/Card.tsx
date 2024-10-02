"use client";

interface CardProps {
    title: string;
    content: string;
    imageUrl: string;
    text: string;
  }
  
  export default function Card({ title, content, imageUrl, text }: CardProps) {
    const whatsappUrl = `https://wa.me/${"555185097273"}`;

    return (
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="p-4 md:p-10">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 rounded-xl items-start justify-end px-4 pb-10 md:px-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${imageUrl})`
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.033em]">{title}</h1>
              <h2 className="text-white text-base md:text-lg font-normal leading-normal">{content}</h2>
            </div>
            <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 md:h-12 px-4 md:px-5 bg-[#3a75e4] text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em]"
            onClick={() => window.open(whatsappUrl, '_blank')}
        >
            <span className="truncate">{text}</span>
        </button>
          </div>
        </div>
      </div>
    );
  }