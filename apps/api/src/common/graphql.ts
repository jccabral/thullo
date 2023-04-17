
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export type Visibility = "PUBLIC" | "PRIVATE";

export interface CreateBoardInput {
    name: string;
    cover?: Nullable<string>;
    visibility?: Nullable<Visibility>;
}

export interface CreateCardInput {
    title: string;
    cover?: Nullable<string>;
    labels?: Nullable<Nullable<string>[]>;
    asignees?: Nullable<Nullable<string>[]>;
    comments?: Nullable<Nullable<string>[]>;
    attachments?: Nullable<Nullable<string>[]>;
    order?: Nullable<number>;
    listId: string;
}

export interface CreateListInput {
    name: string;
    order?: Nullable<number>;
    boardId: string;
}

export interface Board {
    id: string;
    name: string;
    cover?: Nullable<string>;
    visibility: Visibility;
    lists?: Nullable<Nullable<string>[]>;
}

export interface IQuery {
    boards(): Nullable<Nullable<Board>[]> | Promise<Nullable<Nullable<Board>[]>>;
    cards(): Nullable<Nullable<Card>[]> | Promise<Nullable<Nullable<Card>[]>>;
    lists(): Nullable<Nullable<List>[]> | Promise<Nullable<Nullable<List>[]>>;
}

export interface IMutation {
    createBoard(board: CreateBoardInput): Nullable<Board> | Promise<Nullable<Board>>;
    createCard(card: CreateCardInput): Nullable<Card> | Promise<Nullable<Card>>;
    createList(list: CreateListInput): Nullable<List> | Promise<Nullable<List>>;
}

export interface Card {
    id: string;
    title: string;
    cover?: Nullable<string>;
    labels?: Nullable<Nullable<string>[]>;
    asignees?: Nullable<Nullable<string>[]>;
    comments?: Nullable<Nullable<string>[]>;
    attachments?: Nullable<Nullable<string>[]>;
    order?: Nullable<number>;
    listId?: Nullable<string>;
}

export interface List {
    id: string;
    name: string;
    order?: Nullable<number>;
    boardId: string;
    cards?: Nullable<Nullable<string>[]>;
}

type Nullable<T> = T | null;
