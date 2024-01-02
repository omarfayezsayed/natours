
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
class HelloWorld {
   static int [] dp;
   static int [] build;
   static List<int>ans;
    static void Main() {
        int n =30;
        int[] c = new int[] { 1, 5, 10, 20, 25 };
        Console.WriteLine(SolveValue(c,n));
        ConstructSolution(c,n);
    }
    static public  int []  ConstructSolution(int[] values, int N)
    {
        ans=new List<int>();
       int cur=N;
       while(build[cur]!=0)
       {
           if(cur!=build[cur]){
               ans.Add(cur-build[cur]);
            //   Console.Write(cur-build[cur]+" ");
           }
           cur=build[cur];
       }
       if(cur!=0)
       {
           ans.Add(cur);
       }
       int [] arr =ans.ToArray();
    //   Console.Write(cur);
       return arr;
    }
   
        static public int SolveValue(int[] values, int N)
        {
            dp = new int [N+2];
            build =new int[N+2];
            for(int i=1;i<=N;i++)
            {
                dp[i]=100000;
                for(int j=0;j<values.Length;j++)
                {
                    if(i-values[j]>=0)
                    {
                        int x=dp[i];
                        dp[i]=Math.Min(dp[i],1+dp[i-values[j]]);
                          if(dp[i]!=x){
                              build[i]=i-values[j];
                          }
                        //   else{
                        //       build[i]=i;
                        //   }
                    }
                }
            }
            // for(int i=0;i<=N;i++)
            // {
            //     Console.Write(build[i]+" ");
            // }
            return dp[N];
        }
}
