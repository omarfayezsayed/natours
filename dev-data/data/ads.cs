
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
class HelloWorld {
   static int [,] dp;
   static List<int>ans;
    static void Main() {
        int n =30;
        int[] c = new int[] { 1, 5, 10, 20, 25 };
        Console.WriteLine(SolveValue(c,n));
        ConstructSolution(c,n);
    }
    static public  int [] ConstructSolution(int[] values, int N)
    {

        ans=new List<int>();
      Dictionary<(int, int), (int,int)> build = new Dictionary<(int, int), (int,int)>();
        for(int i=0; i<=N ;i++)
        {
            for(int j=values.Length-1 ; j>=0 ;j--)
            {
                int op1=10000000;
                if(i-values[j]>=0)
                {
                    op1=1+dp[j,i-values[j]];
                }
                int op2=dp[j+1,i];
                if(dp[j,i]==op1)
                {
                    build.Add((j,i),(j,i-values[j]));
                }
                else{
                    build.Add((j,i),(j+1,i));
                }
            }
        }
    
        int curA=0;
        int curB=N;
        while(curA<values.Length)
        {
            
         int temp1=build[(curA,curB)].Item1;
         int temp2=build[(curA,curB)].Item2;

         if(curB!=temp2)
         {
             ans.Add(curB-temp2);
         }
         curA=temp1;
         curB=temp2;
        }
        int  [] arr=new int [ans.Count]; 
        for(int i=0;i<ans.Count;i++)
        {
            Console.Write(ans[i]+" ");
            arr[i]=ans[i];
        }
        return arr;
    }
    
    static public int SolveValue(int[] values, int N)
    {
         dp = new int [values.Length+5, N+5];
        for(int i=0;i<=values.Length;i++)
        {
            for(int j=0;j<=N;j++)
            {
                dp[i,j]=10000000;
            }
        }
        dp[values.Length,0]=0;
        for(int i=0; i<=N ;i++)
        {
            for(int j=values.Length-1 ; j>=0 ;j--)
            {
                int op1=10000000;
                if(i-values[j]>=0)
                {
                    op1=1+dp[j,i-values[j]];
                }
                int op2=dp[j+1,i];
                dp[j,i]=Math.Min(op1,op2);
            }
        }
        return dp[0,N];
    }
}
