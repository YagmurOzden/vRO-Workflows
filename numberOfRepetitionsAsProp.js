// VMware vRealize Orchestrator action sample
// vRA 8.4

//action input type: none
//action return type: Properties


var deployment = System.getModule("<your-path-name>").getConfigurationElementWhoseTypeIsProperties("Catalog Item Credentials","deployment");
var catalogItems =System.getModule("<your-path-name>").getConfigurationElementWhoseTypeIsProperties("Catalog Item Credentials","catalogItems");

var count= new Properties();
var catalogItemName=[];
var catalogItemID=[];
var numberOfRepetitions=[];
var numberOfRepetitionsDurationTimeAsMinute=[];

for( var i=0; i<catalogItems.get("ID:").length;i++){
    numberOfRepetitions[i]=0;
    numberOfRepetitionsDurationTimeAsMinute[i]=0;
}
for(var i=0;i<catalogItems.get("ID:").length;i++){
    for(var j=0;j<deployment.get("catalogItemIDs:").length;j++){
        if( catalogItems.get("ID:")[i]  ==   deployment.get("catalogItemIDs:")[j]   ){
          
            numberOfRepetitions[i]=numberOfRepetitions[i]+1
            System.log("i: "+i +"  "+ "j: "+j)
            System.log("catalogItems id: "+catalogItems.get("ID:")[i] + "  =  "+"deployment catalog item id: "+deployment.get("catalogItemIDs:")[j]);
            // System.log("catalogItems name: "+catalogItems.get("name:")[i]);
            // System.log("catalogItems id: "+catalogItems.get("ID:")[i]);
            System.log("deployment deployment name: "+deployment.get("deploymentNames:")[j]);
            System.log("deployment deployment id: "+deployment.get("deploymentIDs:")[j]);
            // System.log("deployment catalog item id: "+deployment.get("catalogItemIDs:")[j]);
            System.log("deployment duration as minute: "+deployment.get("deploymentDurationAsMinute:")[j])
            System.log("numberOfRepetitionsDurationTimeAsMinute: "+numberOfRepetitionsDurationTimeAsMinute[i])

            numberOfRepetitionsDurationTimeAsMinute[i]= parseInt(deployment.get("deploymentDurationAsMinute:")[j])+ parseInt( numberOfRepetitionsDurationTimeAsMinute[i]);
            System.log("numberOfRepetitionsDurationTimeAsMinute[j]: "+ parseInt(numberOfRepetitionsDurationTimeAsMinute[i]))

            System.log("-----------------------")

        }
    }
}

count.put("catalogItemName",catalogItems.get("name:"));
count.put("catalogItemID",catalogItems.get("ID:"));
count.put("numberOfRepetitions",numberOfRepetitions);
count.put("numberOfRepetitionsDurationTimeAsMinute",numberOfRepetitionsDurationTimeAsMinute);


return count;
