(function(){$(".segment").on("click",function(s){var e,l,t,a,i,d,g,n;e="#"+$(this).attr("id")+"-box";g=$("li.segment");for(t=0,i=g.length;t<i;t++){l=g[t];if($(l).hasClass("selected")){$(l).toggleClass("selected")}}$(this).toggleClass("selected");n=$(".unit-section");for(a=0,d=n.length;a<d;a++){l=n[a];if($(l)[0]!==$(e)[0]&&$(l).hasClass("disabled")===false){$(l).toggleClass("disabled")}}if($(e).hasClass("disabled")){return $(e).toggleClass("disabled")}})}).call(this);