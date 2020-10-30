import { RequestParameter } from './types';
declare const Fetchomech: {
    Get: (params: RequestParameter) => Promise<any>;
    Post: (params: RequestParameter) => Promise<any>;
    Put: (params: RequestParameter) => Promise<any>;
    Patch: (params: RequestParameter) => Promise<any>;
    Delete: (params: RequestParameter) => Promise<any>;
};
export default Fetchomech;
