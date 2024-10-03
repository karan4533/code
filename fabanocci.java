import java.util.Scanner;
public class fabanocci {
  public static void main(String[]args){

    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a number: ");
    int number = scanner.nextInt();

     int a = 0;
    int b = 1;
    int c;

    for (int i = number; i!=0; i--){
      System.out.print(a + ", ");
      c = a+b;
      a= b;
      b= c;
    }
  }
}