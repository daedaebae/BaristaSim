import React from 'react';
import Modal from './Modal';
import pixelBarista from '../assets/characters/pixel_barista_neutral.png';
import baristaAvatars from '../assets/characters/barista_avatars.png';

export default function AvatarModal({ gameState, close, setPlayerAvatar, setPlayerName }) {
    const { playerAvatar, playerName } = gameState;

    // Define Avatar Options
    // Default is the original png.
    // Variations are from the spritesheet.
    // Assuming spritesheet is 3 avatars wide. 
    // We can use CSS to display them. 
    // Or simpler: We just render them. 
    // Since we don't know exact pixel width, we assume standard 120x120 or similar aspect.
    // The generated image was likely a grid. 

    // Let's define the options.
    const avatars = [
        { id: 'default', src: pixelBarista, isSprite: false },
        { id: 'var1', src: baristaAvatars, isSprite: true, pos: '0% 0%' },
        { id: 'var2', src: baristaAvatars, isSprite: true, pos: '50% 0%' },
        { id: 'var3', src: baristaAvatars, isSprite: true, pos: '100% 0%' }
    ];

    return (
        <Modal title="Barista Profile" isOpen={true} onClose={close}>
            <div className="avatar-modal-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>

                {/* Name Edit */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', alignItems: 'center' }}>
                    <label style={{ fontWeight: 'bold', color: '#5d4037' }}>YOUR NAME</label>
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName && setPlayerName(e.target.value)}
                        maxLength={12}
                        style={{
                            padding: '0.5rem',
                            fontSize: '1.2rem',
                            textAlign: 'center',
                            border: '2px solid #8b5a2b',
                            borderRadius: '8px',
                            background: '#fffaf0',
                            fontFamily: 'var(--font-ui)',
                            width: '200px'
                        }}
                    />
                </div>

                {/* Avatar Selection */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', alignItems: 'center' }}>
                    <label style={{ fontWeight: 'bold', color: '#5d4037' }}>CHOOSE AVATAR</label>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1rem',
                        background: 'rgba(255,255,255,0.5)',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '2px dashed #8b5a2b'
                    }}>
                        {avatars.map((av) => (
                            <button
                                key={av.id}
                                onClick={() => setPlayerAvatar(av.id)}
                                className={`avatar-option-btn ${playerAvatar === av.id ? 'selected' : ''}`}
                                style={{
                                    border: playerAvatar === av.id ? '4px solid #558b2f' : '2px solid transparent',
                                    borderRadius: '50%',
                                    padding: '4px',
                                    background: playerAvatar === av.id ? '#dcedc8' : 'transparent',
                                    cursor: 'pointer',
                                    width: '100px',
                                    height: '100px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    backgroundImage: `url(${av.src})`,
                                    backgroundPosition: av.isSprite ? av.pos : 'center',
                                    backgroundSize: av.isSprite ? '300% auto' : 'cover', // 3 cols, maintain aspect
                                    backgroundRepeat: 'no-repeat',
                                    imageRendering: 'pixelated'
                                }} />
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#888' }}>
                    (Changes apply immediately)
                </div>
            </div>
        </Modal>
    );
}

// Inline styles for simplicity or move to CSS later.
// .avatar-option-btn:hover { transform: scale(1.05); }
