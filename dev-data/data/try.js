for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    console.log(`c[${i},${j}] =`);
    for (let k = 0; k < 8; k++) {
      console.log(`M1[${i},${k}] * B[${k},${j}]`);
      if (k != 7) console.log("+");
    }
  }
}

// console.log("sM1d");

c[(0, 0)] =
  M1[(0, 0)] * M2[(0, 0)] +
  M1[(0, 1)] * M2[(1, 0)] +
  M1[(0, 2)] * M2[(2, 0)] +
  M1[(0, 3)] * M2[(3, 0)] +
  M1[(0, 4)] * M2[(4, 0)] +
  M1[(0, 5)] * M2[(5, 0)] +
  M1[(0, 6)] * M2[(6, 0)] +
  M1[(0, 7)] * M2[(7, 0)];
c[(0, 1)] =
  M1[(0, 0)] * M2[(0, 1)] +
  M1[(0, 1)] * M2[(1, 1)] +
  M1[(0, 2)] * M2[(2, 1)] +
  M1[(0, 3)] * M2[(3, 1)] +
  M1[(0, 4)] * M2[(4, 1)] +
  M1[(0, 5)] * M2[(5, 1)] +
  M1[(0, 6)] * M2[(6, 1)] +
  M1[(0, 7)] * M2[(7, 1)];
c[(0, 2)] =
  M1[(0, 0)] * M2[(0, 2)] +
  M1[(0, 1)] * M2[(1, 2)] +
  M1[(0, 2)] * M2[(2, 2)] +
  M1[(0, 3)] * M2[(3, 2)] +
  M1[(0, 4)] * M2[(4, 2)] +
  M1[(0, 5)] * M2[(5, 2)] +
  M1[(0, 6)] * M2[(6, 2)] +
  M1[(0, 7)] * M2[(7, 2)];
c[(0, 3)] =
  M1[(0, 0)] * M2[(0, 3)] +
  M1[(0, 1)] * M2[(1, 3)] +
  M1[(0, 2)] * M2[(2, 3)] +
  M1[(0, 3)] * M2[(3, 3)] +
  M1[(0, 4)] * M2[(4, 3)] +
  M1[(0, 5)] * M2[(5, 3)] +
  M1[(0, 6)] * M2[(6, 3)] +
  M1[(0, 7)] * M2[(7, 3)];
c[(0, 4)] =
  M1[(0, 0)] * M2[(0, 4)] +
  M1[(0, 1)] * M2[(1, 4)] +
  M1[(0, 2)] * M2[(2, 4)] +
  M1[(0, 3)] * M2[(3, 4)] +
  M1[(0, 4)] * M2[(4, 4)] +
  M1[(0, 5)] * M2[(5, 4)] +
  M1[(0, 6)] * M2[(6, 4)] +
  M1[(0, 7)] * M2[(7, 4)];
c[(0, 5)] =
  M1[(0, 0)] * M2[(0, 5)] +
  M1[(0, 1)] * M2[(1, 5)] +
  M1[(0, 2)] * M2[(2, 5)] +
  M1[(0, 3)] * M2[(3, 5)] +
  M1[(0, 4)] * M2[(4, 5)] +
  M1[(0, 5)] * M2[(5, 5)] +
  M1[(0, 6)] * M2[(6, 5)] +
  M1[(0, 7)] * M2[(7, 5)];
c[(0, 6)] =
  M1[(0, 0)] * M2[(0, 6)] +
  M1[(0, 1)] * M2[(1, 6)] +
  M1[(0, 2)] * M2[(2, 6)] +
  M1[(0, 3)] * M2[(3, 6)] +
  M1[(0, 4)] * M2[(4, 6)] +
  M1[(0, 5)] * M2[(5, 6)] +
  M1[(0, 6)] * M2[(6, 6)] +
  M1[(0, 7)] * M2[(7, 6)];
