import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchValue:string=''

  constructor(private _UserService:UserService){}
  search(id:any){
    this._UserService.getUserDetail(id).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
