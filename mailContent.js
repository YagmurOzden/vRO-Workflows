// VMware vRealize Orchestrator action sample
// vRA 8.4

//workflow input type: time (number),
//                     date (string)

                     

//workflow return type: string 

//I use the configuration elements for this


var count = System.getModule("<your-path-name>").getConfigurationElementWhoseTypeIsProperties("Catalog Item Credentials","count");
var content="";


content='<!DOCTYPE html>'+
'<html>'+
'<head>'+
'<style>'+

'table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%;}'+

' td, th { border: 1px solid #898989; text-align: middle; padding: 8px; text-align:center; }'+

'tr:nth-child(2n) { background-color: #898989; }'+
'</style>'+
'</head>'+
'<body>'+
" <h2 style='color:black'> "+date+ "</h2>" +
'<table>'+
  '<tr><th>'+'Catalog Item Name:'+'</th><th>Number of Request</th><th>Total Duration As Minute</th><th>Estimated Labor Cost</th></tr>'

  for (var i in count.get("catalogItemID")){
      content=content+'<tr><td>'+count.get("catalogItemName")[i]+ '</td><td>'+count.get("numberOfRepetitions")[i]+'</td><td>'+count.get("numberOfRepetitionsDurationTimeAsMinute")[i]+'</td><td>'+parseInt(count.get("numberOfRepetitionsDurationTimeAsMinute")[i])*0.3+'$'+'</td></tr>'
  }
    content=content+'<tr><td>'+'Total of catalog items'+'</td><td>'+count.get("catalogItemName").length+'</td><td>'+time+'</td><td>'+Math.round( time*0.3)+"$"+'</td></tr>'


content=content+'</table>'+ '</body>'+'</html>';
return content
