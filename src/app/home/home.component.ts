import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users:User[]=[]
  constructor(private _UserService:UserService){}
  
  ngOnInit(): void {
    $(".loud").fadeIn(0)
    this.getUsers()
    
    $('li .page1').click((e: any) => {
      let page = $("li .page1_").text()
      $("li .page1_").addClass('active')
      $("li .page2_").removeClass('active')
      // console.log($(e.target).text());
      this.getUsers(page)
    })
    $('li .page2').click((e: any) => {
      let page = $("li .page2_").text()
      $("li .page2_").addClass('active')
      $("li .page1_").removeClass('active')
      // console.log($(e.target).text());
      this.getUsers(page)
    })
    $(".loud").fadeOut(1000)
  }
  getUsers(num:any = '1'){
    $(".loud").fadeIn(0)
    this._UserService.getUsers(num).subscribe({
      next:(res)=>{
        this.users=res.data
        console.log(res.data);
        $(".loud").fadeOut(1000)
      },
      error:(err)=>{
        console.log(err);
        $(".loud").fadeOut(1000)
        
      }
    })
  }

}
