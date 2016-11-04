//sets fields in array
var fields =  [
    document.querySelector('#date'),
    document.querySelector('#quantity'),
    document.querySelector('#value')
];

//gets the tbody for appending tr
var tbody = document.querySelector('table tbody');

//fuction called on submit that appends fields values for table.
document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault();//so the page won`t reload
   
   var tr = document.createElement('tr');

   //for each field create a columm value
   fields.forEach(function(field){
       var td = document.createElement('td');
       td.textContent = field.value;
       tr.appendChild(td);
   });

   //4th td with the volume value
   var tdVolume = document.createElement('td');
   tdVolume.textContent = fields[1].value * fields[2].value;
   tr.appendChild(tdVolume);

   //appending tr in the table
   tbody.appendChild(tr);

   //cleaning fields
   fields[0].value = '';
   fields[1].value = '1';
   fields[2].value = '0';

   fields[0].focus();

});