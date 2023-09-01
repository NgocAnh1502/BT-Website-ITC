function bai1_1(){
    var s = "learning = ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS;" ;
    var a = s.length;
    console.log(`Số ký tự của chuỗi là: ${a}`);
}

function bai1_2(){
    var s = "learning = ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS;" ;
    var a = s.lastIndexOf("ITC");
    console.log(`Vị trí cuối cùng của chữ ITC là: ${a}`);
}

function bai1_3(){
    var s = "learning = ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS;" ;
    var a = s.split(" ");
    console.log(a);
}

function bai1_4(){
    var s = "learning = ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS;" ;
    var a = s.replace(/JS/g, 'Javascipt');
    console.log(a);
}