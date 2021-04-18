import React from 'react';

export default function CatList(props) {
    return (
        <div>
            {props.catPics.map(cat => <img key={cat.id} src={cat.url} />)}
        </div>
    )
}