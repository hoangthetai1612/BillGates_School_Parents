import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
// import { ToastService } from "src/app/shared/services/toast.service";
import { Login } from "../models/login.model";
@Injectable({
	providedIn: "root",
})
export class LoginService {
	constructor(private http: HttpClient,) { }
	public login(data: Login): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/x-www-form-urlencoded",
			}),
		};

		let body = `grant_type=${data.grant_type}&username=${data.username}&password=${data.password}`;

		return this.http.post<any>(`Token`, body, httpOptions).pipe(
			catchError((err: HttpErrorResponse) => {
				if (err.status === 400) {
					// this.toastService.showError("Sai tên tài khoản hoặc mật khẩu!");
				}
				return throwError(err);
			})
		);
	}

}
