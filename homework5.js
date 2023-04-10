/*1. Таблицу с `id="age-table"`.
2. Все элементы `label` внутри этой таблицы (их три).
3. Первый `td` в этой таблице (со словом «Age»).
4. Форму `form` с именем `name="search"`.
5. Первый `input` в этой форме.
6. Последний `input` в этой форме.*/

let table = document.getElementById('age-table');
let table1 = document.querySelector("#age-table");

let label = table.getElementsByTagName("label");
let label1 =table.querySelectorAll("label");
let label2=document.querySelectorAll("#age-name table")

let td =table.querySelector("td");
let td1=table.getElementsByTagName("td")[0];

let form =document.getElementsByName("search")[0];
let form1 = document.querySelector('form[name="search"]');

let inout =form.getElementsByTagName('input')[0]
let inout1 =form.querySelector('input')


let inputs = form.querySelectorAll('input')
let last =inputs[inputs.length-1] 

// BODY. Мы в боди добавили комментарий который выдаст капсом боди-tagName.