c[(0, 7)] =
  M1[(0, 0)] * M2[(0, 7)] +
  M1[(0, 1)] * M2[(1, 7)] +
  M1[(0, 2)] * M2[(2, 7)] +
  M1[(0, 3)] * M2[(3, 7)] +
  M1[(0, 4)] * M2[(4, 7)] +
  M1[(0, 5)] * M2[(5, 7)] +
  M1[(0, 6)] * M2[(6, 7)] +
  M1[(0, 7)] * M2[(7, 7)];
c[(1, 0)] =
  M1[(1, 0)] * M2[(0, 0)] +
  M1[(1, 1)] * M2[(1, 0)] +
  M1[(1, 2)] * M2[(2, 0)] +
  M1[(1, 3)] * M2[(3, 0)] +
  M1[(1, 4)] * M2[(4, 0)] +
  M1[(1, 5)] * M2[(5, 0)] +
  M1[(1, 6)] * M2[(6, 0)] +
  M1[(1, 7)] * M2[(7, 0)];
c[(1, 1)] =
  M1[(1, 0)] * M2[(0, 1)] +
  M1[(1, 1)] * M2[(1, 1)] +
  M1[(1, 2)] * M2[(2, 1)] +
  M1[(1, 3)] * M2[(3, 1)] +
  M1[(1, 4)] * M2[(4, 1)] +
  M1[(1, 5)] * M2[(5, 1)] +
  M1[(1, 6)] * M2[(6, 1)] +
  M1[(1, 7)] * M2[(7, 1)];
c[(1, 2)] =
  M1[(1, 0)] * M2[(0, 2)] +
  M1[(1, 1)] * M2[(1, 2)] +
  M1[(1, 2)] * M2[(2, 2)] +
  M1[(1, 3)] * M2[(3, 2)] +
  M1[(1, 4)] * M2[(4, 2)] +
  M1[(1, 5)] * M2[(5, 2)] +
  M1[(1, 6)] * M2[(6, 2)] +
  M1[(1, 7)] * M2[(7, 2)];
c[(1, 3)] =
  M1[(1, 0)] * M2[(0, 3)] +
  M1[(1, 1)] * M2[(1, 3)] +
  M1[(1, 2)] * M2[(2, 3)] +
  M1[(1, 3)] * M2[(3, 3)] +
  M1[(1, 4)] * M2[(4, 3)] +
  M1[(1, 5)] * M2[(5, 3)] +
  M1[(1, 6)] * M2[(6, 3)] +
  M1[(1, 7)] * M2[(7, 3)];
c[(1, 4)] =
  M1[(1, 0)] * M2[(0, 4)] +
  M1[(1, 1)] * M2[(1, 4)] +
  M1[(1, 2)] * M2[(2, 4)] +
  M1[(1, 3)] * M2[(3, 4)] +
  M1[(1, 4)] * M2[(4, 4)] +
  M1[(1, 5)] * M2[(5, 4)] +
  M1[(1, 6)] * M2[(6, 4)] +
  M1[(1, 7)] * M2[(7, 4)];
c[(1, 5)] =
  M1[(1, 0)] * M2[(0, 5)] +
  M1[(1, 1)] * M2[(1, 5)] +
  M1[(1, 2)] * M2[(2, 5)] +
  M1[(1, 3)] * M2[(3, 5)] +
  M1[(1, 4)] * M2[(4, 5)] +
  M1[(1, 5)] * M2[(5, 5)] +
  M1[(1, 6)] * M2[(6, 5)] +
  M1[(1, 7)] * M2[(7, 5)];
c[(1, 6)] =
  M1[(1, 0)] * M2[(0, 6)] +
  M1[(1, 1)] * M2[(1, 6)] +
  M1[(1, 2)] * M2[(2, 6)] +
  M1[(1, 3)] * M2[(3, 6)] +
  M1[(1, 4)] * M2[(4, 6)] +
  M1[(1, 5)] * M2[(5, 6)] +
  M1[(1, 6)] * M2[(6, 6)] +
  M1[(1, 7)] * M2[(7, 6)];
c[(1, 7)] =
  M1[(1, 0)] * M2[(0, 7)] +
  M1[(1, 1)] * M2[(1, 7)] +
  M1[(1, 2)] * M2[(2, 7)] +
  M1[(1, 3)] * M2[(3, 7)] +
  M1[(1, 4)] * M2[(4, 7)] +
  M1[(1, 5)] * M2[(5, 7)] +
  M1[(1, 6)] * M2[(6, 7)] +
  M1[(1, 7)] * M2[(7, 7)];
