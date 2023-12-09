const extendHex = (shortHex) => {
  // write your code here
	const arr=[];
	for(let i=0;i<shortHex.length;i++){
		const ch= shortHex[i];
		if(ch!='#'){
			arr.push(ch+ch);
		}
	}
	// console.log(arr);
	let ans_str= "#"+arr.join("");
	return ans_str;
			   
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex))

