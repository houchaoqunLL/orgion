import index from './index.css';
import less from './index.less';
import jp1 from './timg.jfif';
import jp2 from './xm6.jpg';
import jp3 from './xm5.jpg';
import indexScss from './index.scss';
var img2 =document.createElement("img");
img2.src=jp2;
document.querySelector("div").appendChild(img2);

var img1 =document.createElement("img");
img1.src=jp1;
document.querySelector("div").appendChild(img1);

var img3 =document.createElement("img");
img3.src=jp3;
document.querySelector("div").appendChild(img3);