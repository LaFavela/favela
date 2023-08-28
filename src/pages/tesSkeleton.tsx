import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TesSkeleton() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return(
        <div className="flex justify-center items-center h-[100vh]">
            {/* {loading? (
            <Skeleton className="rounded-xl" sx={{ bgcolor: '#f4ece2' }} variant="rectangular" width="30%" height="300px" />

            ):( */}
            <div>
                <Image
                src="/assets/landing/Build2.jpg"
                alt=""
                width={500}
                height={500}
                className="transition-all opacity-0 rounded-2xl"
                onLoadingComplete={(Image)=>Image.classList.remove('opacity-0')}
                >

                </Image>

            </div>

            {/* )} */}
        </div>
    )
}