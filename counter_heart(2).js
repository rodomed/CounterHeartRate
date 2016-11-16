
$(document).ready(function() {

   $("#click").on('click', calcOut);
   $(document).on('keypress', keyEnter);
   
   function calcOut() {

      var isInvalidPulse = function(a) {
         if(isNaN(a) || a < 40 || a > 100 ) {
            return true;
         }else {
            return false;
         }
      }

      var isInvalidAge = function(a) {
         if(isNaN(a) || a < 10 || a > 70 ) {
            return true;
         }else {
            return false;
         }
      }

      var pulse = $("#pulse").val();

      var age = $("#age").val();

      var inputAge = $('#age');

      var inputPulse = $('#pulse');

      var markElementMistake = function(id) {
         $(id).css({
            "border":"2px solid red",
            "background-color":"pink"
         });
      }

      var resetElementMistake = function(id) {
         $(id).css({
            "border":"0",
            "background-color":"white", 
         });
         $(id).val('');
      }

      if (isInvalidAge(age)) {
         markElementMistake('#age');
         inputAge.click(function() {
            resetElementMistake('#age');
         });
      }

      if(isInvalidPulse(pulse)) {
         markElementMistake('#pulse');
         $('#pulse').click(function() {
            resetElementMistake('#pulse');
         });
      }

      if(((isInvalidAge(age) == true || isInvalidPulse(pulse) == true)) || (isInvalidAge(age) == true && isInvalidPulse(pulse) == true)) {
         alert(" При вводе данных допущена ошибка\n             или\n исходные данные недостоверны для данного калькулятора");
         return false; 
      }

      $('#pulse_copy').text(pulse);  

      var calc220age = function(a, b) {
         var a = Math.floor((220 - age) / 100 * a);
         var strA = String(a);
         var b = Math.floor((220 - age) / 100 * b);
         var dash = " - ";
         var strB = String(b);
         if(!b) {
            return strA;
         }else {
            return strA + dash + strB;
         }
      }

      var calcFormula = function(a, b, c) {
         var a = Math.floor((205.8 - (0.685 * c)) / 100 * a);
         var strA = String(a);
         var b = Math.floor((205.8 - (0.685 * c)) / 100 * b);
         var c = age;
         var strB = String(b);
         var dash = "-";
         if(b == 0) {
            return strA;
         }else {
            return strA + dash + strB;  
         }
      }

      var age100 = calc220age(100);
      $('#age100').text(age100);

      var age90100 = calc220age(90, 100);
      $('#age90100').text(age90100);

      var age8090 = calc220age(80, 90);
      $('#age8090').text(age8090);

      var age7080 = calc220age(70, 80);
      $('#age7080').text(age7080);

      var age6070 = calc220age(60, 70);
      $('#age6070').text(age6070);

      var age5060 = calc220age(50, 60);
      $('#age5060').text(age5060);

      $('#formula100').text(calcFormula(100, 0, age));

      $('#formula90100').text(calcFormula(90, 100, age));

      $('#formula8090').text(calcFormula(80, 90, age));

      $('#formula7080').text(calcFormula(70, 80, age));

      $('#formula6070').text(calcFormula(60, 70, age));

      $('#formula5060').text(calcFormula(50, 60, age));
   
   }

   function keyEnter(event) {
      if(event.keyCode == 13) {
         calcOut();
         return false;
      }
   }

});






  

 