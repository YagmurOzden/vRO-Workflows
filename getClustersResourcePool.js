// VMware vRealize Orchestrator action sample
// vRA 8.4

//action input type: cluster (string)
//action return type: VC:ResourcePool (array)


// this code below gets all clusters
var clusters =VcPlugin.getAllClusterComputeResources();
var rPool=Array();
System.log("get cluster's resource pool action started")

//this loop is to check all clusters
for (var i in clusters){
    System.log(i+"- "+clusters[i].name+" = "+cluster);

    //this condision helps us select cluster
    if (cluster==clusters[i].name.toString()){
        //and this is for datastores
        rPool.push (clusters[i].resourcePool)           
        System.log("resource pool appointed:  "+clusters[i].resourcePool) 

    }
}

System.log("get cluster's resource pool action over")

return rPool;
