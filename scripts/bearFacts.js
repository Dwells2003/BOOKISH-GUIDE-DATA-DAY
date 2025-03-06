$(document).ready(function(){
    console.log("doc is ready");

    let bearFacts = ["Grizz bears most aggressive", "Bears can climb faster than they can run!", "fact 3"];
    console.log(bearFacts);

    // $('bearFactList').append('<li class="list-group-item">' +bearFacts[0] + '</li>');

    // for(i = o; i < bearFactsList.length-1; i++){
    //     console.log(i)

    //     $('bearFactList').append('<li class="list-group-item">' +bearFacts[i] + '</li>');
    // }
    let = $bearFact

    let $bearFact = item;
    $li = $(li);
    
    bearFacts.forEach(function(item, i){
        $('bearFactList').append(`<li id="bearFactNumer${index}"class="list-group-item"> ${item} </li>`);
    });

    

});