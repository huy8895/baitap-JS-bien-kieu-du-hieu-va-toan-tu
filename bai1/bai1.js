let diemvatly = prompt('nhap diem mon vat ly');
let diemhoahoc = prompt('nhap diem mon hoa hoc');
let diemsinhhoc = prompt('nhap diem mon sinh hoc');
let pvatly = parseFloat(diemvatly);
let phoahoc = parseFloat(diemhoahoc);
let psinhhoc = parseFloat(diemsinhhoc);
let a = (pvatly + phoahoc + psinhhoc)/3;
alert('diem trung binh la: ' +a);