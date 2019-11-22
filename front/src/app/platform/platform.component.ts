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
  documentArray: any;
  article: any;

  mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 1, dots: true, nav: false};
  myCarouselOptions={items: 3, dots: true, nav: true};
  gallery: any;

  constructor( private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService
  ) { }
  public response:any;
  public res:any;
  ftitle: any;
  
  ngOnInit() {

      this.Jarwis.getArticle().subscribe(
        data=>{
        this.ftitle = data; 
        this.article=this.ftitle.name
        this.gallery=this.ftitle.gallery
            console.log(this.gallery);
        }
      )

      this.Jarwis.getact().subscribe(
        data=>{        
        this.res = data;          
        }
      )

      this.Jarwis.getfootertitle().subscribe(
        data=>{
        this.ftitle = data; 
        this.footer=this.ftitle[0] 
        console.log(this.footer)      
        
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

         let result: any = data;
         this.documentArray = this.resa.subevent;
         let string:string
         for(let i=0;i<=this.documentArray.length -1;i++){
           string += '<div class="card-img"><a href="video-post.html"><img src="https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.resac.t_image+' class="card-img-top" alt="Anthem Official Gameplay Reveal"></a><div class="card-meta"><span>6:46</span></div></div><div class="card-block"><h4 class="card-title"><a href="video-post.html">Anthem Official Gameplay Reveal</a></h4><div class="card-meta"><span><i class="fa fa-clock-o"></i> 2 weeks ago</span><span>447 views</span></div></div>';
         }
        string = string.replace('undefined','');
        jQuery().append(string);
       },
       error => {
         console.log(error);

        
        }
      );
    
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
      
  }

  navigate(id){
    this.router.navigate(['Category/'+id+''])
    this.ngOnInit()
  }

  nav(id){
    this.router.navigate(['Content/'+id+'']);
    this.ngOnInit()
  }

}
