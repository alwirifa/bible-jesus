"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type ProductType = {
  name: string;
  id: string;
  description: string;
  image_url: string;
};

export default function ProductList() {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product`,
        {
          withCredentials: true,
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((response) => {
        setData(response.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(data);

  return (
    <div className="flex h-full">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        <p className="text-muted-foreground mb-8">
          Manage your account settings and preferences.
        </p>

        {data.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </main>
    </div>
  );
}
