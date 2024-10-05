import java.util.Scanner;

public class SumOfNumbersInString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter numbers separated by commas: ");
        String[] numbers = scanner.nextLine().split(",");
        int sum = 0;

        // Loop to calculate the sum
        for (String number : numbers) {
            sum += Integer.parseInt(number);  // Convert to integer and add to sum
        }
        System.out.println("The sum of the numbers is: " + sum);
    }
}
