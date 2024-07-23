import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const menuLink = [
  {
    label: "products",
    route: "/admin/products",
  },
  {
    label: "products type",
    route: "/admin/products-type",
  },
  {
    label: "articles",
    route: "/admin/articles",
  },
];

function Sidebar() {
  return (
    <div>
      <aside className="h-screen border-r  p-6 space-y-6">
        <h3 className="text-xl font-semibold">Logo</h3>
        {menuLink.map((menu, index) => (
          <div className="flex flex-col gap-2">
            <Link href={menu.route}>{menu.label}</Link>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default Sidebar;
