import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-[#dde2de] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/Bryaxis">
                            <span className="text-[#bd93f9] text-3xl font-semibold">Bryaxis</span>
                            <span className="text-slate-500 hover:text-white px-3 py-2 rounded-md text-base font-semibold">Audiobooks</span>
                        </Link>
                    </div>
                    <div className="hidden md:block ml-[-10px] w-full">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="Bryaxis" className="text-slate-500 hover:text-white px-3 py-2 mt-2.5 rounded-md text-base font-medium">Home</Link>
                            <Link to="produtos" className="text-slate-500 hover:text-white px-3 py-2 rounded-md text-base font-medium">Produtos</Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-1 w-full bg-slate-500 absolute bottom-0 left-0"></div> {/* Linha fina cinza */}
        </nav>
    );
};

export default Navbar;
