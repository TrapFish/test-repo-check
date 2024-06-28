import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;
    return (<>
    <h2>Details about Product {productId}</h2>
    <Link href="/product">Product</Link>
    </>)
}