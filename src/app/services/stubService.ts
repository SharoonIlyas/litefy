import {Observable} from "rxjs";
import {of} from "rxjs/internal/observable/of";

export class TranslateServiceStub {
    instant(): string {
        return "some_string";
    }

    public get(key: any): any {
        return of(key);
    }
}
