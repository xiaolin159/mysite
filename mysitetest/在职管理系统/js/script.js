var list=[];
var gender='男';
var in_not='在职';
var count=0;
var in_not_count=1;
var listcount=[];
var cc=[];
var dd=[];
var gender_cc=1;
var input=['add','male','female','age','ind','not_in','button','name1','table_msg','hidden','sel_delete','sel_in','sel_not_in','femal_massage','main_massage','in_massage','not_in_massage','everyone','del_everyone','break_1','checkeveryone']
for(i in input){
    input[i]=document.getElementById(input[i]);
    // input[i].onclick=function(){
    //     console.log(input[i].id);
    //     i=0;
    //      if(input[i].id=='add'){

    //         console.log(input[0].id);
    //     }
        // switch(i){
        //     case 6:
        //         console.log('aaa');
        //         hidden.style.display="block"
        // }

      //  }
}
add.onclick=function(){
        hidden.style.display="block"
}
break_1.onclick=function(){
        hidden.style.display="none"
}

male.onclick=function(){
        gender='男';
        gender_cc=1;
        female.style.background='gray'
        female.style.color='gray'
        male.style.backgroundColor='black'
}
female.onclick=function(){
        gender='女';
        gender_cc=0;
        male.style.background='gray'
        male.style.color='gray'
        female.style.background='black'
        female.style.color='white'
}
ind.onclick=function(){
        in_not='在职';
        not_in.style.background='gray'
        not_in.style.color='gray'
        ind.style.background='black'
        ind.style.color='white'
}
not_in.onclick=function(){
        in_not='离职';
        ind.style.background='gray'
        ind.style.color='gray'
        not_in.style.background='black'
        not_in.style.color='white'
}
button.onclick=function(){
    if(name1.value!=""&&age.value!=""){
         list.length=0;
         count++;
    //     delcount.push(count);
         list.push("<li><input id='input"+count+"'  type='checkbox' value='0'/></li>");
         list.push('<li>'+name1.value+'</li>');
         list.push('<li id="gender'+count+'" value="'+gender_cc+'">'+gender+'</li>');
         cc.push(gender);
         list.push('<li>'+age.value+'</li>');
         list.push("<li id='in_not_"+count+"' value='"+count+"'>"+in_not+"</li>");
         dd.push(in_not)
         list.push("<li id='delete_"+count+"' value='"+count+"'>"+"删除"+"</li>");
         listcount[count]=list.join('')
         table_msg.innerHTML+='<ul id='+count+'>'+listcount[count]+'</ul>';
         show(count);
         delete_check(count);
         delete_checkdata(count)
    }else{
        if(name1.value==""){
                alert('请输入姓名值');
        }else{
                alert("请输入年龄");
        }
    }
}
function show(){
checkeveryone.onclick=function(){
    for(var i=1;i<count+1;i++){
        document.getElementById('input'+i).checked=true;
    }
}
}
del_everyone.onclick=function(){
        for(var i=0;i<cc.length;i++){
            //document.getElementById(i+1).style.display="none";
        if(document.getElementById(i+1).value==99){
        document.getElementById(i+1).style.display="block";
        }else{
        document.getElementById(i+1).style.display="none";
        }
    }
}
everyone.onclick=function(){
    for(var i=0;i<cc.length;i++){
        if(document.getElementById(i+1).value!=99){
             document.getElementById(i+1).style.display="block";
    }else{
 document.getElementById(i+1).style.display="none";
    }
    }
}
in_massage.onclick=function(){
                    for(var i=0;i<dd.length;i++){
                          if(dd[i]!='在职'){
                              document.getElementById(i+1).style.display="none";
                          }else{
                            if(document.getElementById(i+1).value!=99){
                              document.getElementById(i+1).style.display="block";
                            }
                          }
                    }
                }
not_in_massage.onclick=function(){
                    for(var i=0;i<dd.length;i++){
                          if(dd[i]!='离职'){
                              document.getElementById(i+1).style.display="none";
                          }else{
                            if(document.getElementById(i+1).value!=99){
                               document.getElementById(i+1).style.display="block";
                           }
                          }
                    }
                }
femal_massage.onclick=function(){
                    for(var i=0;i<cc.length;i++){
                          if(cc[i]=='男'){
                              document.getElementById(i+1).style.display="none";
                          }else{
                            if(document.getElementById(i+1).value!=99){
                              document.getElementById(i+1).style.display="block";
                             }
                          }
                    }
                }
main_massage.onclick=function(){
                    for(var i=0;i<cc.length;i++){
                          if(cc[i]=='女'){
                              document.getElementById(i+1).style.display="none";
                          }else{
                            if(document.getElementById(i+1).value!=99){
                               document.getElementById(i+1).style.display="block";
                           }
                          }
                    }
                }
function delete_check(cou){
    for(var i=1;i<cou+1;i++){
      // var str=document.getElementById('input'+i).checked;
       document.getElementById('input'+i).onclick=function(){
              //  sel_delete.onclick=function(){
                     if(this.checked){
                        this.value=1;
               // }
            }else{
                        this.value=0;
            }
        }

  }
}
function delete_checkdata(cou){
sel_delete.onclick=function(){
    for(var i=1;i<cou+1;i++){
        if(document.getElementById('input'+i).checked){
                document.getElementById(i).value=99;
                document.getElementById(i).style.display="none";
                 document.getElementById('input'+i).checked=false;
                 document.getElementById(i).style.backgroundColor="red";
                document.getElementById('delete_'+i).style.color="black";
                document.getElementById('in_not_'+i).style.color="black";
                document.getElementById('in_not_'+i).onclick=null;
                 document.getElementById('delete_'+i).onclick=null;

        }
    }
}
sel_in.onclick=function(){
    for(var i=1;i<cou+1;i++){
        if(document.getElementById('input'+i).checked){
                document.getElementById('in_not_'+i).innerText="在职";
                dd[i-1]="在职";
                document.getElementById('input'+i).checked=false;
        }

    }
}
sel_not_in.onclick=function(){
         for(var i=1;i<cou+1;i++){
        if(document.getElementById('input'+i).checked){
                document.getElementById('in_not_'+i).innerText="离职";
                dd[i-1]="离职";
                document.getElementById('input'+i).checked=false;
             }

         }
    }
}
function show(cou){
            for(var i=1;i<cou+1;i++){
                document.getElementById('delete_'+i).style.color="blue";
                document.getElementById('in_not_'+i).style.color="blue";
                document.getElementById('delete_'+i).onclick=function(){
                document.getElementById(this.value).value=99;
                document.getElementById(this.value).style.display="none";
                document.getElementById(this.value).style.backgroundColor="red";
                document.getElementById('delete_'+this.value).style.color="black";
                document.getElementById('in_not_'+this.value).style.color="black";
                document.getElementById('in_not_'+this.value).onclick=null;
                 document.getElementById('delete_'+this.value).onclick=null;
                 }
                document.getElementById('in_not_'+i).onclick=function(){
                if(in_not_count==1){
                 in_not_count++;
                document.getElementById('in_not_'+this.value).innerText='离职';
                dd[Number(this.value)-1]='离职';
                }else{
                in_not_count--;
                document.getElementById('in_not_'+this.value).innerText='在职';
                dd[Number(this.value)-1]='在职';

            }
         }
    }
}









