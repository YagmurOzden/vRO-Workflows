// VMware vRealize Orchestrator action sample
// vRA 8.4

//workflow return type: string (array)



// this code below gets all clusters
var clusters=VcPlugin.getAllClusterComputeResources();
//this creates a array names clusterNames
var clusterNames = new Array();

//just to make sure the action started and works
System.log("getAllClusters action started")

//this loop is for pushing cluster names to the clusterNames array.
for (var i in clusters){
clusterNames.push(clusters[i].name);
}

//just says the action is over
System.log("finish")

//and returns the cluster names as string array
return clusterNames;


//these are some variables that we can acces as example.
//----------------------------------------------------------//
//System.log("SUMMARY: "+clusters[i].summary);
//System.log("NETWORK: "+clusters[i].network);
//System.log("TYPE: "+clusters[i].type);
//System.log("VIM HOST: "+clusters[i].vimHost.name);
//System.log(clusters[i].datastore.values);

