import java.util.Scanner;

public class string {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String str = "dhoni";
        String input = scanner.nextLine().trim(); // Use nextLine() to read the entire line and trim() to remove extra spaces

        if (str.equalsIgnoreCase(input)) { // Use equalsIgnoreCase() for case-insensitive comparison
            System.out.println("matching");
        } else {
            System.out.println("not matching");
        }

        scanner.close();
    }
}
