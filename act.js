// fetch(' http://localhost:3000/professions/{varianta}/city/{city}', {
//     method: 'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         name:'Forma1'
//     })
// }).then(res=>{
//     return res.json()
// })
// .then(data=>console.log(data))
// .catch(error=>console.log('ERROR'))

$('#button-save').on('click', function () {
    window.location.href = 'Forma1.html';
});

function make() {
    $.ajax({
                url: 'http://localhost:3000/form-data',
                method: 'GET',
                dataType: 'json',
                success: function(response) {
                    console.log(123);
                    console.log(response);
                    $('#firstName').text(response.nume);
                     $('#lastName').text(response.prenume);
                    // $('#lastName').html(response.prenume);
                    $('#email').text(response.email);
                    $('#phonenumb').text(response.phonenumb);
                    $('#adress').text(response.adress);
                    $('#hobby').text(response.hobby);
                    $('#social').text(response.social);

                    $('#pr').text(response.pr);
                    $('#edtype').text(response.edtype); 
                    $('#dur').text(response.dur);
                    
                    $('#graduation').text(response.graduation);
                    $('#dl').text(response.dl);
                    $('#dor').text(response.dor);
                    $('#dc').text(response.dc);
                    $('#studies-start').text(response.studies);
                    $('#start-job').text(response.startJob);
                    $('#finish-job').text(response.finishJob);


                    //  dor:$('#dor'),
                    // dc:$('#dc'),


                    
                    
$('.first-part.opened').find('.dur')
const select = $('.first-part.opened').find('.dur');

    $('.input-element').each(function() {
        articles.push($(this).val());
    });

                        
                    
$('.first-part.opened').find('.dl')
const select1 = $('.first-part.opened').find('.dl');

    $('.input-element').each(function() {
        articles.push($(this).val());
    });
                },
            });
}

$(document).ready(() => {
    make();


});



// $(test).on($(document).ready(() => {
// make();{ 
// console.log($("pr").val());
// console.log($("dur").val());
// console.log($("#dl").val());

// education.push({
//     edtype: $(this).find(".edtype").val(),
//     dur: $(this).find(".dur").data(),
//     // studiesStart: $(this).find(".studies-start").val(),
//     // graduation: $(this).find(".graduation").val(),

// })

// }
// })
// )

// function loadTitles() {
//     // console.log('load education types');// 
    
//     $.ajax({
//         url: 'http://localhost:3000/form-data',
//         method: 'GET',
//         datatype: 'json',
//         headers: {
//             'Content-Type': 'application/json',
//         },

//         data: JSON.stringify({

//             main: Forma1,
//             edtype: edtype,
//             dur: dur,


//         })
//     //     success: function{} {
//     //         response = uniqueBy(response, 'education');
//     //         response.forEach(educationType => {
//     //             $("#dur").append(buildOption(educationType.education, educationType.education));
//     //         });
//     //         console.log(response);
//     //     },
//     });
// }

// $(document).ready(function () {
//     loadTitles();
// });

// console.log($("dor").val());
// console.log($("dl").val());
// console.log($("dc").val());
// $(test).on($(document).ready(() => {
//     make();{ 
//     console.log($("dur").val());
//     // console.log($("dor").val());
//     // console.log($("dl").val());
//     // console.log($("dc").val());
    
//     }
//     })
//     )

// $(".list").each(function(){
// console.log(($this));
// })


// $('.first-part.opened').find('.dor')
// const select = $('.first-part.opened').find('.dor');

//     $('.input-element').each(function() {
//         articles.push($(this).val());
//     });

// },
// });
// }