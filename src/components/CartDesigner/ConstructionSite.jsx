import React, { useState, useEffect, useRef } from 'react';
import './CartDesigner.css';

const SOURCING_OPTIONS = [
    {
        id: 'scrap',
        title: 'Dumpster Dive',
        desc: 'Sourced from the finest back alleys. 100% Recycled (probably).',
        cost: 0,
        quality: 'Sketchy',
        fluff: 'Found a half-eaten sandwich too!'
    },
    {
        id: 'standard',
        title: 'Generic Hardware',
        desc: 'Flat-packed particle board from Sweden. Missing one screw.',
        cost: 100,
        quality: 'Standard',
        fluff: 'Instruction manual is in Swedish.'
    },
    {
        id: 'artisan',
        title: 'Artisan Crafted',
        desc: 'Hand-hewn timber and aircraft-grade aluminum. Smells like rich mahogany.',
        cost: 500,
        quality: 'Premium',
        fluff: 'The wood whispers secrets of the forest.'
    }
];

const FLAVOR_EVENTS = [
    "Ouch! Thumb!",
    "Where is that 10mm socket?",
    "Instruction unclear, stuck in ceiling fan.",
    "Realizing this is harder than YouTube made it look.",
    "Is that part supposed to wiggle?",
    "Used duct tape. It holds.",
    "Bribed inspector with coffee."
];

const ConstructionSite = ({ onComplete }) => {
    // Phases: 'sourcing', 'building'
    const [phase, setPhase] = useState('sourcing');
    const [source, setSource] = useState(null);

    // Build State
    const [progress, setProgress] = useState(0);
    const [energy, setEnergy] = useState(10);
    const [mechanic, setMechanic] = useState('HAMMER'); // 'HAMMER' (click) or 'WELD' (hold)
    const [heat, setHeat] = useState(0); // For welding
    const [overheated, setOverheated] = useState(false);
    const [flavorText, setFlavorText] = useState("");

    // Refs for intervals
    const weldInterval = useRef(null);

    // Auto-recover energy
    useEffect(() => {
        const timer = setInterval(() => {
            if (!overheated) {
                setEnergy(prev => Math.min(prev + 1, 10));
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [overheated]);

    // Mechanic Switcher / Event Trigger
    useEffect(() => {
        if (phase === 'building' && progress < 100) {
            // Randomly switch mechanic every few chunks of progress?
            // Or just keep it simple: < 50% Hammer, > 50% Weld?
            // Let's do random change.
            if (Math.random() > 0.9) {
                setFlavorText(FLAVOR_EVENTS[Math.floor(Math.random() * FLAVOR_EVENTS.length)]);
            }
        }
    }, [progress, phase]);

    // Welding Logic
    useEffect(() => {
        if (heat > 80) setFlavorText("WARNING: OVERHEATING!");
        if (heat >= 100) {
            setOverheated(true);
            setFlavorText("OVERHEATED! COOLDOWN!");
            setHeat(100);
            // Cooldown logic
            setTimeout(() => {
                setOverheated(false);
                setHeat(0);
                setFlavorText("Cooled down. Resume.");
            }, 3000);
        }
    }, [heat]);

    const handleSourcing = (option) => {
        setSource(option);
        setPhase('building');
        setFlavorText(option.fluff);
    };

    const handleHammer = () => {
        if (progress >= 100 || overheated) return;
        if (energy > 0) {
            setEnergy(prev => prev - 1);
            setProgress(prev => Math.min(prev + 5, 100)); // 5% per click

            // Randomly switch to welding at 40%
            if (progress > 40 && mechanic === 'HAMMER' && Math.random() > 0.8) {
                setMechanic('WELD');
                setFlavorText("Time to weld! HOLD the button!");
            }
        }
    };

    const startWeld = () => {
        if (mechanic !== 'WELD' || overheated || progress >= 100) return;
        weldInterval.current = setInterval(() => {
            setHeat(h => h + 5);
            setEnergy(e => Math.max(e - 0.5, 0));
            setProgress(p => Math.min(p + 1, 100));
        }, 100);
    };

    const stopWeld = () => {
        if (weldInterval.current) {
            clearInterval(weldInterval.current);
            weldInterval.current = null;
        }
        // Rapid cool down when not welding?
        setHeat(0);

        // Randomly switch back to Hammer?
        if (Math.random() > 0.7) {
            setMechanic('HAMMER');
            setFlavorText("Back to hammering! CLICK!");
        }
    };

    useEffect(() => {
        if (progress >= 100) {
            // Stop logic
            if (weldInterval.current) clearInterval(weldInterval.current);
            setFlavorText("Construction Complete!");
            setTimeout(() => {
                onComplete({ quality: source?.quality, sourceId: source?.id });
            }, 1000);
        }
    }, [progress, onComplete, source]);

    // Render Sourcing Selection
    if (phase === 'sourcing') {
        return (
            <div className="construction-site sourcing-phase">
                <h2>Source Materials</h2>
                <div className="sourcing-grid">
                    {SOURCING_OPTIONS.map(opt => (
                        <div key={opt.id} className="sourcing-card" onClick={() => handleSourcing(opt)}>
                            <h3>{opt.title}</h3>
                            <p>{opt.desc}</p>
                            <div className="cost-tag">{opt.cost === 0 ? 'FREE' : `$${opt.cost}`}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Render Building Phase
    return (
        <div className="construction-site building-phase">
            <h2>{progress >= 100 ? 'Cart Ready!' : 'Under Construction'}</h2>

            <div className="status-readout">
                {flavorText && <div className="flavor-text">"{flavorText}"</div>}
            </div>

            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="stats-row">
                <span>Energy: {'⚡'.repeat(Math.ceil(energy))}</span>
                {mechanic === 'WELD' && (
                    <div className="heat-meter" style={{
                        width: '100px', height: '10px', background: '#333',
                        border: '1px solid #fff'
                    }}>
                        <div style={{
                            width: `${heat}%`, height: '100%',
                            background: heat > 80 ? 'red' : 'orange',
                            transition: 'width 0.1s'
                        }}></div>
                    </div>
                )}
            </div>

            {mechanic === 'HAMMER' ? (
                <button
                    className="action-btn"
                    onClick={handleHammer}
                    disabled={progress >= 100 || energy <= 0 || overheated}
                    style={{ opacity: (energy <= 0 || overheated) ? 0.5 : 1 }}
                >
                    HAMMER! (Click)
                </button>
            ) : (
                <button
                    className="action-btn weld-btn"
                    onMouseDown={startWeld}
                    onMouseUp={stopWeld}
                    onMouseLeave={stopWeld} // Stop if drag out
                    disabled={progress >= 100 || overheated}
                    style={{
                        opacity: overheated ? 0.5 : 1,
                        background: heat > 50 ? '#d84315' : '#8d6e63'
                    }}
                >
                    {overheated ? 'COOLING...' : 'WELD! (Hold)'}
                </button>
            )}
        </div>
    );
};

export default ConstructionSite;
