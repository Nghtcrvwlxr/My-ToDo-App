export interface TodoListState {
    filter: string;
    search: string;
    data: TodoListItem[];
}

export interface TodoListItem {
    id: number;
    label: string;
    important: boolean;
    done: boolean;
}

export interface TodoListElementProps {
    id: number;
    label: string;
    important: boolean;
    done: boolean;
}