c[(2, 0)] =
  M1[(2, 0)] * M2[(0, 0)] +
  M1[(2, 1)] * M2[(1, 0)] +
  M1[(2, 2)] * M2[(2, 0)] +
  M1[(2, 3)] * M2[(3, 0)] +
  M1[(2, 4)] * M2[(4, 0)] +
  M1[(2, 5)] * M2[(5, 0)] +
  M1[(2, 6)] * M2[(6, 0)] +
  M1[(2, 7)] * M2[(7, 0)];
c[(2, 1)] =
  M1[(2, 0)] * M2[(0, 1)] +
  M1[(2, 1)] * M2[(1, 1)] +
  M1[(2, 2)] * M2[(2, 1)] +
  M1[(2, 3)] * M2[(3, 1)] +
  M1[(2, 4)] * M2[(4, 1)] +
  M1[(2, 5)] * M2[(5, 1)] +
  M1[(2, 6)] * M2[(6, 1)] +
  M1[(2, 7)] * M2[(7, 1)];
c[(2, 2)] =
  M1[(2, 0)] * M2[(0, 2)] +
  M1[(2, 1)] * M2[(1, 2)] +
  M1[(2, 2)] * M2[(2, 2)] +
  M1[(2, 3)] * M2[(3, 2)] +
  M1[(2, 4)] * M2[(4, 2)] +
  M1[(2, 5)] * M2[(5, 2)] +
  M1[(2, 6)] * M2[(6, 2)] +
  M1[(2, 7)] * M2[(7, 2)];
c[(2, 3)] =
  M1[(2, 0)] * M2[(0, 3)] +
  M1[(2, 1)] * M2[(1, 3)] +
  M1[(2, 2)] * M2[(2, 3)] +
  M1[(2, 3)] * M2[(3, 3)] +
  M1[(2, 4)] * M2[(4, 3)] +
  M1[(2, 5)] * M2[(5, 3)] +
  M1[(2, 6)] * M2[(6, 3)] +
  M1[(2, 7)] * M2[(7, 3)];
c[(2, 4)] =
  M1[(2, 0)] * M2[(0, 4)] +
  M1[(2, 1)] * M2[(1, 4)] +
  M1[(2, 2)] * M2[(2, 4)] +
  M1[(2, 3)] * M2[(3, 4)] +
  M1[(2, 4)] * M2[(4, 4)] +
  M1[(2, 5)] * M2[(5, 4)] +
  M1[(2, 6)] * M2[(6, 4)] +
  M1[(2, 7)] * M2[(7, 4)];
c[(2, 5)] =
  M1[(2, 0)] * M2[(0, 5)] +
  M1[(2, 1)] * M2[(1, 5)] +
  M1[(2, 2)] * M2[(2, 5)] +
  M1[(2, 3)] * M2[(3, 5)] +
  M1[(2, 4)] * M2[(4, 5)] +
  M1[(2, 5)] * M2[(5, 5)] +
  M1[(2, 6)] * M2[(6, 5)] +
  M1[(2, 7)] * M2[(7, 5)];
c[(2, 6)] =
  M1[(2, 0)] * M2[(0, 6)] +
  M1[(2, 1)] * M2[(1, 6)] +
  M1[(2, 2)] * M2[(2, 6)] +
  M1[(2, 3)] * M2[(3, 6)] +
  M1[(2, 4)] * M2[(4, 6)] +
  M1[(2, 5)] * M2[(5, 6)] +
  M1[(2, 6)] * M2[(6, 6)] +
  M1[(2, 7)] * M2[(7, 6)];
c[(2, 7)] =
  M1[(2, 0)] * M2[(0, 7)] +
  M1[(2, 1)] * M2[(1, 7)] +
  M1[(2, 2)] * M2[(2, 7)] +
  M1[(2, 3)] * M2[(3, 7)] +
  M1[(2, 4)] * M2[(4, 7)] +
  M1[(2, 5)] * M2[(5, 7)] +
  M1[(2, 6)] * M2[(6, 7)] +
  M1[(2, 7)] * M2[(7, 7)];
