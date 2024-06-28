import React from "react";
import { useRouter } from "next/router";

export default function ReviewId() {
    const router = useRouter();
    const {productId, reviewId} = router.query;
    return (<>
    <h2>Welcome to detail page of review with review ID {reviewId} for the product of Product id {productId}</h2>
    </>)
}