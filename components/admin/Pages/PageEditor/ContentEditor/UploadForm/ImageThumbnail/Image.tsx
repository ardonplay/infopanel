import React from "react";
import Image from "next/image"
const ImageWrapper = React.memo(({ file }: { file: string }) => {
    return (<Image src={file} alt="image" fill
        style={{ objectFit: "cover" }} className="rounded-xl"  priority={true}/>)
});

export default ImageWrapper