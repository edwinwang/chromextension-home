chrome.commands.onCommand.addListener(function(command) {
  if(command.match("backhomepage")){
    //window.location.assign("http://www.w3school.com.cn");
    //alert("test");
    //chrome.windows.getCurrent(function(window) {
        //alert(window);
        //window.location.assign("http://www.w3school.com.cn");
    //});

    //chrome.tabs.executeScript(null, {code:"location.href='http://www.baidu.com/'"}); 
    //chrome.tabs.getCurrent(function(tab) {
        //chrome.tabs.create({url: "http://www.baidu.com"});
        //alert(tab);
        //chrome.tabs.update(tab.id, {url: "http://www.baidu.com"});
    //});
    chrome.tabs.getSelected(function(tab) {
        //alert(tab.url);
        //chrome.tabs.executeScript(tab.id, {code:"location.href='http://www.baidu.com/'"}); 
        chrome.tabs.update(tab.id, {url: "http://www.baidu.com"});
    });
    //alert(location.href);
  }
});