import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({title}) => {
    return (
        <>
            <div className="py-3 SectionTitle">
                <h1 className="text-center">{title}</h1>
                <div className="b mx-auto"></div>
            </div>
        </>
    );
};

export default SectionTitle;