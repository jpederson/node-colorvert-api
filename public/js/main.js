$(function(){var a=function(a){return $("#"+a).val()},b=function(){var b,c=$("#space").val();switch(c){case"cmyk":b="/cmyk/"+a("cmyk-c")+"/"+a("cmyk-m")+"/"+a("cmyk-y")+"/"+a("cmyk-k");break;case"hex":b="/hex/"+a("hex");break;case"hsl":b="/hsl/"+a("hsl-h")+"/"+a("hsl-s")+"/"+a("hsl-l");break;case"hsv":b="/hsv/"+a("hsv-h")+"/"+a("hsv-s")+"/"+a("hsv-v");break;case"lab":b="/lab/"+a("lab-l")+"/"+a("lab-a")+"/"+a("lab-b");break;case"rgb":b="/rgb/"+a("rgb-r")+"/"+a("rgb-g")+"/"+a("rgb-b");break;case"xyz":b="/xyz/"+a("xyz-x")+"/"+a("xyz-y")+"/"+a("xyz-z")}$.getJSON(b,function(a){$(".response").html("<pre>"+JSON.stringify(a,null,3)+"</pre>"),$("body").css("background-color",a.hex).css("color",a.hex_readable),$("a").css("color",a.hex_readable).css("border-color",a.hex_readable)})};$("#space").change(function(){$("fieldset.visible").removeClass("visible"),$("fieldset").filter("."+$(this).val()).addClass("visible")}),$("#convert").click(b),$("input[type=text]").keyup(function(a){13===a.keyCode&&b()}),$(".more-info").click(function(){$(".more:hidden").slideDown(700)})});