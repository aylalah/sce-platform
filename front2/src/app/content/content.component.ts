import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { Router, ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { MapServiceService } from '../map-service.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  res: any;
  response: any;
  contents: any;
  actname: any;
  catname: any;
  image: any;
  name: any;
public detail;
public data;
public loggedIn: boolean;
map: google.maps.Map;
id: any;
  bio: any;
  disable= false;
    sav= 'Comment';
  public form = {
    comment: null,
    title_id: null,
   
  };
  comment: any;
  title: any;
  dates: any;
  about: any;
  uimage: any;
  marker: google.maps.Marker;
  error: any;
  cat: any;
  result: any;
  view: any;
 public tid;
  location: any;
constructor(private Jarwis: JarwisService,public snackBar: MatSnackBar,private router: Router, public actRoute: ActivatedRoute, private coordGet: MapServiceService) { }
@ViewChild('map') mapElement: any;



onSubmit() {

  this.disable= true;
    this.sav= 'Comment';
  let token=localStorage.getItem('token')

  if (token==null){
    let snackBarRef = this.snackBar.open('Please, Login to proceed', 'Dismiss', {
      duration: 4000
    })
  this.router.navigateByUrl('/Login');
  }
  else{  
    
     this.Jarwis.comment(this.form).subscribe(
    
    data => this.handleResponse(data),
    error => this.handleError(error)
  );
  }
 
 
}
handleResponse(data) {
  let snackBarRef = this.snackBar.open('Comment Successfully', 'Dismiss', {
    duration: 2000
  });
  this.disable= false;
    this.sav= 'Comment';
  this.ngOnInit()
}

handleError(error) {
  this.disable= false;
    this.sav= 'Comment';
  this.error = error.error.errors;
}
  ngOnInit() {

    

    this.Jarwis.getact().subscribe(
      data=>{
      
      this.result = data;
      console.log(this.result)  
      
      }
    )


    this.actRoute.paramMap.subscribe((params => {  
      
      var id= this.actRoute.snapshot.params['id'];
     
      this.tid= this.actRoute.snapshot.params['id'];
      this.viewig();
    
                    this.Jarwis.getcontent(id).subscribe(data=>{
                    this.response = data;
                   
                    this.res=this.response.name[0];
                    this.actname=this.res.actname;
                    this.view=this.res.views;
                    this.catname=this.res.catname;
                    this.form.title_id=this.res.id;
                    this.title=this.res.name_title;
                    this.about=this.res.about;
                    this.dates=this.res.created_at;
                    this.bio=this.res.familybackground;
                    this.name=this.res.firstname+" "+this.res.lastname+" "+this.res.middlename;
                    this.location= this.response.content[0].location;
                   
                    this.contents=this.response.content;
                    this.comment=this.response.comment;               
                    
                    //map Init
                    this.coordGet.getLocality(this.response.content[0].location).subscribe(data=>{
                      this.data = data;
                
                      let lat = this.data.results[0].geometry.location.lat;
                      let long = this.data.results[0].geometry.location.lng;
                   
                      var map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: lat, lng:  long},
                        zoom: 15,
                        panControl: true,
                        mapTypeControl: false,
                        scaleControl: true,
                        streetViewControl: false,
                        
                        rotateControl: true,
                       
                      })
                      this.marker = new google.maps.Marker({
                        map: map,
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        position: {lat: lat, lng:  long},
                        
                      });
                    })
                    
                    this.image='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
                    this.uimage='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.image;
                     
                    })
                
              }));   
   
  }
 navigate (id){
    this.router.navigate(['Content/'+id+''])
   
  }
  naviga (id){
    this.router.navigate(['Category/'+id+''])
   
  }
  viewig(){
    this.Jarwis.updateView({id:this.tid}).subscribe(
   );
   
  }
}
