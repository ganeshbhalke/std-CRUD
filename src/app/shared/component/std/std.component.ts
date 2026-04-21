import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../modules/student';
import { isNgTemplate } from '@angular/compiler';
// import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.scss'],
  // standalone: true,
  // imports: [FormsModule]
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
// {
//   fname:"vishnu",
//   lname:"jirge",
//   email:"vishnukant92@gmail.com",
//   contact:987378938,
//   stdId:"765"
// },
{
  fname:"Matten",
  lname:"Ataer",
  email:"matten22@gmail.com",
  contact:2398773889,
  stdId:"654"
}

]
  editobj!: Istudent;
  // localStorage!:any;


@ViewChild('fname')pn!:ElementRef
searchstd=this.pn
// searchstd: string = '';


onSubEve() {

  let fname =   this.fnameRef.nativeElement.value;
  let lname =   this.lnameRef.nativeElement.value;
  let email =   this.emailRef.nativeElement.value;
  let contact=  this.contactRef.nativeElement.value;

  // if(fname && lname && email && contact) {
  if(fname.trim() && lname.trim() && email.trim() && contact.trim()) {

    let newstd: Istudent = {
      fname: fname,
      lname: lname,
      email: email,
      contact: +contact,
      stdId: Date.now().toString()
    }

    this.stdsArr.push(newstd);

        localStorage.setItem('students', JSON.stringify(this.stdsArr));

    //reset for input feild
     this.fnameRef.nativeElement.value = '';
    this.lnameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
  }

}


onEdit(nan: Istudent){
  this.isInEditMode = true;

  this.editobj = nan;

  localStorage.setItem('editobj', JSON.stringify(nan));

  this.fnameRef.nativeElement.value =nan.fname;
  this.lnameRef.nativeElement.value =nan.lname;
  this.emailRef.nativeElement.value =nan.email;
this.contactRef.nativeElement.value =nan.contact;
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
    localStorage.setItem ('students', JSON.stringify(this.stdsArr));

  //input reset
  this.fnameRef.nativeElement.value = '';
    this.lnameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
    this.isInEditMode=false
}

onRemove(index:number){
  console.log(index);
  let isconfirm= confirm("Are you Sure you want to Remove This ID")
  if(isconfirm){
this.stdsArr.splice(index,1);
    localStorage.setItem('students', JSON.stringify(this.stdsArr));


  }

}

  constructor() { }

  ngOnInit(){
    
  const data = localStorage.getItem('students');
  this.stdsArr = data ? JSON.parse(data) : [];
}
  }











  

