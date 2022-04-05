// VMware vRealize Orchestrator action sample
// vRA 8.4

//workflow input type: VM (VC:VirtualMachine)
//                   snapshotname (string)
//                   removeAllSnapshotsOfVM

//workflow output type: 



function removeSnapshotOfVM(vm,snapshots){

    if (vm.runtime==null || vm.runtime.connectionState == VcVirtualMachineConnectionState.connected){
        System.log(vm.name+" is connected to the server.")

        if(snapshots.length >0){
            for (i in snapshots){

                    //looks for the snapshot we want to delete in the snapshot list. Deletes that snapshot when found
                    if(snapshotname==snapshots[i].name){
                        System.log( snapshots[i].name+ " = "+ snapshots[i].name.toString()+" the selected snapshot will be removed");
                        snapshots[i].removeSnapshot_Task();         
 
                    }
                    //if the variables are not the same.That means the snapshot we want to delete is not in the snapshot list of VM
                    else if (snapshotname!=snapshots[i].name){

                        System.log(snapshotname+" ==  "+snapshots[i].name);
                        System.log(i+" No snapshot according to the input entered")
                    }
            }
        }else{
            throw("there is no snapshot to delete");
        }

    }else{
        throw(vm.name+" is not connected.   ");
    }

}

function removeSnapshotsOfVM(vm,snapshots){
    for (i in snapshots){

        System.log(vm.name+" "+snapshots[i].name+" deleted.")
        snapshots[i].removeSnapshot_Task();
        System.log("-------------------")
    }
        


}

if (removeAllSnapshotsOfVM==true)
    removeSnapshotsOfVM(vm,snapshots);
else if(removeAllSnapshotsOfVM==false)
