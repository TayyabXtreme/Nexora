"use client";

import { useTRPC } from "@/trpc/client";
import {useSuspenseQuery} from "@tanstack/react-query"


export function HealthCheck(){
    const trpc=useTRPC()
    const {data}=useSuspenseQuery(trpc.health.queryOptions())
    return(
        <div className="flex flex-col items-center justify-center w-full h-full gap-4">

            <p>Health check</p>
            <p>status: {data?.status}</p>
            <p>code: {data?.code}</p>
        </div>
    )
}
