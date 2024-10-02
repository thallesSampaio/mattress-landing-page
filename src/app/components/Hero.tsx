export default function Hero() {
    return (
        <div>
            <section className="px-4 md:px-40 flex flex-1 justify-center py-5">
  <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 rounded-xl items-start justify-end px-4 pb-10 md:px-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/310cc463-dbcf-44bc-8567-753f4e4069ca.png")'
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.033em]">
              Durma Melhor com Colchões de Qualidade Superior
            </h1>
            <h2 className="text-white text-base md:text-lg font-normal leading-normal">
              Fabricamos colchões com tecidos de alta qualidade e oferecemos serviços de reforma e manutenção para garantir o máximo conforto e durabilidade.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 md:h-12 px-4 md:px-5 bg-[#3aa0e4] text-[#0e161b] text-sm md:text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Orçamento</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}