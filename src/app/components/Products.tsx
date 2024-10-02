import Card from "./Card"

export default function Products() {
    return (
        <div className="mt-6">
            <section id="products" className="px-4 md:px-40 flex flex-wrap flex-1 justify-center py-5">
                <Card
                    title={"Colchões Premium"}
                    content={"Colchões de alta qualidade com tecnologia de suporte e conforto superior"}
                    imageUrl={"https://cdn.usegalileo.ai/sdxl10/429b7e4e-d220-41d5-9229-9b75c0408335.png"}
                    text={"Compre agora"}></Card>
                    <Card
                    title={"Travesseiros Ergonômicos"}
                    content={"Travesseiro que alinha a coluna e proporciona um sono reparador."}
                    imageUrl={"https://cdn.usegalileo.ai/sdxl10/b0854cd9-b4d1-44ee-9baa-6c9cb4708284.png"}
                    text={"Solicite um orçamento"}></Card>
            </section>
        </div>
    )
}