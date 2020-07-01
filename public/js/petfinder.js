var pf = new petfinder.Client({
  apiKey: "9ZIjo2h6va7mE2o7gib9UgxFdxZIQPzAUi6ie89tAICPlja6Nh",
  secret: "hWpjkvbCaGKN3HaWQpjhuQone74dcebaUwqMktjD",
});

pf.animal
  .search()
  .then(function (response) {
    // Do something with `response.data.animals`
    console.log(response);
  })
  .catch(function (error) {
    // Handle the error
    console.log(error);
  });
