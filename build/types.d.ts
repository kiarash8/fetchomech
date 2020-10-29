export declare const enum Method {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE"
}
export interface KeyValue {
    [name: string]: any;
}
export interface RequestParameter {
    url: string;
    headers?: KeyValue[];
    pathVariables?: KeyValue;
    queryParams?: KeyValue;
    body?: any;
    timeout?: number;
}
