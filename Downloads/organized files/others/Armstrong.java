class Armstrong
{
  public static void main(String[] args)
   {
     int num=153;
     int temp,n,sum=0;
     n=num;
     while(n!=0)
     {
       temp=n%10;
       sum=sum+temp*temp*temp;
       n=n/10;
      }
     if(num==sum)
      {
        System.out.println("armstrong");
       }
      else
      {

        System.out.println("not");
      }
  }
}
