export type SlideEntity = {
    lineText1: string,
    lineText2: string,
    lineText3: string,
    imageData: string
}

export const EmptySlideEntity = {
    lineText1: '',
    lineText2: '',
    lineText3: '',
    imageData: ''
}

export type SpecialProduct = {
    productId: string,
	name: string,
	imageData: string,
	mainText: string,
	subText: string
}

export const EmptySpecialProduct = {
    productId: '',
	name: '',
	imageData: '',
	mainText: '',
	subText: ''
}

export type HomeEntity = {
    slider: SlideEntity[],
    specialProduct: SpecialProduct[]
}

