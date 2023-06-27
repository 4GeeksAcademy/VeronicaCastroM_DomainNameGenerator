var pronouns = ["the", "our"];
var adjs = ["great", "big"];
var nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

for (let pronoun of pronouns) {
  for (let adjective of adjs) {
    for (let noun of nouns) {
      for (let extension of extensions) {
        let domain = pronoun + adjective + noun + extension;
        console.log(domain);
      }
    }
  }
}
