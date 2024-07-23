// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";

// type ProductType = {
//   name: string;
//   id: string;
//   description: string;
//   image_url: string;
// };

// export default function ProductTypeList({
//   name,
//   id,
//   description,
//   image_url,
// }: ProductType) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         `${process.env.BASE_URL}/product/product-type`,
//         {
//           withCredentials: true,
//           headers: {
//             "ngrok-skip-browser-warning": "true",
//           },
//         }
//       )
//       .then((response) => {
//         setData(response.data?.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   console.log(data);

//   return (
//     <div className="flex h-full">
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
//         <p className="text-muted-foreground mb-8">
//           Manage your account settings and preferences.
//         </p>

//         {data.map((products) => (
//           <p>{products.name}</p>
//         ))}
//       </main>
//     </div>
//   );
// }

import React from 'react'

function ProductTypeList() {
  return (
    <div>ProductTypeList</div>
  )
}

export default ProductTypeList