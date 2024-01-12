import React, { useContext } from 'react';
import { PaymentContext } from '../context/PaymentContext';
import { useRouter } from 'next/router';

const ResultPage: React.FC = () => {
    const { paymentData, updatePaymentData } = useContext(PaymentContext);
    const router = useRouter();

    const startNewPayment = () => {
        updatePaymentData({
            amount: '',
            currency: '',
            concept: '',
            paymentStatus: 'pending'
        });
        router.push('/');
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            {paymentData.paymentStatus === 'completed' ? (
                <div className="text-center">
                    <div className="mb-4 text-2xl font-bold text-green-500">¡Pago completado!</div>
                    <p>Tu pago ha sido procesado con éxito.</p>
                    <button
                        onClick={startNewPayment}
                        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Crear nuevo pago
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <div className="mb-4 text-2xl font-bold text-red-500">Pago cancelado</div>
                    <p>El pago no se ha completado.</p>
                    <button
                        onClick={startNewPayment}
                        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Intentar de nuevo
                    </button>
                </div>
            )}
        </div>
    );
};

export default ResultPage;
