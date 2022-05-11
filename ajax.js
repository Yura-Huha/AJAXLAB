$(document).ready(function(){
    $.get("https://my-json-server.typicode.com/Yura-Huha/AJAXLAB/posts",function(data){
      console.log(data);
      for(i=0;i<data.length;i++){
        $("table tbody").append(`
          <tr>
            <th>`+data[i].lastElementNumber+`</th>
            <th>`+data[i].name_of_complexInput+`</th>
            <th>`+data[i].name_of_refugeInput+`</th>
            <th>`+data[i].capasityInput+`</th>
            <th>`+data[i].amount_of_wellsInput+`</th>
            <th>`+data[i].daily_productivityInput+`</th>
            <th>`+data[i].amount_of_pumped_gasInput+`</th>
            <th>`+data[i].quantity_of_selected_gasInput+`</th>
            <th>`+data[i].dateInput+`</th>
            <th><a class="delete" href="#" data-id="`+data[i].lastElementNumber+`">Видалити</a>
          </tr>
          `);
      }
    });
  });

$(document).ready (function (){
  $("#inputBtn").bind("click", function(){
      $.ajax({
              method: "POST",
          url: "table.php",
          data: {
              ComplexName: $("#name_of_complexInput").val(), 
              RefugeName: $("#name_of_refugeInput").val(), 
              capasity: $("#capasityInput").val(), 
              amountWells: $("#amount_of_wellsInput").val(), 
              DailyProductivity: $("#daily_productivityInput").val(), 
              ammountPumpedGas: $("#amount_of_pumped_gasInput").val(), 
              quantity: $("#quantity_of_selected_gasInput").val(),
              date: $("#dateInputt").val()
          },
          dataType: "html",
          beforeSend: funcBefore,
          success: funcSuccess
      });
  });
});

    $(document).on("click",".delete",function(e){
      e.preventDefault();
      id=$(this).data("id");
      $.post("https://my-json-server.typicode.com/Yura-Huha/AJAXLAB/posts",{action:"delete",id:id},function(data){
        console.log(data);
      }
    );
    });