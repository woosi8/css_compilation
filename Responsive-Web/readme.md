# **Responsive_Web(with vanilla js,Jquery)**

## Introduction

Make clone Responsive website by vanilla js,Jquery
This is reponsive for Mobile,Laptop,Tablet

## What kind of skills

### Navbar in default.js

Make navgation bar by toggle

### Slide in default.js

Make 3 slides in the same parent.
Place each slides with their left value.
When you click next,prev button,
slide will move to next or prev by fucntion of slide left value comparing current slide value

### ScrollTrigger in jswork.js

Make SlideShow by ScrollTrigger in class News
Put toggle to add visible class(.active) or hidden class(inactive)
Put offset X,Y value

### Isotope in jswork.js

Make button-filter-groups by Isotope Filtering in class Portfolio-gallery

### Bxslider in default.js

Make slide-button in class testmonials by Jquery

### Top button in default.js

set innerHeight value \* where the point that you want

### source
https://yeoninim.tistory.com/38,
https://web-atelier.tistory.com/44,
https://nykim.work/85
html { font-size: 62.5%; } // font-size 10px이므로
rem을 줄때 10px이면 1rem 150px이면 1.5rem


### media querry

/*
##Device = Desktops
##Screen = 1281px to higher resolution desktops
##Device = 데스크탑
##Screen = 1281px 이상 해상도 데스크탑
*/
@media (min-width: 1281px) {
//CSS
}


/*
##Device = Laptops, Desktops
##Screen = B/w 1025px to 1280px
##Device = 랩탑, 데스크탑
##Screen = 1025px에서 1280px 사이
*/
@media (min-width: 1025px) and (max-width: 1280px) {
//CSS
}


/*
##Device = Tablets, Ipads (portrait),
##Screen = B/w 768px to 1024px
##Device = 태블릿, 아이패드(세로),
##Screen = 768px에서 1024px 사이
*/
@media (min-width: 768px) and (max-width: 1024px) {
//CSS
}


/*
##Device = Tablets, Ipads (landscape)
##Screen = B/w 768px to 1024px
##Device = 태블릿, 아이패드(가로)
##Screen = 768px에서 1024px 사이
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
//CSS
}


/*
##Device = Low Resolution Tablets, Mobiles (Landscape)
##Screen = B/w 481px to 767px
##Device = 저해상도 태블릿, 모바일(가로)
##Screen = 481px에서 767px 사이
*/
@media (min-width: 481px) and (max-width: 767px) {
//CSS
}


/*
##Device = Most of the Smartphones Mobiles (Portrait)
##Screen = B/w 320px to 479px
##Device = 대부분의 스마트폰 모바일 기기(세로)
##Screen = 320px에서 479px 사이
*/
@media (min-width: 320px) and (max-width: 480px) {
//CSS
}
