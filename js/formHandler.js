$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitSuccess:function(t,a){var i;t.attr("action")||(a.preventDefault(),a=function(t){var a="./includes/"+t.attr("id")+".php";t.attr("template-path")&&(a=t.attr("template-path")+"/includes/"+t.attr("id")+".php");return a}(t),i={},t.find("input, textarea, option:selected").each(function(t){var a=$(this).val(),e=$(this).attr("id");$(this).is(":checkbox")?a=$(this).is(":checked"):$(this).is(":radio")?a=$(this).val()+" = "+$(this).is(":checked"):$(this).is("option:selected")&&(e=$(this).parent().attr("id")),i[e]=a}),$.ajax({url:a,type:"POST",data:i,cache:!1,success:function(){t.is("[data-success-msg]")?t.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+t.attr("data-success-msg")+"</strong></div></div>"):window.location.replace(t.attr("success-url")),t.trigger("reset")},error:function(){0==$("#form-alert").length&&t.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+t.attr("data-fail-msg")+"</strong></div></div>")}}))},filter:function(){return $(this).is(":visible")}})});