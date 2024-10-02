"use client";

import ServiceCard from './ServiceCard';
import Image from 'next/image';
import Fix from '@/assets/repairimg.png'

export default function Services() {

    const whatsappUrl = `https://wa.me/${"555185097273"}`;

    return (
        <div className='mt-4'>
            <section id='services' className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Nossos Serviços</h2>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            }
                            title="Reforma de Colchões"
                            description="Serviço especializado para restaurar o conforto e a qualidade dos seus colchões antigos."
                        />
                        <ServiceCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            }
                            title="Manutenção de Colchões"
                            description="Garantimos a manutenção regular para prolongar a vida útil do seu colchão e manter o conforto."
                        />
                        <ServiceCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                            </svg>
                            }
                            title="Odor removal"
                            description="Eliminate odors from sweat, pets, and other sources."
                        />
                    </div>
                    <section className="py-12">
                        <div className="max-w-7xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                            <div className="md:w-1/2 w-full">
                                <div className="relative w-full h-48 md:h-60">
                                    <Image
                                        src={Fix}
                                        alt="Refurbishing a mattress"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>

                            <div className="md:w-1/2 w-full">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Por que reformar seu colchão?</h2>
                                <p className="text-gray-600">
                                    A reforma regular pode estender a vida útil do seu colchão em 3 a 5 anos, economizando centenas de dólares. Ela também remove alérgenos e odores, proporcionando um ambiente de sono mais saudável.
                                </p>
                                <button
                                    className="mt-8 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 md:h-12 px-4 md:px-5 bg-[#3a75e4] text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em]"
                                    onClick={() => window.open(whatsappUrl, '_blank')}
                                >
                                    <span className="truncate">Solicite um orçamento</span>
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    )
}
