export class Carousel {
    id!: number;
    src!: string;
    alt!: string;
    isChecked!: boolean;
    slide!: string;
}

export const carouselImages: Carousel[] = [
    {
        id: 0,
        src: "assets/carousel/margin1.png",
        alt: "stock_busters",
        isChecked: true,
        slide: "left: 0",
    },
    {
        id: 1,
        src: "assets/carousel/margin2.png",
        alt: "electro25",
        isChecked: false,
        slide: "left: -100%",
    },
    {
        id: 2,
        src: "assets/carousel/margin3.png",
        alt: "electro15",
        isChecked: false,
        slide: "left: -200%",
    },
]
