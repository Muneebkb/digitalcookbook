/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Time : 30 Mins */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_pancakes"); 
         return false;
    });
    
        /* button  #backbuttonpancake */
    $(document).on("click", "#backbuttonpancake", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* listitem  Time : 1 Hours */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_1lasagne"); 
         return false;
    });
    
        /* button  #lasagneback */
    $(document).on("click", "#lasagneback", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* listitem  Time : 1 Hour */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_1Roast"); 
         return false;
    });
    
        /* button  #backchicken */
    $(document).on("click", "#backchicken", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
