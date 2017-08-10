# POC NodeJs API using Hapi https://hapijs.com/ framework 

## What's This?

This is a Proof of concept Api built with Hapi.js for the PDF generation. 

## Running the API

To get started, clone the repo.

git clone https://github.com/oscarlagatta/ev-users-api.git

Make sure you have Node.js and npm installed, then install the dependencies for whichever branch you're working on.

npm install

Lastly, run the API.

npm start

The API will be served at `http://localhost:3000`.


### Calling the PDF api

|Action | method     | url       |
|---- | ------------ | ------------|
|generate a pdf    | Get      | http://localhost:3000/api/v1/pdf?url=https://github.com/westy92/html-pdf-chrome  |
| To see all the pdf files in the public folder   | Get  | http://localhost:3000/api/v1/pdf/files/ |
|To see a specific pdf file   | Get        | http://localhost:3000/api/v1/pdf/files/be7e4509-c5fb-4c02-85d9-b0f35c8b6e68.pdf |

## Currently is deployed at Digital Ocean Cloud

I've created a droplet which is a VPS virtual server, with full access login to the shell, and you can install whatever you want.

I've created a SSH key using Putty http://www.putty.org/ 


