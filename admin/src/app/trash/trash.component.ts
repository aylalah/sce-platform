import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { Router } from '@angular/router';
import { MapServiceService } from '../map-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  resa: any;
  snackBar: any;
  lenght: any;

  constructor(private Jarwis: JarwisService,private router: Router,private mapserver: MapServiceService, private coordGet: MapServiceService) { }

  ngOnInit() {

    this.Jarwis.getalltrashtitle().subscribe(
      data=>{
      this.resa = data;    
      this.lenght= this.resa.length  
      
   })
  }

  navigates(id){
    
    this.router.navigate(['edit/'+id+'']);
    this.ngOnInit()
  }

  delete(id){
   this.Jarwis.deletetitle(id).subscribe(
    data => this.handleResponse(data),
      error => this.handleError(error)
 );
  }
  handleError(error: any): void {
   // this.disabled=false;
   // this.sav= 'Update';
  }
  
  
  
  handleResponse(data) { 
    console.log(data) 
   let snackBarRef = this.snackBar.open("Successfully move to trash", 'Dismiss', {
    duration: 2000
  })  
 //  this.disabled=true;
  // this.router.navigateByUrl('/population/'+this.paramsid+'');
  this.ngOnInit()
  //  this.router.navigateByUrl('/User/(side:Details)');
  }

}
