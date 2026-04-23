export default function Card({imagem, titulo, descricao, preco, isPromocao, percentPromo}) {
    return(
        <>
        <div className="h-sm bg-[#F4F5F7]">
            <img src={imagem} alt="" />
            <div className="p-4 ">
  <h1 className="font-semibold text-xl lg:text-2xl">{titulo}</h1>
            <p className="text-[#898989] py-2">{descricao}</p>
            <span className="text-xl text-[#3A3A3A] font-semibold">R$ {preco}</span>
            <span className={`${isPromocao}`}>{percentPromo}</span>
            </div>
          
        </div>
        </>
    )
}
// promoçao is true or false