c[(3, 0)] =
  M1[(3, 0)] * M2[(0, 0)] +
  M1[(3, 1)] * M2[(1, 0)] +
  M1[(3, 2)] * M2[(2, 0)] +
  M1[(3, 3)] * M2[(3, 0)] +
  M1[(3, 4)] * M2[(4, 0)] +
  M1[(3, 5)] * M2[(5, 0)] +
  M1[(3, 6)] * M2[(6, 0)] +
  M1[(3, 7)] * M2[(7, 0)];
c[(3, 1)] =
  M1[(3, 0)] * M2[(0, 1)] +
  M1[(3, 1)] * M2[(1, 1)] +
  M1[(3, 2)] * M2[(2, 1)] +
  M1[(3, 3)] * M2[(3, 1)] +
  M1[(3, 4)] * M2[(4, 1)] +
  M1[(3, 5)] * M2[(5, 1)] +
  M1[(3, 6)] * M2[(6, 1)] +
  M1[(3, 7)] * M2[(7, 1)];
c[(3, 2)] =
  M1[(3, 0)] * M2[(0, 2)] +
  M1[(3, 1)] * M2[(1, 2)] +
  M1[(3, 2)] * M2[(2, 2)] +
  M1[(3, 3)] * M2[(3, 2)] +
  M1[(3, 4)] * M2[(4, 2)] +
  M1[(3, 5)] * M2[(5, 2)] +
  M1[(3, 6)] * M2[(6, 2)] +
  M1[(3, 7)] * M2[(7, 2)];
c[(3, 3)] =
  M1[(3, 0)] * M2[(0, 3)] +
  M1[(3, 1)] * M2[(1, 3)] +
  M1[(3, 2)] * M2[(2, 3)] +
  M1[(3, 3)] * M2[(3, 3)] +
  M1[(3, 4)] * M2[(4, 3)] +
  M1[(3, 5)] * M2[(5, 3)] +
  M1[(3, 6)] * M2[(6, 3)] +
  M1[(3, 7)] * M2[(7, 3)];
c[(3, 4)] =
  M1[(3, 0)] * M2[(0, 4)] +
  M1[(3, 1)] * M2[(1, 4)] +
  M1[(3, 2)] * M2[(2, 4)] +
  M1[(3, 3)] * M2[(3, 4)] +
  M1[(3, 4)] * M2[(4, 4)] +
  M1[(3, 5)] * M2[(5, 4)] +
  M1[(3, 6)] * M2[(6, 4)] +
  M1[(3, 7)] * M2[(7, 4)];
c[(3, 5)] =
  M1[(3, 0)] * M2[(0, 5)] +
  M1[(3, 1)] * M2[(1, 5)] +
  M1[(3, 2)] * M2[(2, 5)] +
  M1[(3, 3)] * M2[(3, 5)] +
  M1[(3, 4)] * M2[(4, 5)] +
  M1[(3, 5)] * M2[(5, 5)] +
  M1[(3, 6)] * M2[(6, 5)] +
  M1[(3, 7)] * M2[(7, 5)];
c[(3, 6)] =
  M1[(3, 0)] * M2[(0, 6)] +
  M1[(3, 1)] * M2[(1, 6)] +
  M1[(3, 2)] * M2[(2, 6)] +
  M1[(3, 3)] * M2[(3, 6)] +
  M1[(3, 4)] * M2[(4, 6)] +
  M1[(3, 5)] * M2[(5, 6)] +
  M1[(3, 6)] * M2[(6, 6)] +
  M1[(3, 7)] * M2[(7, 6)];
c[(3, 7)] =
  M1[(3, 0)] * M2[(0, 7)] +
  M1[(3, 1)] * M2[(1, 7)] +
  M1[(3, 2)] * M2[(2, 7)] +
  M1[(3, 3)] * M2[(3, 7)] +
  M1[(3, 4)] * M2[(4, 7)] +
  M1[(3, 5)] * M2[(5, 7)] +
  M1[(3, 6)] * M2[(6, 7)] +
  M1[(3, 7)] * M2[(7, 7)];
