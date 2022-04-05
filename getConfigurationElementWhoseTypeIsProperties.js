// VMware vRealize Orchestrator action sample
// vRA 8.4

//action input type: configurationElementName (string), attributeElement(string)
//action return type: Properties



var configurationElementPath = "web-root";
// var configurationElementName  = "Catalog Item Credentials";
// var attributeElement="deployment"


try{
var category = Server.getConfigurationElementCategoryWithPath(configurationElementPath);

}
catch(e){
    System.log(e);
}

for each ( var element in category.configurationElements) { 
    if (element.name == configurationElementName) {
        var configurationElement = element;
    }
}


var deployment =new Properties();
var deployment=configurationElement.getAttributeWithKey(attributeElement).value;
return deployment;
