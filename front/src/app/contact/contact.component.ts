import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { MapServiceService } from '../map-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  result: any;

  constructor(private Jarwis: JarwisService,public snackBar: MatSnackBar,private router: Router, public actRoute: ActivatedRoute, private coordGet: MapServiceService) { }

  ngOnInit() {
    this.Jarwis.getact().subscribe(
      data=>{
      
      this.result = data;
      console.log(this.result)  
      
      }
    )
  }

  naviga (id){
    this.router.navigate(['Category/'+id+''])
   
  }

}