c[(4, 0)] =
  M1[(4, 0)] * M2[(0, 0)] +
  M1[(4, 1)] * M2[(1, 0)] +
  M1[(4, 2)] * M2[(2, 0)] +
  M1[(4, 3)] * M2[(3, 0)] +
  M1[(4, 4)] * M2[(4, 0)] +
  M1[(4, 5)] * M2[(5, 0)] +
  M1[(4, 6)] * M2[(6, 0)] +
  M1[(4, 7)] * M2[(7, 0)];
c[(4, 1)] =
  M1[(4, 0)] * M2[(0, 1)] +
  M1[(4, 1)] * M2[(1, 1)] +
  M1[(4, 2)] * M2[(2, 1)] +
  M1[(4, 3)] * M2[(3, 1)] +
  M1[(4, 4)] * M2[(4, 1)] +
  M1[(4, 5)] * M2[(5, 1)] +
  M1[(4, 6)] * M2[(6, 1)] +
  M1[(4, 7)] * M2[(7, 1)];
c[(4, 2)] =
  M1[(4, 0)] * M2[(0, 2)] +
  M1[(4, 1)] * M2[(1, 2)] +
  M1[(4, 2)] * M2[(2, 2)] +
  M1[(4, 3)] * M2[(3, 2)] +
  M1[(4, 4)] * M2[(4, 2)] +
  M1[(4, 5)] * M2[(5, 2)] +
  M1[(4, 6)] * M2[(6, 2)] +
  M1[(4, 7)] * M2[(7, 2)];
c[(4, 3)] =
  M1[(4, 0)] * M2[(0, 3)] +
  M1[(4, 1)] * M2[(1, 3)] +
  M1[(4, 2)] * M2[(2, 3)] +
  M1[(4, 3)] * M2[(3, 3)] +
  M1[(4, 4)] * M2[(4, 3)] +
  M1[(4, 5)] * M2[(5, 3)] +
  M1[(4, 6)] * M2[(6, 3)] +
  M1[(4, 7)] * M2[(7, 3)];
c[(4, 4)] =
  M1[(4, 0)] * M2[(0, 4)] +
  M1[(4, 1)] * M2[(1, 4)] +
  M1[(4, 2)] * M2[(2, 4)] +
  M1[(4, 3)] * M2[(3, 4)] +
  M1[(4, 4)] * M2[(4, 4)] +
  M1[(4, 5)] * M2[(5, 4)] +
  M1[(4, 6)] * M2[(6, 4)] +
  M1[(4, 7)] * M2[(7, 4)];
c[(4, 5)] =
  M1[(4, 0)] * M2[(0, 5)] +
  M1[(4, 1)] * M2[(1, 5)] +
  M1[(4, 2)] * M2[(2, 5)] +
  M1[(4, 3)] * M2[(3, 5)] +
  M1[(4, 4)] * M2[(4, 5)] +
  M1[(4, 5)] * M2[(5, 5)] +
  M1[(4, 6)] * M2[(6, 5)] +
  M1[(4, 7)] * M2[(7, 5)];
c[(4, 6)] =
  M1[(4, 0)] * M2[(0, 6)] +
  M1[(4, 1)] * M2[(1, 6)] +
  M1[(4, 2)] * M2[(2, 6)] +
  M1[(4, 3)] * M2[(3, 6)] +
  M1[(4, 4)] * M2[(4, 6)] +
  M1[(4, 5)] * M2[(5, 6)] +
  M1[(4, 6)] * M2[(6, 6)] +
  M1[(4, 7)] * M2[(7, 6)];
c[(4, 7)] =
  M1[(4, 0)] * M2[(0, 7)] +
  M1[(4, 1)] * M2[(1, 7)] +
  M1[(4, 2)] * M2[(2, 7)] +
  M1[(4, 3)] * M2[(3, 7)] +
  M1[(4, 4)] * M2[(4, 7)] +
  M1[(4, 5)] * M2[(5, 7)] +
  M1[(4, 6)] * M2[(6, 7)] +
  M1[(4, 7)] * M2[(7, 7)];
