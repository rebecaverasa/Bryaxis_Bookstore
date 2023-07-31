import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="bg-[#282a36]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/Bryaxis">
                            <span className="text-[#bd93f9] text-3xl font-semibold">Bryaxis</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="produtos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Produtos</a>
                            <a href="maisvendidos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Mais Vendidos</a>
                            <a href="lancamentos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Lançamentos</a>
                            <a href="ofertas" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Ofertas</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;