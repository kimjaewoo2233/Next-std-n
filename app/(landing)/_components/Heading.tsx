"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:Text-6xl">
                Write, plan, share, With AI at your side.{" "}
                <span className="underline">Notion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Notion is the connected workspace where better, faster work happens.
            </h3>

            <Button>
                Enter Notion
                <ArrowRight className="h4 w-4 ml-2"/>
            </Button>
        </div>
    )
}

export default Heading;