import React from 'react';
import './CartDesigner.css';
import veloImg from '../../assets/carts/velo.png';
import hackerImg from '../../assets/carts/hacker.png';
import luxeImg from '../../assets/carts/luxe.png';

const BlueprintSelection = ({ onSelect }) => {
    const options = [
        {
            id: 'velo',
            title: 'The Velo-Barista',
            subtitle: 'Eco-Friendly Cargo Bike',
            desc: 'Agile, green, and sweat-powered. Great for dodging traffic and winning hearts.',
            stats: { mobility: 'High', capacity: 'Low', cost: 200, baseCost: 200 },
            perk: 'Eco-Hype: Faster crowd growth',
            color: '#81c784',
            image: veloImg
        },
        {
            id: 'hacker',
            title: 'The Sidewalk Hacker',
            subtitle: 'Upcycled Street Cart',
            desc: 'Built from scrap, held together by dreams and duct tape. Tough as nails.',
            stats: { mobility: 'Med', capacity: 'High', cost: 100, baseCost: 100 },
            perk: 'Street Cred: Cheaper supplies',
            color: '#ffb74d',
            image: hackerImg
        },
        {
            id: 'luxe',
            title: 'The Micro-Luxe',
            subtitle: 'Converted Vintage Trailer',
            desc: 'A tiny palace on wheels. High maintenance, but customers pay for the view.',
            stats: { mobility: 'Low', capacity: 'Med', cost: 800, baseCost: 800 },
            perk: 'Premium: Higher tip chance',
            color: '#ba68c8',
            image: luxeImg
        }
    ];

    return (
        <div className="blueprint-selection-container">
            {options.map(opt => (
                <div key={opt.id} className="blueprint-card" style={{ border: `4px solid ${opt.color}` }}>
                    <div className="card-header" style={{ borderBottom: `2px solid ${opt.color}` }}>
                        <h2>{opt.title}</h2>
                        <span>{opt.subtitle}</span>
                    </div>

                    <div className="card-visual">
                        <img src={opt.image} alt={opt.title} className="cart-preview-image" />
                    </div>

                    <p className="card-desc">{opt.desc}</p>

                    <div className="stats-grid">
                        <div><strong>Mobility:</strong> {opt.stats.mobility}</div>
                        <div><strong>Capacity:</strong> {opt.stats.capacity}</div>
                        <div style={{ gridColumn: 'span 2' }}><strong>Start Cost:</strong> ${opt.stats.cost}</div>
                    </div>

                    <div className="perk-badge" style={{ background: opt.color }}>
                        ★ {opt.perk}
                    </div>

                    <button className="btn select-btn" onClick={() => onSelect(opt.id, opt.stats)}>
                        Select Design
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BlueprintSelection;
