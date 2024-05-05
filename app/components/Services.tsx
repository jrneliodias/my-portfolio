import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PanelsTopLeft } from "lucide-react";
import Image from "next/image";

export default function Services() {
    return (

        <section id="Services" className="flex flex-col items-center px-20 bg-gray-900 min-h-screen text-white p-10">
            <div className="flex flex-col gap-5 justify-start items-center w-full lg:gap-10 flex-1 ">
                <h1 className="font-bold text-4xl uppercase">Services</h1>
                <div className="flex h-full gap-4">
                    <Card className="flex-1 hover:bg-slate-700/80 bg-slate-700  text-white">
                        <div className="flex-1">
                            <Image src={"/website-program-svgrepo-com.svg"} height={0} width={0} alt="whatsapp" className="h-auto w-11/12 p-6 mx-auto " />
                        </div>
                        <CardHeader>
                            <CardTitle className="">
                                Aplicação de Página Única (SPA)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Desenvolvo web apps responsivos como Landing pages, lojas virtuais ou Dashboards. Transforme sua visão digital em realidade com um toque personalizado.</p>
                        </CardContent>
                    </Card>
                    <Card className="flex-1 hover:bg-slate-700/80 bg-slate-700 flex flex-col justify-between text-white">

                        <Image src={"/platform-program-svgrepo-com.svg"} height={0} width={0} alt="whatsapp" className=" w-11/12  p-6 mx-auto fill-white" />
                        <CardHeader>
                            <CardTitle>
                                Construção de API
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Desenvolvo APIs robustas e escaláveis para potencializar suas aplicações web. Com experiência, garanto integrações eficientes e seguras entre front-end e back-end. Personalizo soluções para suas necessidades específicas. Leve sua infraestrutura digital ao próximo nível.</p>
                        </CardContent>
                    </Card>
                    <Card className="flex-1 hover:bg-slate-700/80 bg-slate-700 text-white">

                        <Image src={"/database-svgrepo-com.svg"} height={0} width={0} alt="whatsapp" className="h-auto w-11/12  p-6 mx-auto" />
                        <CardHeader>
                            <CardTitle>
                                Banco de dados
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Ofereço serviços de desenvolvimento de banco de dados personalizados para atender às suas necessidades específicas. Como desenvolvedor full stack, projeto soluções eficientes e escaláveis para armazenamento e gestão de dados.</p>
                        </CardContent>
                    </Card>
                </div>



            </div >
        </section >


    )
}