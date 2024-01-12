import React, { useContext } from 'react';
import { PaymentContext } from '../context/PaymentContext';
import { useRouter } from 'next/router';

const SummaryPage: React.FC = () => {
    const { paymentData, updatePaymentData } = useContext(PaymentContext);
    const router = useRouter();

    const handlePayment = () => {
        updatePaymentData({ paymentStatus: 'completed' });
        router.push('/result');
    };

    if (!paymentData.amount || !paymentData.currency) {
        router.push('/');
        return null;
    }

    return (
        <div className="max-w-lg mx-auto p-4">
            <div className="space-y-4">
                <h1 className="text-xl font-bold">Resumen del pedido</h1>
                <div>
                    <span className="font-medium">Importe:</span> {paymentData.amount} EUR
                </div>
                <div>
                    <span className="font-medium">Moneda seleccionada:</span> {paymentData.currency}
                </div>
                <div>
                    <span className="font-medium">Concepto:</span> {paymentData.concept}
                </div>
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handlePayment}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Realizar el pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
