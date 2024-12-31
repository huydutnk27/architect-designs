
interface Silder {
    lineText1: string,
	lineText2: string,
	lineText3: string,
	imageData: string
}

interface HomeProduct {
    productId: string,
	name: string,
	imageData: string,
	imageHoverData: string
}

interface HomeData {
    _id: string,
    slider: Silder[],
	headerImg: string[],
	newArrivals: HomeProduct[],
    specialProduct: HomeProduct[],
    saleProducts: HomeProduct[],
    featuredItems: HomeProduct[],
    bottomImg: string[]
}