c[(5, 0)] =
  M1[(5, 0)] * M2[(0, 0)] +
  M1[(5, 1)] * M2[(1, 0)] +
  M1[(5, 2)] * M2[(2, 0)] +
  M1[(5, 3)] * M2[(3, 0)] +
  M1[(5, 4)] * M2[(4, 0)] +
  M1[(5, 5)] * M2[(5, 0)] +
  M1[(5, 6)] * M2[(6, 0)] +
  M1[(5, 7)] * M2[(7, 0)];
c[(5, 1)] =
  M1[(5, 0)] * M2[(0, 1)] +
  M1[(5, 1)] * M2[(1, 1)] +
  M1[(5, 2)] * M2[(2, 1)] +
  M1[(5, 3)] * M2[(3, 1)] +
  M1[(5, 4)] * M2[(4, 1)] +
  M1[(5, 5)] * M2[(5, 1)] +
  M1[(5, 6)] * M2[(6, 1)] +
  M1[(5, 7)] * M2[(7, 1)];
c[(5, 2)] =
  M1[(5, 0)] * M2[(0, 2)] +
  M1[(5, 1)] * M2[(1, 2)] +
  M1[(5, 2)] * M2[(2, 2)] +
  M1[(5, 3)] * M2[(3, 2)] +
  M1[(5, 4)] * M2[(4, 2)] +
  M1[(5, 5)] * M2[(5, 2)] +
  M1[(5, 6)] * M2[(6, 2)] +
  M1[(5, 7)] * M2[(7, 2)];
c[(5, 3)] =
  M1[(5, 0)] * M2[(0, 3)] +
  M1[(5, 1)] * M2[(1, 3)] +
  M1[(5, 2)] * M2[(2, 3)] +
  M1[(5, 3)] * M2[(3, 3)] +
  M1[(5, 4)] * M2[(4, 3)] +
  M1[(5, 5)] * M2[(5, 3)] +
  M1[(5, 6)] * M2[(6, 3)] +
  M1[(5, 7)] * M2[(7, 3)];
c[(5, 4)] =
  M1[(5, 0)] * M2[(0, 4)] +
  M1[(5, 1)] * M2[(1, 4)] +
  M1[(5, 2)] * M2[(2, 4)] +
  M1[(5, 3)] * M2[(3, 4)] +
  M1[(5, 4)] * M2[(4, 4)] +
  M1[(5, 5)] * M2[(5, 4)] +
  M1[(5, 6)] * M2[(6, 4)] +
  M1[(5, 7)] * M2[(7, 4)];
c[(5, 5)] =
  M1[(5, 0)] * M2[(0, 5)] +
  M1[(5, 1)] * M2[(1, 5)] +
  M1[(5, 2)] * M2[(2, 5)] +
  M1[(5, 3)] * M2[(3, 5)] +
  M1[(5, 4)] * M2[(4, 5)] +
  M1[(5, 5)] * M2[(5, 5)] +
  M1[(5, 6)] * M2[(6, 5)] +
  M1[(5, 7)] * M2[(7, 5)];
c[(5, 6)] =
  M1[(5, 0)] * M2[(0, 6)] +
  M1[(5, 1)] * M2[(1, 6)] +
  M1[(5, 2)] * M2[(2, 6)] +
  M1[(5, 3)] * M2[(3, 6)] +
  M1[(5, 4)] * M2[(4, 6)] +
  M1[(5, 5)] * M2[(5, 6)] +
  M1[(5, 6)] * M2[(6, 6)] +
  M1[(5, 7)] * M2[(7, 6)];
c[(5, 7)] =
  M1[(5, 0)] * M2[(0, 7)] +
  M1[(5, 1)] * M2[(1, 7)] +
  M1[(5, 2)] * M2[(2, 7)] +
  M1[(5, 3)] * M2[(3, 7)] +
  M1[(5, 4)] * M2[(4, 7)] +
  M1[(5, 5)] * M2[(5, 7)] +
  M1[(5, 6)] * M2[(6, 7)] +
  M1[(5, 7)] * M2[(7, 7)];
