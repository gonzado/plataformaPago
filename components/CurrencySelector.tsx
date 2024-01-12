import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { PaymentContext } from '../context/PaymentContext';

const cryptocurrencies = [
    { name: 'Bitcoin', symbol: 'BTC' },
    { name: 'Ethereum', symbol: 'ETH' },
    { name: 'Litecoin', symbol: 'LTC' },
    { name: 'Polygon', symbol: 'MATIC' },
    { name: 'Ripple', symbol: 'XRP' },
    { name: 'USD Coin', symbol: 'USDC' }
];

const CurrencySelector: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { updatePaymentData } = useContext(PaymentContext);
    const router = useRouter();

    const filteredCryptocurrencies = cryptocurrencies.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectCurrency = (symbol: string) => {
        updatePaymentData({ currency: symbol });
        router.push('/summary');
    };

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Buscar"
                className="mb-4 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="max-h-60 overflow-auto">
                {filteredCryptocurrencies.map((crypto) => (
                    <li
                        key={crypto.symbol}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelectCurrency(crypto.symbol)}
                    >
                        {crypto.name} ({crypto.symbol})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CurrencySelector;
