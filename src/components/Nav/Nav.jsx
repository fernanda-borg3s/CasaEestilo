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
                <div className="absolute z-1 left-0 mt-2 w-100 bg-white text-black rounded shadow-lg">
                  <a className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Web Design
                  </a>
                  <a className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Desenvolvimento
                  </a>
                  <a className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Consultoria
                  </a>
                </div>
              )}
            </div>

            <a className="hover:text-(--primary-color) cursor-pointer">Contato</a>
           
          </div>
            <div className="hidden md:flex">
        <a className="pe-4" href="">
            <img className="w-6" src={IconUser} />
        </a>
        <a className="pe-4" href="">
            <img className="w-6" src={IconSearch} />
        </a>
        <a className="pe-4" href="">
            <img  className="w-6" src={IconHeart} />
        </a>
        <a className="pe-4" href="">
            <img className="w-6" src={IconCart} />
        </a>
        </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a className="hover:text-gray-200 cursor-pointer">Home</a>
            <br />
            <a className="hover:text-gray-200 cursor-pointer">Sobre</a>

            {/* Dropdown Mobile */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-gray-200 cursor-pointer flex items-center">
                Serviços
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path  strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2}  d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <ul className=" mt-2 space-y-2 bg-white text-black rounded shadow-lg">
                  <li className="px-4 py-2 hover:bg-gray-30 hover:text-(--primary-color) cursor-pointer">
                    Web Design
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-30 hover:text-(--primary-color) cursor-pointer">
                    Desenvolvimento
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-30 hover:text-(--primary-color) cursor-pointer">
                    Consultoria
                  </li>
                </ul>
              )}
            </div>

            <a className="hover:text-gray-200 cursor-pointer">Contato</a>
          </div>
        )}
       
      </nav>
    </>
  );
}
