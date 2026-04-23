import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Img7 from "../assets/img7.png";
import Img8 from "../assets/img8.png";
const produtos = [
  {
    cod_produto: 1,
    titulo: "Cama de Casal",
    descricao: "Grande e estilosa",
    categoria: "camas",
    preco: "1.749,99",
    isPromocao: true,
    percentPromo: "30%",
    imgProduto: Img1,
  },
  {
    cod_produto: 2,
    titulo: "Cadeira",
    descricao: "Estiloso off-white",
    categoria: "cadeiras",
    preco: "129,99",
    isPromocao: false,
    percentPromo: null,
    imgProduto: Img2,
  },
    {
      cod_produto:3,
      titulo: "Sofá Retrátil 3",
      descricao: "Luxuoso sofá branco",
      categoria:"sofas",
      preco: "6.999,99",
      isPromocao: true,
      percentPromo:"50%",
      imgProduto: Img3
    },
    {
   cod_produto:4,
      titulo: "Ventilador de teto",
      descricao: "Eficiente e econômico",
      categoria:"ventiladores",
      preco: "345,90",
      isPromocao: false,
      percentPromo:null,
      imgProduto: Img4

    },
    {
     cod_produto:5,
      titulo: "Sofá Terroso",
      descricao: "Poder minimalista",
      categoria:"sofas",
      preco: "499,99",
      isPromocao: false,
      percentPromo:null,
      imgProduto: Img5
    },
    {
     cod_produto:6,
      titulo: "Mesa de centro",
      descricao: "Harmonioso com o ambiente",
      categoria:"mesas",
      preco:"1.999,99",
      isPromocao: true,
      percentPromo:"50%",
      imgProduto: Img6
    },
    {
      cod_produto:7,
      titulo: "Abajur Modernista",
      descricao: "Lâmpada noturna",
      categoria:"abajures",
      preco: "399,99",
      isPromocao: false,
      percentPromo: null,
      imgProduto: Img7

    },
     {
      cod_produto:8,
      titulo: "Cadeira Estofada",
      descricao: "Acabamento em palha",
      categoria:"cadeiras",
      preco: "749,99",
      isPromocao: true,
      percentPromo: "30%",
      imgProduto: Img8

    },
];

export default produtos;
