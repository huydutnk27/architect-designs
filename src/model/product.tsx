export type ProductEntity = {
    index: string,
    productId: string,
    categoryId: string,
    name: string,
    subTitle: string,
    description: string,
    size: string,
    quantity: string,
    price: string,
    color: string,
    imageData: string,
    imageHoverData: string,
    warrantyPeriod: string,
	constructionTime: string,
	manufacturer: string,
    listImgDetail: string[]
}

export const EmptyProduct = {
    index: '',
    productId: '',
    categoryId: '',
    name: '',
    subTitle: '',
    description: '',
    size: '',
    quantity: '',
    price: '',
    color: '',
    imageData: '',
    imageHoverData: '',
    warrantyPeriod: '',
	constructionTime: '',
	manufacturer: '',
    listImgDetail: ['']
}