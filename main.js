chrome.storage.local.get({
    onOff: 'off'
}, function(data) {
    if(data.onOff === 'on') {
      x = document.querySelectorAll('*')
      for (var i = x.length - 1; i >= 0; i--) {
        x[i].style.border = '0.2px solid red';
     
    }

    }
});



