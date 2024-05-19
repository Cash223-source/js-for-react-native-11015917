function createUserProfiles(names, modifiedNames) {
   if (names.length !== modifiedNames.length) {
     throw new Error('Both arrays must have the same length');
   }
 
   return names.map((name, index) => ({
     originalName: name,
     modifiedName: modifiedNames[index],
     id: index + 1
   }));
 }
 

 module.exports = createUserProfiles;
 