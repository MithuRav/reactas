
let intList = new Array();
function addNum() {
    let val = document.getElementById("intInput").value;
    intList.push(val);
}

function sort() {
    let n=intList.length;
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = intList[i];
        j = i - 1;
        while (j >= 0 && intList[j] > key)
        {   
            intList[j + 1] = intList[j];
            j = j - 1;
        }
        intList[j + 1] = key;
    }
}

function descend() {
    document.querySelector('h1').innerHTML = "Descending order";
    let str = "";
    sort();
    for(let i=intList.length-1;i>=0;i--){
        str = str + intList[i] + " ";
        console.log(intList[i]);
    }
    document.querySelector('p').innerHTML = str;
}

function ascend() {
    document.querySelector('h1').innerHTML = "Ascending order";
    let str = "";
    sort();
    for(let i=0;i<intList.length;i++){
        str = str + intList[i] + " ";
        console.log(intList[i]);
    }
    document.querySelector('p').innerHTML = str;
}
