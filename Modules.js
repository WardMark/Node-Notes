// MODULES

/* REPL is an abbreviation for read–eval–print loop
You can access the REPL by typing the command 'node' into the terminal
Modularity is a software design technique where one program has distinct parts, each providing a single piece of the overall functionality
Essentially, a module is a collection of code located in a file. 
Instead of having an entire program located in a single file, code is organized into separate files based on the concerns they address. 
These files can then be included in other files by using the require() function.
Node.js has several built-in modules to perform common tasks efficiently. These are known as the core modules.

The console module is a global node module, don't need to require it in
.log() — to print messages to the terminal.
.assert() — to print a message to the terminal if the value is falsy.
.table() — to print out a table in the terminal from an object or array.

Node has a global 'process' object with useful methods and information about the current process
The process.env property is an object which stores and controls information about the environment in which the process is currently running
One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development
The process.argv property holds an array of command line values provided when the current process was initiated. */
  node myProgram.js testing several features
  console.log(process.argv[3]); // Prints 'several'

// Then there is the 'os' module, it must be required in.
const os = require('os');
/* With the os module saved to the os variable, you can call methods like:
os.type() — to return the computer’s operating system.
os.arch() — to return the operating system CPU architecture.
os.networkInterfaces() — to return information about the network interfaces of the computer, such as IP and MAC address.
os.homedir() — to return the current user’s home directory.
os.hostname() — to return the hostname of the operating system.
os.uptime() — to return the system uptime, in seconds.

Utility functions don’t necessarily create new functionality in a program, but you can think of them as internal tools used to maintain and debug your code. 
The util core module contains methods specifically designed for these purposes.*/
const util = require('util');
/* One important object is types, which provides methods for runtime type checking in Node.
Another important util method is .promisify(), which turns callback functions into promises. */



