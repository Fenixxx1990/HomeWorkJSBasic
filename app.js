const originalText = "Привет мир, мир прекрасен";
const searchString = "мир";
const replaceString = "JavaScript";

const result = originalText.replace(searchString, replaceString);
console.log(result.trimEnd());
