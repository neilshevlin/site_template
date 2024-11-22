// import * as React from 'react';


// export function Image(props) {
//   return (
//     <div>
//         {/* React image */}
//         <img src="./public/images/GEO.png" alt={props.title} width={props.width} />
//     </div>
//   );
// }
import * as React from 'react';
// Next image
import Image from 'next/image';

export function MyImage(props) {
    return (
        <Image
        src="/images/GEO.png"
        alt="Geothermal graphic"
        width={600}
        height={432}
      />
    );
  }
