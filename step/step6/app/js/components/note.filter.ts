export function noteFilter() {
  return function (value) {
    return value > 3 ? 'glyphicon glyphicon-heart' : '';
  };
}
