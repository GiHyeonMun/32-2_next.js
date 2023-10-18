import Image from "next/image";

export default function ImagePage() {
    return (
        <>
            <div
                style={{
                    width: 500,
                    height: 200,
                    position: 'relative'
                }}>
                <Image 
                    src='https://cdn.pixabay.com/photo/2023/04/17/11/37/mirrors-7932159_1280.jpg'
                    layout="fill"
                    objectFit="cover"
                    alt="testImage"
                />
            </div>
        </>
    );
}