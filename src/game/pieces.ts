enum PieceType {
  Chick,
  Chicken,
  Giraffe,
  Elephant,
  Lion,
}

enum Direction {
    Forward,
    ForwardLeft,
    ForwardRight,
    Left,
    Right,
    Backward,
    BackwardLeft,
    BackwardRight,
}

const SecondPlayerDirection = new Map<Direction, Direction>([
    [Direction.Forward, Direction.Backward],
    [Direction.ForwardLeft, Direction.BackwardRight],
    [Direction.ForwardRight, Direction.BackwardLeft],
    [Direction.Left, Direction.Right],
    [Direction.Right, Direction.Left],
    [Direction.Backward, Direction.Forward],
    [Direction.BackwardLeft, Direction.ForwardRight],
    [Direction.BackwardRight, Direction.ForwardLeft],
])

enum Player {
  First,
  Second,
}

const PieceMoves = new Map<PieceType, Direction[]>([
    [PieceType.Chick, [Direction.Forward]],
    [PieceType.Chicken, [Direction.Forward, Direction.ForwardLeft, Direction.ForwardRight, Direction.Left, Direction.Right, Direction.Backward]],
    [PieceType.Elephant, [Direction.ForwardLeft, Direction.ForwardRight, Direction.BackwardLeft, Direction.BackwardRight]],
    [PieceType.Giraffe, [Direction.Forward, Direction.Left, Direction.Right, Direction.Backward]],
    [PieceType.Lion, [Direction.Forward, Direction.ForwardLeft, Direction.ForwardRight, Direction.Left, Direction.Right, Direction.Backward, Direction.BackwardLeft, Direction.BackwardRight]],
])

interface Piece {
  type: PieceType;
  owner: Player;
}