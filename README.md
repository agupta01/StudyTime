# StudyTime
Submission for SDHacks 2019

## Installation instructions
1. Install node.js if you haven't already!
2. Clone the git repo to your local machine
3. Navigate to the StudyTime directory within the git repo
4. Run `npm install`
5. Go to https://github.com/sq19/Profile and clone that git repo, too
6. Place `AddMoneyPage.js`, `AddMoneyTextBox.js`, and `ExpoConfigView.js` into the `sources` folder. Then, place `sources` into the path `StudyTime/StudyTime/node_modules/@expo`
7. Run `expo start`
8. Download the Expo helper app on iOS and scan the QR code that shows up (remember to click on Tunnel, not LAN!)
9. The app should open up on your phone automatically.

## Inspiration
It's midterm season here at UCSD, and getting quality, focused study time is on everyone's mind. After struggling with available study timers, we discovered that there needs to be a timer that offers more motivation for keeping focused. Naturally, our mind went to charging money as a result of not being focused.

## What it does
On the surface, this app looks just like a regular study timer. Once you start a timer, the user must remain in the app, not exiting to check messages, social media, or anything else, for the duration of the timer. If the user exits the app or switches to another app at any time, the platform will charge the user a preset amount of money ($1) which is deducted from a balance. Users may update their balance with as much money as they want before setting the timer.

## How I built it
We used react-native to build 100% of the project. There are 3 screens, a TabBar navigator, and a local JSON file in place of the backend (in future iterations, we plan to integrate MongoDB to put the backend into the cloud).

## Challenges I ran into
We ran into many challenges during the project. The biggest problem was not being able to update the JSON through react-native, for some reason. We struggled with finding a good database structure that balanced ease of development with simplicity. Another big problem was detecting the app state so that we could know if a user has moved the app from the foreground the background. Luckily, we found a built-in react component to do this, but it would (for some reason) also detect a background transition when the user's phone went to sleep. After doing more research, we discovered it was in an inactive "transition" state during that time.

## Accomplishments that I'm proud of
This was our first app in react-native, making this a valuable learning experience for all of us.

## What I learned
- How to use react-native
- Short-term development strategies in teams
- How to manage, pull from, and push to a JSON database

## What's next for StudyTime
Next, we'll focus on making the app more robust, squashing some bugs, and connecting the backend of the app to a MongoDB database.
