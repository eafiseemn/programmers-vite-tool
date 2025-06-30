/* -------------------------------------------------------------------------- */
/*                                  Enum Type                                 */
/* -------------------------------------------------------------------------- */

/* enumerable type */
// 찐 상수를 쓰고 싶을 때 사용
// enum을 사용할 경우 tree-shaking이 되지 않음

enum Direction {
  UP,
  DOWN,
  LEFT = 5,
  RIGHT
}
// 아무 값도 지정하지 않으면 0부터 시작, 특정 숫자를 지정하면 그 숫자부터 ++ ({0, 1, 5, 6})

const direction = {
  up: Direction.UP,
  down: Direction.DOWN,
  left: Direction.LEFT,
  right: Direction.RIGHT,
}

// user role 부여
enum User {
  ADMIN,
  MANAGER,
  USER,
  GUEST
}

const user = {
  name: 'tiger',
  auth: User.ADMIN,
}


// END_POINT 적용
enum End_point {
  USER = "https://jsonplaceholder.typicode.com/users",
  POKEMON = "https://pokeapi.co/api/v2/pokemon",
  IMAGE = "https://randomimage.com/200x200",
  PROFILE = "https://randomuser.me/api/",
}

const END_POINT = {
  user: End_point.USER
}