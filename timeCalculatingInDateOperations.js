// VMware vRealize Orchestrator action sample
// vRA 8.4

//action input type: date2 (string) , date1 (string)
//action return type: number

//while using this action; time format should be like this: '2021-11-04T08:37:38.273456Z'

var createdAt=date1;
var updatedAt=date2;


createdDay= createdAt.split("T")[0];
createTime=createdAt.split("T")[1];
var cdate= new Date(createdDay+"T"+createTime.split(".")[0]+".000Z")

updatedDay= updatedAt.split("T")[0];
updatedTime=updatedAt.split("T")[1];
var udate= new Date(updatedDay+"T"+updatedTime.split(".")[0]+".000Z")


function diff_minutes(dt2, dt1) 
{
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return parseInt( Math.abs(Math.round(diff)));
}

dt1 = cdate;
dt2 = udate;
System.log("Updated time - created time = "+diff_minutes(dt2, dt1));
return diff_minutes(dt2, dt1);
