import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
declare let $:any;
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

 user_id=''
 userDetails:any
  constructor(private _ActivatedRoute: ActivatedRoute,private _UserService:UserService){}

  ngOnInit(): void {
    $(".loud").fadeIn(0)
    this._ActivatedRoute.params.subscribe((x) => {
      this.user_id = x['id']
      console.log(this.user_id);
    })
    this._UserService.getUserDetail(this.user_id).subscribe({
      next: (res) => {
        this.userDetails = res.data
        console.log(this.userDetails);
        $(".loud").fadeOut(1000)
      }
      , error: (err) => {
        console.log(err);
        $(".loud").fadeOut(1000)

      }
    })

  }
}
