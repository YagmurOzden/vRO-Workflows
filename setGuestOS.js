// VMware vRealize Orchestrator workflow sample
// vRA 8.4

//workflow input type: guestOSName (ARRAY/VC:VirtualMachineGuestOSIdentifier),
//                   guestOSDescription (ARRAY/string),
//                   OS (string),
//                   vmName (string)
                     

//workflow return type: guestOSName (ARRAY/VC:VirtualMachineGuestOSIdentifier)




for (i in guestOSDescription){
    if (OS ==guestOSDescription[i]) {
        System.log("guest os has appointed:  "+guestOSName[i].name);
        guest_OS= guestOSName[i];
    }
