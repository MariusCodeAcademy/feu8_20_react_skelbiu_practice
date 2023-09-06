```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

  // match /{document=**} {
  //     allow read, write: if true;
  //   }
  match /skelbimai/{skelbimoId} {

    function isValidTitle() {
    return request.resource.data.title is string &&
      request.resource.data.title.size() > 3 &&
      request.resource.data.title.size() < 255
    }
    function isValidPrice() {
      return request.resource.data.price is number &&
      request.resource.data.price > 0
    }
    // leisti tik prisijungusius vartotojus
    allow read: if true;

    // leisti istrinti tik jei prisijunnges vartotojas yra skelbimo autorius
    // request.auth.uid - to kas kreipiasi uid
    // resource.data.userUid - bandomo pasiekti resurso reikme
    allow delete: if request.auth.uid == resource.data.userUid

    allow create: if request.auth != null &&
      isValidTitle() &&
      isValidPrice() &&
      // neleisti sukurti skelbimo ne savo vardu
      request.auth.uid == request.resource.data.userUid
    match /comments/{commId} {
    	allow read
		}
  }

  match /todos/{todoId} {
  allow read
  allow write: if request.auth.token.email == 'james@bond.com'
  }


  }

}
```
