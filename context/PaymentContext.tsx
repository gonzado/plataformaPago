import { createContext, useState, ReactNode } from 'react';

interface PaymentData {
    amount: string;
    currency: string;
    concept: string;
    paymentStatus: 'pending' | 'completed' | 'canceled';
}

interface PaymentContextProps {
    paymentData: PaymentData;
    updatePaymentData: (data: Partial<PaymentData>) => void;
}

export const PaymentContext = createContext<PaymentContextProps | undefined>(undefined);

interface PaymentProviderProps {
    children: ReactNode;
}

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
    const [paymentData, setPaymentData] = useState<PaymentData>({
        amount: '',
        currency: '',
        concept: '',
        paymentStatus: 'pending',
    });

    const updatePaymentData = (data: Partial<PaymentData>) => {
        setPaymentData((prevData) => ({ ...prevData, ...data }));
    };

    return (
        <PaymentContext.Provider value={{ paymentData, updatePaymentData }}>
            {children}
        </PaymentContext.Provider>
    );
};
