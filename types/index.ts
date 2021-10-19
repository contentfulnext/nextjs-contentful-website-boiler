import { DocumentNode } from 'graphql';
import { FunctionComponent } from 'react';

export type Seo = {
    metaTitle: string;
    metaDescription: string;
};

export type Article = {
    sys: {
        id: string;
    };
    modulesCollection: {
        items: Module[];
    };
};

export interface Module {
    sys: {
        id: string;
    };
    __typename: string;
}

export type Page = {
    sys: {
        id: string;
    };
    seo: Seo;
    articlesCollection: {
        items: Article[];
    };
};

export type NavigationItem = {
    sys: {
        id: string;
    };
    title: string;
    slug: string;
    childs?: NavigationItem[];
    parent: null | {
        sys: {
            id: string;
        };
    };
};

export interface ContentfulModule {
    component: FunctionComponent;
    typename: string;
    query: DocumentNode;
}
