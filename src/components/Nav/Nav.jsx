import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import IconUser from "../../assets/user.svg";
import IconSearch from "../../assets/search.svg";
import IconCart from "../../assets/shoppingCart.svg";
import IconHeart from "../../assets/heart.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-white-600 text-black px-6 py-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <a href="">
              <img className="w-48" src={Logo} alt="" />
            </a>
          </div>

          {/* Botão Hamburguer (mobile) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <a className="hover:text-(--primary-color) cursor-pointer">Home</a>
            <a className="hover:text-(--primary-color) cursor-pointer">Sobre</a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-(--primary-color) cursor-pointer flex items-center">
                Loja
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className=" mt-2 px-10 py-10 w-300 bg-white text-black rounded shadow-lg flex list-nav">
                  <div className="px-3">
                    <h3 className="">Armários</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Armário de Cozinha</a>
                      </li>
                      <li>
                        <a href="">Armário infantil</a>
                      </li>
                      <li>
                        <a href="">Armário multiuso</a>
                      </li>
                      <li>
                        <a href="">Armário para escritório</a>
                      </li>
                      <li>
                        <a href="">Balcão de cozinha</a>
                      </li>
                      <li>
                        <a href="">Báu</a>
                      </li>
                      <li>
                        <a href="">Cômoda</a>
                      </li>
                      <li>
                        <a href="">Gaveteiro para banheiro</a>
                      </li>
                      <li>
                        <a href="">Gaveteiro para cozinha</a>
                      </li>
                      <li>
                        <a href="">Mesa de cabeceira</a>
                      </li>
                      <li>
                        <a href="">Sapateira</a>
                      </li>
                      <li>
                        <a href="">Puxador</a>
                      </li>
                    </ul>
                  </div>

                  <div className="px-3">
                    <h3>Cadeira e Bancos</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Cadeira</a>
                      </li>
                      <li>
                        <a href="">Cadeira de escritório</a>
                      </li>
                      <li>
                        <a href="">Cadeira de cozinha</a>
                      </li>
                      <li>
                        <a href="">Cadeira para varanda e jardim</a>
                      </li>
                      <li>
                        <a href="">Cadeira Gamer</a>
                      </li>
                      <li>
                        <a href="">Banco</a>
                      </li>
                      <li>
                        <a href="">Banqueta</a>
                      </li>
                      <li>
                        <a href="">Espreguiçadeira</a>
                      </li>
                    </ul>
                    <div className="">
                      <h3>Cabeceiras</h3>
                      <a className="all-link" href="">
                        Ver Tudo
                      </a>
                      <ul>
                        <li>
                          <a href="">Cabeceira de casal</a>
                        </li>
                        <li>
                          <a href="">Cabeceira de solteiro</a>
                        </li>
                        <li>
                          <a href="">Cabeceira King</a>
                        </li>
                        <li>
                          <a href="">Cabeceira Queen</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-3">
                    <h3>Camas</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Cama de casal</a>
                      </li>
                      <li>
                        <a href="">Cama de solteiro</a>
                      </li>
                      <li>
                        <a href="">Cama infantil</a>
                      </li>
                      <li>
                        <a href="">Cama king</a>
                      </li>
                      <li>
                        <a href="">Cama queen</a>
                      </li>
                      <li>
                        <a href="">Beliche</a>
                      </li>
                      <li>
                        <a href="">Bicama</a>
                      </li>
                      <li>
                        <a href="">Cabeceira king</a>
                      </li>
                      <li>
                        <a href="">Berço</a>
                      </li>
                      <li>
                        <a href="">Base cama box</a>
                      </li>
                    </ul>
                    <div>
                      <h3>Estantes</h3>
                      <a className="all-link" href="">
                        Ver Tudo
                      </a>
                      <ul>
                        <li>
                          <a href="">Estantes</a>
                        </li>
                        <li>
                          <a href="">Nicho</a>
                        </li>
                        <li>
                          <a href="">Prateleira</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-3">
                    <h3>Poltronas</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Poltrona para varanda e jardim</a>
                      </li>
                      <li>
                        <a href="">Puff</a>
                      </li>
                    </ul>
                    <div className="">
                      <h3>Mesas</h3>
                      <a className="all-link" href="">
                        Ver Tudo
                      </a>
                      <ul>
                        <li>
                          <a href="">Mesa de jantar</a>
                        </li>
                        <li>
                          <a href="">Mesa de cozinha</a>
                        </li>
                        <li>
                          <a href="">Mesa de canto e lateral</a>
                        </li>
                        <li>
                          <a href="">Mesa de centro</a>
                        </li>
                        <li>
                          <a href="">Mesa de cabeceira</a>
                        </li>
                        <li>
                          <a href="">Mesa alta</a>
                        </li>
                        <li>
                          <a href="">Mesa para varanda e jardim</a>
                        </li>
                        <li>
                          <a href="">Mesa de escritório</a>
                        </li>
                        <li>
                          <a href="">Escrivaninha</a>
                        </li>
                        <li>
                          <a href="">Estação de trabalho</a>
                        </li>
                        <li>
                          <a href="">Pentedeadeira</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    
                      <h3>Racks e painéis</h3>
                      <a className="all-link" href="">
                        Ver Tudo
                      </a>
                      <ul>
                        <li>
                          <a href="">Arara de roupa</a>
                        </li>
                        <li>
                          <a href="">Closet</a>
                        </li>
                        <li>
                          <a href="">Guarda-roupa</a>
                        </li>
                        <li>
                          <a href="">Painéis</a>
                        </li>
                        <li>
                          <a href="">Racks</a>
                        </li>
                      </ul>
                 
                    <h3>Sofás</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Sofá fixo</a>
                      </li>
                      <li>
                        <a href="">Sofá 2 e 3 lugares</a>
                      </li>
                      <li>
                        <a href="">Sofá-cama</a>
                      </li>
                      <li>
                        <a href="">Sofá modular</a>
                      </li>
                      <li>
                        <a href="">Sofá retrátil e reclinável</a>
                      </li>
                      <li>
                        <a href="">Sofá para varanda e jardim</a>
                      </li>
                      <li>
                        <a href="">Chaise longue e recamier</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <a className="hover:text-(--primary-color) cursor-pointer">
              Contato
            </a>
          </div>
          <div className="hidden md:flex">
            <a className="pe-4" href="">
              <img className="w-6" src={IconUser} />
            </a>
            <a className="pe-4" href="">
              <img className="w-6" src={IconSearch} />
            </a>
            <a className="pe-4" href="">
              <img className="w-6" src={IconHeart} />
            </a>
            <a className="pe-4" href="">
              <img className="w-6" src={IconCart} />
            </a>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a className="hover:text-(--primary-color)  cursor-pointer">Home</a>
            <br />
            <a className="hover:text-(--primary-color) cursor-pointer">Sobre</a>

            {/* Dropdown Mobile */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-(--primary-color)  cursor-pointer flex items-center">
                Serviços
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className=" mt-2 space-y-2 bg-white text-black rounded shadow-lg list-nav-mobile">
                 <div className="px-2">
                    <h3 className="">Armários</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Armário de Cozinha</a>
                      </li>
                      <li>
                        <a href="">Armário infantil</a>
                      </li>
                      <li>
                        <a href="">Armário multiuso</a>
                      </li>
                      <li>
                        <a href="">Armário para escritório</a>
                      </li>
                      <li>
                        <a href="">Balcão de cozinha</a>
                      </li>
                      <li>
                        <a href="">Báu</a>
                      </li>
                      <li>
                        <a href="">Cômoda</a>
                      </li>
                      <li>
                        <a href="">Gaveteiro para banheiro</a>
                      </li>
                      <li>
                        <a href="">Gaveteiro para cozinha</a>
                      </li>
                      <li>
                        <a href="">Mesa de cabeceira</a>
                      </li>
                      <li>
                        <a href="">Sapateira</a>
                      </li>
                      <li>
                        <a href="">Puxador</a>
                      </li>
                    </ul>
                     <h3>Cadeira e Bancos</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Cadeira</a>
                      </li>
                      <li>
                        <a href="">Cadeira de escritório</a>
                      </li>
                      <li>
                        <a href="">Cadeira de cozinha</a>
                      </li>
                      <li>
                        <a href="">Cadeira para varanda e jardim</a>
                      </li>
                      <li>
                        <a href="">Cadeira Gamer</a>
                      </li>
                      <li>
                        <a href="">Banco</a>
                      </li>
                      <li>
                        <a href="">Banqueta</a>
                      </li>
                      <li>
                        <a href="">Espreguiçadeira</a>
                      </li>
                    </ul>
                     <h3>Cabeceiras</h3>
                      <a className="all-link" href="">
                        Ver Tudo
                      </a>
                      <ul>
                        <li>
                          <a href="">Cabeceira de casal</a>
                        </li>
                        <li>
                          <a href="">Cabeceira de solteiro</a>
                        </li>
                        <li>
                          <a href="">Cabeceira King</a>
                        </li>
                        <li>
                          <a href="">Cabeceira Queen</a>
                        </li>
                      </ul>
                       <h3>Camas</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Cama de casal</a>
                      </li>
                      <li>
                        <a href="">Cama de solteiro</a>
                      </li>
                      <li>
                        <a href="">Cama infantil</a>
                      </li>
                      <li>
                        <a href="">Cama king</a>
                      </li>
                      <li>
                        <a href="">Cama queen</a>
                      </li>
                      <li>
                        <a href="">Beliche</a>
                      </li>
                      <li>
                        <a href="">Bicama</a>
                      </li>
                      <li>
                        <a href="">Cabeceira king</a>
                      </li>
                      <li>
                        <a href="">Berço</a>
                      </li>
                      <li>
                        <a href="">Base cama box</a>
                      </li>
                    </ul>
                      <h3>Estantes</h3>
                      <a className="all-link" href="">
                        Ver Tudo
                      </a>
                      <ul>
                        <li>
                          <a href="">Estantes</a>
                        </li>
                        <li>
                          <a href="">Nicho</a>
                        </li>
                        <li>
                          <a href="">Prateleira</a>
                        </li>
                      </ul>
                      <h3>Poltronas</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Poltrona para varanda e jardim</a>
                      </li>
                      <li>
                        <a href="">Puff</a>
                      </li>
                    </ul>
                      <h3>Mesas</h3>
                      <a className="all-link" href="">
                        Ver Tudo
                      </a>
                      <ul>
                        <li>
                          <a href="">Mesa de jantar</a>
                        </li>
                        <li>
                          <a href="">Mesa de cozinha</a>
                        </li>
                        <li>
                          <a href="">Mesa de canto e lateral</a>
                        </li>
                        <li>
                          <a href="">Mesa de centro</a>
                        </li>
                        <li>
                          <a href="">Mesa de cabeceira</a>
                        </li>
                        <li>
                          <a href="">Mesa alta</a>
                        </li>
                        <li>
                          <a href="">Mesa para varanda e jardim</a>
                        </li>
                        <li>
                          <a href="">Mesa de escritório</a>
                        </li>
                        <li>
                          <a href="">Escrivaninha</a>
                        </li>
                        <li>
                          <a href="">Estação de trabalho</a>
                        </li>
                        <li>
                          <a href="">Pentedeadeira</a>
                        </li>
                      </ul>
                       <h3>Racks e painéis</h3>
                      <a className="all-link" href="">
                        Ver Tudo
                      </a>
                      <ul>
                        <li>
                          <a href="">Arara de roupa</a>
                        </li>
                        <li>
                          <a href="">Closet</a>
                        </li>
                        <li>
                          <a href="">Guarda-roupa</a>
                        </li>
                        <li>
                          <a href="">Painéis</a>
                        </li>
                        <li>
                          <a href="">Racks</a>
                        </li>
                      </ul>
                 
                    <h3>Sofás</h3>
                    <a className="all-link" href="">
                      Ver Tudo
                    </a>
                    <ul>
                      <li>
                        <a href="">Sofá fixo</a>
                      </li>
                      <li>
                        <a href="">Sofá 2 e 3 lugares</a>
                      </li>
                      <li>
                        <a href="">Sofá-cama</a>
                      </li>
                      <li>
                        <a href="">Sofá modular</a>
                      </li>
                      <li>
                        <a href="">Sofá retrátil e reclinável</a>
                      </li>
                      <li>
                        <a href="">Sofá para varanda e jardim</a>
                      </li>
                      <li>
                        <a href="">Chaise longue e recamier</a>
                      </li>
                    </ul>
                  </div>

                </div>
              )}
            </div>

            <a className="hover:text-(--primary-color)  cursor-pointer">
              Contato
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
