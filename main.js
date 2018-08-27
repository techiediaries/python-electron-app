const {app, BrowserWindow} = require('electron')

function createWindow () {
    window = new BrowserWindow({width: 800, height: 600})
    window.loadFile('index.html')


    	/*var python = require('child_process').spawn('python', ['./hello.py']);
	python.stdout.on('data',function(data){
    		console.log("data: ",data.toString('utf8'));
	});*/


var pyshell =  require('python-shell');

pyshell.run('hello.py',  function  (err, results)  {
 if  (err)  throw err;
 console.log('hello.py finished.');
 console.log('results', results);
});   	
    
}



app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

