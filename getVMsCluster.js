// VMware vRealize Orchestrator action sample
// vRA 8.4

//action input type: vm (VC:VirtualMachine)
//action return type: VC:ClusterComputeResource



var parent = vm.runtime.host;
while (parent !== null && ! (parent instanceof VcClusterComputeResource)) {
	parent = parent.parent;
}
System.log("VC:VirtualMachine Name: " + vm.name);

System.log("VcClusterComputeResource of VM: " + parent.name);

return parent;