c[(6, 0)] =
  M1[(6, 0)] * M2[(0, 0)] +
  M1[(6, 1)] * M2[(1, 0)] +
  M1[(6, 2)] * M2[(2, 0)] +
  M1[(6, 3)] * M2[(3, 0)] +
  M1[(6, 4)] * M2[(4, 0)] +
  M1[(6, 5)] * M2[(5, 0)] +
  M1[(6, 6)] * M2[(6, 0)] +
  M1[(6, 7)] * M2[(7, 0)];
c[(6, 1)] =
  M1[(6, 0)] * M2[(0, 1)] +
  M1[(6, 1)] * M2[(1, 1)] +
  M1[(6, 2)] * M2[(2, 1)] +
  M1[(6, 3)] * M2[(3, 1)] +
  M1[(6, 4)] * M2[(4, 1)] +
  M1[(6, 5)] * M2[(5, 1)] +
  M1[(6, 6)] * M2[(6, 1)] +
  M1[(6, 7)] * M2[(7, 1)];
c[(6, 2)] =
  M1[(6, 0)] * M2[(0, 2)] +
  M1[(6, 1)] * M2[(1, 2)] +
  M1[(6, 2)] * M2[(2, 2)] +
  M1[(6, 3)] * M2[(3, 2)] +
  M1[(6, 4)] * M2[(4, 2)] +
  M1[(6, 5)] * M2[(5, 2)] +
  M1[(6, 6)] * M2[(6, 2)] +
  M1[(6, 7)] * M2[(7, 2)];
c[(6, 3)] =
  M1[(6, 0)] * M2[(0, 3)] +
  M1[(6, 1)] * M2[(1, 3)] +
  M1[(6, 2)] * M2[(2, 3)] +
  M1[(6, 3)] * M2[(3, 3)] +
  M1[(6, 4)] * M2[(4, 3)] +
  M1[(6, 5)] * M2[(5, 3)] +
  M1[(6, 6)] * M2[(6, 3)] +
  M1[(6, 7)] * M2[(7, 3)];
c[(6, 4)] =
  M1[(6, 0)] * M2[(0, 4)] +
  M1[(6, 1)] * M2[(1, 4)] +
  M1[(6, 2)] * M2[(2, 4)] +
  M1[(6, 3)] * M2[(3, 4)] +
  M1[(6, 4)] * M2[(4, 4)] +
  M1[(6, 5)] * M2[(5, 4)] +
  M1[(6, 6)] * M2[(6, 4)] +
  M1[(6, 7)] * M2[(7, 4)];
c[(6, 5)] =
  M1[(6, 0)] * M2[(0, 5)] +
  M1[(6, 1)] * M2[(1, 5)] +
  M1[(6, 2)] * M2[(2, 5)] +
  M1[(6, 3)] * M2[(3, 5)] +
  M1[(6, 4)] * M2[(4, 5)] +
  M1[(6, 5)] * M2[(5, 5)] +
  M1[(6, 6)] * M2[(6, 5)] +
  M1[(6, 7)] * M2[(7, 5)];
c[(6, 6)] =
  M1[(6, 0)] * M2[(0, 6)] +
  M1[(6, 1)] * M2[(1, 6)] +
  M1[(6, 2)] * M2[(2, 6)] +
  M1[(6, 3)] * M2[(3, 6)] +
  M1[(6, 4)] * M2[(4, 6)] +
  M1[(6, 5)] * M2[(5, 6)] +
  M1[(6, 6)] * M2[(6, 6)] +
  M1[(6, 7)] * M2[(7, 6)];
c[(6, 7)] =
  M1[(6, 0)] * M2[(0, 7)] +
  M1[(6, 1)] * M2[(1, 7)] +
  M1[(6, 2)] * M2[(2, 7)] +
  M1[(6, 3)] * M2[(3, 7)] +
  M1[(6, 4)] * M2[(4, 7)] +
  M1[(6, 5)] * M2[(5, 7)] +
  M1[(6, 6)] * M2[(6, 7)] +
  M1[(6, 7)] * M2[(7, 7)];
