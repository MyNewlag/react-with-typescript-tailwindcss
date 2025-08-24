
export interface AddTaskListType{
      groupCode: string,
      title: string,
      description: string,
      isDone: boolean,
      taskCategoryId: string,
      repetitionType: number,
      repetitionItems: number,
      includeVacation: true,
      startedAt: string,
      endedAt: string,
      createdAt: string
}


export interface TaskListType extends AddTaskListType{
       id: string
}