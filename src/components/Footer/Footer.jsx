import Logo from "../../assets/Logo.png";
export default function Footer(){
    return(
        <>
        <section className="mt-10 px-6">
            <div className=" border-y-2 border-[#9F9F9F] py-8 flex flex-col lg:flex-row justify-between gap-4">
                <div>
                    <img className="w-50" src={Logo} alt="" />
                <p className="text-[#9F9F9F] text-base mt-5">Rua Gonçalves Freitas Loja 201  Marisol, DF - BRA</p>

                </div>
                <div>
                        <h4>Menu</h4>

                    <ul>
                        <li className="py-3 font-semibold">Home</li>
                        <li className="py-3 font-semibold">Loja</li>
                        <li className="py-3 font-semibold">Sobre</li>
                        <li className="py-3 font-semibold">Contato</li>
                    </ul>
                </div>
                <div>
                        <h4>Ajuda</h4>

                    <ul>
                        <li className="py-3 font-semibold">Opções de pagamento</li>
                        <li className="py-3 font-semibold">Troca e devoluções</li>
                        <li className="py-3 font-semibold">Política de privacidade</li>

                    </ul>
                </div>
                <div>
                    <h4>Fale conosco</h4>
                    <input className="border-b-2 py-1 border-gray-400 text-gray-700" type="text" placeholder="Seu E-mail" />
                    <button
        type="submit"
        className="border-b-2 border-gray-400 text-gray-700 hover:border-(--primary-color) hover:text-(--primary-color)  transition-colors px-2 py-1 ms-2"
      >Enviar</button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between px-2 py-5">
                <p>2024 Casa & Estilo. Todos os direitos reservados</p>
                <p>Desenvolvido por Fernanda Borges</p>
            </div>
        </section>
        </>
    )
}