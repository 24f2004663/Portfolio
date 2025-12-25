'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResumeContextType {
    isResumeOpen: boolean;
    openResume: () => void;
    closeResume: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const openResume = () => setIsResumeOpen(true);
    const closeResume = () => setIsResumeOpen(false);

    return (
        <ResumeContext.Provider value={{ isResumeOpen, openResume, closeResume }}>
            {children}
        </ResumeContext.Provider>
    );
}

export function useResume() {
    const context = useContext(ResumeContext);
    if (context === undefined) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
}
