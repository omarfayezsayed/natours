using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem
{
    // *****************************************
    // DON'T CHANGE CLASS OR FUNCTION NAME
    // YOU CAN ADD FUNCTIONS IF YOU NEED TO
    // *****************************************
    public static class MatrixMultiplication
    {
        #region YOUR CODE IS HERE

        //Your Code is Here:
        //==================
        /// <summary>
        /// Multiply 2 square matrices in an efficient way [Strassen's Method]
        /// </summary>
        /// <param name="M1">First square matrix</param>
        /// <param name="M2">Second square matrix</param>
        /// <param name="N">Dimension (power of 2)</param>
        /// <returns>Resulting square matrix</returns>
        public static int[,] AddMatrix(int[,] M1, int[,] M2, int N)
        {
            int[,] Add = new int[N, N];
            for (int i = 0; i < N; i++)
            {
                for (int j = 0; j < N; j++)
                {
                    Add[i, j] = M1[i, j] + M2[i, j];
                }
            }
            return Add;
        }
        public static int[,] SubMatrix(int[,] M1, int[,] M2, int N)
        {
            int[,] Sub = new int[N, N];
            for (int i = 0; i < N; i++)
            {
                for (int j = 0; j < N; j++)
                {
                    Sub[i, j] = M1[i, j] - M2[i, j];
                }
            }
            return Sub;
        }

        public static int[,] MatrixMultiply(int[,] M1, int[,] M2, int N)
        {
            int[,] res = new int[N, N];
            if (N <= 128)
             {
                Parallel.For(0,N,i=>
                {
                    for (int j = 0; j < N; j++)
                    {
                        res[i, j] = 0;
                        for (int k = 0; k < N; k++)
                        {
                            res[i, j] = res[i, j] + (M1[i, k] * M2[k, j]);
                        }
                    }
                });
                return res;
            }

            int m = N / 2;
            // create the fisrt M1 arrays
            int[,] M1FirstFirst = new int[m, m];
            int[,] M1FirstSecond = new int[m, m];
            int[,] M1SecondFirst = new int[m, m];
            int[,] M1SecondSecond = new int[m, m];
            //create the second M2 arrays
            int[,] M2FirstFirst = new int[m, m];
            int[,] M2FirstSecond = new int[m, m];
            int[,] M2SecondFirst = new int[m, m];
            int[,] M2SecondSecond = new int[m, m];

            Parallel.For (0,n,i=>
            {
                for (int j = 0; j < m; j++)
                {
                    //fill first four arrays
                    M1FirstFirst[i, j] = M1[i, j];
                    M1FirstSecond[i, j] = M1[i, j + m];
                    M1SecondFirst[i, j] = M1[i + m, j];
                    M1SecondSecond[i, j] = M1[i + m, j + m];
                    // fill second four arrays
                    M2FirstFirst[i, j] = M2[i, j];
                    M2FirstSecond[i, j] = M2[i, j + m];
                    M2SecondFirst[i, j] = M2[i + m, j];
                    M2SecondSecond[i, j] = M2[i + m, j + m];
                }
            });

            // seven variable of strassen
            int[,] P = MatrixMultiply(AddMatrix(M1FirstFirst, M1SecondSecond, m), AddMatrix(M2FirstFirst, M2SecondSecond, m), m);
            int[,] Q = MatrixMultiply(AddMatrix(M1SecondFirst, M1SecondSecond, m), M2FirstFirst, m);

            int[,] R = MatrixMultiply(M1FirstFirst, SubMatrix(M2FirstSecond, M2SecondSecond, m), m);

            int[,] S = MatrixMultiply(M1SecondSecond, SubMatrix(M2SecondFirst, M2FirstFirst, m), m);

            int[,] T = MatrixMultiply(AddMatrix(M1FirstFirst, M1FirstSecond, m), M2SecondSecond, m);

            int[,] U = MatrixMultiply(SubMatrix(M1SecondFirst, M1FirstFirst, m), AddMatrix(M2FirstFirst, M2FirstSecond, m), m);

            int[,] V = MatrixMultiply(SubMatrix(M1FirstSecond, M1SecondSecond, m), AddMatrix(M2SecondFirst, M2SecondSecond, m), m);
            // Get Four quartiers
            int[,] C11 = AddMatrix(SubMatrix(AddMatrix(P, S, m), T, m), V, m);
            int[,] C12 = AddMatrix(R, T, m);
            int[,] C21 = AddMatrix(Q, S, m);
            int[,] C22 = AddMatrix(SubMatrix(AddMatrix(P, R, m), Q, m), U, m);
           parallel.For(0,N/2,i=>
            {
                for (int j = 0; j < N / 2; j++)
                {
                    res[i, j] = C11[i, j];
                    res[i, j + N / 2] = C12[i, j];
                    res[i + N / 2, j] = C21[i, j];
                    res[i + N / 2, j + N / 2] = C22[i, j];
                }
            });
            return res;
        }
            #endregion
        }
}