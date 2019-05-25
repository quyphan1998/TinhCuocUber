//var laySoKM = document.getElementById('soKM').Value;
//document đại diện cho toàn trang wweb
// Trả về: Tổng Tiền dựa vào Số Km người dùng nhập + time chờ
function getEle(ele)
{
    return document.getElementById(ele);
}
function layLoaiXe()
{
    var ketqua;
    var uberX = getEle('uberX').checked;
    var uberSUV = getEle('uberSUV').checked;
    var uberBlack = getEle('uberBlack').checked;
    if(uberX)
    {   
        ketqua = "uberX";
    }
    else if(uberSUV)
    {
        ketqua = "uberSUV";
    }
    else if(uberBlack)
    {
        ketqua = "uberBlack";
    }
    return ketqua;
}

function TinhTien()
{
    var laySoKM = getEle('soKM').value;
    laySoKM = parseFloat(laySoKM);//chuyển chuỗi số thành số
    var laytimeCho = getEle('timeCho').value;
    laytimeCho = parseFloat(laytimeCho);//chuyển chuỗi số thành số
    var ThanhTien = getEle('ThanhTien');//gán biến thành tiền = với id đã khai báo

    //var ThanhTien = parseFloat(laySoKM) * 4000 + parseFloat(laytimeCho)*2000;
    
    var loaixe = layLoaiXe();
    ThanhTien.style.display = "block";
    var spanTien = getEle('xuatTien');
    //Tinh tien
    /* 
        Khoảng cách các loại Uber
                        uber X  uber SUV  uber Black
    Mở cửa/1km đầu tiên 8.000đ   9.000đ   10.000đ
    1 -> 20km           12       14        16
    >21km               10       12        14
    time chờ            2        3          4
    */
   var km1uberX = 8000;
   var km2uberX = 12000;
   var km3uberX = 1000;
   var ThanhTien = 0;
   switch (loaixe) {
    case 'uberX':
        if (laySoKM <= 1)
            ThanhTien = laySoKM * km1uberX + laytimeCho * 2000;
        else if (laySoKM > 1 && laySoKM <= 20)
            ThanhTien = km1uberX + (laySoKM - 1) * km2uberX + laytimeCho * 2000;
        else if (laySoKM > 21)
            ThanhTien = km1uberX + 20 * km2uberX + (laySoKM - 21) * km3uberX + laytimeCho * 2000;
        break;
    case 'uberSUV':
        if (laySoKM <= 1)
            ThanhTien = laySoKM * 9000 + laytimeCho * 3000;
        else if (laySoKM > 1 && laySoKM <= 20)
            ThanhTien = 9000 + (laySoKM - 1)* 14000 + laytimeCho * 3000;
        else if (laySoKM > 21)
            ThanhTien = 9000 + 20 * 14000 + (laySoKM - 21) * 12000 + laytimeCho * 3000;
        break;
    case 'uberBlack':
        if (laySoKM <= 1)
            ThanhTien = laySoKM * 10000 + laytimeCho * 4000;
        else if (laySoKM > 1 && laySoKM <= 20)
            ThanhTien = 10000 + (laySoKM -1) * 16000 + laytimeCho * 4000;
        else if (laySoKM > 21)
            ThanhTien = 1000 + 20 * 160000 + (laySoKM - 21) * 14000 + laytimeCho * 4000;
        break; 
    }
    
    spanTien.innerHTML = ThanhTien;//gán giá trị đã tính cho id spanTien
}