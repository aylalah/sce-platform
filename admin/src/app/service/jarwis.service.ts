import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {
  providedIn: 'root'}
)
export class JarwisService {

  // private baseUrl = 'https://sce-ogun.sabiogun.jtcheck.com/backend/public/api';

  private baseUrl = 'http://localhost/sce-platform/backend/public/api';

  constructor(private http: HttpClient) { }
  roleuser() {
    return this.http.get(`${this.baseUrl}/roleuser`)
  }
  signup(data) {
    return this.http.post<any>(`${this.baseUrl}/signup`, data)
  }
  role(data) {
    return this.http.post<any>(`${this.baseUrl}/role`, data)
  }
  activity(data) {
    return this.http.post<any>(`${this.baseUrl}/activity`, data)
  }
  cate(data) {
    return this.http.post<any>(`${this.baseUrl}/cate`, data)
  }
  
  content(data) {
    return this.http.post<any>(`${this.baseUrl}/content`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  
  name_t(data) {
    return this.http.post<any>(`${this.baseUrl}/name_t`, data)
  }
  
  login(data) {
    return this.http.post<any>(`${this.baseUrl}/login`, data)
  }
  getact() {
    return this.http.get(`${this.baseUrl}/getact`,)
  }
  profile() {
    return this.http.get(`${this.baseUrl}/me`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  updateprofile(data) {
    return this.http.post<any>(`${this.baseUrl}/me`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  post(id:string) {

    return this.http.get<any>(`${this.baseUrl}/post/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  }
  displayevent() {
    return this.http.get<any>(`${this.baseUrl}/displayevent`,)
  }
  displayartifact() {
    return this.http.get<any>(`${this.baseUrl}/displayartifact`,)
  }
  displaybusiness() {
    return this.http.get<any>(`${this.baseUrl}/displaybusiness`,)
  }
  displaypeople() {
    return this.http.get<any>(`${this.baseUrl}/displaypeople`,)
  }
  displaynews() {
    return this.http.get<any>(`${this.baseUrl}/displaynews`,)
  }
  displaylocation() {
    return this.http.get<any>(`${this.baseUrl}/displaylocation`,)
  }

  getcontent(id:string) {
    return this.http.get<any>(`${this.baseUrl}/getcontent/${id}`)
  }
  getalltitle() {
    return this.http.get<any>(`${this.baseUrl}/getalltitle`,)
  }
  getfootertitle() {
    return this.http.get<any>(`${this.baseUrl}/getfootertitle`,)
  }
  gettitles(id:string) {
    return this.http.get<any>(`${this.baseUrl}/gettitles/${id}`)
  }
  getUtitles() {
    return this.http.get<any>(`${this.baseUrl}/getUtitles`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
//  search(searchTerm:string) {
//     return this.http.get(`${this.baseUrl}/getalltitle/${searchTerm}`)
//   }

comment(data) {
  return this.http.post<any>(`${this.baseUrl}/comment`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}
getAllPost(){
  return this.http.get<any>(`${this.baseUrl}/getAllPost`);
}
adminLogin(data) {
  return this.http.post(`${this.baseUrl}/adminLogin`, data)
}
}