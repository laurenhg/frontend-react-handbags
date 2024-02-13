import React from 'react';

 function Tile({image, title, paragraph}) {
     return (
        <section>
            {image ? (
                 <img src={image} alt={title} />
             ):(
                <>
                     <h2>{title}</h2>
                     {paragraph && <p> {paragraph}</p>}
                 </>
             )}
         </section>
     );
 }




export default Tile;

