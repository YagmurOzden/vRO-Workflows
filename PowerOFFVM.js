// VMware vRealize Orchestrator action sample
// vRA 8.5.0

//action input type: vm : VC:VirtualMachine
//action return type: void


var poweroffTask = vm.powerOffVM_Task();

System.getModule("com.vmware.library.vc.basic").vim3WaitTaskEnd(
    poweroffTask,
    true,
    1
);

// vim3WaitTaskEnd(task,progress,pollrate) is a vmware library it has 3 parameters task, progress, pollrate
// Wait for a VC Task to end.
// When task ended, return the task result if any.

//task: Task to wait for
//progress: Log progess while waiting for the task
//pollRate: Polling rate for the task state [seconds]
