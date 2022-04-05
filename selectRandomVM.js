var vms = VcPlugin.getAllVirtualMachines();
var output = [];
for (var i = 0 ; i < vms.length ; i++){
    output.push(vms[i].name);
}
return output[0];
