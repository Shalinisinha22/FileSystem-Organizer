import java.util.ArrayList;
class ArrayList1{
 public static void main(String[] args)
 {
   ArrayList<Integer>arr=new ArrayList<>();
   arr.add(10);
   arr.add(20);
   arr.add(30);
   arr.add(40);
   System.out.println("ArrayList is : "+arr);
   int access=arr.get(1);
   System.out.println("Elements at 1st index :"+access);
   int delete=arr.remove(3);
   System.out.println(delete);
   int update=arr.set(2,50);
   System.out.println(arr);
 }
}