var mybtn = document.getElementsByClassName("cbutton");
var myOutput = document.getElementById("output");
var myCulc= '';
var myCom = false;
var mySwitch = false;
var myOper = ['+','-','*','/'];

//console.log(mybtn);
	for(var i=0; i<mybtn.length; i++){
		mybtn[i].addEventListener("click", function(){
			var myValue = this.innerHTML;
			if(myCom || myCulc == "0"){
				myCom = false;
				myCulc = '';
			}

			if(myValue == '+' || myValue == '-' || myValue == '*' || myValue == '/'){
				if(mySwitch){
					mySwitch = false;
					if(myOper.indexOf(myOutput.innerHTML.slice(-1))>-1){
						myCulc=myCulc.substring(0,myCulc.length-1);
					}else{
						myCulc = eval(myCulc);
					}
				}			
				mySwitch = true;
			}

			if(myValue == '='){
				myValue ='';
				if(myOper.indexOf(myOutput.innerHTML.slice(-1))==-1){
				myCulc = eval(myCulc);
				}
			}else if(myValue =='C'){
				myCulc = 0;
				myCom = true;
			}
			else{
				myCulc = myCulc+myValue;
			}
			myOutput.innerHTML = myCulc;
			
		});
	}	