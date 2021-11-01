Setup is easy for the front end.

Place the `index.html`, `server.js` and `style.css` files together in the document root directory of any web server of your choice. (Example: Apache).

That's all there is to the front end setup process.


The backend API server runs on NodeJS. So you need to have NodeJS installed along with `npm` and `yarn`.
Additional instructions on how the API server needs to be setup are inside it's own README.

To run the API server, navigate to the API server root and type in:
`npm run start`

This should start the API server. The server runs on port `3000`. The frontend uses `localhost:3000` in order to locate the API server.
This can of course be changed in the `server.js` file for the front end, along with the IP and the port of the csgo server.

Once that is setup, you can simply head to index.html to check the status of the server.
