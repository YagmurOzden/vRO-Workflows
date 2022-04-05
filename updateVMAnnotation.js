// VMware vRealize Orchestrator action sample
// vRA 8.4

//action input type: vm (VC:VirtualMachine), newNotes (string)
//action return type: string


if(vm==null){
    throw("You have not made an entry for virtual machine");
}

else if(newNotes==null){
    throw("You have not made an entry for annotation")
}
else {
    var oldNotes = vm.summary.config.annotation;
    if (oldNotes == null){oldNotes = "";}
    System.log("Old VM Notes: "+oldNotes);


    // Now set the new Notes:
    // Start by creating a ConfigSpec
    var configSpec = new VcVirtualMachineConfigSpec();


    // Update the annotation property with new value
    configSpec.annotation = newNotes;


    // launch task to reconfig the vm with the new configspec
    // NOTE: This is safe to apply with powered on VM
    var task = vm.reconfigVM_Task(configSpec);

    System.log("Current VM Notes: "+newNotes);


}
