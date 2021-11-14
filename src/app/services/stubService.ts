import {Observable} from "rxjs";
import {of} from "rxjs/internal/observable/of";

export class TranslateServiceStub {
    instant(): string {
        // or put some logic to return Mock data as per the passed value from component
        //  (if being used at multiple places in the component)
        return "some_string";
    }

    public get(key: any): any {
        return of(key);
    }
}
