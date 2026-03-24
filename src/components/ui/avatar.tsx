import Image from "next/image";

type AvatarProps = {
    src: string
    width: number
    height: number
    alt: string
}

export default function Avatar ({src, width, height, alt}: AvatarProps) {
    return (
        <div style={{width, height}} className="relative aspect-3/4 rounded-full">
            <Image src={src} fill alt={alt}/>
        </div>
    )
}