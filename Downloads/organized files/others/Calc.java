import java.awt.event.*;
import javax.swing.*;
public class Calc implements ActionListener
{
  JFrame f;
  JTextField t1,t2,t3;
  
  JButton b1,b2;
  
  Calc()
  {
    f=new JFrame();
    t1=new JTextField();
    t1.setBounds(50,50,30,30);
    t2=new JTextField();
    t2.setBounds(50,100,30,30);
    t3=new JTextField();
    t3.setBounds(50,150,30,30);
    t3.setEditable(false);
    b1=new JButton("+");
    b1.setBounds(50,200,50,30);
    b2=new JButton("-");
    b2.setBounds(50,250,50,30);
    b1.addActionListener(this);
    b2.addActionListener(this);
   f.add(t1);
   f.add(t2);
   f.add(b1);
   f.add(b2);
   f.add(t3);
   f.setSize(500,500);
   f.setLayout(null);
   f.setVisible(true);
  }
  public void actionPerformed(ActionEvent e)
  {
    int a=Integer.parseInt(t1.getText());
    int b=Integer.parseInt(t2.getText());
    int c;
    if(e.getSource()==b1)
    {
       c=a+b;
    }
    else
     {
      c=a-b;
     }
    String value=String.valueOf(c);
    t3.setText(value);
  }
 public static void main(String[] args)
 {
   new Calc();
 }
}
    