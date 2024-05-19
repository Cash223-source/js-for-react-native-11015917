# -js-for-react-native-11015917

Task 1: Number Array Processing
Location: `arrayManipulation.js`
Method: `processArray(numbers)`
Functionality:
 This method accepts an array of numbers.
 It returns a new array:
 Each even number in the original array is squared.
 Each odd number is tripled.

Task 2: String Array Transformation
Location: `arrayManipulation.js`
Method: `formatArrayStrings(strings, numbers)`
Functionality:
This method takes two arrays:
A string array.
A number array that has been altered by `processArray`.
It returns a new string array with modifications based on the corresponding numbers:
If the number is even, the string is converted to uppercase.
If the number is odd, the string is converted to lowercase.

Task 3: Generating User Profiles
Location: `userInfo.js`
Method: `createUserProfiles(names, modifiedNames)`
Functionality:
This method takes two arrays:
One with original names.
One with the modified names from Task 2.
It creates an array of objects, each containing:
The original name.
The modified name.
A unique id that starts at 1 and increments sequentially.