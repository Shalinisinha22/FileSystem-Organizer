class A
{
 
int roll;
String name;

 
}
 class B extends A
 {
  int marks;
 public void get_data(int roll, String name,int marks)
  { 
     this.roll=roll;
     this.name=name;
     this.marks=marks;
  }
 public void display()
  {
   System.out.println(+roll);
   Sytem.out.println(name);
   
   System.out.println(+marks);   
  }
 }
 public class C
{
 public static void main(String[]args)
 {
   B ob=new B();
   ob.get_data(1,"s",90);
   ob.display();
 }
} 