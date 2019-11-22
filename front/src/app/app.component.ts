import { Component } from '@angular/core';
import { JarwisService } from './service/jarwis.service';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './service/token.service';
declare let jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SC-Platform';
 
  public loggedIn: boolean;
  footer: any;
  image: any;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService
  ) { }
  public response:any;
  public res:any;
  ftitle: any;
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
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

    this.Jarwis.profile().subscribe(
      data=>{
      
      this.response = data;
      this.image='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.response.image
     
    });
    
    (function($) {
      "use strict";

    // Popovers
  // ======================
	$("[data-toggle='popover']").popover();


	// Sticky Sections
  // ======================
  if ($.fn.sticky) {
		$('section[data-fixed="true"]').sticky({ topSpacing: $('#header').outerHeight(), zIndex: 1039 }).on('sticky-start', function() { $('#header').addClass('no-shadow'); }).on('sticky-end', function() { $('#header').removeClass('no-shadow'); });
  }

	$(window).resize(function() {
    $('.sticky-wrapper').each(function() {
      $(this).css('min-height', $(this).children().outerHeight() );
    });
  });
// Fixed Navigation
  // ======================
	$(window).scroll(function(){
  	if ($(this).scrollTop() > 40) {
    	$('body').addClass('header-scroll');
    } else {
			$('body').removeClass('header-scroll');
    }
  });


	// Responsive Navbar
  // ======================
	// Toggle Navbar
	$(".navbar-toggle").click(function () {
		$('body').toggleClass('navbar-open');
		return false;
	});

	// Nav Responsive
	$('#header .navbar-left .nav').clone().prependTo("body").addClass('nav-responsive');

	// Nav Responsive
	$('.nav-responsive .has-dropdown > a').click(function() {
		$(this).parent().toggleClass('open');
		return false;
	});


	// Search Bar
  // ======================
	// Toggle Search
	$("[data-toggle='search']").click(function () {
		$('body').toggleClass('navbar-search-open');
		return false;
	});

	// Close Search
	$(".navbar-search .close").click(function () {
$('body').removeClass('navbar-search-open');
		return false;
	});


	// Nav Dropdown Open
	// ======================
	$('#header .has-dropdown').hover(function() {
		$(this).addClass('open');
	}, function() {
		$(this).removeClass('open');
  });
  
})(jQuery);

  }
  

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
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
