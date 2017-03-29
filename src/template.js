module.exports = `
<!doctype html>
<html lang="{{lang}}">
<head>
  <meta charset="UTF-8">
  <title>{{title}}</title>
  <meta name="description" content="{{description}}">
  <meta name="keywords" content="{{keywords}}">
  <meta name="author" content="{{author}}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="{{csssrc}}">
</head>

<body>
{{> body}}
<!-- JavaScript -->
<script src="{{jsscript}}"></script>
</body>
</html>
`;
