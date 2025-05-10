import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () =>{
    return (<section id="projects" className="min-h-screen flex items center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Projetos feitos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">
                        Projeto Sorveteria
                    </h3>
                    <p className="text-gray-400 mb-4">
                    Um sistema web completo para automatizar e otimizar as operações de uma sorveteria, utilizando tecnologias como Java, HTML, CSS, JavaScript e MySQL. 
                    O sistema foi implantado com sucesso e gerencia estoque, vendas, clientes e gera relatórios.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Java","Javascript","Bootstrap","mySQL","HTML","CSS"].map((tech,key)=>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/ORodrigoRezende/ProjetoSorveteria" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Ver Projeto</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">
                        Space Invaders
                    </h3>
                    <p className="text-gray-400 mb-4">
                    Este projeto consiste na recriação do clássico jogo arcade Space Invaders (1978) utilizando a linguagem C e a biblioteca Raylib, uma biblioteca simples e fácil de usar para desenvolvimento de jogos.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C","raylib.h",].map((tech,key)=>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/ORodrigoRezende/SpaceInvaders" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Ver Projeto</a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>

    </section>
    )
}