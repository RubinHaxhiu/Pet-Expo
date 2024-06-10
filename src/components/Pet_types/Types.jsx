import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../Pet_types/Types.css'

const Types = () => {

    const cardContent = [
        {img:'https://www.dogstrust.org.uk/images/800x600/assets/2022-08/labrador_puppy_harefield_dogstrust.jpg', name:'Dogs', path: '/dogs'},
        {img:'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg', name:'Cats', path: '/cats'},
        {img:'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/a/m/AmericanGoldfinch_MattWilliams_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0', name:'Birds',path: '/birds'}
    ]

    const navigate = useNavigate();

    return (
        <div id='types' className='types'>
          <h1 className='types-title'>
            Pet Types
          </h1>
          <div className='types-card-container'>
          {cardContent.map((content, index) => (
          <div className='types-card' key={index} onClick={() => navigate(content.path)}>
            <img src={content.img} alt={content.name}/>
            <h1>{content.name}</h1>
          </div>
            ))}
            </div>
        </div>
    );
}

export default Types;
