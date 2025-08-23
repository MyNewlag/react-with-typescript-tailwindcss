export type AddCategoriesType =   {
    title: string
    description: string
    userId: string
    createdAt: string
    icon: string
}

export type CategoriesListItemType =  AddCategoriesType & {
    id: string
}
