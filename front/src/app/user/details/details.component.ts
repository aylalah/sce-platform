import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  profres: any;
  image: any;

  constructor(private Jarwis: JarwisService,) { }

  ngOnInit() {

    this.Jarwis.profile().subscribe(
      data=>{
      
      this.profres = data;
      this.image='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.profres.image
     
    });
  }

}
