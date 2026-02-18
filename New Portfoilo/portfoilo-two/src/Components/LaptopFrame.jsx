import React from 'react';
import './LaptopFrame.css';

const LaptopFrame = ({ children }) => {
    return (
        <div className="laptop-wrapper">
            <div className="laptop-screen-bezel">
                <div className="laptop-camera"></div>
                <div className="laptop-screen-content">
                    {children}
                </div>
            </div>
            <div className="laptop-base">
                {/* Simple base, no detailed keys */}
            </div>
        </div>
    );
};

export default LaptopFrame;
