import React, { FormEvent, useContext } from 'react';
import { useRouter } from 'next/router';
import { PaymentContext } from '../context/PaymentContext';

const PaymentForm: React.FC = () => {
    const { updatePaymentData } = useContext(PaymentContext);
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const amount = event.currentTarget.amount.value;
        const currency = event.currentTarget.currency.value;
        const concept = event.currentTarget.concept.value;

        updatePaymentData({ amount, currency, concept });
        router.push('/currency-selector'); 
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Importe a pagar
                </label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Añade importe a pagar"
                    required
                />
            </div>

            <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                    Seleccionar moneda
                </label>
                <select
                    name="currency"
                    id="currency"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                >
                    <option value="">Seleccionar moneda</option>
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="LTC">Litecoin (LTC)</option>
                    <option value="XRP">Ripple (XRP)</option>
                    <option value="USDC">USD Coin (USDC)</option>
                </select>
            </div>

            <div>
                <label htmlFor="concept" className="block text-sm font-medium text-gray-700">
                    Concepto
                </label>
                <input
                    type="text"
                    name="concept"
                    id="concept"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Añade descripción del pago"
                    required
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Continuar
                </button>
            </div>
        </form>
    );
};

export default PaymentForm;
