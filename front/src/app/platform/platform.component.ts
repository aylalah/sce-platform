import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';

declare let jQuery: any;

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  footer: any;
  resa: any;
  resah: any;
  actname1: any;
  id1: any;
  resac: any;

  constructor( private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService
  ) { }
  public response:any;
  public res:any;
  ftitle: any;
  
  ngOnInit() {

   
    (function($) {
      "use strict";

        // owl carousel
        $('.owl-posts').owlCarousel({
          margin: 5,
          loop: true,
          dots: false,
          autoplay: true,
          responsive: {
            0: {
              items: 1
            },
            1024: {
              items: 1,
              center: false
            },
            1200: {
              items: 2,
              center: true
            }
          }
        });
  
        $('.owl-videos').owlCarousel({
          margin: 15,
          loop: true,
          dots: false,
          responsive: {
            0: {
              items: 1
            },
            700: {
              items: 2
            },
            800: {
              items: 3
            },
            1000: {
              items: 4
            },
            1200: {
              items: 6
            }
          }
        });
      })(jQuery);

      this.Jarwis.getfootertitle().subscribe(
        data=>{
        this.ftitle = data; 
        this.footer=this.ftitle[0] 
        
        }
      )

      this.Jarwis.displayartifact().subscribe(
        data=>{
        this.resa = data;  
        this.resah=this.resa.event[0]
        this.actname1=this.resah.actname
        this.id1=this.resah.id
        this.resac=this.resa.subevent
         console.log(this.resac)

        
        }
      )
  }

}
