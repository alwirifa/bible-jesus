import AddProduct from "@/components/admin/products/add-product";
import ProductList from "@/components/admin/products/product-list";
import ListProduct from "@/components/admin/products/product-list";
import React from "react";

function page() {
  return (
    <div className="h-full grid grid-cols-3">
      <ProductList />
    </div>
  );
}

export default page;
