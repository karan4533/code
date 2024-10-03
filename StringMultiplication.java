import java.util.Scanner;

public class StringMultiplication {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        System.out.print("Enter how many times to repeat: ");
        int times = sc.nextInt();

        String result = "";
        for (int i = 0; i < times; i++) {
            result += str;
        }

        System.out.println("Result: " + result);
        sc.close();
    }
}
