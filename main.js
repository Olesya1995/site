//const list = document.getElementsByClassName('.header_burger')










$(document).ready(function(){
                  $('.header_burger').click(function(event){
                                             $('.header_burger,.header-navbar').toggleClass('active');

                                            });
                  });

$(document).ready(function(){
                  $('.header_burger').click(function(event){
                                             $('.header_menu').toggleClass('active');
                                             $('body').toggleClass('lock');

                                            });
                  });