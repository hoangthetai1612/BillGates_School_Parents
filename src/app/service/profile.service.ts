import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ProfileModel } from "../models/profile.model";

Injectable({
    providedIn: "root"
})
export class ProfileService {

    constructor(
        protected http: HttpClient
    ) { }
    getProfile(): Observable<ProfileModel> {
        return this.http.get(`api/teacher/username`).pipe(map((res: any) => res.Payload));
    }
}