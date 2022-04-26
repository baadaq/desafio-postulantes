const puppeteer = require('puppeteer');
const fs = require('fs');
const { routerViewLocationKey } = require('vue-router');
async function scrapeSII(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.html');
//extraigo todo el codigo html en json para mandarlo en un txt feo
   const extract = await page.$eval('*',(e)=> e.innerHTML);
   parsed =JSON.stringify(extract);

   fs.writeFile("test.txt",parsed,(err)=>{
    if(err)
    console.log(err);
    });
   //// 
   /// aca lo dejare mas decente,pero se vera en la terminal.

    const titulo1 = await page.evaluate((
        ()=> Array.from(document.querySelectorAll('div[id="opciones"]'),
        row=> Array.from(row.querySelectorAll('ul'),cell=>cell.innerText)
        )
    )
    )
    const titulo12 = await page.evaluate((
        ()=> Array.from(document.querySelectorAll('h1[class="pull-left hidden-xs logo"]'),
        row=> Array.from(row.querySelectorAll('a[href]'),cell=>cell.innerHTML)
        )
    )
    )
    const titulo2 = await page.evaluate((
        ()=> Array.from(document.querySelectorAll('ul[id="main-menu"]'),
        row=> Array.from(row.querySelectorAll('li'),cell=>cell.innerText)
        )
    )
    )

   const h2divsel = await page.evaluate((
        ()=> Array.from(document.querySelectorAll('div[class="col-sm-3 hidden-xs"]'),
        row=> Array.from(row.querySelectorAll('h2'),cell=>cell.innerText)
        )
    )
    )
    const divdivsel = await page.evaluate((
        ()=> Array.from(document.querySelectorAll('div[id="buscar"]>form'),
        row=> Array.from(row.querySelectorAll('div,input'),cell=>cell.innerHTML)
        )
    )
    )
    const alldivsel = await page.evaluate((
        ()=> Array.from(document.querySelectorAll('ul[id="menu-lateral"]'),
        row=> Array.from(row.querySelectorAll('Li'),cell=>cell.innerText)
        )
    )
    )
    const tablaTitulodiv = await page.evaluate(
        ()=> Array.from(document.querySelectorAll('div[class="col-sm-9 contenido"]'),
        row=> Array.from(row.querySelectorAll('h2,p'),cell=>cell.innerHTML)
        )
    )
   const tablaTitulo = await page.evaluate(
       ()=> Array.from(document.querySelectorAll('table[id="tabledatasii"]>thead>tr'),
       row=> Array.from(row.querySelectorAll('th,td'),cell=>cell.innerText)
       )
   )

   const tabla = await page.evaluate(
      ()=> Array.from(
          document.querySelectorAll('table[id="tabledatasii"]>tbody>tr'),
          row=> Array.from(row.querySelectorAll('th,td'), cell=> cell.innerText)
      )
  )
  const arr=[titulo1,titulo12,titulo2,h2divsel,divdivsel,alldivsel,tablaTitulodiv,tablaTitulo,tabla]

  
  console.log(arrtoObj(arr));
   
   
    
    browser.close();
}

function arrtoObj(arr){
    var obj={};
    for(var i=0;i<arr.length;i++){
        obj[i]=arr[i];
    }
    return obj;
}
scrapeSII();