import java.util.Scanner;

public class revision {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Immutable String Example
        System.out.print("Enter first string: ");
        String s1 = scanner.nextLine();
        System.out.print("Enter string to concatenate: ");
        String s2 = scanner.nextLine();
        String concatenated = s1.concat(s2);
        System.out.println("Original: " + s1);
        System.out.println("Concatenated: " + concatenated);

        // String Comparison
        System.out.print("Enter first string for comparison: ");
        String str1 = scanner.nextLine();
        System.out.print("Enter second string for comparison: ");
        String str2 = scanner.nextLine();
        System.out.print("Enter third string (new String): ");
        String str3 = scanner.nextLine();

        System.out.println((str1 == str2));  // checks reference equality
        System.out.println("str1 == str3: " + (str1 == str3));  // checks reference equality
        System.out.println("str1.equals(str3): " + str1.equals(str3));  // checks content equality

        scanner.close();
    }
}

