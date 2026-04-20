import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../modules/student';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.scss']
})
export class StdComponent implements OnInit {

isInEditMode :boolean =false;
 
  @ViewChild('stdName')fnameRef !: ElementRef
  @ViewChild('stdlName')lnameRef !: ElementRef
  @ViewChild('stdEmail')emailRef !: ElementRef
  @ViewChild('stdContact')contactRef !: ElementRef

stdsArr : Array<Istudent> =[
{
  fname:"Ganesh",
  lname:"Bhalke",
  email:"ganeshb9322@gmail.com",
  contact:9322917510,
  stdId:"123"
},
{
  fname:"shrinivas",
  lname:"Biradar",
  email:"shrib32@gmail.com",
  contact:9877898799,
  stdId:"1423"
},
{
  fname:"vishnu",
  lname:"jirge",
  email:"vishnukant92@gmail.com",
  contact:987378938,
  stdId:"765"
},
{
  fname:"Matten",
  lname:"Ataer",
  email:"matten22@gmail.com",
  contact:2398773889,
  stdId:"654"
}

]
  editobj!: Istudent;


// @ViewChild('fname')pn!:ElementRef

onSubEve() {

  let fname =   this.fnameRef.nativeElement.value;
  let lname =   this.lnameRef.nativeElement.value;
  let email =   this.emailRef.nativeElement.value;
  let contact=  this.contactRef.nativeElement.value;

  if(fname && lname && email && contact) {

    let newstd: Istudent = {
      fname: fname,
      lname: lname,
      email: email,
      contact: +contact,
      stdId: Date.now().toString()
    }

    this.stdsArr.push(newstd);
    //reset for input feild
     this.fnameRef.nativeElement.value = '';
    this.lnameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
  }
}

onEdit(nan:Istudent){
  console.log(nan);
  this.isInEditMode=true;
  this.editobj=nan
  this.fnameRef.nativeElement.value =this.editobj.fname,
  this.lnameRef.nativeElement.value =this.editobj.lname,
  this.emailRef.nativeElement.value =this.editobj.email,
this.contactRef.nativeElement.value =this.editobj.contact
}

onUpdate(){

  let UPDATEID=this.editobj.stdId;

  let  UPDATEOBJ:Istudent= {
 fname: this.fnameRef.nativeElement.value,
 lname: this.lnameRef.nativeElement.value ,
 email: this.emailRef.nativeElement.value,
 contact: this.contactRef.nativeElement.value,
  stdId:UPDATEID,

  }
  console.log(UPDATEID);
  let getIndex=this.stdsArr.findIndex(n =>n.stdId === UPDATEID)
  this.stdsArr[getIndex]=UPDATEOBJ;
  //input reset
  this.fnameRef.nativeElement.value = '';
    this.lnameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
}

onRemove(index:number){
  console.log(index);
  let isconfirm= confirm("Are you Sure you want to Remove This ID")
  if(isconfirm){
this.stdsArr.splice(index,1);

  }
  
  
  

}

  constructor() { }

  ngOnInit(): void {
  }










  
}
