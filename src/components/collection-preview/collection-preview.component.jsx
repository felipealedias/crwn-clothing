import React from 'react'

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
                .filter((items, idx) => idx < 4)
                .map(({id, name}) => (
                <div key={id}>{name}</div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;