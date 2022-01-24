const notices = document.querySelector('.notices');
const dropdwon_menuList = notices.querySelector('.dropdwon-menuList');

notices.addEventListener('click', () => {
    console.log(dropdwon_menuList);
    dropdwon_menuList.classList.contains('active') ?
        dropdwon_menuList.classList.remove('active') :
        dropdwon_menuList.classList.add('active');

});

let bars = document.getElementById('bars'),
    sidebar = document.querySelector('.sidebar');
bars.addEventListener('click', () => {
    sidebar.classList.contains('active') ? sidebar.classList.remove('active') : sidebar.classList.add('active');
})

let sidebar_nav = Array.from(document.querySelectorAll('.sidebar-nav'));
sidebar_nav.forEach(element => {
    element.addEventListener('click', () => {
        sidebar_nav.forEach((re) => {
            re.classList.remove('active')
        })
        element.classList.add('active');
    })
})

//toggle dark and mode
let mode=document.querySelector('.mode');
mode.addEventListener('click',()=>{

    if( document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
       mode.querySelector('i').classList.replace('bi-sun','bi-moon-fill');

    }
    else{
        document.body.classList.add('dark');
        mode.querySelector('i').classList.replace('bi-moon-fill','bi-sun');


    }
  
})



let data1 = [800, 320, 190, 250, 400, 600],
data2 = [502, 203, 70, 200, 350, 400],
years=[2015,2016,2017,2018,2019,2020];
//chart
var options = {
    chart: { type: 'area', height: '100%', width: '100%', },

    series: [{ name: 'murad', data: data1 }, { name: 'salaaaes', data: data2 }],

    xaxis: { categories: [...years] },
    colors:['#43a047', '#e65245', '#e43a15']
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

