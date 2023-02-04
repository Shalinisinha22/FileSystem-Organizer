import java.awt.event.*;
import javax.swing.*;
public class Addition implements ActionListener
{
  JFrame f;
  JTextField t1,t2;
  JButton b;
  JLabel l;
  Addition()
  {
    f=new JFrame();
    t1=new JTextField();
    t1.setBounds(100,50,50,50);
    t2=new JTextField();
    t2.setBounds(100,150,50,50);
    l=new JLabel("result");
    l.setBounds(100,200,50,50);
    b=new JButton("+");
    b.setBounds(100,250,50,50);
    b.addActionListener(this);
    f.add(t1);
    f.add(t2);
    f.add(l);
    f.add(b);
    f.setLayout(null);
    f.setSize(400,400);
    f.setVisible(true);
  }
  public void actionPerformed(ActionEvent e)
  {
    String s1=t1.getText();
    String s2=t2.getText();
    int a=Integer.parseInt(s1);
    int b=Integer.parseInt(s2);
    int c=a+b;
    String value=String.valueOf(c);
    l.setText(value);
  }
 public static void main(String[] args)
 {
   new Addition();
 }
}
    
    