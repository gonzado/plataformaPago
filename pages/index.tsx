import React from 'react';
import PaymentForm from '../components/PaymentForm';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <h1 className="text-center text-2xl font-bold">Crear pago</h1>
                <PaymentForm />
            </div>
        </div>
    );
};

export default HomePage;
