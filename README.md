# Introduction
This repo is for a hackton submittion at Sezzle.

# About
Create a web app using any language which logs calculations as they happen and shares those calculations with everyone connected to the app.

For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4".This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest.

## Installation
1. Clone this Git repository: `git@github.com:mickiasmek/realtime-calculator-app.git`
2. Install website dependencies by running command: `npm install node express@4 socket.io nodemon`

## Using this repo
1. `npm run dev` : Runs the server

## Deployment
Live demo available at https://www.

## References
https://socket.io/get-started/chat
https://www.youtube.com/watch?v=xKaTnc1q8UQ
https://www.youtube.com/watch?v=jD7FnbI76Hg
