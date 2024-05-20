function luassegitiga(){

  var x = parseFloat(document.getElementById('alas').value);
  var y = parseFloat(document.getElementById('tinggi').value);  
  thumb1 = Number.isNaN(x);
  thumb2 = Number.isNaN(y);
  

  if ( x == '' || y == '' || thumb1 == true || thumb2 == true){
    document.getElementById("label-list").setAttribute("hidden"," ");
    alert('harap masukkan nilai yang valid');
  
  }
  else{
    document.getElementById("label-list").removeAttribute("hidden");
    rumus = x*y/2;
    Number.parseFloat(rumus);
    labelalas = document.getElementById('jsalas');
    labeltinggi = document.getElementById('jstinggi');
    labeltotal = document.getElementById('jstotal');

    labelalas.innerHTML = x;
    labeltinggi.innerHTML = y;
    labeltotal.innerHTML = rumus;
  
  }
}

function kelilingsegitiga(){

  document.getElementById("keliling-list").removeAttribute("hidden");

  var s1 = parseFloat(document.getElementById('sisi1').value);
  var s2 = parseFloat(document.getElementById('sisi2').value);
  var s3 = parseFloat(document.getElementById('sisi3').value);

  shumb1 = Number.isNaN(s1);
  shumb2 = Number.isNaN(s2);
  shumb3 = Number.isNaN(s3);

  if ( s1 == '' || s2 == '' || s3 == '' || shumb1 == true || shumb2 == true || shumb3 == true){
    document.getElementById('keliling-list').setAttribute('hidden','');
    alert('harap masukkan nilai yang valid');

  }else{

  kelilingrumus = parseFloat(s1)+parseFloat(s2)+parseFloat(s3);

  sisi1 = document.getElementById('jss1');
  sisi2 = document.getElementById('jss2');
  sisi3 = document.getElementById('jss3');
  sisitotal = document.getElementById('js-total');

  sisi1.innerHTML = s1;
  sisi2.innerHTML = s2;
  sisi3.innerHTML = s3;
  sisitotal.innerHTML = kelilingrumus;
  }

}

function reset() {
  
  document.getElementById('label-list').setAttribute('hidden','');
  document.getElementById('alas').value = '';
  document.getElementById('tinggi').value= '';
  
}

function resetKeliling() {
  
  document.getElementById('keliling-list').setAttribute('hidden','');
  document.getElementById('sisi1').value = '';
  document.getElementById('sisi2').value = '';
  document.getElementById('sisi3').value = '';
  
}
