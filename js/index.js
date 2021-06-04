document.addEventListener("DOMContentLoaded", function(event) { 

    let loaiphong = document.getElementById("loaiphong");
    let donGia = document.getElementById("dongia");

    loaiphong.addEventListener('change', function(e) {
       donGia.value = e.target.value;
    })


});
function kiemTraNgayDi() {
    var ngaydi=getElementById("txtDi").value;
    var ngayden=getElementById("txtDen").value;   
    if(ngaydi<ngayden){
       document.getElementById("erngaydi").innerHTML=""      
        return true;
    }
   else{
    document.getElementById("erngaydi").innerHTML="Ngay di lon hon ngay den"      
    return false;
   }
}
function KTten(){ 
        var Ten = document.getElementById("txtTen").value; 
        var regexHoten = /^[A-Z]+[A-Za-z]*(\s*[A-Z]+[A-Za-z]*)$/;
        if(!regexHoten.test(Ten)) 
        {
           document.getElementById("erten").innerHTML="Họ Tên Phải Bắt đầu bằng chữ in hoa";
           return false;
        }
        else
        {
            document.getElementById("erten").innerHTML="";
            return true;
        }    
}
function SoNgay(){
    var ngayden=document.getElementById("txtDen").value;
    var  ngaydi=document.getElementById("txtDi").value;
    document.getElementById("txtSoNgay").innerHTML="ngayden-ngaydi"
}