let x = "текст",
res;
switch (typeof x) {
  case 'number':
    res = "x - число";
    break;
  case 'string':
    res = "x - строка";
    break;
  case 'boolean':
    res = "x - логический тип";
    break;
  default:
        res = "Тип X не определен"
}
console.log(res);