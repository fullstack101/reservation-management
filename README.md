# reservation-management by team3  

## Getting started:  

Install and configure git. Then clone this repository as follows:  
    cd ~  
    git clone https://github.com/fullstack101/reservation-management.git  
    cd reservation-management/    

Install nodejs and npm:  
    sudo apt-get update  
    sudo apt-get install nodejs  
    sudo apt-get install npm    

Install npm packages from our package.json file:  
    npm install     

## Working within environment:    

Running eslint to check for style errors(try to always do it before committing):  
    npm run style   

Using mocha to run tests located in our test directory(no tests as of now):  
    npm test    

Starting the server:  
    npm start   

Adding dependencies(updates package.json file):  
    npm install --save name_of_a_package_we_need   

Adding dev-dependencies(updates package.json file):  
    npm install --dev-save name_of_a_package_we_need    
