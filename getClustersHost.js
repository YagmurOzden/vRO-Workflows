// VMware vRealize Orchestrator action sample
// vRA 8.4

//workflow return type:  (VC:HostSystem),
//         input type:   cluster(string, Enter the cluster entry so that the host can be selected)


// this code below gets all clusters
var clusters =VcPlugin.getAllClusterComputeResources();
var hosts = VcPlugin.getAllHostSystems();
//this loop is to check all clusters
var list=new Array();

for (i in clusters){
    if (cluster==clusters[i].name){
       for(j in hosts){
           for(var y=0 ; y< clusters[i].host.length;y++){
               //System.log(y+" :"+ clusters[i].host[y].name)
                if(hosts[j].name==clusters[i].host[y].name){
                    list.push(hosts[j]);
                }
            }
       }
    }
    
}
var randomHost=list[Math.floor(Math.random() * list.length)];
System.log("get cluster's host action finished. this action returns a random host belonging to that cluster. Host: "+randomHost.name)

return randomHost;

