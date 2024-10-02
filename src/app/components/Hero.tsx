export default function Hero() {
    return (
        <div>
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-6 text-center md:px-12 lg:px-24">
                    <h1 className="font-sans text-4xl font-bold text-gray-800 md:text-6xl">
                        Durma Melhor com Colchões de Qualidade Superior
                    </h1>
                    <p className="font-sans mt-4 text-lg text-gray-600">
                        Fabricamos colchões com tecidos de alta qualidade e oferecemos serviços de reforma e manutenção para garantir o máximo conforto e durabilidade.
                    </p>
                    <div className="mt-8 space-x-4">
                        <button className="font-sans rounded bg-blue-600 py-3 px-6 text-white font-semibold hover:bg-blue-700 transition">
                            Conheça nossos Produtos
                        </button>
                        <button className="font-sans rounded bg-gray-200 py-3 px-6 text-gray-800 font-semibold hover:bg-gray-300 transition">
                            Solicite um Orçamento
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}