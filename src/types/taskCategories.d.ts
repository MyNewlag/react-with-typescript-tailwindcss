import type { TaskListType } from "./task"

export type AddCategoriesType =   {
    title: string
    description: string
    userId: string
    createdAt: string
    icon: string
}

export interface CategoriesListItemType extends  AddCategoriesType  {
    id: string
}

export interface CategoriesWithTaskListItemType extends CategoriesListItemType {
    tasks:TaskListType[]
}
