/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Suzuki Ertiga',
      href: '#',
    
      imageSrc: 'https://i.ibb.co/pjGNMZn/IMG-20231018-WA0063.jpg',
      imageAlt: 'suzuki ertiga',
    },
    {
      id: 2,
      name: 'Nexon',
      href: '#',
      
      imageSrc: 'https://i.ibb.co/r4prHkF/IMG-20231018-WA0062.jpg',
      imageAlt: 'Nexo',
    },
    {
      id: 3,
      name: 'Swift Dzire',
      href: '#',
      
      imageSrc: 'https://i.ibb.co/JkMppV2/IMG-20231018-WA0067.jpg',
      imageAlt: 'siftDixsee',
    },
    {
      id: 4,
      name: 'swift',
      href: '#',
      
      imageSrc: 'https://i.ibb.co/R9zgxjN/IMG-20231018-WA0065.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Ertiga',
      href: '#',
      
      imageSrc: 'https://i.ibb.co/yyqRNsh/IMG-20231018-WA0064.jpg',
      imageAlt: 'mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Innova Crysta',
      href: '#',
      
      imageSrc: 'https://i.ibb.co/nc8nC84/IMG-20231018-WA0061.jpg',
      imageAlt: ' holdin echanical pencil with brass tip and top.',
    },
    {
      id: 8,
      name:'Baleno',
      href: '#',
      
      imageSrc: 'https://i.ibb.co/0G16M2C/IMG-20231018-WA0068.jpg',
      imageAlt: 'brass tip and top.',
    }
    // More products...
  ]
  
  export default function RentalCars() {
    return (
      <div className="bg-gray-800">
      
  
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-white font-bold text-center pb-5"> "Experience the Ultimate Freedom: Rent Your Dream Car Today!"</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
          <div className="text-white text-lg py-10">
            <p>Are you tired of the same old daily commute in your ordinary vehicle? Are you looking for a thrilling adventure, a luxurious weekend getaway, or simply a unique way to impress your friends and family? Look no further! Our car rental service is here to fulfill your every automotive desire.</p>
            <p>At Aadhya Self Drive Cars, we pride ourselves on providing a wide range of top-notch vehicles for all your rental needs. From sleek and stylish sedans to powerful SUVs and exotic sports cars, we have a vehicle for every occasion.</p>
          </div>
          <div className="text-white text-lg py-10">
           
           
           <img src="https://i.ibb.co/f0Dxw7n/aadhya-sel-drve-cars.jpg" className="tamplets"
            alt="aadhya-sel-drve-cars" border="0"/>
                 </div>
        </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-200">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  