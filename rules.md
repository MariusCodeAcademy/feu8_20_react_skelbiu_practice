```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone with your Firestore database reference to view, edit,
    // and delete all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    //
    // function isNewAddValid() {
    // return request.resource.data.price is number &&
    // 	request.resource.data.price > 0 &&
    //   request.resource.data.price < 1000 &&
    //   request.resource.data.title is string &&
    //   request.resource.data.title.size() > 3 &&
    //   request.resource.data.title.size() < 255 &&
    //   request.resource.data.userUid == request.auth.uid
    // }
    // Make sure to write security rules for your app before that time, or else
    // all client requests to your Firestore database will be denied until you Update
    // your rules
    // match /{document=**} {
    //   allow read, write: if request.time < timestamp.date(2023, 10, 4);
    // }
    match /skelbimai/{selbimoObj} {
    allow read: if request.auth != null;
    // allow delete: if request.auth.token.email == 'james@bond.com';
    allow delete: if request.auth.uid == resource.data.userUid;
    allow create: if request.resource.data.price is number &&
    	request.resource.data.price > 0 &&
      request.resource.data.price < 1000 &&
      request.resource.data.title is string &&
      request.resource.data.title.size() > 3 &&
      request.resource.data.title.size() < 255 &&
      request.resource.data.userUid == request.auth.uid;
    }
    allow update: if isNewAddValid()
  }
}
```
