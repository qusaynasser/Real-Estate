import React, { createContext, useState, useEffect } from 'react';

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingCount, setLoadingCount] = useState(0);

    const startLoading = () => {
        setLoadingCount(prev => prev + 1);
    };

    const endLoading = () => {
        setLoadingCount(prev => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (loadingCount === 0) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [loadingCount]);

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading, endLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
