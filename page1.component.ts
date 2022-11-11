import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  page1Form: FormGroup;
  submit: boolean = false


  constructor(
    private router: Router,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.builderform();
  }

  builderform(){
    this.page1Form =this.fb.group({
      emailaddress: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  get g() {
    return this.page1Form.controls;
  }

  onSubmit(e:any){
    console.log(e, 'this is message')
    this.submit = true;
    if (this.page1Form.invalid) {
      return
    }
    this.router.navigateByUrl('/page2')


  }

}
