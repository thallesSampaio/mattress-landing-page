import Card from "./Card";

export default function Hero() {
  return (
    <div className="mt-6">
      <section className="px-4 md:px-40 flex flex-1 justify-center py-5">
        <Card
        title={"Durma melhor com colchões de qualidade superior"}
        content={"Fabricamos colchões com tecidos de alta qualidade e oferecemos serviços de reforma e manutenção para garantir o máximo conforto e durabilidade."}
        imageUrl={"https://cdn.usegalileo.ai/sdxl10/310cc463-dbcf-44bc-8567-753f4e4069ca.png"}
        text={"Solicite um orçamento"}></Card>
      </section>
    </div>
  );
}