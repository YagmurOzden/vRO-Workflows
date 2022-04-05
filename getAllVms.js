// VMware vRealize Orchestrator action sample
// vRA 8.4

//workflow input type: string (array),



var vms = Server.findAllForType("VC:VirtualMachine");
if (vms == null) {
    return [];
}
return vms
   .filter(function (v) {return v != null && !v.isTemplate;})
   .map(function (v) {return v.name})
   .sort();
