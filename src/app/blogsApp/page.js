import CardApp from "@/components/CardApp";
import React from "react";
const Page = () => {
    return(
        <section className="my-8 max-w-6xl mx-auto px-4">
            <h2 className="text-center text-2xl font-bold mb-4">Card Creator Section</h2>
            <CardApp/>
        </section>
    );
};

export default Page;