import java.util.Scanner;

public class strongNumber {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("enter a number to Check: ");
    int n = scanner.nextInt();
    scanner.close();
    
    int m = n;
    int result = 0;
    while (n>0) {
      int x = n%10;
      int y = 1;

      while (x >0) {
        y *= x;
        x--;
      }

      result += y;
      n /=10;
      
    }
    System.out.println(m==result? "yes it is strong number": "the given number is not strong number");
  }
}