c[(7, 0)] =
  M1[(7, 0)] * M2[(0, 0)] +
  M1[(7, 1)] * M2[(1, 0)] +
  M1[(7, 2)] * M2[(2, 0)] +
  M1[(7, 3)] * M2[(3, 0)] +
  M1[(7, 4)] * M2[(4, 0)] +
  M1[(7, 5)] * M2[(5, 0)] +
  M1[(7, 6)] * M2[(6, 0)] +
  M1[(7, 7)] * M2[(7, 0)];
c[(7, 1)] =
  M1[(7, 0)] * M2[(0, 1)] +
  M1[(7, 1)] * M2[(1, 1)] +
  M1[(7, 2)] * M2[(2, 1)] +
  M1[(7, 3)] * M2[(3, 1)] +
  M1[(7, 4)] * M2[(4, 1)] +
  M1[(7, 5)] * M2[(5, 1)] +
  M1[(7, 6)] * M2[(6, 1)] +
  M1[(7, 7)] * M2[(7, 1)];
c[(7, 2)] =
  M1[(7, 0)] * M2[(0, 2)] +
  M1[(7, 1)] * M2[(1, 2)] +
  M1[(7, 2)] * M2[(2, 2)] +
  M1[(7, 3)] * M2[(3, 2)] +
  M1[(7, 4)] * M2[(4, 2)] +
  M1[(7, 5)] * M2[(5, 2)] +
  M1[(7, 6)] * M2[(6, 2)] +
  M1[(7, 7)] * M2[(7, 2)];
c[(7, 3)] =
  M1[(7, 0)] * M2[(0, 3)] +
  M1[(7, 1)] * M2[(1, 3)] +
  M1[(7, 2)] * M2[(2, 3)] +
  M1[(7, 3)] * M2[(3, 3)] +
  M1[(7, 4)] * M2[(4, 3)] +
  M1[(7, 5)] * M2[(5, 3)] +
  M1[(7, 6)] * M2[(6, 3)] +
  M1[(7, 7)] * M2[(7, 3)];
c[(7, 4)] =
  M1[(7, 0)] * M2[(0, 4)] +
  M1[(7, 1)] * M2[(1, 4)] +
  M1[(7, 2)] * M2[(2, 4)] +
  M1[(7, 3)] * M2[(3, 4)] +
  M1[(7, 4)] * M2[(4, 4)] +
  M1[(7, 5)] * M2[(5, 4)] +
  M1[(7, 6)] * M2[(6, 4)] +
  M1[(7, 7)] * M2[(7, 4)];
c[(7, 5)] =
  M1[(7, 0)] * M2[(0, 5)] +
  M1[(7, 1)] * M2[(1, 5)] +
  M1[(7, 2)] * M2[(2, 5)] +
  M1[(7, 3)] * M2[(3, 5)] +
  M1[(7, 4)] * M2[(4, 5)] +
  M1[(7, 5)] * M2[(5, 5)] +
  M1[(7, 6)] * M2[(6, 5)] +
  M1[(7, 7)] * M2[(7, 5)];
c[(7, 6)] =
  M1[(7, 0)] * M2[(0, 6)] +
  M1[(7, 1)] * M2[(1, 6)] +
  M1[(7, 2)] * M2[(2, 6)] +
  M1[(7, 3)] * M2[(3, 6)] +
  M1[(7, 4)] * M2[(4, 6)] +
  M1[(7, 5)] * M2[(5, 6)] +
  M1[(7, 6)] * M2[(6, 6)] +
  M1[(7, 7)] * M2[(7, 6)];
c[(7, 7)] =
  M1[(7, 0)] * M2[(0, 7)] +
  M1[(7, 1)] * M2[(1, 7)] +
  M1[(7, 2)] * M2[(2, 7)] +
  M1[(7, 3)] * M2[(3, 7)] +
  M1[(7, 4)] * M2[(4, 7)] +
  M1[(7, 5)] * M2[(5, 7)] +
  M1[(7, 6)] * M2[(6, 7)] +
  M1[(7, 7)] * M2[(7, 7)];
