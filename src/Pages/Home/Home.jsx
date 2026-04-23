import Nav from '../../components/Nav/Nav.jsx'
import BannerHome from '../../assets/bannerHome.png'
import CategoriaArmarios from '../../assets/cat1.png'
import CategoriaSofas from '../../assets/cat2.png'
import CategoriaCamas from '../../assets/cat3.png'
import Img1 from '../../assets/img1.png'
import Card from '../../components/Card/Card.jsx'


export default function Home() {
    return(
        <>
        <Nav/>
        <section className="h-screen bg-gray-100 relative">
            <div>
        <img className="w-full h-screen lg:h-full object-cover"  src={BannerHome}  />
        <div className='absolute right-0 top-25 lg:right-10 lg:top-50  min-h-100 lg:min-h-85 max-w-190 p-5 m-2 lg:p-10 lg:m-0 bg-(--secondary-color) rounded-lg'>
            <div>
<span className='font-bold text-md lg:text-2xl'>Novas Tendências</span>
            <h1 className='font-bold text-(--primary-color) text-3xl lg:text-5xl font-(family-name:--ff-montserrat) pb-3 '>
                Descubra novas coleções
            </h1>
            <p className='text-justify text-base lg:text-lg'>
                Manter nossa casa em ordem é sinônimo de produtividade e qualidade de vida. Descubra novas soluções e torne seus ambientes ainda mais práticos.
            </p>
            <button className='bg-(--primary-color) text-white font-bold p-6 mt-5 rounded-lg'>ADQUIRIR AGORA</button>
            </div>
            

        </div>
            </div>
        </section>
        <section className='mt-10'>
            <h2 className='text-(--text-black) font-bold text-center text-3xl'>Categoria</h2>
            <p className='text-center text-sm lg:text-2xl p-3'>Conheça nossas variedades de produtos. Tudo pensado para você</p>
            <div className='flex flex-col lg:flex-row items-center justify-center '>
                <div className="mx-3">
                    <img className='rounded-lg my-3' src={CategoriaArmarios} alt="" />
                   <h3 className='text-center font-semibold text-xl mb-4'>Armários</h3>
                </div>
                  <div className="mx-3">
                    <img className='rounded-lg my-3' src={CategoriaSofas} alt="" />
                   <h3 className='text-center font-semibold text-xl mb-4'>Sofás</h3>
                </div>
                  <div className="mx-3">
                    <img className='rounded-lg my-3' src={CategoriaCamas} alt="" />
                   <h3 className='text-center font-semibold text-xl mb-4'>Camas</h3>
                </div>
            </div>
        </section>
        <section className='mt-10'>
            <h2 className='text-(--text-black) font-bold text-center text-3xl mb-5'>Nossos Produtos</h2>
            {/* card vem dos dados */}
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center lg:mx-10">
              <Card imagem={Img1} titulo="Cama Casal" descricao="Grande e confortável" preco="1.799,99"/>
              <Card imagem={Img1} titulo="Cama Casal" descricao="Grande e confortável" preco="1.799,99"/>
              <Card imagem={Img1} titulo="Cama Casal" descricao="Grande e confortável" preco="1.799,99"/>
              <Card imagem={Img1} titulo="Cama Casal" descricao="Grande e confortável" preco="1.799,99"/>
                </div>
        </section>
        
        </>
    )
}