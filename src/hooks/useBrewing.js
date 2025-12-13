import { useState, useCallback, useMemo } from 'react';

export const useBrewing = () => {
    const [brewingState, setBrewingState] = useState({
        mode: 'coffee',
        step: 0,
        beanType: null,
        isBoiling: false,
        waterTemp: 'cold' // 'cold' or 'hot'
    });

    const setMode = useCallback((mode) => {
        setBrewingState(prev => ({ ...prev, mode, step: 0, beanType: null, isBoiling: false, waterTemp: 'cold' }));
    }, []);

    const advanceStep = useCallback((beanType = null) => {
        setBrewingState(prev => ({
            ...prev,
            step: prev.step + 1,
            beanType: beanType || prev.beanType
        }));
    }, []);

    const setBoiling = useCallback((isBoiling) => {
        setBrewingState(prev => ({ ...prev, isBoiling }));
    }, []);

    const setWaterTemp = useCallback((temp) => {
        setBrewingState(prev => ({ ...prev, waterTemp: temp }));
    }, []);

    const setStrictStep = useCallback((step) => {
        setBrewingState(prev => ({ ...prev, step }));
    }, []);

    const resetBrewing = useCallback(() => {
        setBrewingState(prev => ({ ...prev, step: 0, beanType: null, isBoiling: false, waterTemp: 'cold' }));
    }, []);

    const syncBrewingState = useCallback((savedState) => {
        setBrewingState({ ...savedState, isBoiling: false }); // Always reset boiling on load
    }, []);

    return useMemo(() => ({
        brewingState,
        setMode,
        advanceStep,
        setBoiling,
        setWaterTemp,
        resetBrewing,
        syncBrewingState,
        setStrictStep
    }), [brewingState, setMode, advanceStep, setBoiling, setWaterTemp, resetBrewing, syncBrewingState, setStrictStep]);
};
